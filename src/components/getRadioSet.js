import createElement from "../helpers/createElement";
import {getMapFromLS} from "../helpers/getMapFromLS";
import {doNextStep} from "./form/functions/doStep";

const getRadioSet = (questionObj) => {
    let checkedItem;
    let mapFromLS = getMapFromLS('responses');
    if (mapFromLS.get(questionObj.id)) {
        checkedItem = mapFromLS.get(questionObj.id).value;
    }

    const fieldset = createElement('fieldset', {class: 'fieldset'});
    const variants = Array.from(questionObj.variants.keys());

    variants.forEach(elem => {

        const label = createElement('label', {class: 'fieldset__label', for: elem}, questionObj.variants.get(elem));
        const input = createElement('input', {
            class: 'fieldset__input',
            id: elem,
            type: 'radio',
            value: questionObj.variants.get(elem),
            name: 'variant',
            required: ''
        });
        if (elem === checkedItem) {
            input.checked = true;
        }

        input.addEventListener('click', () => {
            const currentQuestion = document.querySelector('.form');

            const data = {question: questionObj.name, value: input.id, id: questionObj.id};
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