import createElement from "../helpers/createElement";
import {questionsData} from "../base/questions-data";
import getRadioSet from "./getRadioSet";
import getSelectSet from "./getSelectSet";
import clearElement from "../helpers/clearElement";

const getQuestionElem = (questionObj) => {
    const currentStep = Number(localStorage.getItem('step'));

    const container = createElement('div', {class: 'form__container'});
    const titleCounterContainer = createElement('div', {class: 'form__title-counter-container'});
    const title = createElement('h2', {class: 'form__title'}, questionObj.question);
    const counter = createElement('div', {class: 'form__counter'}, `Шаг ${currentStep}/${questionsData.length}`);
    titleCounterContainer.append(title, counter);
    const inputSet = createElement('div', {class: 'form__question'});
    if (questionObj.answerType === 'radio') {
        inputSet.append(getRadioSet(questionObj));
    }
    if (questionObj.answerType === 'select') {
        inputSet.append(getSelectSet(questionObj));
    }
    const prevButton = renderPrevButton(currentStep);
    const nextButton = renderNextButton(currentStep, questionObj.answerType);
    const buttons = createElement('div', {class: 'buttons'});
    buttons.append(prevButton, nextButton);

    container.append(titleCounterContainer, inputSet, buttons);
    return container;
}


const renderPrevButton = (step) => {
    const button = createElement('button', { class: 'button', id: 'prev' }, 'Назад');

    const arrowPrev = createElement('div', {}, '<');
    button.append(arrowPrev);
    if (step <= 1) {
        button.disabled = true;
    }

    button.addEventListener('click', (event) => {
        event.preventDefault();
        const formContainer = document.querySelector('.form');
        doPrevStep(formContainer);
    });
    return button;
}

const renderNextButton = (step, answerType) => {
    const button = createElement('button', { class: 'button', id: 'next' }, 'Вперёд');
    const arrowNext = createElement('div', {}, '>');
    button.append(arrowNext);
    if (step >= (questionsData.length-1) || answerType === 'radio') {
        button.disabled = true;
    }
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const formContainer = document.querySelector('.form');
        doNextStep(formContainer);
    });
    return button;
}

export const doNextStep = (questionElement) => {
    const currentStep = Number(localStorage.getItem('step'));
    const stepsCount = questionsData.length;

    if (currentStep <= stepsCount) {
        localStorage.setItem('step', `${(currentStep + 1)}`);
        const nextQuestion = getQuestionElem(questionsData[currentStep]);
        clearElement(questionElement);
        questionElement.append(nextQuestion);
    } else {
        const buttonNext = document.querySelector('#next');
        buttonNext.disabled = true;
    }
}

export const doPrevStep = (questionElement) => {
    const currentStep = Number(localStorage.getItem('step'));
    if (currentStep >= 2) {
        localStorage.setItem('step', `${(currentStep - 1)}`);
        clearElement(questionElement);
        const prevQuestion = getQuestionElem(questionsData[currentStep-2]);
        questionElement.append(prevQuestion);
    } else {
        const buttonPrev = document.querySelector('#prev');
        buttonPrev.disabled = true;
    }
}


// const handleSelect = (event) => {
//     event.preventDefault();
//     const inputs = document.querySelectorAll('input');
//     const questionTitle = document.querySelector('.fieldset__title');
//     const checkedInputs = [];
//     inputs.forEach(input => {
//         if (input.checked) {
//             checkedInputs.push(input.value);
//         }
//     });
//     if (checkedInputs.length === 0) {
//         return;
//     }
//
//     const data = { question: questionTitle.innerText, value: checkedInputs };
//     setValueToLS('responses', data);
//     //localStorage.setItem('step', `${currentStep + 1}`);
// };

// const handleNext2 = () => {
//     const handleCurrentState = () => {
//       //записать состояния,
//     }
//     const renderNextStep = () => {
//         //обработка если радиобаттон или селект
//     }
// }
export default getQuestionElem;