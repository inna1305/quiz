import createElement from "../helpers/createElement";
import {questionsData} from "../base/questions-data";
import getRadioSet from "./getRadioSet";

const getQuestionElem = (questionObj) => {
    const container = createElement('div', { class: 'container-question' });
    const currentStep = Number(localStorage.getItem('step'));
    const title = createElement('h2', { class: 'fieldset__title' }, questionObj.question);
    const counter = createElement('span', { class: 'fieldset__counter' }, `Шаг ${currentStep}/${questionsData.length}`);
    const inputSet = createElement( 'div', { class: 'fieldset__question'});
    if (questionObj.answerType === 'radio') {
        inputSet.append(getRadioSet(questionObj));
    }
    if (questionObj.answerType === 'select') {
        console.log('select');
        //inputSet.append(getSelectSet(questionObj));
    }
    container.append(title, counter, inputSet);
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