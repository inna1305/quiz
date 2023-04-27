import createElement from "../helpers/createElement";
import {questionsData} from "../base/questions-data";
import getButton from "./getButton";
import {getArrayFromLS} from "../helpers/getValueFromLS";
import clearPage from "../pages/pagesFunctions/clearPage";

const getFieldSet = (questionObj, stepCount) => {
    const fieldset = createElement('fieldset', { class: 'fieldset' });
    const title = createElement('h2', { class: 'fieldset__title' }, questionObj.question);
    const counter = createElement('span', { class: 'fieldset__counter', 'data-step': stepCount }, `Шаг ${stepCount}/${questionsData.length}`);
    const answers = createElement('div', { class: 'fieldset__answers' });
    const buttonPrev = getButton('Назад');
    buttonPrev.disabled = true;
    const buttonNext = getButton('Далее');
    buttonNext.disabled = true;
    buttonNext.addEventListener('click', handleNext);

    if (questionObj.answerType === 'radio') {
        questionObj.variants.forEach(elem => {
            const label = createElement('label', { class: 'fieldset__input', for: elem }, elem);
            const input = createElement('input', { class: 'fieldset__input', type: 'radio', value: elem, name: elem, required: '' });
            input.addEventListener('click', () => buttonNext.disabled = false);
            answers.append(label, input);
        });
    }

    fieldset.append(title, counter, answers, buttonPrev, buttonNext);
    return fieldset;
}

const handleNext = (event) => {
    event.preventDefault();
    const inputs = document.querySelectorAll('input');
    const questionTitle = document.querySelector('.fieldset__title');
    const checkedInputs = [];
    inputs.forEach(input => {
        if (input.checked) {
            checkedInputs.push(input.value);
        }
    });
    if (checkedInputs.length === 0) {
        return;
    }

    const userResponses = getArrayFromLS('responses');
    const data = { question: questionTitle.innerText, value: checkedInputs };
    userResponses.push(data);
    localStorage.setItem('responses', JSON.stringify(userResponses));


    const stepElem = document.querySelector('.fieldset__counter');
    const stepCount = stepElem.getAttribute('data-step');
    const form = document.querySelector('form');
    clearPage(form);
    form.append(getFieldSet(questionsData[stepCount]));
};
export default getFieldSet;