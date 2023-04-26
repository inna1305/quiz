import createElement from "../helpers/createElement";
import {questionsData} from "../base/questions-data";
import getButton from "./getButton";
import {getArrayFromLS} from "../helpers/getValueFromLS";

const getFieldSet = (questionObj, stepCount) => {
    const fieldset = createElement('fieldset', { class: 'fieldset' });
    const title = createElement('h2', { class: 'fieldset__title' }, questionObj.question);
    const counter = createElement('span', { class: 'fieldset__counter' }, `Шаг ${stepCount}/${questionsData.length}`);
    const answers = createElement('div', { class: 'fieldset__answers' });
    const buttonPrev = getButton('Назад');
    const buttonNext = getButton('Далее');
    buttonNext.addEventListener('click', handleNext);

    if (questionObj.answerType === 'radio') {
        questionObj.variants.forEach(elem => {
            const label = createElement('label', { class: 'fieldset__input', for: elem }, elem);
            const input = createElement('input', { class: 'fieldset__input', type: 'radio', value: elem, name: elem });
            input.addEventListener('checked', () => {
                buttonNext.classList.toggle('active');
                console.log('active');
            });
            answers.append(label, input);
        });
    }

    fieldset.append(title, counter, answers, buttonPrev, buttonNext);
    return fieldset;
}

const handleNext = (event) => {
    event.preventDefault();
    const inputs = document.querySelectorAll('input');
    console.log(inputs);
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
    //перейти на новый блок
};
export default getFieldSet;