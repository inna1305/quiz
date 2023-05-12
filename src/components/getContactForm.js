import createElement from "../helpers/createElement";
import {questionsData} from "../base/questions-data";
import {getMapFromLS} from "../helpers/getMapFromLS";

const getContactForm = () => {
    const currentStep = Number(localStorage.getItem('step'));

    const container = createElement('div', {class: 'form__container'});
    const message = createElement('p', {class: 'final-popup'});

    const titleCounterContainer = createElement('div', {class: 'form__title-counter-container'});
    const title = createElement('h2', {class: 'form__title'}, 'Ваша подборка готова! 🥳 Куда нам отправить её?');
    const counter = createElement('div', {class: 'form__counter'}, `Шаг ${currentStep}/${questionsData.length}`);
    titleCounterContainer.append(title, counter);

    const fieldset = createElement('fieldset', {class: 'fieldset'});
    const placeholders = ['Как вас зовут?', 'Номер телефона', 'E-mail'];
    placeholders.forEach(item => {
        const input = createElement('input', {
            type: 'text',
            placeholder: item,
            class: 'fieldset__input-text',
            id: item,
            required: '',
        });
        fieldset.append(input);
    });

    const button = createElement('button', {class: 'button', type: 'submit'}, 'Отправить');
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const answers = getAnswersMap();
        recordAnswersToLS(answers);
        const form = document.querySelector('form');
        form.reset();
        showMessage(answers.get(placeholders[0]), message);
    });

    container.append(message, titleCounterContainer, fieldset, button);

    return container;
}

const getAnswersMap = () => {
    const answersMap = new Map();
    const inputs = document.querySelectorAll('input');
    inputs.forEach(item => {
        if (item.value) {
            answersMap.set(item.placeholder, item.value);
        }
    });
    return answersMap;
}

const recordAnswersToLS = (answers) => {
    const mapAsString = JSON.stringify([...answers.entries()]);
    const data = {question: 'user data', value: mapAsString, id: questionsData.length};
    let mapFromLS = getMapFromLS('responses');
    mapFromLS.set(questionsData.length, data);
    localStorage.setItem('responses', JSON.stringify(Array.from(mapFromLS.entries())));
}

const showMessage = (name, element) => {
    element.innerText = `${name}, спасибо! Скоро мы с Вами свяжемся!`;
    element.style.display = 'block';
    element.addEventListener('animationend', () => {
        element.style.display = 'none';
    });
}


export default getContactForm;