export function mountJsonLd(id, data) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
  return script;
}

export function createBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function applyPageSeo({
  title,
  description,
  url,
  ogType = "website",
  twitterCard = "summary_large_image",
  schemas = [],
}) {
  const selectors = {
    title: document.title,
    description: document.querySelector('meta[name="description"]'),
    canonical: document.querySelector('link[rel="canonical"]'),
    ogTitle: document.querySelector('meta[property="og:title"]'),
    ogDescription: document.querySelector('meta[property="og:description"]'),
    ogUrl: document.querySelector('meta[property="og:url"]'),
    ogType: document.querySelector('meta[property="og:type"]'),
    ogImage: document.querySelector('meta[property="og:image"]'),
    ogImageWidth: document.querySelector('meta[property="og:image:width"]'),
    ogImageHeight: document.querySelector('meta[property="og:image:height"]'),
    twitterTitle: document.querySelector('meta[name="twitter:title"]'),
    twitterDescription: document.querySelector('meta[name="twitter:description"]'),
    twitterCard: document.querySelector('meta[name="twitter:card"]'),
    twitterImage: document.querySelector('meta[name="twitter:image"]'),
  };

  const previous = {
    title: document.title,
    description: selectors.description?.getAttribute("content") ?? null,
    canonical: selectors.canonical?.getAttribute("href") ?? null,
    ogTitle: selectors.ogTitle?.getAttribute("content") ?? null,
    ogDescription: selectors.ogDescription?.getAttribute("content") ?? null,
    ogUrl: selectors.ogUrl?.getAttribute("content") ?? null,
    ogType: selectors.ogType?.getAttribute("content") ?? null,
    ogImage: selectors.ogImage?.getAttribute("content") ?? null,
    ogImageWidth: selectors.ogImageWidth?.getAttribute("content") ?? null,
    ogImageHeight: selectors.ogImageHeight?.getAttribute("content") ?? null,
    twitterTitle: selectors.twitterTitle?.getAttribute("content") ?? null,
    twitterDescription: selectors.twitterDescription?.getAttribute("content") ?? null,
    twitterCard: selectors.twitterCard?.getAttribute("content") ?? null,
    twitterImage: selectors.twitterImage?.getAttribute("content") ?? null,
  };

  document.title = title;
  if (selectors.description) selectors.description.setAttribute("content", description);
  if (selectors.canonical) selectors.canonical.setAttribute("href", url);
  if (selectors.ogTitle) selectors.ogTitle.setAttribute("content", title);
  if (selectors.ogDescription) selectors.ogDescription.setAttribute("content", description);
  if (selectors.ogUrl) selectors.ogUrl.setAttribute("content", url);
  if (selectors.ogType) selectors.ogType.setAttribute("content", ogType);
  if (selectors.ogImage) selectors.ogImage.setAttribute("content", "https://adroi-media.pl/og-image.jpg");
  if (selectors.ogImageWidth) selectors.ogImageWidth.setAttribute("content", "1200");
  if (selectors.ogImageHeight) selectors.ogImageHeight.setAttribute("content", "630");
  if (selectors.twitterTitle) selectors.twitterTitle.setAttribute("content", title);
  if (selectors.twitterDescription) selectors.twitterDescription.setAttribute("content", description);
  if (selectors.twitterCard) selectors.twitterCard.setAttribute("content", twitterCard);
  if (selectors.twitterImage) selectors.twitterImage.setAttribute("content", "https://adroi-media.pl/og-image.jpg");

  const mountedSchemas = schemas.map(({ id, data }) => mountJsonLd(id, data));

  return () => {
    document.title = previous.title;
    if (selectors.description && previous.description !== null) selectors.description.setAttribute("content", previous.description);
    if (selectors.canonical && previous.canonical !== null) selectors.canonical.setAttribute("href", previous.canonical);
    if (selectors.ogTitle && previous.ogTitle !== null) selectors.ogTitle.setAttribute("content", previous.ogTitle);
    if (selectors.ogDescription && previous.ogDescription !== null) selectors.ogDescription.setAttribute("content", previous.ogDescription);
    if (selectors.ogUrl && previous.ogUrl !== null) selectors.ogUrl.setAttribute("content", previous.ogUrl);
    if (selectors.ogType && previous.ogType !== null) selectors.ogType.setAttribute("content", previous.ogType);
    if (selectors.ogImage && previous.ogImage !== null) selectors.ogImage.setAttribute("content", previous.ogImage);
    if (selectors.ogImageWidth && previous.ogImageWidth !== null) selectors.ogImageWidth.setAttribute("content", previous.ogImageWidth);
    if (selectors.ogImageHeight && previous.ogImageHeight !== null) selectors.ogImageHeight.setAttribute("content", previous.ogImageHeight);
    if (selectors.twitterTitle && previous.twitterTitle !== null) selectors.twitterTitle.setAttribute("content", previous.twitterTitle);
    if (selectors.twitterDescription && previous.twitterDescription !== null) selectors.twitterDescription.setAttribute("content", previous.twitterDescription);
    if (selectors.twitterCard && previous.twitterCard !== null) selectors.twitterCard.setAttribute("content", previous.twitterCard);
    if (selectors.twitterImage && previous.twitterImage !== null) selectors.twitterImage.setAttribute("content", previous.twitterImage);
    mountedSchemas.forEach((script) => script.remove());
  };
}
