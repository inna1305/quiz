import createElement from "../helpers/createElement";
import {questionsData} from "../base/questions-data";
import {getMapFromLS} from "../helpers/getMapFromLS";
import clearElement from "../helpers/clearElement";
import getQuestionElem from "./getQuestionElem";
import fetchData from "../pages/results/functions/fetchData";

const getContactForm = () => {
    const currentStep = Number(localStorage.getItem('step'));

    const container = createElement('div', {class: 'form__container'});

    const titleCounterContainer = createElement('div', {class: 'form__title-counter-container'});
    const title = createElement('h2', {class: 'form__title'}, 'Ваша подборка готова! 🥳 Куда нам отправить её?');
    const counter = createElement('div', {class: 'form__counter'}, `Шаг ${currentStep}/${questionsData.length + 1}`);
    titleCounterContainer.append(title, counter);

    const fieldset = createElement('fieldset', {class: 'fieldset'});

    const name = createElement('input', {
        name: 'name',
        type: 'text',
        placeholder: 'Как вас зовут?',
        class: 'fieldset__input-text',
        id: 'name',
        required: '',
    });

    const number = createElement('input', {
        name: 'phone',
        type: 'text',
        placeholder: 'Номер телефона',
        pattern: '^\\+?\\d{0,20}(\\(\\d{1,20}\\))?$',
        class: 'fieldset__input-text',
        id: 'number',
        required: '',
    });

    const email = createElement('input', {
        name: 'email',
        type: 'email',
        placeholder: 'E-mail',
        class: 'fieldset__input-text',
        id: 'email',
        required: '',
    })

    fieldset.append(name, number, email);

    const button = createElement('button', {class: 'button', type: 'submit'}, 'Отправить');
    button.addEventListener('click', (event) => {
            const values = [name.value, number.value, email.value];
            const allInputsFilled = values.every(value => value.length > 0);
            if (allInputsFilled) {
                handleSendButton(event);
            }
        }
    );

    container.append(titleCounterContainer, fieldset, button);
    return container;
}

const handleSendButton = (event) => {
    event.preventDefault();
    recordAnswersToLS();
    fetchData();
}


const recordAnswersToLS = () => {
    const inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value) {
            const data = {question: inputs[i].name, value: inputs[i].value, id: questionsData.length + i};
            let mapFromLS = getMapFromLS('responses');
            mapFromLS.set(questionsData.length + i + 1, data);
            localStorage.setItem('responses', JSON.stringify(Array.from(mapFromLS.entries())));
        }
    }
}

export const resetForm = () => {
    localStorage.setItem('step', '1');
    localStorage.setItem('responses', '[]');
    const form = document.querySelector('form');
    clearElement(form);
    form.append(getQuestionElem(questionsData[0]));
}


export default getContactForm;