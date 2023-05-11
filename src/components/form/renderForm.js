import createElement from "../../helpers/createElement";
import getQuestionElem from "../getQuestionElem";
import {questionsData} from "../../base/questions-data";


const renderForm = () => {
    const questions = questionsData;
    const form = createElement('form', { class: 'form' });
    let currentStep = localStorage.getItem('step');
    const questionElement = getQuestionElem(questions[currentStep-1]);
    form.append(questionElement);
    return form;
}

//TODO answers

// const getUserAnswers = () => {
//     const answers = getMapFromLS('responses');
//     if (answers.size < questionsData.length) {
//         throw new Error('not enough data');
//     }
//     return answers;
// }

export default renderForm;