import createElement from "../helpers/createElement";
import {questionsData} from "../base/questions-data";
import getRadioSet from "./getRadioSet";
import getSelectSet, {handleSelectAnswers} from "./getSelectSet";
import {doNextStep, doPrevStep} from "./form/functions/doStep";
import {getMapFromLS} from "../helpers/getMapFromLS";

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
    const nextButton = renderNextButton(currentStep, questionObj);
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

const renderNextButton = (step, questionObj) => {
    const button = createElement('button', { class: 'button', id: 'next' }, 'Вперёд');
    const arrowNext = createElement('div', {}, '>');
    button.append(arrowNext);
    button.disabled = true;

    //TODO если вопрос уже отвечен тогда кнопка активна (проверка здесь!)

    button.addEventListener('click', (event) => {
        event.preventDefault();

        if (questionObj.answerType === 'select') {
            handleSelectAnswers(questionObj);
        }
        if (questionObj.answerType === 'radio') {
            const formContainer = document.querySelector('.form');
            doNextStep(formContainer);
        }
    });
    return button;
}

const checkCurrentQuestion = (id) => {
    let mapFromLS = getMapFromLS('responses');

    console.log(mapFromLS.get(id));
}

export default getQuestionElem;