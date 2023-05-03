import createElement from "../helpers/createElement";

const getSelectSet = (questionObj) => {
    const select = createElement('select', { multiple: '', name: 'options', id: 'options', class: 'select' });

    questionObj.variants.forEach(elem => {
        const option = createElement('option', {
            class: 'fieldset__option',
            value: elem,
            name: 'variant',
            required: ''
        }, elem);

        option.addEventListener('click', () => {
            const buttonNext = document.querySelector('#next');
            buttonNext.disabled = false;
        });
        select.append(option);
    });
    return select;
};
export default getSelectSet;