import createElement from "../helpers/createElement";

const getButton = (text, idWord) => {
    const button = createElement('button', { class: 'button', id: idWord }, text);
    return button;
}
export default getButton;