import createElement from "../helpers/createElement";

const getButton = (text) => {
    const button = createElement('button', { class: 'button' }, text);
    return button;
}
export default getButton;