import createElement from "../../helpers/createElement";
import getResultElement from "./getResultElement";

const resultsPage = (data) => {
    const container = createElement('div', { class: 'container-results' });
    const button = createElement('button', { class: 'button' }, "Пройти тест заново");
    container.append(button);
    data.institutions.forEach(obj => {
        const item = getResultElement(obj);
        container.append(item);
    });
    return container;
}

export default resultsPage;