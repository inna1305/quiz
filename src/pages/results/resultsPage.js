import createElement from "../../helpers/createElement";
import getResultElement from "./getResultElement";

const resultsPage = (data) => {
    const container = createElement('div', { class: 'container-results' });
    const button = createElement('button', { class: 'button' }, "Пройти тест заново");
    container.append(button);
    const resultsContainer = createElement('div', { class: 'institutes' });
    data.institutions.forEach(obj => {
        const item = getResultElement(obj);
        resultsContainer.append(item);
    });
    container.append(resultsContainer);
    return container;
}

export default resultsPage;