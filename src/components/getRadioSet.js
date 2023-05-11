import createElement from "../helpers/createElement";
import {getMapFromLS} from "../helpers/getMapFromLS";
import {doNextStep} from "./form/functions/doStep";

const getRadioSet = (questionObj) => {
    const fieldset = createElement('fieldset', {class: 'fieldset'});

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
            const currentQuestion = document.querySelector('.form');

            const data = {question: questionObj.question, value: input.value, id: questionObj.id};
            let mapFromLS = getMapFromLS('responses');
            mapFromLS.set(questionObj.id, data);
            localStorage.setItem('responses', JSON.stringify(Array.from(mapFromLS.entries())));

            const buttonNext = document.getElementById('next');
            buttonNext.disabled = false;
            doNextStep(currentQuestion);
        });
        const checkmark = createElement('span', {class: 'fieldset__checkmark'});
        label.append(input, checkmark);
        fieldset.append(label);
    });
    return fieldset;
};
export default getRadioSet;