import createElement from "../helpers/createElement";
import {getMapFromLS} from "../helpers/getMapFromLS";
import {doNextStep} from "./form/functions/doStep";

const getSelectSet = (questionObj) => {
    let mapFromLS = getMapFromLS('responses');
    let setOfSelected = new Set();

    if (mapFromLS.get(questionObj.id)) {
        setOfSelected = new Set(mapFromLS.get(questionObj.id).value);
    }

    const select = createElement('select', {multiple: '', name: 'options', id: 'options', class: 'select'});
    const variants = Array.from(questionObj.variants.keys());

    variants.forEach(elem => {

        //console.log(questionObj.variants.get());
        const option = createElement('option', {
            id: questionObj.id,
            class: 'fieldset__option',
            value: elem,
            name: 'variant',
            required: ''
        }, questionObj.variants.get(elem));

        if (setOfSelected && setOfSelected.has(elem)) {
            option.selected = true;
        }

        option.addEventListener('click', () => {
            const buttonNext = document.querySelector('#next');
            buttonNext.disabled = false;
        });
        select.append(option);
    });
    return select;
};

export const handleSelectAnswers = (questionObj) => {
    const options = document.querySelectorAll('option');
    const selected = [];
    options.forEach(option => {
        if (option.selected) {
            selected.push(option.value);
        }
    });
    if (selected.length > 0) {
        const data = {question: questionObj.name, value: selected, id: questionObj.id};
        let mapFromLS = getMapFromLS('responses');
        mapFromLS.set(questionObj.id, data);
        localStorage.setItem('responses', JSON.stringify(Array.from(mapFromLS.entries())));

        const formContainer = document.querySelector('.form');
        doNextStep(formContainer);

    } else {
        const buttonNext = document.querySelector('#next');
        buttonNext.disabled = true;
    }
}
export default getSelectSet;