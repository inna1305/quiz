const createElement = (tagName, attributes, textContent) => {
  const el = document.createElement(tagName);

  for (const key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
  if (textContent) el.textContent = textContent;
  return el;
};

export default createElement;
