/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/questions-data.js":
/*!************************************!*\
  !*** ./src/base/questions-data.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "questionsData": () => (/* binding */ questionsData)
/* harmony export */ });
var questionsData = [{
  question: 'Для кого вы ищете учебное заведение?',
  answerType: 'radio',
  variants: ['Себе', 'Супругу/супруге', 'Родственнику', 'Коллеге', 'Ребенку', 'Другое'],
  id: 1
}, {
  question: 'В каком городе планируете поступать?',
  answerType: 'select',
  variants: ['Санкт-Петербург', 'Москва', 'Новосибирск', 'Нижний новгород', 'Ростов-на-Дону', 'Казань', 'Челябинск', 'Омск', 'Краснодар', 'Уфа', 'Пермь', 'Другой'],
  id: 2
}, {
  question: 'Какое образование уже есть?',
  answerType: 'radio',
  variants: ['9 классов', '11 классов', 'Училище', 'Колледж/техникум', 'Неоконченное высшее', 'Высшее'],
  id: 3
}, {
  question: 'Куда планируете поступать?',
  answerType: 'radio',
  variants: ['Вуз', 'Колледж/техникум', 'Училище'],
  id: 4
}, {
  question: 'Какую форму обучения предпочитаете?',
  answerType: 'radio',
  variants: ['Очную', 'Заочную', 'Дистанционную'],
  id: 5
}, {
  question: 'Рассматриваете платное обучение?',
  answerType: 'radio',
  variants: ['Нет, только бюджет', 'Да, планирую учиться платно', 'Возможны оба варианта'],
  id: 6
}, {
  question: 'Какая специальность интересует?',
  answerType: 'select',
  variants: ['Экономика', 'Философия', 'Социология', 'Юриспруденция'],
  id: 7
}, {
  question: 'Как скоро планируете поступать?',
  answerType: 'radio',
  variants: ['Как можно быстрее', 'Месяц', 'Квартал', 'Полгода', 'Год'],
  id: 8
}];

/***/ }),

/***/ "./src/components/form/functions/doStep.js":
/*!*************************************************!*\
  !*** ./src/components/form/functions/doStep.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doNextStep": () => (/* binding */ doNextStep),
/* harmony export */   "doPrevStep": () => (/* binding */ doPrevStep)
/* harmony export */ });
/* harmony import */ var _base_questions_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base/questions-data */ "./src/base/questions-data.js");
/* harmony import */ var _helpers_clearElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/clearElement */ "./src/helpers/clearElement.js");
/* harmony import */ var _getQuestionElem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../getQuestionElem */ "./src/components/getQuestionElem.js");
/* harmony import */ var _getContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getContactForm */ "./src/components/getContactForm.js");




var doNextStep = function doNextStep(questionElement) {
  var currentStep = Number(localStorage.getItem('step'));
  var stepsCount = _base_questions_data__WEBPACK_IMPORTED_MODULE_0__.questionsData.length;
  if (currentStep === stepsCount - 1) {
    localStorage.setItem('step', "".concat(currentStep + 1));
    var nextQuestion = (0,_getContactForm__WEBPACK_IMPORTED_MODULE_3__["default"])(_base_questions_data__WEBPACK_IMPORTED_MODULE_0__.questionsData[currentStep]);
    var container = document.querySelector('.form');
    (0,_helpers_clearElement__WEBPACK_IMPORTED_MODULE_1__["default"])(container);
    container.append(nextQuestion);
  }
  if (currentStep < stepsCount - 1) {
    localStorage.setItem('step', "".concat(currentStep + 1));
    var _nextQuestion = (0,_getQuestionElem__WEBPACK_IMPORTED_MODULE_2__["default"])(_base_questions_data__WEBPACK_IMPORTED_MODULE_0__.questionsData[currentStep]);
    (0,_helpers_clearElement__WEBPACK_IMPORTED_MODULE_1__["default"])(questionElement);
    questionElement.append(_nextQuestion);
  }
};
var doPrevStep = function doPrevStep(questionElement) {
  var currentStep = Number(localStorage.getItem('step'));
  if (currentStep >= 2) {
    localStorage.setItem('step', "".concat(currentStep - 1));
    (0,_helpers_clearElement__WEBPACK_IMPORTED_MODULE_1__["default"])(questionElement);
    var prevQuestion = (0,_getQuestionElem__WEBPACK_IMPORTED_MODULE_2__["default"])(_base_questions_data__WEBPACK_IMPORTED_MODULE_0__.questionsData[currentStep - 2]);
    questionElement.append(prevQuestion);
  } else {
    var buttonPrev = document.querySelector('#prev');
    buttonPrev.disabled = true;
  }
};

/***/ }),

/***/ "./src/components/form/renderForm.js":
/*!*******************************************!*\
  !*** ./src/components/form/renderForm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ "./src/helpers/createElement.js");
/* harmony import */ var _getQuestionElem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getQuestionElem */ "./src/components/getQuestionElem.js");
/* harmony import */ var _base_questions_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/questions-data */ "./src/base/questions-data.js");
/* harmony import */ var _getContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getContactForm */ "./src/components/getContactForm.js");




var renderForm = function renderForm() {
  var questions = _base_questions_data__WEBPACK_IMPORTED_MODULE_2__.questionsData;
  var form = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('form', {
    "class": 'form'
  });
  var currentStep = localStorage.getItem('step');
  var questionElement;
  if (currentStep < questions.length) {
    questionElement = (0,_getQuestionElem__WEBPACK_IMPORTED_MODULE_1__["default"])(questions[currentStep - 1]);
  } else {
    questionElement = (0,_getContactForm__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
  form.append(questionElement);
  return form;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderForm);

/***/ }),

/***/ "./src/components/getContactForm.js":
/*!******************************************!*\
  !*** ./src/components/getContactForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createElement */ "./src/helpers/createElement.js");
/* harmony import */ var _base_questions_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/questions-data */ "./src/base/questions-data.js");
/* harmony import */ var _helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/getMapFromLS */ "./src/helpers/getMapFromLS.js");
/* harmony import */ var _helpers_clearElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/clearElement */ "./src/helpers/clearElement.js");
/* harmony import */ var _getQuestionElem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getQuestionElem */ "./src/components/getQuestionElem.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var getContactForm = function getContactForm() {
  var currentStep = Number(localStorage.getItem('step'));
  var container = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'form__container'
  });
  var message = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
    "class": 'final-popup'
  });
  var titleCounterContainer = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'form__title-counter-container'
  });
  var title = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', {
    "class": 'form__title'
  }, 'Ваша подборка готова! 🥳 Куда нам отправить её?');
  var counter = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'form__counter'
  }, "\u0428\u0430\u0433 ".concat(currentStep, "/").concat(_base_questions_data__WEBPACK_IMPORTED_MODULE_1__.questionsData.length));
  titleCounterContainer.append(title, counter);
  var fieldset = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('fieldset', {
    "class": 'fieldset'
  });
  var name = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
    type: 'text',
    placeholder: 'Как вас зовут?',
    "class": 'fieldset__input-text',
    id: 'name',
    required: ''
  });
  var number = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
    type: 'text',
    placeholder: 'Номер телефона',
    pattern: '/^\\+?\\d{0,20}(\\(\\d{1,20}\\))?$/',
    "class": 'fieldset__input-text',
    id: 'number',
    required: ''
  });
  var email = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
    type: 'email',
    placeholder: 'E-mail',
    "class": 'fieldset__input-text',
    id: 'email',
    required: ''
  });
  fieldset.append(name, number, email);
  var button = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
    "class": 'button',
    type: 'submit'
  }, 'Отправить');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    var answers = getAnswersMap();
    recordAnswersToLS(answers);
    showMessage(answers.get(name.placeholder), message, resetForm);
  });
  container.append(message, titleCounterContainer, fieldset, button);
  return container;
};
var getAnswersMap = function getAnswersMap() {
  var answersMap = new Map();
  var inputs = document.querySelectorAll('input');
  inputs.forEach(function (item) {
    if (item.value) {
      answersMap.set(item.placeholder, item.value);
    }
  });
  return answersMap;
};
var recordAnswersToLS = function recordAnswersToLS(answers) {
  var mapAsString = JSON.stringify(_toConsumableArray(answers.entries()));
  var data = {
    question: 'user data',
    value: mapAsString,
    id: _base_questions_data__WEBPACK_IMPORTED_MODULE_1__.questionsData.length
  };
  var mapFromLS = (0,_helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_2__.getMapFromLS)('responses');
  mapFromLS.set(_base_questions_data__WEBPACK_IMPORTED_MODULE_1__.questionsData.length, data);
  localStorage.setItem('responses', JSON.stringify(Array.from(mapFromLS.entries())));
};
var showMessage = function showMessage(name, element) {
  element.innerText = "".concat(name, ", \u0441\u043F\u0430\u0441\u0438\u0431\u043E! \u0421\u043A\u043E\u0440\u043E \u043C\u044B \u0441 \u0412\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F!");
  element.style.display = 'block';
  element.addEventListener('animationend', function () {
    element.style.display = 'none';
    resetForm();
  });
};
var resetForm = function resetForm() {
  localStorage.setItem('step', '1');
  localStorage.setItem('responses', '[]');
  var form = document.querySelector('form');
  (0,_helpers_clearElement__WEBPACK_IMPORTED_MODULE_3__["default"])(form);
  form.append((0,_getQuestionElem__WEBPACK_IMPORTED_MODULE_4__["default"])(_base_questions_data__WEBPACK_IMPORTED_MODULE_1__.questionsData[0]));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getContactForm);

/***/ }),

/***/ "./src/components/getQuestionElem.js":
/*!*******************************************!*\
  !*** ./src/components/getQuestionElem.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkCurrentQuestion": () => (/* binding */ checkCurrentQuestion),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createElement */ "./src/helpers/createElement.js");
/* harmony import */ var _base_questions_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/questions-data */ "./src/base/questions-data.js");
/* harmony import */ var _getRadioSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRadioSet */ "./src/components/getRadioSet.js");
/* harmony import */ var _getSelectSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getSelectSet */ "./src/components/getSelectSet.js");
/* harmony import */ var _form_functions_doStep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/functions/doStep */ "./src/components/form/functions/doStep.js");
/* harmony import */ var _helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/getMapFromLS */ "./src/helpers/getMapFromLS.js");






var getQuestionElem = function getQuestionElem(questionObj) {
  var currentStep = Number(localStorage.getItem('step'));
  var container = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'form__container'
  });
  var titleCounterContainer = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'form__title-counter-container'
  });
  var title = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', {
    "class": 'form__title'
  }, questionObj.question);
  var counter = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'form__counter'
  }, "\u0428\u0430\u0433 ".concat(currentStep, "/").concat(_base_questions_data__WEBPACK_IMPORTED_MODULE_1__.questionsData.length));
  titleCounterContainer.append(title, counter);
  var inputSet = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'form__question'
  });
  if (questionObj.answerType === 'radio') {
    inputSet.append((0,_getRadioSet__WEBPACK_IMPORTED_MODULE_2__["default"])(questionObj));
  }
  if (questionObj.answerType === 'select') {
    inputSet.append((0,_getSelectSet__WEBPACK_IMPORTED_MODULE_3__["default"])(questionObj));
  }
  var prevButton = renderPrevButton(currentStep);
  var nextButton = renderNextButton(currentStep, questionObj);
  var buttons = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'buttons'
  });
  buttons.append(prevButton, nextButton);
  container.append(titleCounterContainer, inputSet, buttons);
  return container;
};
var renderPrevButton = function renderPrevButton(step) {
  var button = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
    "class": 'button',
    id: 'prev'
  }, 'Назад');
  var arrowPrev = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {}, '<');
  button.append(arrowPrev);
  if (step <= 1) {
    button.disabled = true;
  }
  button.addEventListener('click', function (event) {
    event.preventDefault();
    var formContainer = document.querySelector('.form');
    (0,_form_functions_doStep__WEBPACK_IMPORTED_MODULE_4__.doPrevStep)(formContainer);
  });
  return button;
};
var renderNextButton = function renderNextButton(step, questionObj) {
  var button = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
    "class": 'button',
    id: 'next'
  }, 'Вперёд');
  var arrowNext = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {}, '>');
  button.append(arrowNext);
  button.disabled = !checkCurrentQuestion(questionObj.id);
  button.addEventListener('click', function (event) {
    event.preventDefault();
    if (questionObj.answerType === 'select') {
      (0,_getSelectSet__WEBPACK_IMPORTED_MODULE_3__.handleSelectAnswers)(questionObj);
    }
    if (questionObj.answerType === 'radio') {
      var formContainer = document.querySelector('.form');
      (0,_form_functions_doStep__WEBPACK_IMPORTED_MODULE_4__.doNextStep)(formContainer);
    }
  });
  return button;
};
var checkCurrentQuestion = function checkCurrentQuestion(id) {
  var mapFromLS = (0,_helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_5__.getMapFromLS)('responses');
  return !!mapFromLS.get(id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getQuestionElem);

/***/ }),

