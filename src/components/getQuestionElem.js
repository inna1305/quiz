import createElement from "../helpers/createElement";
import {questionsData} from "../base/questions-data";
import getRadioSet from "./getRadioSet";
import getSelectSet from "./getSelectSet";

const getQuestionElem = (questionObj) => {
    const container = createElement('div', { class: 'form__container' });
    const currentStep = Number(localStorage.getItem('step'));
    const titleCounterContainer = createElement('div', { class: 'form__title-counter-container' });
    const title = createElement('h2', { class: 'form__title' }, questionObj.question);
    const counter = createElement('div', { class: 'form__counter' }, `Шаг ${currentStep}/${questionsData.length}`);
    titleCounterContainer.append(title, counter);
    const inputSet = createElement( 'div', { class: 'form__question'});
    if (questionObj.answerType === 'radio') {
        inputSet.append(getRadioSet(questionObj));
    }
    if (questionObj.answerType === 'select') {
        inputSet.append(getSelectSet(questionObj));
    }
    container.append(titleCounterContainer, inputSet);
    return container;
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