import createElement from "../../helpers/createElement";
import getQuestionElem from "../getQuestionElem";
import {questionsData} from "../../base/questions-data";
import getContactForm from "../getContactForm";


const renderForm = () => {

    const questions = questionsData;
    const form = createElement('form', { class: 'form' });
    let currentStep = localStorage.getItem('step');
    let questionElement;
    if (currentStep < questions.length) {
        questionElement = getQuestionElem(questions[currentStep-1]);
    } else {
        questionElement = getContactForm();
    }
    form.append(questionElement);
    return form;
}

export default renderForm;