/***/ "./src/components/getRadioSet.js":
/*!***************************************!*\
  !*** ./src/components/getRadioSet.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createElement */ "./src/helpers/createElement.js");
/* harmony import */ var _helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getMapFromLS */ "./src/helpers/getMapFromLS.js");
/* harmony import */ var _form_functions_doStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/functions/doStep */ "./src/components/form/functions/doStep.js");



var getRadioSet = function getRadioSet(questionObj) {
  var checkedItem;
  var mapFromLS = (0,_helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_1__.getMapFromLS)('responses');
  if (mapFromLS.get(questionObj.id)) {
    checkedItem = mapFromLS.get(questionObj.id).value;
  }
  var fieldset = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('fieldset', {
    "class": 'fieldset'
  });
  questionObj.variants.forEach(function (elem) {
    var label = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
      "class": 'fieldset__label',
      "for": elem
    }, elem);
    var input = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
      "class": 'fieldset__input',
      id: elem,
      type: 'radio',
      value: elem,
      name: 'variant',
      required: ''
    });
    if (elem === checkedItem) {
      input.checked = true;
    }
    input.addEventListener('click', function () {
      var currentQuestion = document.querySelector('.form');
      var data = {
        question: questionObj.question,
        value: input.value,
        id: questionObj.id
      };
      var mapFromLS = (0,_helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_1__.getMapFromLS)('responses');
      mapFromLS.set(questionObj.id, data);
      localStorage.setItem('responses', JSON.stringify(Array.from(mapFromLS.entries())));
      var buttonNext = document.getElementById('next');
      buttonNext.disabled = false;
      (0,_form_functions_doStep__WEBPACK_IMPORTED_MODULE_2__.doNextStep)(currentQuestion);
    });
    var checkmark = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
      "class": 'fieldset__checkmark'
    });
    label.append(input, checkmark);
    fieldset.append(label);
  });
  return fieldset;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRadioSet);

/***/ }),

/***/ "./src/components/getSelectSet.js":
/*!****************************************!*\
  !*** ./src/components/getSelectSet.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "handleSelectAnswers": () => (/* binding */ handleSelectAnswers)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createElement */ "./src/helpers/createElement.js");
/* harmony import */ var _helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getMapFromLS */ "./src/helpers/getMapFromLS.js");
/* harmony import */ var _form_functions_doStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/functions/doStep */ "./src/components/form/functions/doStep.js");



var getSelectSet = function getSelectSet(questionObj) {
  var mapFromLS = (0,_helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_1__.getMapFromLS)('responses');
  var setOfSelected = new Set();
  if (mapFromLS.get(questionObj.id)) {
    setOfSelected = new Set(mapFromLS.get(questionObj.id).value);
  }
  var select = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('select', {
    multiple: '',
    name: 'options',
    id: 'options',
    "class": 'select'
  });
  questionObj.variants.forEach(function (elem) {
    var option = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
      "class": 'fieldset__option',
      value: elem,
      name: 'variant',
      required: ''
    }, elem);
    if (setOfSelected && setOfSelected.has(elem)) {
      option.selected = true;
    }
    option.addEventListener('click', function () {
      var buttonNext = document.querySelector('#next');
      buttonNext.disabled = false;
    });
    select.append(option);
  });
  return select;
};
var handleSelectAnswers = function handleSelectAnswers(questionObj) {
  var options = document.querySelectorAll('option');
  var selected = [];
  options.forEach(function (option) {
    if (option.selected) {
      selected.push(option.value);
    }
  });
  if (selected.length > 0) {
    var data = {
      question: questionObj.question,
      value: selected,
      id: questionObj.id
    };
    var mapFromLS = (0,_helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_1__.getMapFromLS)('responses');
    mapFromLS.set(questionObj.id, data);
    localStorage.setItem('responses', JSON.stringify(Array.from(mapFromLS.entries())));
    var formContainer = document.querySelector('.form');
    (0,_form_functions_doStep__WEBPACK_IMPORTED_MODULE_2__.doNextStep)(formContainer);
  } else {
    var buttonNext = document.querySelector('#next');
    buttonNext.disabled = true;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSelectSet);

/***/ }),

/***/ "./src/helpers/clearElement.js":
/*!*************************************!*\
  !*** ./src/helpers/clearElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var clearElement = function clearElement(parentElement) {
  while (parentElement.hasChildNodes()) {
    parentElement.removeChild(parentElement.firstChild);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearElement);

/***/ }),

/***/ "./src/helpers/createElement.js":
/*!**************************************!*\
  !*** ./src/helpers/createElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createElement = function createElement(tagName, attributes, textContent) {
  var el = document.createElement(tagName);
  for (var key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
  if (textContent) el.textContent = textContent;
  return el;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);

/***/ }),

/***/ "./src/helpers/getMapFromLS.js":
/*!*************************************!*\
  !*** ./src/helpers/getMapFromLS.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMapFromLS": () => (/* binding */ getMapFromLS)
/* harmony export */ });
function getMapFromLS(name) {
  var mapJson = localStorage.getItem(name);
  // let map = new Map();
  if (mapJson === null) {
    return new Map();
  }
  try {
    return new Map(JSON.parse(mapJson));
  } catch (e) {
    console.error("Error parsing JSON data for ".concat(name, ": ").concat(e.message));
  }
}

/***/ }),

/***/ "./src/pages/main/mainPage.js":
/*!************************************!*\
  !*** ./src/pages/main/mainPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ "./src/helpers/createElement.js");
/* harmony import */ var _components_form_renderForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/form/renderForm */ "./src/components/form/renderForm.js");


var mainPage = function mainPage() {
  if (!localStorage.getItem('step')) {
    localStorage.setItem('step', '1');
  }
  var container = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'container'
  });
  var about = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'about'
  });
  var title = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', {
    "class": 'about__title'
  }, 'Подберем ВУЗ мечты');
  var description = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
    "class": 'about__description'
  }, 'Ответьте' + ' на 8 простых вопросов, и мы составим список наболее подходящих для вас вузов');
  var decorContainer = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'about__decor'
  });
  var decorWord1 = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'about__decor_word1 about__decor_word'
  }, 'Бесплатно');
  var decorWord2 = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'about__decor_word2 about__decor_word'
  }, 'за 30 секунд');
  var decorCircle = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'about__decor_circle'
  });
  var decorLine = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'about__decor_line'
  });
  var decorLight = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'about__decor_light'
  });
  var decorBottom = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'about__decor_bottom'
  });
  decorContainer.append(decorWord1, decorWord2, decorCircle, decorLine, decorLight, decorBottom);
  about.append(title, description, decorContainer);
  container.append(about, (0,_components_form_renderForm__WEBPACK_IMPORTED_MODULE_1__["default"])());
  return container;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPage);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _pages_main_mainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main/mainPage */ "./src/pages/main/mainPage.js");


