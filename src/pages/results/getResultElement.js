import createElement from "../../helpers/createElement";

const getResultElement = (data) => {
    const container = createElement('div', {class: 'institute'});
    const title = createElement('h2', {class: 'institute-title'}, data.title);

    const type = createElement('p', {}, data.institutionType);
    const city = createElement('div', {}, data.address);
    const specialities = data.specialities;
    const specialityContainer = createElement('div', {});
    specialities.forEach(speciality => {
        const elem = createElement('span', {class: 'institute-speciality'}, speciality);
        specialityContainer.append(elem);
    });

    const button = createElement('button', {class: 'button results-button'});
    const site = createElement('a', {class: 'results-button_link'}, "Подробнее...");
    const link = data.site;
    link ? site.href = link : site.href = '#';
    button.append(site);
    container.append(title, type, city, specialityContainer, button);
    return container;

}

export default getResultElement;