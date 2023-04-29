import createElement from "../../helpers/createElement";
import getQuestionElem from "../getQuestionElem";
import getButton from "../getButton";
import {doNextStep} from "../../pages/main/mainPage";
import {questionsData} from "../../base/questions-data";

const getForm = () => {
    const questions = questionsData;
    const form = createElement('form', { class: 'form' });
    let currentStep = localStorage.getItem('step');
    const questionElement = getQuestionElem(questions[currentStep-1]);

    const buttonPrev = getButton('Назад');
    buttonPrev.disabled = true;
    const buttonNext = getButton('Далее', 'next');
    buttonNext.disabled = true;
    buttonNext.addEventListener('click', (event) => {
        event.preventDefault();
        doNextStep(questionElement);
    });

    form.append(questionElement, buttonPrev, buttonNext);
    return form;
}
export default getForm;