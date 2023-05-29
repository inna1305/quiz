import {questionsData} from "../../../base/questions-data";
import clearElement from "../../../helpers/clearElement";
import getQuestionElem from "../../getQuestionElem";
import getContactForm from "../../getContactForm";

export const doNextStep = (questionElement) => {
    const currentStep = Number(localStorage.getItem('step'));
    const stepsCount = questionsData.length+1;

    if (currentStep === stepsCount-1) {
        localStorage.setItem('step', `${(currentStep + 1)}`);
        const nextQuestion = getContactForm();
        const container = document.querySelector('.form');
        clearElement(container);
        container.append(nextQuestion);
    }

    if (currentStep < stepsCount-1) {
        localStorage.setItem('step', `${(currentStep + 1)}`);
        const nextQuestion = getQuestionElem(questionsData[currentStep]);
        clearElement(questionElement);
        questionElement.append(nextQuestion);
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


