const clearElement = (parentElement) => {
  while (parentElement.hasChildNodes()) {
    parentElement.removeChild(parentElement.firstChild);
  }
};
export default clearElement;
