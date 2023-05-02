import createElement from "../../helpers/createElement";
import getForm from "../../components/form/getForm";

const mainPage = () => {
    if (!localStorage.getItem('step')) {
        localStorage.setItem('step', '1');
    }
    const container = createElement('div', { class: 'container' });
    const about = createElement('div', { class: 'about' });
    const title = createElement('h1', { class: 'about__title' }, 'Подберем ВУЗ мечты');
    const description = createElement('p', { class: 'about__description' }, 'Ответьте' +
        ' на 8 простых вопросов, и мы составим список наболее подходящих для вас вузов');

    const decorContainer = createElement('div', { class: 'about__decor' });
    const decorWord1 = createElement('div', { class: 'about__decor_word1 about__decor_word' }, 'Бесплатно');
    const decorWord2 = createElement('div', { class: 'about__decor_word2 about__decor_word' }, 'за 30 секунд');
    const decorCircle = createElement('div', { class: 'about__decor_circle' });
    const decorLine = createElement('div', { class: 'about__decor_line' });
    const decorLight = createElement('div', { class: 'about__decor_light' });
    const decorBottom = createElement('div', { class: 'about__decor_bottom' });
    decorContainer.append(decorWord1, decorWord2, decorCircle, decorLine, decorLight, decorBottom);
    about.append(title, description, decorContainer);

    container.append(about, getForm());
    return container;
}
export default mainPage;