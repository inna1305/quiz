import createElement from "../helpers/createElement";
import {questionsData} from "../base/questions-data";
import {getMapFromLS} from "../helpers/getMapFromLS";
import clearElement from "../helpers/clearElement";
import getQuestionElem from "./getQuestionElem";

const getContactForm = () => {
    const currentStep = Number(localStorage.getItem('step'));

    const container = createElement('div', {class: 'form__container'});
    const message = createElement('p', {class: 'final-popup'});

    const titleCounterContainer = createElement('div', {class: 'form__title-counter-container'});
    const title = createElement('h2', {class: 'form__title'}, 'Ваша подборка готова! 🥳 Куда нам отправить её?');
    const counter = createElement('div', {class: 'form__counter'}, `Шаг ${currentStep}/${questionsData.length}`);
    titleCounterContainer.append(title, counter);

    const fieldset = createElement('fieldset', {class: 'fieldset'});

    const name = createElement('input', {
        type: 'text',
        placeholder: 'Как вас зовут?',
        class: 'fieldset__input-text',
        id: 'name',
        required: '',
    });

    const number = createElement('input', {
        type: 'text',
        placeholder: 'Номер телефона',
        class: 'fieldset__input-text',
        id: 'number',
        required: '',
    });

    const email = createElement('input', {
        type: 'email',
        placeholder: 'E-mail',
        class: 'fieldset__input-text',
        id: 'email',
        required: '',})

    fieldset.append(name, number, email);

    const button = createElement('button', {class: 'button', type: 'submit'}, 'Отправить');
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const answers = getAnswersMap();
        recordAnswersToLS(answers);
        showMessage(answers.get(name.placeholder), message, resetForm);
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
        resetForm();
    });
}

const resetForm = () => {
    localStorage.setItem('step', '1');
    localStorage.setItem('responses', '[]');
    const form = document.querySelector('form');
    clearElement(form);
    form.append(getQuestionElem(questionsData[0]));
}


export default getContactForm;