import createElement from "../../helpers/createElement";
import {questionsData} from "../../base/questions-data";
import getQuestionElem from "../../components/getQuestionElem";
import getButton from "../../components/getButton";
import clearElement from "../../helpers/clearElement";

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
    let currentStep = localStorage.getItem('step');
    const questionElement = getQuestionElem(questions[currentStep-1]);

    const buttonPrev = getButton('Назад');
    buttonPrev.disabled = true;
    const buttonNext = getButton('Далее', 'next');
    buttonNext.disabled = true;
    buttonNext.addEventListener('click', (event) => {
        event.preventDefault();
        doNextStep(questionElement);
    });

    form.append(questionElement, buttonPrev, buttonNext);
    container.append(about, form);
    return container;
}

//TODO вынести doNextStep отдельно?
export const doNextStep = (questionElement) => {
    const currentStep = Number(localStorage.getItem('step'));
    const nextQuestion = getQuestionElem(questionsData[currentStep]);
    clearElement(questionElement);
    questionElement.append(nextQuestion);
    localStorage.setItem('step', `${(currentStep + 1)}`);
}
export default mainPage;