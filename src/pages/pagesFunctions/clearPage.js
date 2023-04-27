const clearPage = (parentElement) => {
  while (parentElement.hasChildNodes()) {
    parentElement.removeChild(parentElement.firstChild);
  }
};
export default clearPage;
