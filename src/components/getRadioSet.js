import createElement from "../helpers/createElement";
import {setValueToLS} from "../helpers/setValueToLS";
import {doNextStep} from "../pages/main/mainPage";

const getRadioSet = (questionObj) => {
    const fieldset = createElement('fieldset', { class: 'fieldset' });

    questionObj.variants.forEach(elem => {
        const label = createElement('label', {class: 'fieldset__label', for: elem}, elem);
        const input = createElement('input', {
            class: 'fieldset__input',
            id: elem,
            type: 'radio',
            value: elem,
            name: 'variant',
            required: ''
        });

        input.addEventListener('click', () => {
            //const buttonNext = document.getElementById('next');
            const currentQuestion = document.querySelector('.container-question');

            const data = {question: questionObj.question, value: input.value};
            setValueToLS('responses', data);
            //buttonNext.disabled = false;
            doNextStep(currentQuestion);
        });
        const checkmark = createElement('span', { class: 'fieldset__checkmark' });
        label.append(input, checkmark);
        fieldset.append(label);
    });
    return fieldset;
};
export default getRadioSet;