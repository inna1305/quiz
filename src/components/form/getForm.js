import createElement from "../../helpers/createElement";
import getQuestionElem from "../getQuestionElem";
import getButton from "../button/getButton";
import {questionsData} from "../../base/questions-data";
import clearElement from "../../helpers/clearElement";

const getForm = () => {
    const questions = questionsData;
    const form = createElement('form', { class: 'form' });
    let currentStep = localStorage.getItem('step');
    const questionElement = getQuestionElem(questions[currentStep-1]);

    const buttonPrev = getButton('Назад', 'prev');
    buttonPrev.disabled = true;
    const buttonNext = getButton('Далее', 'next');
    const arrowPrev = createElement('div', {}, '<');
    const arrowNext = createElement('div', {}, '>');
    buttonPrev.append(arrowPrev);
    buttonNext.append(arrowNext);
    buttonNext.disabled = true;
    buttonNext.addEventListener('click', (event) => {
        event.preventDefault();
        doNextStep(questionElement);
    });

    const buttons = createElement('div', { class: 'buttons' });
    buttons.append(buttonPrev, buttonNext);

    form.append(questionElement, buttons);
    return form;
}

export const doNextStep = (questionElement) => {
    const currentStep = Number(localStorage.getItem('step'));
    localStorage.setItem('step', `${(currentStep + 1)}`);
    const nextQuestion = getQuestionElem(questionsData[currentStep]);
    clearElement(questionElement);
    questionElement.append(nextQuestion);
    const buttonNext = document.querySelector('#next');
    buttonNext.disabled = true;
}
export default getForm;