var body = document.querySelector('body');
body.append((0,_pages_main_mainPage__WEBPACK_IMPORTED_MODULE_1__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxhQUFhLEdBQUcsQ0FDekI7RUFDSUMsUUFBUSxFQUFFLHNDQUFzQztFQUNoREMsVUFBVSxFQUFFLE9BQU87RUFDbkJDLFFBQVEsRUFBRSxDQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7RUFDdEZDLEVBQUUsRUFBRTtBQUNSLENBQUMsRUFDRDtFQUNJSCxRQUFRLEVBQUUsc0NBQXNDO0VBQ2hEQyxVQUFVLEVBQUUsUUFBUTtFQUNwQkMsUUFBUSxFQUFFLENBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUU7RUFDbktDLEVBQUUsRUFBRTtBQUNSLENBQUMsRUFDRDtFQUNJSCxRQUFRLEVBQUUsNkJBQTZCO0VBQ3ZDQyxVQUFVLEVBQUUsT0FBTztFQUNuQkMsUUFBUSxFQUFFLENBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxDQUFFO0VBQ3ZHQyxFQUFFLEVBQUU7QUFDUixDQUFDLEVBQ0Q7RUFDSUgsUUFBUSxFQUFFLDRCQUE0QjtFQUN0Q0MsVUFBVSxFQUFFLE9BQU87RUFDbkJDLFFBQVEsRUFBRSxDQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxTQUFTLENBQUU7RUFDbERDLEVBQUUsRUFBRTtBQUNSLENBQUMsRUFDRDtFQUNJSCxRQUFRLEVBQUUscUNBQXFDO0VBQy9DQyxVQUFVLEVBQUUsT0FBTztFQUNuQkMsUUFBUSxFQUFFLENBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUU7RUFDakRDLEVBQUUsRUFBRTtBQUNSLENBQUMsRUFDRDtFQUNJSCxRQUFRLEVBQUUsa0NBQWtDO0VBQzVDQyxVQUFVLEVBQUUsT0FBTztFQUNuQkMsUUFBUSxFQUFFLENBQUUsb0JBQW9CLEVBQUUsNkJBQTZCLEVBQUUsdUJBQXVCLENBQUU7RUFDMUZDLEVBQUUsRUFBRTtBQUNSLENBQUMsRUFDRDtFQUNJSCxRQUFRLEVBQUUsaUNBQWlDO0VBQzNDQyxVQUFVLEVBQUUsUUFBUTtFQUNwQkMsUUFBUSxFQUFFLENBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFFO0VBQ3JFQyxFQUFFLEVBQUU7QUFDUixDQUFDLEVBQ0Q7RUFDSUgsUUFBUSxFQUFFLGlDQUFpQztFQUMzQ0MsVUFBVSxFQUFFLE9BQU87RUFDbkJDLFFBQVEsRUFBRSxDQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBRTtFQUN2RUMsRUFBRSxFQUFFO0FBQ1IsQ0FBQyxDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakQwRDtBQUNGO0FBQ0w7QUFDRjtBQUUzQyxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUMsZUFBZSxFQUFLO0VBQzNDLElBQU1DLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUN4RCxJQUFNQyxVQUFVLEdBQUdkLHNFQUFvQjtFQUV2QyxJQUFJVSxXQUFXLEtBQUtJLFVBQVUsR0FBQyxDQUFDLEVBQUU7SUFDOUJGLFlBQVksQ0FBQ0ksT0FBTyxDQUFDLE1BQU0sS0FBQUMsTUFBQSxDQUFNUCxXQUFXLEdBQUcsQ0FBQyxFQUFJO0lBQ3BELElBQU1RLFlBQVksR0FBR1gsMkRBQWMsQ0FBQ1AsK0RBQWEsQ0FBQ1UsV0FBVyxDQUFDLENBQUM7SUFDL0QsSUFBTVMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDakRoQixpRUFBWSxDQUFDYyxTQUFTLENBQUM7SUFDdkJBLFNBQVMsQ0FBQ0csTUFBTSxDQUFDSixZQUFZLENBQUM7RUFDbEM7RUFFQSxJQUFJUixXQUFXLEdBQUdJLFVBQVUsR0FBQyxDQUFDLEVBQUU7SUFDNUJGLFlBQVksQ0FBQ0ksT0FBTyxDQUFDLE1BQU0sS0FBQUMsTUFBQSxDQUFNUCxXQUFXLEdBQUcsQ0FBQyxFQUFJO0lBQ3BELElBQU1RLGFBQVksR0FBR1osNERBQWUsQ0FBQ04sK0RBQWEsQ0FBQ1UsV0FBVyxDQUFDLENBQUM7SUFDaEVMLGlFQUFZLENBQUNJLGVBQWUsQ0FBQztJQUM3QkEsZUFBZSxDQUFDYSxNQUFNLENBQUNKLGFBQVksQ0FBQztFQUN4QztBQUNKLENBQUM7QUFHTSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSWQsZUFBZSxFQUFLO0VBQzNDLElBQU1DLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUN4RCxJQUFJSCxXQUFXLElBQUksQ0FBQyxFQUFFO0lBQ2xCRSxZQUFZLENBQUNJLE9BQU8sQ0FBQyxNQUFNLEtBQUFDLE1BQUEsQ0FBTVAsV0FBVyxHQUFHLENBQUMsRUFBSTtJQUNwREwsaUVBQVksQ0FBQ0ksZUFBZSxDQUFDO0lBQzdCLElBQU1lLFlBQVksR0FBR2xCLDREQUFlLENBQUNOLCtEQUFhLENBQUNVLFdBQVcsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRUQsZUFBZSxDQUFDYSxNQUFNLENBQUNFLFlBQVksQ0FBQztFQUN4QyxDQUFDLE1BQU07SUFDSCxJQUFNQyxVQUFVLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUNsREksVUFBVSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtFQUM5QjtBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDdUQ7QUFDUDtBQUNPO0FBQ1Q7QUFHL0MsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztFQUVyQixJQUFNQyxTQUFTLEdBQUc3QiwrREFBYTtFQUMvQixJQUFNOEIsSUFBSSxHQUFHSCxrRUFBYSxDQUFDLE1BQU0sRUFBRTtJQUFFLFNBQU87RUFBTyxDQUFDLENBQUM7RUFDckQsSUFBSWpCLFdBQVcsR0FBR0UsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDO0VBQzlDLElBQUlKLGVBQWU7RUFDbkIsSUFBSUMsV0FBVyxHQUFHbUIsU0FBUyxDQUFDZCxNQUFNLEVBQUU7SUFDaENOLGVBQWUsR0FBR0gsNERBQWUsQ0FBQ3VCLFNBQVMsQ0FBQ25CLFdBQVcsR0FBQyxDQUFDLENBQUMsQ0FBQztFQUMvRCxDQUFDLE1BQU07SUFDSEQsZUFBZSxHQUFHRiwyREFBYyxFQUFFO0VBQ3RDO0VBQ0F1QixJQUFJLENBQUNSLE1BQU0sQ0FBQ2IsZUFBZSxDQUFDO0VBQzVCLE9BQU9xQixJQUFJO0FBQ2YsQ0FBQztBQUVELGlFQUFlRixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckI0QjtBQUNBO0FBQ0E7QUFDRjtBQUNIO0FBRWhELElBQU1yQixjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUEsRUFBUztFQUN6QixJQUFNRyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7RUFFeEQsSUFBTU0sU0FBUyxHQUFHUSxrRUFBYSxDQUFDLEtBQUssRUFBRTtJQUFDLFNBQU87RUFBaUIsQ0FBQyxDQUFDO0VBQ2xFLElBQU1LLE9BQU8sR0FBR0wsa0VBQWEsQ0FBQyxHQUFHLEVBQUU7SUFBQyxTQUFPO0VBQWEsQ0FBQyxDQUFDO0VBRTFELElBQU1NLHFCQUFxQixHQUFHTixrRUFBYSxDQUFDLEtBQUssRUFBRTtJQUFDLFNBQU87RUFBK0IsQ0FBQyxDQUFDO0VBQzVGLElBQU1PLEtBQUssR0FBR1Asa0VBQWEsQ0FBQyxJQUFJLEVBQUU7SUFBQyxTQUFPO0VBQWEsQ0FBQyxFQUFFLGlEQUFpRCxDQUFDO0VBQzVHLElBQU1RLE9BQU8sR0FBR1Isa0VBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBQyxTQUFPO0VBQWUsQ0FBQyx3QkFBQVYsTUFBQSxDQUFTUCxXQUFXLE9BQUFPLE1BQUEsQ0FBSWpCLHNFQUFvQixFQUFHO0VBQzVHaUMscUJBQXFCLENBQUNYLE1BQU0sQ0FBQ1ksS0FBSyxFQUFFQyxPQUFPLENBQUM7RUFFNUMsSUFBTUMsUUFBUSxHQUFHVCxrRUFBYSxDQUFDLFVBQVUsRUFBRTtJQUFDLFNBQU87RUFBVSxDQUFDLENBQUM7RUFFL0QsSUFBTVUsSUFBSSxHQUFHVixrRUFBYSxDQUFDLE9BQU8sRUFBRTtJQUNoQ1csSUFBSSxFQUFFLE1BQU07SUFDWkMsV0FBVyxFQUFFLGdCQUFnQjtJQUM3QixTQUFPLHNCQUFzQjtJQUM3Qm5DLEVBQUUsRUFBRSxNQUFNO0lBQ1ZvQyxRQUFRLEVBQUU7RUFDZCxDQUFDLENBQUM7RUFFRixJQUFNQyxNQUFNLEdBQUdkLGtFQUFhLENBQUMsT0FBTyxFQUFFO0lBQ2xDVyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxXQUFXLEVBQUUsZ0JBQWdCO0lBQzdCRyxPQUFPLEVBQUUscUNBQXFDO0lBQzlDLFNBQU8sc0JBQXNCO0lBQzdCdEMsRUFBRSxFQUFFLFFBQVE7SUFDWm9DLFFBQVEsRUFBRTtFQUNkLENBQUMsQ0FBQztFQUVGLElBQU1HLEtBQUssR0FBR2hCLGtFQUFhLENBQUMsT0FBTyxFQUFFO0lBQ2pDVyxJQUFJLEVBQUUsT0FBTztJQUNiQyxXQUFXLEVBQUUsUUFBUTtJQUNyQixTQUFPLHNCQUFzQjtJQUM3Qm5DLEVBQUUsRUFBRSxPQUFPO0lBQ1hvQyxRQUFRLEVBQUU7RUFBRyxDQUFDLENBQUM7RUFFbkJKLFFBQVEsQ0FBQ2QsTUFBTSxDQUFDZSxJQUFJLEVBQUVJLE1BQU0sRUFBRUUsS0FBSyxDQUFDO0VBRXBDLElBQU1DLE1BQU0sR0FBR2pCLGtFQUFhLENBQUMsUUFBUSxFQUFFO0lBQUMsU0FBTyxRQUFRO0lBQUVXLElBQUksRUFBRTtFQUFRLENBQUMsRUFBRSxXQUFXLENBQUM7RUFDdEZNLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztJQUN4Q0EsS0FBSyxDQUFDQyxjQUFjLEVBQUU7SUFDdEIsSUFBTUMsT0FBTyxHQUFHQyxhQUFhLEVBQUU7SUFDL0JDLGlCQUFpQixDQUFDRixPQUFPLENBQUM7SUFDMUJHLFdBQVcsQ0FBQ0gsT0FBTyxDQUFDSSxHQUFHLENBQUNmLElBQUksQ0FBQ0UsV0FBVyxDQUFDLEVBQUVQLE9BQU8sRUFBRXFCLFNBQVMsQ0FBQztFQUNsRSxDQUFDLENBQUM7RUFFRmxDLFNBQVMsQ0FBQ0csTUFBTSxDQUFDVSxPQUFPLEVBQUVDLHFCQUFxQixFQUFFRyxRQUFRLEVBQUVRLE1BQU0sQ0FBQztFQUNsRSxPQUFPekIsU0FBUztBQUNwQixDQUFDO0FBRUQsSUFBTThCLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQSxFQUFTO0VBQ3hCLElBQU1LLFVBQVUsR0FBRyxJQUFJQyxHQUFHLEVBQUU7RUFDNUIsSUFBTUMsTUFBTSxHQUFHcEMsUUFBUSxDQUFDcUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0VBQ2pERCxNQUFNLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxJQUFJLEVBQUk7SUFDbkIsSUFBSUEsSUFBSSxDQUFDQyxLQUFLLEVBQUU7TUFDWk4sVUFBVSxDQUFDTyxHQUFHLENBQUNGLElBQUksQ0FBQ3BCLFdBQVcsRUFBRW9CLElBQUksQ0FBQ0MsS0FBSyxDQUFDO0lBQ2hEO0VBQ0osQ0FBQyxDQUFDO0VBQ0YsT0FBT04sVUFBVTtBQUNyQixDQUFDO0FBRUQsSUFBTUosaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSUYsT0FBTyxFQUFLO0VBQ25DLElBQU1jLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUFDLGtCQUFBLENBQUtqQixPQUFPLENBQUNrQixPQUFPLEVBQUUsRUFBRTtFQUMxRCxJQUFNQyxJQUFJLEdBQUc7SUFBQ2xFLFFBQVEsRUFBRSxXQUFXO0lBQUUyRCxLQUFLLEVBQUVFLFdBQVc7SUFBRTFELEVBQUUsRUFBRUosc0VBQW9CZTtFQUFBLENBQUM7RUFDbEYsSUFBSXFELFNBQVMsR0FBR3JDLG1FQUFZLENBQUMsV0FBVyxDQUFDO0VBQ3pDcUMsU0FBUyxDQUFDUCxHQUFHLENBQUM3RCxzRUFBb0IsRUFBRW1FLElBQUksQ0FBQztFQUN6Q3ZELFlBQVksQ0FBQ0ksT0FBTyxDQUFDLFdBQVcsRUFBRStDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSyxLQUFLLENBQUNDLElBQUksQ0FBQ0YsU0FBUyxDQUFDRixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEYsQ0FBQztBQUVELElBQU1mLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJZCxJQUFJLEVBQUVrQyxPQUFPLEVBQUs7RUFDbkNBLE9BQU8sQ0FBQ0MsU0FBUyxNQUFBdkQsTUFBQSxDQUFNb0IsSUFBSSxnTEFBc0M7RUFDakVrQyxPQUFPLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87RUFDL0JILE9BQU8sQ0FBQzFCLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxZQUFNO0lBQzNDMEIsT0FBTyxDQUFDRSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQzlCckIsU0FBUyxFQUFFO0VBQ2YsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVM7RUFDcEJ6QyxZQUFZLENBQUNJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0VBQ2pDSixZQUFZLENBQUNJLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO0VBQ3ZDLElBQU1jLElBQUksR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQzNDaEIsaUVBQVksQ0FBQ3lCLElBQUksQ0FBQztFQUNsQkEsSUFBSSxDQUFDUixNQUFNLENBQUNoQiw0REFBZSxDQUFDTixrRUFBZ0IsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFHRCxpRUFBZU8sY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZ3QjtBQUNBO0FBQ2I7QUFDeUI7QUFDRjtBQUNWO0FBRXJELElBQU1ELGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSXdFLFdBQVcsRUFBSztFQUNyQyxJQUFNcEUsV0FBVyxHQUFHQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBRXhELElBQU1NLFNBQVMsR0FBR1Esa0VBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBQyxTQUFPO0VBQWlCLENBQUMsQ0FBQztFQUNsRSxJQUFNTSxxQkFBcUIsR0FBR04sa0VBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBQyxTQUFPO0VBQStCLENBQUMsQ0FBQztFQUM1RixJQUFNTyxLQUFLLEdBQUdQLGtFQUFhLENBQUMsSUFBSSxFQUFFO0lBQUMsU0FBTztFQUFhLENBQUMsRUFBRW1ELFdBQVcsQ0FBQzdFLFFBQVEsQ0FBQztFQUMvRSxJQUFNa0MsT0FBTyxHQUFHUixrRUFBYSxDQUFDLEtBQUssRUFBRTtJQUFDLFNBQU87RUFBZSxDQUFDLHdCQUFBVixNQUFBLENBQVNQLFdBQVcsT0FBQU8sTUFBQSxDQUFJakIsc0VBQW9CLEVBQUc7RUFDNUdpQyxxQkFBcUIsQ0FBQ1gsTUFBTSxDQUFDWSxLQUFLLEVBQUVDLE9BQU8sQ0FBQztFQUM1QyxJQUFNNEMsUUFBUSxHQUFHcEQsa0VBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBQyxTQUFPO0VBQWdCLENBQUMsQ0FBQztFQUNoRSxJQUFJbUQsV0FBVyxDQUFDNUUsVUFBVSxLQUFLLE9BQU8sRUFBRTtJQUNwQzZFLFFBQVEsQ0FBQ3pELE1BQU0sQ0FBQ3FELHdEQUFXLENBQUNHLFdBQVcsQ0FBQyxDQUFDO0VBQzdDO0VBQ0EsSUFBSUEsV0FBVyxDQUFDNUUsVUFBVSxLQUFLLFFBQVEsRUFBRTtJQUNyQzZFLFFBQVEsQ0FBQ3pELE1BQU0sQ0FBQ3NELHlEQUFZLENBQUNFLFdBQVcsQ0FBQyxDQUFDO0VBQzlDO0VBQ0EsSUFBTUUsVUFBVSxHQUFHQyxnQkFBZ0IsQ0FBQ3ZFLFdBQVcsQ0FBQztFQUNoRCxJQUFNd0UsVUFBVSxHQUFHQyxnQkFBZ0IsQ0FBQ3pFLFdBQVcsRUFBRW9FLFdBQVcsQ0FBQztFQUM3RCxJQUFNTSxPQUFPLEdBQUd6RCxrRUFBYSxDQUFDLEtBQUssRUFBRTtJQUFDLFNBQU87RUFBUyxDQUFDLENBQUM7RUFDeER5RCxPQUFPLENBQUM5RCxNQUFNLENBQUMwRCxVQUFVLEVBQUVFLFVBQVUsQ0FBQztFQUV0Qy9ELFNBQVMsQ0FBQ0csTUFBTSxDQUFDVyxxQkFBcUIsRUFBRThDLFFBQVEsRUFBRUssT0FBTyxDQUFDO0VBQzFELE9BQU9qRSxTQUFTO0FBQ3BCLENBQUM7QUFHRCxJQUFNOEQsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUksSUFBSSxFQUFLO0VBQy9CLElBQU16QyxNQUFNLEdBQUdqQixrRUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFLFNBQU8sUUFBUTtJQUFFdkIsRUFBRSxFQUFFO0VBQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQztFQUVoRixJQUFNa0YsU0FBUyxHQUFHM0Qsa0VBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQy9DaUIsTUFBTSxDQUFDdEIsTUFBTSxDQUFDZ0UsU0FBUyxDQUFDO0VBQ3hCLElBQUlELElBQUksSUFBSSxDQUFDLEVBQUU7SUFDWHpDLE1BQU0sQ0FBQ2xCLFFBQVEsR0FBRyxJQUFJO0VBQzFCO0VBRUFrQixNQUFNLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7SUFDeENBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO0lBQ3RCLElBQU13QyxhQUFhLEdBQUduRSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDckRFLGtFQUFVLENBQUNnRSxhQUFhLENBQUM7RUFDN0IsQ0FBQyxDQUFDO0VBQ0YsT0FBTzNDLE1BQU07QUFDakIsQ0FBQztBQUVELElBQU11QyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJRSxJQUFJLEVBQUVQLFdBQVcsRUFBSztFQUM1QyxJQUFNbEMsTUFBTSxHQUFHakIsa0VBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRSxTQUFPLFFBQVE7SUFBRXZCLEVBQUUsRUFBRTtFQUFPLENBQUMsRUFBRSxRQUFRLENBQUM7RUFDakYsSUFBTW9GLFNBQVMsR0FBRzdELGtFQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUMvQ2lCLE1BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ2tFLFNBQVMsQ0FBQztFQUN4QjVDLE1BQU0sQ0FBQ2xCLFFBQVEsR0FBRyxDQUFDK0Qsb0JBQW9CLENBQUNYLFdBQVcsQ0FBQzFFLEVBQUUsQ0FBQztFQUV2RHdDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztJQUN4Q0EsS0FBSyxDQUFDQyxjQUFjLEVBQUU7SUFFdEIsSUFBSStCLFdBQVcsQ0FBQzVFLFVBQVUsS0FBSyxRQUFRLEVBQUU7TUFDckMyRSxrRUFBbUIsQ0FBQ0MsV0FBVyxDQUFDO0lBQ3BDO0lBQ0EsSUFBSUEsV0FBVyxDQUFDNUUsVUFBVSxLQUFLLE9BQU8sRUFBRTtNQUNwQyxJQUFNcUYsYUFBYSxHQUFHbkUsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO01BQ3JEYixrRUFBVSxDQUFDK0UsYUFBYSxDQUFDO0lBQzdCO0VBQ0osQ0FBQyxDQUFDO0VBQ0YsT0FBTzNDLE1BQU07QUFDakIsQ0FBQztBQUVNLElBQU02QyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CQSxDQUFJckYsRUFBRSxFQUFLO0VBQ3hDLElBQUlnRSxTQUFTLEdBQUdyQyxtRUFBWSxDQUFDLFdBQVcsQ0FBQztFQUN6QyxPQUFPLENBQUMsQ0FBQ3FDLFNBQVMsQ0FBQ2hCLEdBQUcsQ0FBQ2hELEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRUQsaUVBQWVFLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUV1QjtBQUNBO0FBQ0Y7QUFFbkQsSUFBTXFFLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJRyxXQUFXLEVBQUs7RUFDakMsSUFBSVksV0FBVztFQUNmLElBQUl0QixTQUFTLEdBQUdyQyxtRUFBWSxDQUFDLFdBQVcsQ0FBQztFQUN6QyxJQUFJcUMsU0FBUyxDQUFDaEIsR0FBRyxDQUFDMEIsV0FBVyxDQUFDMUUsRUFBRSxDQUFDLEVBQUU7SUFDL0JzRixXQUFXLEdBQUd0QixTQUFTLENBQUNoQixHQUFHLENBQUMwQixXQUFXLENBQUMxRSxFQUFFLENBQUMsQ0FBQ3dELEtBQUs7RUFDckQ7RUFFQSxJQUFNeEIsUUFBUSxHQUFHVCxrRUFBYSxDQUFDLFVBQVUsRUFBRTtJQUFDLFNBQU87RUFBVSxDQUFDLENBQUM7RUFFL0RtRCxXQUFXLENBQUMzRSxRQUFRLENBQUN1RCxPQUFPLENBQUMsVUFBQWlDLElBQUksRUFBSTtJQUVqQyxJQUFNQyxLQUFLLEdBQUdqRSxrRUFBYSxDQUFDLE9BQU8sRUFBRTtNQUFDLFNBQU8saUJBQWlCO01BQUUsT0FBS2dFO0lBQUksQ0FBQyxFQUFFQSxJQUFJLENBQUM7SUFDakYsSUFBTUUsS0FBSyxHQUFHbEUsa0VBQWEsQ0FBQyxPQUFPLEVBQUU7TUFDakMsU0FBTyxpQkFBaUI7TUFDeEJ2QixFQUFFLEVBQUV1RixJQUFJO01BQ1JyRCxJQUFJLEVBQUUsT0FBTztNQUNic0IsS0FBSyxFQUFFK0IsSUFBSTtNQUNYdEQsSUFBSSxFQUFFLFNBQVM7TUFDZkcsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxDQUFDO0lBQ0YsSUFBSW1ELElBQUksS0FBS0QsV0FBVyxFQUFFO01BQ3RCRyxLQUFLLENBQUNDLE9BQU8sR0FBRyxJQUFJO0lBQ3hCO0lBRUFELEtBQUssQ0FBQ2hELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ2xDLElBQU1rRCxlQUFlLEdBQUczRSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7TUFFdkQsSUFBTThDLElBQUksR0FBRztRQUFDbEUsUUFBUSxFQUFFNkUsV0FBVyxDQUFDN0UsUUFBUTtRQUFFMkQsS0FBSyxFQUFFaUMsS0FBSyxDQUFDakMsS0FBSztRQUFFeEQsRUFBRSxFQUFFMEUsV0FBVyxDQUFDMUU7TUFBRSxDQUFDO01BQ3JGLElBQUlnRSxTQUFTLEdBQUdyQyxtRUFBWSxDQUFDLFdBQVcsQ0FBQztNQUN6Q3FDLFNBQVMsQ0FBQ1AsR0FBRyxDQUFDaUIsV0FBVyxDQUFDMUUsRUFBRSxFQUFFK0QsSUFBSSxDQUFDO01BQ25DdkQsWUFBWSxDQUFDSSxPQUFPLENBQUMsV0FBVyxFQUFFK0MsSUFBSSxDQUFDQyxTQUFTLENBQUNLLEtBQUssQ0FBQ0MsSUFBSSxDQUFDRixTQUFTLENBQUNGLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztNQUVsRixJQUFNOEIsVUFBVSxHQUFHNUUsUUFBUSxDQUFDNkUsY0FBYyxDQUFDLE1BQU0sQ0FBQztNQUNsREQsVUFBVSxDQUFDdEUsUUFBUSxHQUFHLEtBQUs7TUFDM0JsQixrRUFBVSxDQUFDdUYsZUFBZSxDQUFDO0lBQy9CLENBQUMsQ0FBQztJQUNGLElBQU1HLFNBQVMsR0FBR3ZFLGtFQUFhLENBQUMsTUFBTSxFQUFFO01BQUMsU0FBTztJQUFxQixDQUFDLENBQUM7SUFDdkVpRSxLQUFLLENBQUN0RSxNQUFNLENBQUN1RSxLQUFLLEVBQUVLLFNBQVMsQ0FBQztJQUM5QjlELFFBQVEsQ0FBQ2QsTUFBTSxDQUFDc0UsS0FBSyxDQUFDO0VBQzFCLENBQUMsQ0FBQztFQUNGLE9BQU94RCxRQUFRO0FBQ25CLENBQUM7QUFDRCxpRUFBZXVDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDMkI7QUFDQTtBQUNGO0FBRW5ELElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJRSxXQUFXLEVBQUs7RUFDbEMsSUFBSVYsU0FBUyxHQUFHckMsbUVBQVksQ0FBQyxXQUFXLENBQUM7RUFDekMsSUFBSW9FLGFBQWEsR0FBRyxJQUFJQyxHQUFHLEVBQUU7RUFFN0IsSUFBSWhDLFNBQVMsQ0FBQ2hCLEdBQUcsQ0FBQzBCLFdBQVcsQ0FBQzFFLEVBQUUsQ0FBQyxFQUFFO0lBQy9CK0YsYUFBYSxHQUFHLElBQUlDLEdBQUcsQ0FBQ2hDLFNBQVMsQ0FBQ2hCLEdBQUcsQ0FBQzBCLFdBQVcsQ0FBQzFFLEVBQUUsQ0FBQyxDQUFDd0QsS0FBSyxDQUFDO0VBQ2hFO0VBRUEsSUFBTXlDLE1BQU0sR0FBRzFFLGtFQUFhLENBQUMsUUFBUSxFQUFFO0lBQUMyRSxRQUFRLEVBQUUsRUFBRTtJQUFFakUsSUFBSSxFQUFFLFNBQVM7SUFBRWpDLEVBQUUsRUFBRSxTQUFTO0lBQUUsU0FBTztFQUFRLENBQUMsQ0FBQztFQUV2RzBFLFdBQVcsQ0FBQzNFLFFBQVEsQ0FBQ3VELE9BQU8sQ0FBQyxVQUFBaUMsSUFBSSxFQUFJO0lBQ2pDLElBQU1ZLE1BQU0sR0FBRzVFLGtFQUFhLENBQUMsUUFBUSxFQUFFO01BQ25DLFNBQU8sa0JBQWtCO01BQ3pCaUMsS0FBSyxFQUFFK0IsSUFBSTtNQUNYdEQsSUFBSSxFQUFFLFNBQVM7TUFDZkcsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUFFbUQsSUFBSSxDQUFDO0lBRVIsSUFBSVEsYUFBYSxJQUFJQSxhQUFhLENBQUNLLEdBQUcsQ0FBQ2IsSUFBSSxDQUFDLEVBQUU7TUFDMUNZLE1BQU0sQ0FBQ0UsUUFBUSxHQUFHLElBQUk7SUFDMUI7SUFFQUYsTUFBTSxDQUFDMUQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDbkMsSUFBTW1ELFVBQVUsR0FBRzVFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztNQUNsRDJFLFVBQVUsQ0FBQ3RFLFFBQVEsR0FBRyxLQUFLO0lBQy9CLENBQUMsQ0FBQztJQUNGMkUsTUFBTSxDQUFDL0UsTUFBTSxDQUFDaUYsTUFBTSxDQUFDO0VBQ3pCLENBQUMsQ0FBQztFQUNGLE9BQU9GLE1BQU07QUFDakIsQ0FBQztBQUVNLElBQU14QixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJQyxXQUFXLEVBQUs7RUFDaEQsSUFBTTRCLE9BQU8sR0FBR3RGLFFBQVEsQ0FBQ3FDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztFQUNuRCxJQUFNZ0QsUUFBUSxHQUFHLEVBQUU7RUFDbkJDLE9BQU8sQ0FBQ2hELE9BQU8sQ0FBQyxVQUFBNkMsTUFBTSxFQUFJO0lBQ3RCLElBQUlBLE1BQU0sQ0FBQ0UsUUFBUSxFQUFFO01BQ2pCQSxRQUFRLENBQUNFLElBQUksQ0FBQ0osTUFBTSxDQUFDM0MsS0FBSyxDQUFDO0lBQy9CO0VBQ0osQ0FBQyxDQUFDO0VBQ0YsSUFBSTZDLFFBQVEsQ0FBQzFGLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDckIsSUFBTW9ELElBQUksR0FBRztNQUFDbEUsUUFBUSxFQUFFNkUsV0FBVyxDQUFDN0UsUUFBUTtNQUFFMkQsS0FBSyxFQUFFNkMsUUFBUTtNQUFFckcsRUFBRSxFQUFFMEUsV0FBVyxDQUFDMUU7SUFBRSxDQUFDO0lBQ2xGLElBQUlnRSxTQUFTLEdBQUdyQyxtRUFBWSxDQUFDLFdBQVcsQ0FBQztJQUN6Q3FDLFNBQVMsQ0FBQ1AsR0FBRyxDQUFDaUIsV0FBVyxDQUFDMUUsRUFBRSxFQUFFK0QsSUFBSSxDQUFDO0lBQ25DdkQsWUFBWSxDQUFDSSxPQUFPLENBQUMsV0FBVyxFQUFFK0MsSUFBSSxDQUFDQyxTQUFTLENBQUNLLEtBQUssQ0FBQ0MsSUFBSSxDQUFDRixTQUFTLENBQUNGLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVsRixJQUFNcUIsYUFBYSxHQUFHbkUsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ3JEYixrRUFBVSxDQUFDK0UsYUFBYSxDQUFDO0VBRTdCLENBQUMsTUFBTTtJQUNILElBQU1TLFVBQVUsR0FBRzVFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUNsRDJFLFVBQVUsQ0FBQ3RFLFFBQVEsR0FBRyxJQUFJO0VBQzlCO0FBQ0osQ0FBQztBQUNELGlFQUFla0QsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUN6RDNCLElBQU12RSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSXVHLGFBQWEsRUFBSztFQUN0QyxPQUFPQSxhQUFhLENBQUNDLGFBQWEsRUFBRSxFQUFFO0lBQ3BDRCxhQUFhLENBQUNFLFdBQVcsQ0FBQ0YsYUFBYSxDQUFDRyxVQUFVLENBQUM7RUFDckQ7QUFDRixDQUFDO0FBQ0QsaUVBQWUxRyxZQUFZOzs7Ozs7Ozs7Ozs7OztBQ0wzQixJQUFNc0IsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJcUYsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBSztFQUMxRCxJQUFNQyxFQUFFLEdBQUcvRixRQUFRLENBQUNPLGFBQWEsQ0FBQ3FGLE9BQU8sQ0FBQztFQUUxQyxLQUFLLElBQU1JLEdBQUcsSUFBSUgsVUFBVSxFQUFFO0lBQzVCRSxFQUFFLENBQUNFLFlBQVksQ0FBQ0QsR0FBRyxFQUFFSCxVQUFVLENBQUNHLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZDO0VBQ0EsSUFBSUYsV0FBVyxFQUFFQyxFQUFFLENBQUNELFdBQVcsR0FBR0EsV0FBVztFQUM3QyxPQUFPQyxFQUFFO0FBQ1gsQ0FBQztBQUVELGlFQUFleEYsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUNWckIsU0FBU0ksWUFBWUEsQ0FBQ00sSUFBSSxFQUFFO0VBQy9CLElBQU1pRixPQUFPLEdBQUcxRyxZQUFZLENBQUNDLE9BQU8sQ0FBQ3dCLElBQUksQ0FBQztFQUMxQztFQUNBLElBQUlpRixPQUFPLEtBQUssSUFBSSxFQUFFO0lBQ2xCLE9BQU8sSUFBSS9ELEdBQUcsRUFBRTtFQUNwQjtFQUNBLElBQUk7SUFDQSxPQUFPLElBQUlBLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDd0QsS0FBSyxDQUFDRCxPQUFPLENBQUMsQ0FBQztFQUN2QyxDQUFDLENBQUMsT0FBT0UsQ0FBQyxFQUFFO0lBQ1JDLE9BQU8sQ0FBQ0MsS0FBSyxnQ0FBQXpHLE1BQUEsQ0FBZ0NvQixJQUFJLFFBQUFwQixNQUFBLENBQUt1RyxDQUFDLENBQUN4RixPQUFPLEVBQUc7RUFDdEU7QUFDSjs7Ozs7Ozs7Ozs7Ozs7OztBQ1h3RDtBQUNFO0FBRTFELElBQU0yRixRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBQ25CLElBQUksQ0FBQy9HLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0lBQy9CRCxZQUFZLENBQUNJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0VBQ3JDO0VBQ0EsSUFBTUcsU0FBUyxHQUFHUSxrRUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBWSxDQUFDLENBQUM7RUFDOUQsSUFBTWlHLEtBQUssR0FBR2pHLGtFQUFhLENBQUMsS0FBSyxFQUFFO0lBQUUsU0FBTztFQUFRLENBQUMsQ0FBQztFQUN0RCxJQUFNTyxLQUFLLEdBQUdQLGtFQUFhLENBQUMsSUFBSSxFQUFFO0lBQUUsU0FBTztFQUFlLENBQUMsRUFBRSxvQkFBb0IsQ0FBQztFQUNsRixJQUFNa0csV0FBVyxHQUFHbEcsa0VBQWEsQ0FBQyxHQUFHLEVBQUU7SUFBRSxTQUFPO0VBQXFCLENBQUMsRUFBRSxVQUFVLEdBQzlFLCtFQUErRSxDQUFDO0VBRXBGLElBQU1tRyxjQUFjLEdBQUduRyxrRUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBZSxDQUFDLENBQUM7RUFDdEUsSUFBTW9HLFVBQVUsR0FBR3BHLGtFQUFhLENBQUMsS0FBSyxFQUFFO0lBQUUsU0FBTztFQUF1QyxDQUFDLEVBQUUsV0FBVyxDQUFDO0VBQ3ZHLElBQU1xRyxVQUFVLEdBQUdyRyxrRUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBdUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQztFQUMxRyxJQUFNc0csV0FBVyxHQUFHdEcsa0VBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRSxTQUFPO0VBQXNCLENBQUMsQ0FBQztFQUMxRSxJQUFNdUcsU0FBUyxHQUFHdkcsa0VBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRSxTQUFPO0VBQW9CLENBQUMsQ0FBQztFQUN0RSxJQUFNd0csVUFBVSxHQUFHeEcsa0VBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRSxTQUFPO0VBQXFCLENBQUMsQ0FBQztFQUN4RSxJQUFNeUcsV0FBVyxHQUFHekcsa0VBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRSxTQUFPO0VBQXNCLENBQUMsQ0FBQztFQUMxRW1HLGNBQWMsQ0FBQ3hHLE1BQU0sQ0FBQ3lHLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUM7RUFDOUZSLEtBQUssQ0FBQ3RHLE1BQU0sQ0FBQ1ksS0FBSyxFQUFFMkYsV0FBVyxFQUFFQyxjQUFjLENBQUM7RUFFaEQzRyxTQUFTLENBQUNHLE1BQU0sQ0FBQ3NHLEtBQUssRUFBRWhHLHVFQUFVLEVBQUUsQ0FBQztFQUNyQyxPQUFPVCxTQUFTO0FBQ3BCLENBQUM7QUFDRCxpRUFBZXdHLFFBQVE7Ozs7Ozs7Ozs7O0FDMUJ2Qjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ3VCO0FBQzdDLElBQU1VLElBQUksR0FBR2pILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUMzQ2dILElBQUksQ0FBQy9HLE1BQU0sQ0FBQ3FHLGdFQUFRLEVBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9iYXNlL3F1ZXN0aW9ucy1kYXRhLmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvY29tcG9uZW50cy9mb3JtL2Z1bmN0aW9ucy9kb1N0ZXAuanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9jb21wb25lbnRzL2Zvcm0vcmVuZGVyRm9ybS5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2NvbXBvbmVudHMvZ2V0Q29udGFjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9jb21wb25lbnRzL2dldFF1ZXN0aW9uRWxlbS5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2NvbXBvbmVudHMvZ2V0UmFkaW9TZXQuanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9jb21wb25lbnRzL2dldFNlbGVjdFNldC5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2hlbHBlcnMvY2xlYXJFbGVtZW50LmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvaGVscGVycy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvaGVscGVycy9nZXRNYXBGcm9tTFMuanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9wYWdlcy9tYWluL21haW5QYWdlLmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvc3R5bGUuc2Nzcz9iYzNiIiwid2VicGFjazovL3F1aXovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcXVpei93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcXVpei93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3F1aXovd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBxdWVzdGlvbnNEYXRhID0gW1xuICAgIHtcbiAgICAgICAgcXVlc3Rpb246ICfQlNC70Y8g0LrQvtCz0L4g0LLRiyDQuNGJ0LXRgtC1INGD0YfQtdCx0L3QvtC1INC30LDQstC10LTQtdC90LjQtT8nLFxuICAgICAgICBhbnN3ZXJUeXBlOiAncmFkaW8nLFxuICAgICAgICB2YXJpYW50czogWyAn0KHQtdCx0LUnLCAn0KHRg9C/0YDRg9Cz0YMv0YHRg9C/0YDRg9Cz0LUnLCAn0KDQvtC00YHRgtCy0LXQvdC90LjQutGDJywgJ9Ca0L7Qu9C70LXQs9C1JywgJ9Cg0LXQsdC10L3QutGDJywgJ9CU0YDRg9Cz0L7QtSddLFxuICAgICAgICBpZDogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcXVlc3Rpb246ICfQkiDQutCw0LrQvtC8INCz0L7RgNC+0LTQtSDQv9C70LDQvdC40YDRg9C10YLQtSDQv9C+0YHRgtGD0L/QsNGC0Yw/JyxcbiAgICAgICAgYW5zd2VyVHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIHZhcmlhbnRzOiBbICfQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsycsICfQnNC+0YHQutCy0LAnLCAn0J3QvtCy0L7RgdC40LHQuNGA0YHQuicsICfQndC40LbQvdC40Lkg0L3QvtCy0LPQvtGA0L7QtCcsICfQoNC+0YHRgtC+0LIt0L3QsC3QlNC+0L3RgycsICfQmtCw0LfQsNC90YwnLCAn0KfQtdC70Y/QsdC40L3RgdC6JywgJ9Ce0LzRgdC6JywgJ9Ca0YDQsNGB0L3QvtC00LDRgCcsICfQo9GE0LAnLCAn0J/QtdGA0LzRjCcsICfQlNGA0YPQs9C+0LknIF0sXG4gICAgICAgIGlkOiAyLFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ9Ca0LDQutC+0LUg0L7QsdGA0LDQt9C+0LLQsNC90LjQtSDRg9C20LUg0LXRgdGC0Yw/JyxcbiAgICAgICAgYW5zd2VyVHlwZTogJ3JhZGlvJyxcbiAgICAgICAgdmFyaWFudHM6IFsgJzkg0LrQu9Cw0YHRgdC+0LInLCAnMTEg0LrQu9Cw0YHRgdC+0LInLCAn0KPRh9C40LvQuNGJ0LUnLCAn0JrQvtC70LvQtdC00LYv0YLQtdGF0L3QuNC60YPQvCcsICfQndC10L7QutC+0L3Rh9C10L3QvdC+0LUg0LLRi9GB0YjQtdC1JywgJ9CS0YvRgdGI0LXQtScgXSxcbiAgICAgICAgaWQ6IDMsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHF1ZXN0aW9uOiAn0JrRg9C00LAg0L/Qu9Cw0L3QuNGA0YPQtdGC0LUg0L/QvtGB0YLRg9C/0LDRgtGMPycsXG4gICAgICAgIGFuc3dlclR5cGU6ICdyYWRpbycsXG4gICAgICAgIHZhcmlhbnRzOiBbICfQktGD0LcnLCAn0JrQvtC70LvQtdC00LYv0YLQtdGF0L3QuNC60YPQvCcsICfQo9GH0LjQu9C40YnQtScgXSxcbiAgICAgICAgaWQ6IDQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHF1ZXN0aW9uOiAn0JrQsNC60YPRjiDRhNC+0YDQvNGDINC+0LHRg9GH0LXQvdC40Y8g0L/RgNC10LTQv9C+0YfQuNGC0LDQtdGC0LU/JyxcbiAgICAgICAgYW5zd2VyVHlwZTogJ3JhZGlvJyxcbiAgICAgICAgdmFyaWFudHM6IFsgJ9Ce0YfQvdGD0Y4nLCAn0JfQsNC+0YfQvdGD0Y4nLCAn0JTQuNGB0YLQsNC90YbQuNC+0L3QvdGD0Y4nIF0sXG4gICAgICAgIGlkOiA1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ9Cg0LDRgdGB0LzQsNGC0YDQuNCy0LDQtdGC0LUg0L/Qu9Cw0YLQvdC+0LUg0L7QsdGD0YfQtdC90LjQtT8nLFxuICAgICAgICBhbnN3ZXJUeXBlOiAncmFkaW8nLFxuICAgICAgICB2YXJpYW50czogWyAn0J3QtdGCLCDRgtC+0LvRjNC60L4g0LHRjtC00LbQtdGCJywgJ9CU0LAsINC/0LvQsNC90LjRgNGD0Y4g0YPRh9C40YLRjNGB0Y8g0L/Qu9Cw0YLQvdC+JywgJ9CS0L7Qt9C80L7QttC90Ysg0L7QsdCwINCy0LDRgNC40LDQvdGC0LAnIF0sXG4gICAgICAgIGlkOiA2LFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ9Ca0LDQutCw0Y8g0YHQv9C10YbQuNCw0LvRjNC90L7RgdGC0Ywg0LjQvdGC0LXRgNC10YHRg9C10YI/JyxcbiAgICAgICAgYW5zd2VyVHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIHZhcmlhbnRzOiBbICfQrdC60L7QvdC+0LzQuNC60LAnLCAn0KTQuNC70L7RgdC+0YTQuNGPJywgJ9Ch0L7RhtC40L7Qu9C+0LPQuNGPJywgJ9Cu0YDQuNGB0L/RgNGD0LTQtdC90YbQuNGPJyBdLFxuICAgICAgICBpZDogNyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcXVlc3Rpb246ICfQmtCw0Log0YHQutC+0YDQviDQv9C70LDQvdC40YDRg9C10YLQtSDQv9C+0YHRgtGD0L/QsNGC0Yw/JyxcbiAgICAgICAgYW5zd2VyVHlwZTogJ3JhZGlvJyxcbiAgICAgICAgdmFyaWFudHM6IFsgJ9Ca0LDQuiDQvNC+0LbQvdC+INCx0YvRgdGC0YDQtdC1JywgJ9Cc0LXRgdGP0YYnLCAn0JrQstCw0YDRgtCw0LsnLCAn0J/QvtC70LPQvtC00LAnLCAn0JPQvtC0JyBdLFxuICAgICAgICBpZDogOCxcbiAgICB9LFxuXTsiLCJpbXBvcnQge3F1ZXN0aW9uc0RhdGF9IGZyb20gXCIuLi8uLi8uLi9iYXNlL3F1ZXN0aW9ucy1kYXRhXCI7XG5pbXBvcnQgY2xlYXJFbGVtZW50IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2NsZWFyRWxlbWVudFwiO1xuaW1wb3J0IGdldFF1ZXN0aW9uRWxlbSBmcm9tIFwiLi4vLi4vZ2V0UXVlc3Rpb25FbGVtXCI7XG5pbXBvcnQgZ2V0Q29udGFjdEZvcm0gZnJvbSBcIi4uLy4uL2dldENvbnRhY3RGb3JtXCI7XG5cbmV4cG9ydCBjb25zdCBkb05leHRTdGVwID0gKHF1ZXN0aW9uRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGVwJykpO1xuICAgIGNvbnN0IHN0ZXBzQ291bnQgPSBxdWVzdGlvbnNEYXRhLmxlbmd0aDtcblxuICAgIGlmIChjdXJyZW50U3RlcCA9PT0gc3RlcHNDb3VudC0xKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGVwJywgYCR7KGN1cnJlbnRTdGVwICsgMSl9YCk7XG4gICAgICAgIGNvbnN0IG5leHRRdWVzdGlvbiA9IGdldENvbnRhY3RGb3JtKHF1ZXN0aW9uc0RhdGFbY3VycmVudFN0ZXBdKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICAgICAgY2xlYXJFbGVtZW50KGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobmV4dFF1ZXN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFN0ZXAgPCBzdGVwc0NvdW50LTEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0ZXAnLCBgJHsoY3VycmVudFN0ZXAgKyAxKX1gKTtcbiAgICAgICAgY29uc3QgbmV4dFF1ZXN0aW9uID0gZ2V0UXVlc3Rpb25FbGVtKHF1ZXN0aW9uc0RhdGFbY3VycmVudFN0ZXBdKTtcbiAgICAgICAgY2xlYXJFbGVtZW50KHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgICAgIHF1ZXN0aW9uRWxlbWVudC5hcHBlbmQobmV4dFF1ZXN0aW9uKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGRvUHJldlN0ZXAgPSAocXVlc3Rpb25FbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXAnKSk7XG4gICAgaWYgKGN1cnJlbnRTdGVwID49IDIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0ZXAnLCBgJHsoY3VycmVudFN0ZXAgLSAxKX1gKTtcbiAgICAgICAgY2xlYXJFbGVtZW50KHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHByZXZRdWVzdGlvbiA9IGdldFF1ZXN0aW9uRWxlbShxdWVzdGlvbnNEYXRhW2N1cnJlbnRTdGVwLTJdKTtcbiAgICAgICAgcXVlc3Rpb25FbGVtZW50LmFwcGVuZChwcmV2UXVlc3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvblByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldicpO1xuICAgICAgICBidXR0b25QcmV2LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGdldFF1ZXN0aW9uRWxlbSBmcm9tIFwiLi4vZ2V0UXVlc3Rpb25FbGVtXCI7XG5pbXBvcnQge3F1ZXN0aW9uc0RhdGF9IGZyb20gXCIuLi8uLi9iYXNlL3F1ZXN0aW9ucy1kYXRhXCI7XG5pbXBvcnQgZ2V0Q29udGFjdEZvcm0gZnJvbSBcIi4uL2dldENvbnRhY3RGb3JtXCI7XG5cblxuY29uc3QgcmVuZGVyRm9ybSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IHF1ZXN0aW9uc0RhdGE7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCB7IGNsYXNzOiAnZm9ybScgfSk7XG4gICAgbGV0IGN1cnJlbnRTdGVwID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXAnKTtcbiAgICBsZXQgcXVlc3Rpb25FbGVtZW50O1xuICAgIGlmIChjdXJyZW50U3RlcCA8IHF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgcXVlc3Rpb25FbGVtZW50ID0gZ2V0UXVlc3Rpb25FbGVtKHF1ZXN0aW9uc1tjdXJyZW50U3RlcC0xXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVlc3Rpb25FbGVtZW50ID0gZ2V0Q29udGFjdEZvcm0oKTtcbiAgICB9XG4gICAgZm9ybS5hcHBlbmQocXVlc3Rpb25FbGVtZW50KTtcbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRm9ybTsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vaGVscGVycy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQge3F1ZXN0aW9uc0RhdGF9IGZyb20gXCIuLi9iYXNlL3F1ZXN0aW9ucy1kYXRhXCI7XG5pbXBvcnQge2dldE1hcEZyb21MU30gZnJvbSBcIi4uL2hlbHBlcnMvZ2V0TWFwRnJvbUxTXCI7XG5pbXBvcnQgY2xlYXJFbGVtZW50IGZyb20gXCIuLi9oZWxwZXJzL2NsZWFyRWxlbWVudFwiO1xuaW1wb3J0IGdldFF1ZXN0aW9uRWxlbSBmcm9tIFwiLi9nZXRRdWVzdGlvbkVsZW1cIjtcblxuY29uc3QgZ2V0Q29udGFjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXAnKSk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmb3JtX19jb250YWluZXInfSk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCB7Y2xhc3M6ICdmaW5hbC1wb3B1cCd9KTtcblxuICAgIGNvbnN0IHRpdGxlQ291bnRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Zvcm1fX3RpdGxlLWNvdW50ZXItY29udGFpbmVyJ30pO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCB7Y2xhc3M6ICdmb3JtX190aXRsZSd9LCAn0JLQsNGI0LAg0L/QvtC00LHQvtGA0LrQsCDQs9C+0YLQvtCy0LAhIPCfpbMg0JrRg9C00LAg0L3QsNC8INC+0YLQv9GA0LDQstC40YLRjCDQtdGRPycpO1xuICAgIGNvbnN0IGNvdW50ZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmb3JtX19jb3VudGVyJ30sIGDQqNCw0LMgJHtjdXJyZW50U3RlcH0vJHtxdWVzdGlvbnNEYXRhLmxlbmd0aH1gKTtcbiAgICB0aXRsZUNvdW50ZXJDb250YWluZXIuYXBwZW5kKHRpdGxlLCBjb3VudGVyKTtcblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnLCB7Y2xhc3M6ICdmaWVsZHNldCd9KTtcblxuICAgIGNvbnN0IG5hbWUgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ9Ca0LDQuiDQstCw0YEg0LfQvtCy0YPRgj8nLFxuICAgICAgICBjbGFzczogJ2ZpZWxkc2V0X19pbnB1dC10ZXh0JyxcbiAgICAgICAgaWQ6ICduYW1lJyxcbiAgICAgICAgcmVxdWlyZWQ6ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgbnVtYmVyID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnLFxuICAgICAgICBwYXR0ZXJuOiAnL15cXFxcKz9cXFxcZHswLDIwfShcXFxcKFxcXFxkezEsMjB9XFxcXCkpPyQvJyxcbiAgICAgICAgY2xhc3M6ICdmaWVsZHNldF9faW5wdXQtdGV4dCcsXG4gICAgICAgIGlkOiAnbnVtYmVyJyxcbiAgICAgICAgcmVxdWlyZWQ6ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZW1haWwgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFLW1haWwnLFxuICAgICAgICBjbGFzczogJ2ZpZWxkc2V0X19pbnB1dC10ZXh0JyxcbiAgICAgICAgaWQ6ICdlbWFpbCcsXG4gICAgICAgIHJlcXVpcmVkOiAnJyx9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kKG5hbWUsIG51bWJlciwgZW1haWwpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAnYnV0dG9uJywgdHlwZTogJ3N1Ym1pdCd9LCAn0J7RgtC/0YDQsNCy0LjRgtGMJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGFuc3dlcnMgPSBnZXRBbnN3ZXJzTWFwKCk7XG4gICAgICAgIHJlY29yZEFuc3dlcnNUb0xTKGFuc3dlcnMpO1xuICAgICAgICBzaG93TWVzc2FnZShhbnN3ZXJzLmdldChuYW1lLnBsYWNlaG9sZGVyKSwgbWVzc2FnZSwgcmVzZXRGb3JtKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQobWVzc2FnZSwgdGl0bGVDb3VudGVyQ29udGFpbmVyLCBmaWVsZHNldCwgYnV0dG9uKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBnZXRBbnN3ZXJzTWFwID0gKCkgPT4ge1xuICAgIGNvbnN0IGFuc3dlcnNNYXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBpbnB1dHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgIGFuc3dlcnNNYXAuc2V0KGl0ZW0ucGxhY2Vob2xkZXIsIGl0ZW0udmFsdWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcnNNYXA7XG59XG5cbmNvbnN0IHJlY29yZEFuc3dlcnNUb0xTID0gKGFuc3dlcnMpID0+IHtcbiAgICBjb25zdCBtYXBBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KFsuLi5hbnN3ZXJzLmVudHJpZXMoKV0pO1xuICAgIGNvbnN0IGRhdGEgPSB7cXVlc3Rpb246ICd1c2VyIGRhdGEnLCB2YWx1ZTogbWFwQXNTdHJpbmcsIGlkOiBxdWVzdGlvbnNEYXRhLmxlbmd0aH07XG4gICAgbGV0IG1hcEZyb21MUyA9IGdldE1hcEZyb21MUygncmVzcG9uc2VzJyk7XG4gICAgbWFwRnJvbUxTLnNldChxdWVzdGlvbnNEYXRhLmxlbmd0aCwgZGF0YSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Jlc3BvbnNlcycsIEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20obWFwRnJvbUxTLmVudHJpZXMoKSkpKTtcbn1cblxuY29uc3Qgc2hvd01lc3NhZ2UgPSAobmFtZSwgZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7bmFtZX0sINGB0L/QsNGB0LjQsdC+ISDQodC60L7RgNC+INC80Ysg0YEg0JLQsNC80Lgg0YHQstGP0LbQtdC80YHRjyFgO1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHJlc2V0Rm9ybSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RlcCcsICcxJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Jlc3BvbnNlcycsICdbXScpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgY2xlYXJFbGVtZW50KGZvcm0pO1xuICAgIGZvcm0uYXBwZW5kKGdldFF1ZXN0aW9uRWxlbShxdWVzdGlvbnNEYXRhWzBdKSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29udGFjdEZvcm07IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL2hlbHBlcnMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHtxdWVzdGlvbnNEYXRhfSBmcm9tIFwiLi4vYmFzZS9xdWVzdGlvbnMtZGF0YVwiO1xuaW1wb3J0IGdldFJhZGlvU2V0IGZyb20gXCIuL2dldFJhZGlvU2V0XCI7XG5pbXBvcnQgZ2V0U2VsZWN0U2V0LCB7aGFuZGxlU2VsZWN0QW5zd2Vyc30gZnJvbSBcIi4vZ2V0U2VsZWN0U2V0XCI7XG5pbXBvcnQge2RvTmV4dFN0ZXAsIGRvUHJldlN0ZXB9IGZyb20gXCIuL2Zvcm0vZnVuY3Rpb25zL2RvU3RlcFwiO1xuaW1wb3J0IHtnZXRNYXBGcm9tTFN9IGZyb20gXCIuLi9oZWxwZXJzL2dldE1hcEZyb21MU1wiO1xuXG5jb25zdCBnZXRRdWVzdGlvbkVsZW0gPSAocXVlc3Rpb25PYmopID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RlcCcpKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Zvcm1fX2NvbnRhaW5lcid9KTtcbiAgICBjb25zdCB0aXRsZUNvdW50ZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmb3JtX190aXRsZS1jb3VudGVyLWNvbnRhaW5lcid9KTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywge2NsYXNzOiAnZm9ybV9fdGl0bGUnfSwgcXVlc3Rpb25PYmoucXVlc3Rpb24pO1xuICAgIGNvbnN0IGNvdW50ZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmb3JtX19jb3VudGVyJ30sIGDQqNCw0LMgJHtjdXJyZW50U3RlcH0vJHtxdWVzdGlvbnNEYXRhLmxlbmd0aH1gKTtcbiAgICB0aXRsZUNvdW50ZXJDb250YWluZXIuYXBwZW5kKHRpdGxlLCBjb3VudGVyKTtcbiAgICBjb25zdCBpbnB1dFNldCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Zvcm1fX3F1ZXN0aW9uJ30pO1xuICAgIGlmIChxdWVzdGlvbk9iai5hbnN3ZXJUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIGlucHV0U2V0LmFwcGVuZChnZXRSYWRpb1NldChxdWVzdGlvbk9iaikpO1xuICAgIH1cbiAgICBpZiAocXVlc3Rpb25PYmouYW5zd2VyVHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgaW5wdXRTZXQuYXBwZW5kKGdldFNlbGVjdFNldChxdWVzdGlvbk9iaikpO1xuICAgIH1cbiAgICBjb25zdCBwcmV2QnV0dG9uID0gcmVuZGVyUHJldkJ1dHRvbihjdXJyZW50U3RlcCk7XG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IHJlbmRlck5leHRCdXR0b24oY3VycmVudFN0ZXAsIHF1ZXN0aW9uT2JqKTtcbiAgICBjb25zdCBidXR0b25zID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnYnV0dG9ucyd9KTtcbiAgICBidXR0b25zLmFwcGVuZChwcmV2QnV0dG9uLCBuZXh0QnV0dG9uKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQodGl0bGVDb3VudGVyQ29udGFpbmVyLCBpbnB1dFNldCwgYnV0dG9ucyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuXG5jb25zdCByZW5kZXJQcmV2QnV0dG9uID0gKHN0ZXApID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzOiAnYnV0dG9uJywgaWQ6ICdwcmV2JyB9LCAn0J3QsNC30LDQtCcpO1xuXG4gICAgY29uc3QgYXJyb3dQcmV2ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge30sICc8Jyk7XG4gICAgYnV0dG9uLmFwcGVuZChhcnJvd1ByZXYpO1xuICAgIGlmIChzdGVwIDw9IDEpIHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gICAgICAgIGRvUHJldlN0ZXAoZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuY29uc3QgcmVuZGVyTmV4dEJ1dHRvbiA9IChzdGVwLCBxdWVzdGlvbk9iaikgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICdidXR0b24nLCBpZDogJ25leHQnIH0sICfQktC/0LXRgNGR0LQnKTtcbiAgICBjb25zdCBhcnJvd05leHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7fSwgJz4nKTtcbiAgICBidXR0b24uYXBwZW5kKGFycm93TmV4dCk7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gIWNoZWNrQ3VycmVudFF1ZXN0aW9uKHF1ZXN0aW9uT2JqLmlkKTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChxdWVzdGlvbk9iai5hbnN3ZXJUeXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgaGFuZGxlU2VsZWN0QW5zd2VycyhxdWVzdGlvbk9iaik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXN0aW9uT2JqLmFuc3dlclR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICAgICAgICAgICAgZG9OZXh0U3RlcChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja0N1cnJlbnRRdWVzdGlvbiA9IChpZCkgPT4ge1xuICAgIGxldCBtYXBGcm9tTFMgPSBnZXRNYXBGcm9tTFMoJ3Jlc3BvbnNlcycpO1xuICAgIHJldHVybiAhIW1hcEZyb21MUy5nZXQoaWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRRdWVzdGlvbkVsZW07IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL2hlbHBlcnMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHtnZXRNYXBGcm9tTFN9IGZyb20gXCIuLi9oZWxwZXJzL2dldE1hcEZyb21MU1wiO1xuaW1wb3J0IHtkb05leHRTdGVwfSBmcm9tIFwiLi9mb3JtL2Z1bmN0aW9ucy9kb1N0ZXBcIjtcblxuY29uc3QgZ2V0UmFkaW9TZXQgPSAocXVlc3Rpb25PYmopID0+IHtcbiAgICBsZXQgY2hlY2tlZEl0ZW07XG4gICAgbGV0IG1hcEZyb21MUyA9IGdldE1hcEZyb21MUygncmVzcG9uc2VzJyk7XG4gICAgaWYgKG1hcEZyb21MUy5nZXQocXVlc3Rpb25PYmouaWQpKSB7XG4gICAgICAgIGNoZWNrZWRJdGVtID0gbWFwRnJvbUxTLmdldChxdWVzdGlvbk9iai5pZCkudmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSBjcmVhdGVFbGVtZW50KCdmaWVsZHNldCcsIHtjbGFzczogJ2ZpZWxkc2V0J30pO1xuXG4gICAgcXVlc3Rpb25PYmoudmFyaWFudHMuZm9yRWFjaChlbGVtID0+IHtcblxuICAgICAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge2NsYXNzOiAnZmllbGRzZXRfX2xhYmVsJywgZm9yOiBlbGVtfSwgZWxlbSk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2ZpZWxkc2V0X19pbnB1dCcsXG4gICAgICAgICAgICBpZDogZWxlbSxcbiAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICB2YWx1ZTogZWxlbSxcbiAgICAgICAgICAgIG5hbWU6ICd2YXJpYW50JyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGVsZW0gPT09IGNoZWNrZWRJdGVtKSB7XG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtxdWVzdGlvbjogcXVlc3Rpb25PYmoucXVlc3Rpb24sIHZhbHVlOiBpbnB1dC52YWx1ZSwgaWQ6IHF1ZXN0aW9uT2JqLmlkfTtcbiAgICAgICAgICAgIGxldCBtYXBGcm9tTFMgPSBnZXRNYXBGcm9tTFMoJ3Jlc3BvbnNlcycpO1xuICAgICAgICAgICAgbWFwRnJvbUxTLnNldChxdWVzdGlvbk9iai5pZCwgZGF0YSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVzcG9uc2VzJywgSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShtYXBGcm9tTFMuZW50cmllcygpKSkpO1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25OZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcbiAgICAgICAgICAgIGJ1dHRvbk5leHQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGRvTmV4dFN0ZXAoY3VycmVudFF1ZXN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNoZWNrbWFyayA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7Y2xhc3M6ICdmaWVsZHNldF9fY2hlY2ttYXJrJ30pO1xuICAgICAgICBsYWJlbC5hcHBlbmQoaW5wdXQsIGNoZWNrbWFyayk7XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZChsYWJlbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpZWxkc2V0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldFJhZGlvU2V0OyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9oZWxwZXJzL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7Z2V0TWFwRnJvbUxTfSBmcm9tIFwiLi4vaGVscGVycy9nZXRNYXBGcm9tTFNcIjtcbmltcG9ydCB7ZG9OZXh0U3RlcH0gZnJvbSBcIi4vZm9ybS9mdW5jdGlvbnMvZG9TdGVwXCI7XG5cbmNvbnN0IGdldFNlbGVjdFNldCA9IChxdWVzdGlvbk9iaikgPT4ge1xuICAgIGxldCBtYXBGcm9tTFMgPSBnZXRNYXBGcm9tTFMoJ3Jlc3BvbnNlcycpO1xuICAgIGxldCBzZXRPZlNlbGVjdGVkID0gbmV3IFNldCgpO1xuXG4gICAgaWYgKG1hcEZyb21MUy5nZXQocXVlc3Rpb25PYmouaWQpKSB7XG4gICAgICAgIHNldE9mU2VsZWN0ZWQgPSBuZXcgU2V0KG1hcEZyb21MUy5nZXQocXVlc3Rpb25PYmouaWQpLnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3QgPSBjcmVhdGVFbGVtZW50KCdzZWxlY3QnLCB7bXVsdGlwbGU6ICcnLCBuYW1lOiAnb3B0aW9ucycsIGlkOiAnb3B0aW9ucycsIGNsYXNzOiAnc2VsZWN0J30pO1xuXG4gICAgcXVlc3Rpb25PYmoudmFyaWFudHMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgY2xhc3M6ICdmaWVsZHNldF9fb3B0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBlbGVtLFxuICAgICAgICAgICAgbmFtZTogJ3ZhcmlhbnQnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6ICcnXG4gICAgICAgIH0sIGVsZW0pO1xuXG4gICAgICAgIGlmIChzZXRPZlNlbGVjdGVkICYmIHNldE9mU2VsZWN0ZWQuaGFzKGVsZW0pKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0Jyk7XG4gICAgICAgICAgICBidXR0b25OZXh0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdDtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVTZWxlY3RBbnN3ZXJzID0gKHF1ZXN0aW9uT2JqKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gW107XG4gICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7cXVlc3Rpb246IHF1ZXN0aW9uT2JqLnF1ZXN0aW9uLCB2YWx1ZTogc2VsZWN0ZWQsIGlkOiBxdWVzdGlvbk9iai5pZH07XG4gICAgICAgIGxldCBtYXBGcm9tTFMgPSBnZXRNYXBGcm9tTFMoJ3Jlc3BvbnNlcycpO1xuICAgICAgICBtYXBGcm9tTFMuc2V0KHF1ZXN0aW9uT2JqLmlkLCBkYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Jlc3BvbnNlcycsIEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20obWFwRnJvbUxTLmVudHJpZXMoKSkpKTtcblxuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICAgICAgZG9OZXh0U3RlcChmb3JtQ29udGFpbmVyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbk5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV4dCcpO1xuICAgICAgICBidXR0b25OZXh0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBnZXRTZWxlY3RTZXQ7IiwiY29uc3QgY2xlYXJFbGVtZW50ID0gKHBhcmVudEVsZW1lbnQpID0+IHtcbiAgd2hpbGUgKHBhcmVudEVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgY2xlYXJFbGVtZW50O1xuIiwiY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWdOYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0Q29udGVudCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSBlbC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE1hcEZyb21MUyhuYW1lKSB7XG4gICAgY29uc3QgbWFwSnNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgIC8vIGxldCBtYXAgPSBuZXcgTWFwKCk7XG4gICAgaWYgKG1hcEpzb24gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAoKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAoSlNPTi5wYXJzZShtYXBKc29uKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBwYXJzaW5nIEpTT04gZGF0YSBmb3IgJHtuYW1lfTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgfVxufSIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCByZW5kZXJGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vcmVuZGVyRm9ybVwiO1xuXG5jb25zdCBtYWluUGFnZSA9ICgpID0+IHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGVwJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0ZXAnLCAnMScpO1xuICAgIH1cbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnY29udGFpbmVyJyB9KTtcbiAgICBjb25zdCBhYm91dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdhYm91dCcgfSk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMScsIHsgY2xhc3M6ICdhYm91dF9fdGl0bGUnIH0sICfQn9C+0LTQsdC10YDQtdC8INCS0KPQlyDQvNC10YfRgtGLJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KCdwJywgeyBjbGFzczogJ2Fib3V0X19kZXNjcmlwdGlvbicgfSwgJ9Ce0YLQstC10YLRjNGC0LUnICtcbiAgICAgICAgJyDQvdCwIDgg0L/RgNC+0YHRgtGL0YUg0LLQvtC/0YDQvtGB0L7Qsiwg0Lgg0LzRiyDRgdC+0YHRgtCw0LLQuNC8INGB0L/QuNGB0L7QuiDQvdCw0LHQvtC70LXQtSDQv9C+0LTRhdC+0LTRj9GJ0LjRhSDQtNC70Y8g0LLQsNGBINCy0YPQt9C+0LInKTtcblxuICAgIGNvbnN0IGRlY29yQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Fib3V0X19kZWNvcicgfSk7XG4gICAgY29uc3QgZGVjb3JXb3JkMSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdhYm91dF9fZGVjb3Jfd29yZDEgYWJvdXRfX2RlY29yX3dvcmQnIH0sICfQkdC10YHQv9C70LDRgtC90L4nKTtcbiAgICBjb25zdCBkZWNvcldvcmQyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Fib3V0X19kZWNvcl93b3JkMiBhYm91dF9fZGVjb3Jfd29yZCcgfSwgJ9C30LAgMzAg0YHQtdC60YPQvdC0Jyk7XG4gICAgY29uc3QgZGVjb3JDaXJjbGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnYWJvdXRfX2RlY29yX2NpcmNsZScgfSk7XG4gICAgY29uc3QgZGVjb3JMaW5lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Fib3V0X19kZWNvcl9saW5lJyB9KTtcbiAgICBjb25zdCBkZWNvckxpZ2h0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Fib3V0X19kZWNvcl9saWdodCcgfSk7XG4gICAgY29uc3QgZGVjb3JCb3R0b20gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnYWJvdXRfX2RlY29yX2JvdHRvbScgfSk7XG4gICAgZGVjb3JDb250YWluZXIuYXBwZW5kKGRlY29yV29yZDEsIGRlY29yV29yZDIsIGRlY29yQ2lyY2xlLCBkZWNvckxpbmUsIGRlY29yTGlnaHQsIGRlY29yQm90dG9tKTtcbiAgICBhYm91dC5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uLCBkZWNvckNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGFib3V0LCByZW5kZXJGb3JtKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5leHBvcnQgZGVmYXVsdCBtYWluUGFnZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBtYWluUGFnZSBmcm9tIFwiLi9wYWdlcy9tYWluL21haW5QYWdlXCI7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuYm9keS5hcHBlbmQobWFpblBhZ2UoKSk7Il0sIm5hbWVzIjpbInF1ZXN0aW9uc0RhdGEiLCJxdWVzdGlvbiIsImFuc3dlclR5cGUiLCJ2YXJpYW50cyIsImlkIiwiY2xlYXJFbGVtZW50IiwiZ2V0UXVlc3Rpb25FbGVtIiwiZ2V0Q29udGFjdEZvcm0iLCJkb05leHRTdGVwIiwicXVlc3Rpb25FbGVtZW50IiwiY3VycmVudFN0ZXAiLCJOdW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RlcHNDb3VudCIsImxlbmd0aCIsInNldEl0ZW0iLCJjb25jYXQiLCJuZXh0UXVlc3Rpb24iLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmQiLCJkb1ByZXZTdGVwIiwicHJldlF1ZXN0aW9uIiwiYnV0dG9uUHJldiIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsInJlbmRlckZvcm0iLCJxdWVzdGlvbnMiLCJmb3JtIiwiZ2V0TWFwRnJvbUxTIiwibWVzc2FnZSIsInRpdGxlQ291bnRlckNvbnRhaW5lciIsInRpdGxlIiwiY291bnRlciIsImZpZWxkc2V0IiwibmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwibnVtYmVyIiwicGF0dGVybiIsImVtYWlsIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhbnN3ZXJzIiwiZ2V0QW5zd2Vyc01hcCIsInJlY29yZEFuc3dlcnNUb0xTIiwic2hvd01lc3NhZ2UiLCJnZXQiLCJyZXNldEZvcm0iLCJhbnN3ZXJzTWFwIiwiTWFwIiwiaW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwidmFsdWUiLCJzZXQiLCJtYXBBc1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJlbnRyaWVzIiwiZGF0YSIsIm1hcEZyb21MUyIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnQiLCJpbm5lclRleHQiLCJzdHlsZSIsImRpc3BsYXkiLCJnZXRSYWRpb1NldCIsImdldFNlbGVjdFNldCIsImhhbmRsZVNlbGVjdEFuc3dlcnMiLCJxdWVzdGlvbk9iaiIsImlucHV0U2V0IiwicHJldkJ1dHRvbiIsInJlbmRlclByZXZCdXR0b24iLCJuZXh0QnV0dG9uIiwicmVuZGVyTmV4dEJ1dHRvbiIsImJ1dHRvbnMiLCJzdGVwIiwiYXJyb3dQcmV2IiwiZm9ybUNvbnRhaW5lciIsImFycm93TmV4dCIsImNoZWNrQ3VycmVudFF1ZXN0aW9uIiwiY2hlY2tlZEl0ZW0iLCJlbGVtIiwibGFiZWwiLCJpbnB1dCIsImNoZWNrZWQiLCJjdXJyZW50UXVlc3Rpb24iLCJidXR0b25OZXh0IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja21hcmsiLCJzZXRPZlNlbGVjdGVkIiwiU2V0Iiwic2VsZWN0IiwibXVsdGlwbGUiLCJvcHRpb24iLCJoYXMiLCJzZWxlY3RlZCIsIm9wdGlvbnMiLCJwdXNoIiwicGFyZW50RWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImZpcnN0Q2hpbGQiLCJ0YWdOYW1lIiwiYXR0cmlidXRlcyIsInRleHRDb250ZW50IiwiZWwiLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJtYXBKc29uIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImVycm9yIiwibWFpblBhZ2UiLCJhYm91dCIsImRlc2NyaXB0aW9uIiwiZGVjb3JDb250YWluZXIiLCJkZWNvcldvcmQxIiwiZGVjb3JXb3JkMiIsImRlY29yQ2lyY2xlIiwiZGVjb3JMaW5lIiwiZGVjb3JMaWdodCIsImRlY29yQm90dG9tIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=