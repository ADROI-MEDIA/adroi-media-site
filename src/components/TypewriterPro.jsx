import { useEffect, useRef, useState } from "react";

const START_DELAY_MS = 220;
const BASE_DELAY_MS = 72;
const JITTER_MS = 10;
const playedAnimations = new Set();

function getStepDelay(char) {
  const jitter = Math.round((Math.random() * 2 - 1) * JITTER_MS);

  if (char === ",") return 220 + jitter;
  if (char === ".") return 320 + jitter;
  if (char === "—") return 260 + jitter;
  if (char === " ") return 34 + jitter;

  return BASE_DELAY_MS + jitter;
}

export default function TypewriterPro({ text, onceKey }) {
  const [chars, setChars] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const rafRef = useRef(0);
  const enterRafRef = useRef(0);
  const nextTickRef = useRef(0);
  const indexRef = useRef(0);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPrefersReducedMotion(media.matches);

    sync();
    media.addEventListener("change", sync);

    return () => {
      media.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    cancelAnimationFrame(enterRafRef.current);

    hasPlayedRef.current = onceKey ? playedAnimations.has(onceKey) : false;

    if (hasPlayedRef.current) {
      setChars(Array.from(text, (value, id) => ({ id, value, isIn: true })));
      setIsComplete(true);
      return undefined;
    }

    if (prefersReducedMotion) {
      setChars(Array.from(text, (value, id) => ({ id, value, isIn: true })));
      setIsComplete(true);
      if (onceKey) {
        playedAnimations.add(onceKey);
      }
      return undefined;
    }

    setChars([]);
    setIsComplete(false);
    indexRef.current = 0;
    nextTickRef.current = performance.now() + START_DELAY_MS;

    const revealChar = (charIndex) => {
      const value = text[charIndex];

      setChars((prev) => [...prev, { id: charIndex, value, isIn: false }]);

      enterRafRef.current = requestAnimationFrame(() => {
        setChars((prev) => {
          if (!prev.length) return prev;

          const next = prev.slice();
          const last = next[next.length - 1];

          if (!last || last.id !== charIndex || last.isIn) {
            return prev;
          }

          next[next.length - 1] = { ...last, isIn: true };
          return next;
        });
      });
    };

    const tick = (now) => {
      if (now >= nextTickRef.current) {
        const currentIndex = indexRef.current;

        if (currentIndex < text.length) {
          revealChar(currentIndex);
          indexRef.current += 1;
          nextTickRef.current = now + getStepDelay(text[currentIndex]);
        } else {
          setIsComplete(true);
          if (onceKey) {
            playedAnimations.add(onceKey);
          }
          return;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      cancelAnimationFrame(enterRafRef.current);
    };
  }, [onceKey, prefersReducedMotion, text]);

  return (
    <span className="twWrap" aria-label={text}>
      <span className="twGhost" aria-hidden="true">
        {text}
      </span>

      <span className="twText" aria-hidden="true">
        {chars.map(({ id, value, isIn }) => (
          <span key={id} className={`twChar${isIn ? " isIn" : ""}`}>
            {value}
          </span>
        ))}
        {!prefersReducedMotion ? (
          <span className={`twCaret${isComplete ? " isDone" : ""}`} />
        ) : null}
      </span>
    </span>
  );
}
