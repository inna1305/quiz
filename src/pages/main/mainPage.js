import createElement from "../../helpers/createElement";
import {questionsData} from "../../base/questions-data";
import getFieldSet from "../../components/fieldset";

const mainPage = () => {
    const container = createElement('div', { class: 'container' });
    const about = createElement('div', { class: 'about' });
    const title = createElement('h1', { class: 'about__title' }, 'Подберем ВУЗ мечты');
    const description = createElement('p', { class: 'about__description' }, 'Ответьте' +
        ' на 8 простых вопросов, и мы составим список наболее подходящих для вас вузов');

    const decorContainer = createElement('div', { class: 'about__decor' });
    const decorWord1 = createElement('div', { class: 'about__decor_word1' }, 'Бесплатно');
    const decorWord2 = createElement('div', { class: 'about__decor_word2' }, 'за 30 секунд');
    const decorCircle = createElement('div', { class: 'about__decor_circle' });
    const decorLine = createElement('div', { class: 'about__decor_line' });
    const decorLight = createElement('div', { class: 'about__decor_light' });
    const decorBottom = createElement('div', { class: 'about__decor_bottom' });
    decorContainer.append(decorWord1, decorWord2, decorCircle, decorLine, decorLight, decorBottom);
    about.append(title, description, decorContainer);

    const questions = questionsData;
    const form = createElement('form');
    const fieldsets = [];
    for (let i = 0; i < questions.length; i++) {
        const fieldset = getFieldSet(questions[i], i + 1);
        fieldsets.push(fieldset);
    }
    form.append(fieldsets[0]);

    container.append(about, form);
    return container;
}
export default mainPage;