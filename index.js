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
var initiatorMap = new Map([['YOURSELF', 'Себе'], ['SPOUSE', 'Супругу/супруге'], ['RELATIVE', 'Родственнику'], ['COLLEAGUE', 'Коллеге'], ['CHILD', 'Ребенку'], ['OTHER', 'Другое']]);
var citiesMap = new Map([['Санкт-Петербург', 'Санкт-Петербург'], ['Москва', 'Москва'], ['Нижний Новгород', 'Нижний Новгород'], ['Ростов-на-Дону', 'Ростов-на-Дону']]);
var currentEducationMap = new Map([['GRADE_9', '9 классов'], ['GRADE_11', '11 классов'], ['TECHNICAL_SCHOOL', 'Училище'], ['TECHNICAL_COLLEGE', 'Колледж/техникум'], ['UNCOMPLETED_UNIVERSITY', 'Неоконченное высшее'], ['UNIVERSITY', 'Высшее']]);
var educationTargetTypeMap = new Map([['UNIVERSITY', 'Вуз'], ['TECHNICAL_COLLEGE', 'Колледж/техникум'], ['TECHNICAL_SCHOOL', 'Училище']]);
var learningFormMap = new Map([['FULL_TIME', 'Очную'], ['EXTRAMURAL', 'Заочную'], ['DISTANCE', 'Дистанционную']]);
var paidEducationAllowedTypeMap = new Map([['BUDGET_ONLY', 'Нет, только бюджет'], ['PAID_EDUCATION', 'Да, планирую учиться платно'], ['ANY', 'Возможны оба варианта']]);
var howManyToAdmissionMap = new Map([['ASAP', 'Как можно быстрее'], ['MONTH', 'Месяц'], ['QUARTER', 'Квартал'], ['SIX_MONTHS', 'Полгода'], ['YEAR', 'Год']]);
var educationSpecialityTypeMap = new Map([['ECONOMICS', 'Экономика'], ['PHILOSOPHY', 'Философия'], ['SOCIOLOGY', 'Социология'], ['LAW', 'Юриспруденция']]);
var questionsData = [{
  question: 'Для кого вы ищете учебное заведение?',
  name: 'initiator',
  answerType: 'radio',
  variants: initiatorMap,
  id: 1
}, {
  question: 'В каком городе планируете поступать?',
  name: 'cities',
  answerType: 'select',
  variants: citiesMap,
  id: 2
}, {
  question: 'Какое образование уже есть?',
  name: 'currentEducation',
  answerType: 'radio',
  variants: currentEducationMap,
  id: 3
}, {
  question: 'Куда планируете поступать?',
  name: 'educationTargetType',
  answerType: 'radio',
  variants: educationTargetTypeMap,
  id: 4
}, {
  question: 'Какую форму обучения предпочитаете?',
  name: 'learningForm',
  answerType: 'radio',
  variants: learningFormMap,
  id: 5
}, {
  question: 'Рассматриваете платное обучение?',
  name: 'paidEducationAllowedType',
  answerType: 'radio',
  variants: paidEducationAllowedTypeMap,
  id: 6
}, {
  question: 'Какая специальность интересует?',
  name: 'educationSpecialityType',
  answerType: 'select',
  variants: educationSpecialityTypeMap,
  id: 7
}, {
  question: 'Как скоро планируете поступать?',
  name: 'howManyToAdmission',
  answerType: 'radio',
  variants: howManyToAdmissionMap,
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
  var stepsCount = _base_questions_data__WEBPACK_IMPORTED_MODULE_0__.questionsData.length + 1;
  if (currentStep === stepsCount - 1) {
    localStorage.setItem('step', "".concat(currentStep + 1));
    var nextQuestion = (0,_getContactForm__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "resetForm": () => (/* binding */ resetForm)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createElement */ "./src/helpers/createElement.js");
/* harmony import */ var _base_questions_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/questions-data */ "./src/base/questions-data.js");
/* harmony import */ var _helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/getMapFromLS */ "./src/helpers/getMapFromLS.js");
/* harmony import */ var _helpers_clearElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/clearElement */ "./src/helpers/clearElement.js");
/* harmony import */ var _getQuestionElem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getQuestionElem */ "./src/components/getQuestionElem.js");
/* harmony import */ var _pages_results_functions_fetchData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/results/functions/fetchData */ "./src/pages/results/functions/fetchData.js");
/* harmony import */ var _preloader_getPreloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preloader/getPreloader */ "./src/components/preloader/getPreloader.js");







var getContactForm = function getContactForm() {
  var currentStep = Number(localStorage.getItem('step'));
  var container = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'form__container'
  });
  var titleCounterContainer = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'form__title-counter-container'
  });
  var title = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', {
    "class": 'form__title'
  }, 'Ваша подборка готова! 🥳 Куда нам отправить её?');
  var counter = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'form__counter'
  }, "\u0428\u0430\u0433 ".concat(currentStep, "/").concat(_base_questions_data__WEBPACK_IMPORTED_MODULE_1__.questionsData.length + 1));
  titleCounterContainer.append(title, counter);
  var fieldset = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('fieldset', {
    "class": 'fieldset'
  });
  var name = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
    name: 'name',
    type: 'text',
    placeholder: 'Как вас зовут?',
    "class": 'fieldset__input-text',
    id: 'name',
    required: ''
  });
  var number = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
    name: 'phone',
    type: 'text',
    placeholder: 'Номер телефона',
    pattern: '^\\+?\\d{0,20}(\\(\\d{1,20}\\))?$',
    "class": 'fieldset__input-text',
    id: 'number',
    required: ''
  });
  var email = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
    name: 'email',
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
    var values = [name.value, number.value, email.value];
    var allInputsFilled = values.every(function (value) {
      return value.length > 0;
    });
    if (allInputsFilled) {
      event.preventDefault();
      recordAnswersToLS();
      showLoader();
      setTimeout(_pages_results_functions_fetchData__WEBPACK_IMPORTED_MODULE_5__["default"], 1000);
    }
  });
  container.append(titleCounterContainer, fieldset, button);
  return container;
};
var showLoader = function showLoader() {
  var body = document.querySelector('body');
  (0,_helpers_clearElement__WEBPACK_IMPORTED_MODULE_3__["default"])(body);
  body.append((0,_preloader_getPreloader__WEBPACK_IMPORTED_MODULE_6__["default"])());
};
var recordAnswersToLS = function recordAnswersToLS() {
  var inputs = document.querySelectorAll('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value) {
      var data = {
        question: inputs[i].name,
        value: inputs[i].value,
        id: _base_questions_data__WEBPACK_IMPORTED_MODULE_1__.questionsData.length + i
      };
      var mapFromLS = (0,_helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_2__.getMapFromLS)('responses');
      mapFromLS.set(_base_questions_data__WEBPACK_IMPORTED_MODULE_1__.questionsData.length + i + 1, data);
      localStorage.setItem('responses', JSON.stringify(Array.from(mapFromLS.entries())));
    }
  }
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
  }, "\u0428\u0430\u0433 ".concat(currentStep, "/").concat(_base_questions_data__WEBPACK_IMPORTED_MODULE_1__.questionsData.length + 1));
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
  var variants = Array.from(questionObj.variants.keys());
  variants.forEach(function (elem) {
    var label = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
      "class": 'fieldset__label',
      "for": elem
    }, questionObj.variants.get(elem));
    var input = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
      "class": 'fieldset__input',
      id: elem,
      type: 'radio',
      value: questionObj.variants.get(elem),
      name: 'variant',
      required: ''
    });
    if (elem === checkedItem) {
      input.checked = true;
    }
    input.addEventListener('click', function () {
      var currentQuestion = document.querySelector('.form');
      var data = {
        question: questionObj.name,
        value: input.id,
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
  var variants = Array.from(questionObj.variants.keys());
  variants.forEach(function (elem) {
    //console.log(questionObj.variants.get());
    var option = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
      id: questionObj.id,
      "class": 'fieldset__option',
      value: elem,
      name: 'variant',
      required: ''
    }, questionObj.variants.get(elem));
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
      question: questionObj.name,
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

/***/ "./src/components/preloader/getPreloader.js":
/*!**************************************************!*\
  !*** ./src/components/preloader/getPreloader.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getPreloader = function getPreloader() {
  var loader = document.createElement('div');
  loader.innerHTML = '<div class="loadingio-spinner-spin-ltb68itliwl">' + '        <div class="ldio-9ixgeoaxec">' + '            <div>' + '                <div></div>' + '            </div>' + '            <div>' + '                <div></div>' + '            </div>' + '            <div>' + '                <div></div>' + '            </div>' + '            <div>' + '                <div></div>' + '            </div>' + '            <div>' + '                <div></div>' + '            </div>' + '            <div>' + '                <div></div>' + '            </div>' + '            <div>' + '                <div></div>' + '            </div>' + '            <div>' + '                <div></div>' + '            </div>' + '        </div>\n' + '    </div>';
  return loader;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPreloader);

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

/***/ "./src/pages/results/functions/fetchData.js":
/*!**************************************************!*\
  !*** ./src/pages/results/functions/fetchData.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getRequestBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRequestBody */ "./src/pages/results/functions/getRequestBody.js");
/* harmony import */ var _helpers_clearElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/clearElement */ "./src/helpers/clearElement.js");
/* harmony import */ var _resultsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resultsPage */ "./src/pages/results/resultsPage.js");
/* harmony import */ var _components_getContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/getContactForm */ "./src/components/getContactForm.js");




var fetchData = function fetchData() {
  var headers = new Headers();
  headers.append('accept', '*/*');
  headers.append('Content-Type', 'application/json');
  var requestBody = (0,_getRequestBody__WEBPACK_IMPORTED_MODULE_0__["default"])();
  fetch('https://gothic-calling-389914.uc.r.appspot.com/surveys', {
    //https://gothic-calling-389914.uc.r.appspot.com/swagger-ui/index.html
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: headers
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    var body = document.querySelector('body');
    (0,_helpers_clearElement__WEBPACK_IMPORTED_MODULE_1__["default"])(body);
    body.append((0,_resultsPage__WEBPACK_IMPORTED_MODULE_2__["default"])(data));
    (0,_components_getContactForm__WEBPACK_IMPORTED_MODULE_3__.resetForm)();
  })["catch"](function (error) {
    console.log(error + 'it`s error!');
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);

/***/ }),

/***/ "./src/pages/results/functions/getRequestBody.js":
/*!*******************************************************!*\
  !*** ./src/pages/results/functions/getRequestBody.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/getMapFromLS */ "./src/helpers/getMapFromLS.js");

var getRequestBody = function getRequestBody() {
  var body = {
    "initiator": "",
    "cities": [],
    "currentEducation": "",
    "educationTargetType": "",
    "learningForm": "",
    "paidEducationAllowedType": "",
    "educationSpecialityType": [],
    "howManyToAdmission": "",
    "name": "",
    "phone": "",
    "email": ""
  };
  var mapFromLS = (0,_helpers_getMapFromLS__WEBPACK_IMPORTED_MODULE_0__.getMapFromLS)('responses');
  var answers = Array.from(mapFromLS.values());
  answers.forEach(function (answer) {
    if (Object.prototype.hasOwnProperty.call(body, answer.question)) {
      body[answer.question] = answer.value;
    }
  });
  return body;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRequestBody);

/***/ }),

/***/ "./src/pages/results/getResultElement.js":
/*!***********************************************!*\
  !*** ./src/pages/results/getResultElement.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ "./src/helpers/createElement.js");

var getResultElement = function getResultElement(data) {
  var container = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'institute'
  });
  var title = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', {
    "class": 'institute-title'
  }, data.title);
  var type = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {}, data.institutionType);
  var city = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {}, data.address);
  var specialities = data.specialities;
  var specialityContainer = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {});
  specialities.forEach(function (speciality) {
    var elem = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
      "class": 'institute-speciality'
    }, speciality);
    specialityContainer.append(elem);
  });
  var button = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
    "class": 'button results-button'
  });
  var site = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('a', {
    "class": 'results-button_link'
  }, "Подробнее...");
  var link = data.site;
  link ? site.href = link : site.href = '#';
  button.append(site);
  container.append(title, type, city, specialityContainer, button);
  return container;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getResultElement);

/***/ }),

/***/ "./src/pages/results/resultsPage.js":
/*!******************************************!*\
  !*** ./src/pages/results/resultsPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ "./src/helpers/createElement.js");
/* harmony import */ var _getResultElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getResultElement */ "./src/pages/results/getResultElement.js");
/* harmony import */ var _helpers_clearElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/clearElement */ "./src/helpers/clearElement.js");
/* harmony import */ var _main_mainPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/mainPage */ "./src/pages/main/mainPage.js");




var resultsPage = function resultsPage(data) {
  var container = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'container-results'
  });
  var button = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
    "class": 'button'
  }, "Пройти тест заново");
  button.addEventListener('click', function () {
    var body = document.querySelector('body');
    (0,_helpers_clearElement__WEBPACK_IMPORTED_MODULE_2__["default"])(body);
    body.append((0,_main_mainPage__WEBPACK_IMPORTED_MODULE_3__["default"])());
  });
  container.append(button);
  var resultsContainer = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'institutes'
  });
  data.institutions.forEach(function (obj) {
    var item = (0,_getResultElement__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    resultsContainer.append(item);
  });
  container.append(resultsContainer);
  return container;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resultsPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUcsWUFBWSxDQUFDMUUsT0FBTyxDQUFDLFVBQUEyRSxHQUFHLEVBQUk7SUFDN0IsSUFBTUMsSUFBSSxHQUFHYiw2REFBZ0IsQ0FBQ1ksR0FBRyxDQUFDO0lBQ2xDRixnQkFBZ0IsQ0FBQ3pJLE1BQU0sQ0FBQzRJLElBQUksQ0FBQztFQUNqQyxDQUFDLENBQUM7RUFDRi9JLFNBQVMsQ0FBQ0csTUFBTSxDQUFDeUksZ0JBQWdCLENBQUM7RUFDbEMsT0FBTzVJLFNBQVM7QUFDcEIsQ0FBQztBQUVELGlFQUFla0gsV0FBVzs7Ozs7Ozs7Ozs7QUN4QjFCOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDdUI7QUFDN0MsSUFBTTlFLElBQUksR0FBR25DLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUMzQ2tDLElBQUksQ0FBQ2pDLE1BQU0sQ0FBQ29HLGdFQUFRLEVBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9iYXNlL3F1ZXN0aW9ucy1kYXRhLmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvY29tcG9uZW50cy9mb3JtL2Z1bmN0aW9ucy9kb1N0ZXAuanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9jb21wb25lbnRzL2Zvcm0vcmVuZGVyRm9ybS5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2NvbXBvbmVudHMvZ2V0Q29udGFjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9jb21wb25lbnRzL2dldFF1ZXN0aW9uRWxlbS5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2NvbXBvbmVudHMvZ2V0UmFkaW9TZXQuanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9jb21wb25lbnRzL2dldFNlbGVjdFNldC5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2NvbXBvbmVudHMvcHJlbG9hZGVyL2dldFByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2hlbHBlcnMvY2xlYXJFbGVtZW50LmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvaGVscGVycy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvaGVscGVycy9nZXRNYXBGcm9tTFMuanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9wYWdlcy9tYWluL21haW5QYWdlLmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvcGFnZXMvcmVzdWx0cy9mdW5jdGlvbnMvZmV0Y2hEYXRhLmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvcGFnZXMvcmVzdWx0cy9mdW5jdGlvbnMvZ2V0UmVxdWVzdEJvZHkuanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9wYWdlcy9yZXN1bHRzL2dldFJlc3VsdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9wYWdlcy9yZXN1bHRzL3Jlc3VsdHNQYWdlLmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvc3R5bGUuc2Nzcz9iYzNiIiwid2VicGFjazovL3F1aXovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcXVpei93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcXVpei93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3F1aXovd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYXRvck1hcCA9IG5ldyBNYXAoW1snWU9VUlNFTEYnLCAn0KHQtdCx0LUnXSwgWydTUE9VU0UnLCAn0KHRg9C/0YDRg9Cz0YMv0YHRg9C/0YDRg9Cz0LUnXSwgWydSRUxBVElWRScsICfQoNC+0LTRgdGC0LLQtdC90L3QuNC60YMnXSwgWydDT0xMRUFHVUUnLCAn0JrQvtC70LvQtdCz0LUnXSwgWydDSElMRCcsICfQoNC10LHQtdC90LrRgyddLCBbJ09USEVSJywgJ9CU0YDRg9Cz0L7QtSddXSk7XG5jb25zdCBjaXRpZXNNYXAgPSBuZXcgTWFwKFtbJ9Ch0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzJywgJ9Ch0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzJ10sIFsn0JzQvtGB0LrQstCwJywgJ9Cc0L7RgdC60LLQsCddLCBbJ9Cd0LjQttC90LjQuSDQndC+0LLQs9C+0YDQvtC0JywgJ9Cd0LjQttC90LjQuSDQndC+0LLQs9C+0YDQvtC0J10sIFsn0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YMnLCAn0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YMnXV0pO1xuY29uc3QgY3VycmVudEVkdWNhdGlvbk1hcCA9IG5ldyBNYXAoW1snR1JBREVfOScsICc5INC60LvQsNGB0YHQvtCyJ10sIFsnR1JBREVfMTEnLCAnMTEg0LrQu9Cw0YHRgdC+0LInXSwgWydURUNITklDQUxfU0NIT09MJywgJ9Cj0YfQuNC70LjRidC1J10sIFsnVEVDSE5JQ0FMX0NPTExFR0UnLCAn0JrQvtC70LvQtdC00LYv0YLQtdGF0L3QuNC60YPQvCddLCBbJ1VOQ09NUExFVEVEX1VOSVZFUlNJVFknLCAn0J3QtdC+0LrQvtC90YfQtdC90L3QvtC1INCy0YvRgdGI0LXQtSddLCBbJ1VOSVZFUlNJVFknLCAn0JLRi9GB0YjQtdC1J11dKTtcbmNvbnN0IGVkdWNhdGlvblRhcmdldFR5cGVNYXAgPSBuZXcgTWFwKFtbJ1VOSVZFUlNJVFknLCAn0JLRg9C3J10sIFsnVEVDSE5JQ0FMX0NPTExFR0UnLCAn0JrQvtC70LvQtdC00LYv0YLQtdGF0L3QuNC60YPQvCddLCBbJ1RFQ0hOSUNBTF9TQ0hPT0wnLCAn0KPRh9C40LvQuNGJ0LUnXV0pO1xuY29uc3QgbGVhcm5pbmdGb3JtTWFwID0gbmV3IE1hcChbWydGVUxMX1RJTUUnLCAn0J7Rh9C90YPRjiddLCBbJ0VYVFJBTVVSQUwnLCAn0JfQsNC+0YfQvdGD0Y4nXSwgWydESVNUQU5DRScsICfQlNC40YHRgtCw0L3RhtC40L7QvdC90YPRjiddXSk7XG5jb25zdCBwYWlkRWR1Y2F0aW9uQWxsb3dlZFR5cGVNYXAgPSBuZXcgTWFwKFtbJ0JVREdFVF9PTkxZJywgJ9Cd0LXRgiwg0YLQvtC70YzQutC+INCx0Y7QtNC20LXRgiddLCBbJ1BBSURfRURVQ0FUSU9OJywgJ9CU0LAsINC/0LvQsNC90LjRgNGD0Y4g0YPRh9C40YLRjNGB0Y8g0L/Qu9Cw0YLQvdC+J10sIFsnQU5ZJywgJ9CS0L7Qt9C80L7QttC90Ysg0L7QsdCwINCy0LDRgNC40LDQvdGC0LAnXV0pO1xuY29uc3QgaG93TWFueVRvQWRtaXNzaW9uTWFwID0gbmV3IE1hcChbWydBU0FQJywgJ9Ca0LDQuiDQvNC+0LbQvdC+INCx0YvRgdGC0YDQtdC1J10sIFsnTU9OVEgnLCAn0JzQtdGB0Y/RhiddLCBbJ1FVQVJURVInLCAn0JrQstCw0YDRgtCw0LsnXSwgWydTSVhfTU9OVEhTJywgJ9Cf0L7Qu9Cz0L7QtNCwJ10sIFsnWUVBUicsICfQk9C+0LQnXV0pO1xuY29uc3QgZWR1Y2F0aW9uU3BlY2lhbGl0eVR5cGVNYXAgPSBuZXcgTWFwKFtbJ0VDT05PTUlDUycsICfQrdC60L7QvdC+0LzQuNC60LAnXSwgWydQSElMT1NPUEhZJywgJ9Ck0LjQu9C+0YHQvtGE0LjRjyddLCBbJ1NPQ0lPTE9HWScsICfQodC+0YbQuNC+0LvQvtCz0LjRjyddLCBbJ0xBVycsICfQrtGA0LjRgdC/0YDRg9C00LXQvdGG0LjRjyddXSk7XG5leHBvcnQgY29uc3QgcXVlc3Rpb25zRGF0YSA9IFtcbiAgICB7XG4gICAgICAgIHF1ZXN0aW9uOiAn0JTQu9GPINC60L7Qs9C+INCy0Ysg0LjRidC10YLQtSDRg9GH0LXQsdC90L7QtSDQt9Cw0LLQtdC00LXQvdC40LU/JyxcbiAgICAgICAgbmFtZTogJ2luaXRpYXRvcicsXG4gICAgICAgIGFuc3dlclR5cGU6ICdyYWRpbycsXG4gICAgICAgIHZhcmlhbnRzOiBpbml0aWF0b3JNYXAsXG4gICAgICAgIGlkOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ9CSINC60LDQutC+0Lwg0LPQvtGA0L7QtNC1INC/0LvQsNC90LjRgNGD0LXRgtC1INC/0L7RgdGC0YPQv9Cw0YLRjD8nLFxuICAgICAgICBuYW1lOiAnY2l0aWVzJyxcbiAgICAgICAgYW5zd2VyVHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIHZhcmlhbnRzOiBjaXRpZXNNYXAsXG4gICAgICAgIGlkOiAyLFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ9Ca0LDQutC+0LUg0L7QsdGA0LDQt9C+0LLQsNC90LjQtSDRg9C20LUg0LXRgdGC0Yw/JyxcbiAgICAgICAgbmFtZTogJ2N1cnJlbnRFZHVjYXRpb24nLFxuICAgICAgICBhbnN3ZXJUeXBlOiAncmFkaW8nLFxuICAgICAgICB2YXJpYW50czogY3VycmVudEVkdWNhdGlvbk1hcCxcbiAgICAgICAgaWQ6IDMsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHF1ZXN0aW9uOiAn0JrRg9C00LAg0L/Qu9Cw0L3QuNGA0YPQtdGC0LUg0L/QvtGB0YLRg9C/0LDRgtGMPycsXG4gICAgICAgIG5hbWU6ICdlZHVjYXRpb25UYXJnZXRUeXBlJyxcbiAgICAgICAgYW5zd2VyVHlwZTogJ3JhZGlvJyxcbiAgICAgICAgdmFyaWFudHM6IGVkdWNhdGlvblRhcmdldFR5cGVNYXAsXG4gICAgICAgIGlkOiA0LFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ9Ca0LDQutGD0Y4g0YTQvtGA0LzRgyDQvtCx0YPRh9C10L3QuNGPINC/0YDQtdC00L/QvtGH0LjRgtCw0LXRgtC1PycsXG4gICAgICAgIG5hbWU6ICdsZWFybmluZ0Zvcm0nLFxuICAgICAgICBhbnN3ZXJUeXBlOiAncmFkaW8nLFxuICAgICAgICB2YXJpYW50czogbGVhcm5pbmdGb3JtTWFwLFxuICAgICAgICBpZDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcXVlc3Rpb246ICfQoNCw0YHRgdC80LDRgtGA0LjQstCw0LXRgtC1INC/0LvQsNGC0L3QvtC1INC+0LHRg9GH0LXQvdC40LU/JyxcbiAgICAgICAgbmFtZTogJ3BhaWRFZHVjYXRpb25BbGxvd2VkVHlwZScsXG4gICAgICAgIGFuc3dlclR5cGU6ICdyYWRpbycsXG4gICAgICAgIHZhcmlhbnRzOiBwYWlkRWR1Y2F0aW9uQWxsb3dlZFR5cGVNYXAsXG4gICAgICAgIGlkOiA2LFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ9Ca0LDQutCw0Y8g0YHQv9C10YbQuNCw0LvRjNC90L7RgdGC0Ywg0LjQvdGC0LXRgNC10YHRg9C10YI/JyxcbiAgICAgICAgbmFtZTogJ2VkdWNhdGlvblNwZWNpYWxpdHlUeXBlJyxcbiAgICAgICAgYW5zd2VyVHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIHZhcmlhbnRzOiBlZHVjYXRpb25TcGVjaWFsaXR5VHlwZU1hcCxcbiAgICAgICAgaWQ6IDcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHF1ZXN0aW9uOiAn0JrQsNC6INGB0LrQvtGA0L4g0L/Qu9Cw0L3QuNGA0YPQtdGC0LUg0L/QvtGB0YLRg9C/0LDRgtGMPycsXG4gICAgICAgIG5hbWU6ICdob3dNYW55VG9BZG1pc3Npb24nLFxuICAgICAgICBhbnN3ZXJUeXBlOiAncmFkaW8nLFxuICAgICAgICB2YXJpYW50czogaG93TWFueVRvQWRtaXNzaW9uTWFwLFxuICAgICAgICBpZDogOCxcbiAgICB9LFxuXTsiLCJpbXBvcnQge3F1ZXN0aW9uc0RhdGF9IGZyb20gXCIuLi8uLi8uLi9iYXNlL3F1ZXN0aW9ucy1kYXRhXCI7XG5pbXBvcnQgY2xlYXJFbGVtZW50IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2NsZWFyRWxlbWVudFwiO1xuaW1wb3J0IGdldFF1ZXN0aW9uRWxlbSBmcm9tIFwiLi4vLi4vZ2V0UXVlc3Rpb25FbGVtXCI7XG5pbXBvcnQgZ2V0Q29udGFjdEZvcm0gZnJvbSBcIi4uLy4uL2dldENvbnRhY3RGb3JtXCI7XG5cbmV4cG9ydCBjb25zdCBkb05leHRTdGVwID0gKHF1ZXN0aW9uRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGVwJykpO1xuICAgIGNvbnN0IHN0ZXBzQ291bnQgPSBxdWVzdGlvbnNEYXRhLmxlbmd0aCsxO1xuXG4gICAgaWYgKGN1cnJlbnRTdGVwID09PSBzdGVwc0NvdW50LTEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0ZXAnLCBgJHsoY3VycmVudFN0ZXAgKyAxKX1gKTtcbiAgICAgICAgY29uc3QgbmV4dFF1ZXN0aW9uID0gZ2V0Q29udGFjdEZvcm0oKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICAgICAgY2xlYXJFbGVtZW50KGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobmV4dFF1ZXN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFN0ZXAgPCBzdGVwc0NvdW50LTEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0ZXAnLCBgJHsoY3VycmVudFN0ZXAgKyAxKX1gKTtcbiAgICAgICAgY29uc3QgbmV4dFF1ZXN0aW9uID0gZ2V0UXVlc3Rpb25FbGVtKHF1ZXN0aW9uc0RhdGFbY3VycmVudFN0ZXBdKTtcbiAgICAgICAgY2xlYXJFbGVtZW50KHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgICAgIHF1ZXN0aW9uRWxlbWVudC5hcHBlbmQobmV4dFF1ZXN0aW9uKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGRvUHJldlN0ZXAgPSAocXVlc3Rpb25FbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXAnKSk7XG4gICAgaWYgKGN1cnJlbnRTdGVwID49IDIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0ZXAnLCBgJHsoY3VycmVudFN0ZXAgLSAxKX1gKTtcbiAgICAgICAgY2xlYXJFbGVtZW50KHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHByZXZRdWVzdGlvbiA9IGdldFF1ZXN0aW9uRWxlbShxdWVzdGlvbnNEYXRhW2N1cnJlbnRTdGVwLTJdKTtcbiAgICAgICAgcXVlc3Rpb25FbGVtZW50LmFwcGVuZChwcmV2UXVlc3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvblByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldicpO1xuICAgICAgICBidXR0b25QcmV2LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGdldFF1ZXN0aW9uRWxlbSBmcm9tIFwiLi4vZ2V0UXVlc3Rpb25FbGVtXCI7XG5pbXBvcnQge3F1ZXN0aW9uc0RhdGF9IGZyb20gXCIuLi8uLi9iYXNlL3F1ZXN0aW9ucy1kYXRhXCI7XG5pbXBvcnQgZ2V0Q29udGFjdEZvcm0gZnJvbSBcIi4uL2dldENvbnRhY3RGb3JtXCI7XG5cblxuY29uc3QgcmVuZGVyRm9ybSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IHF1ZXN0aW9uc0RhdGE7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCB7IGNsYXNzOiAnZm9ybScgfSk7XG4gICAgbGV0IGN1cnJlbnRTdGVwID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXAnKTtcbiAgICBsZXQgcXVlc3Rpb25FbGVtZW50O1xuICAgIGlmIChjdXJyZW50U3RlcCA8IHF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgcXVlc3Rpb25FbGVtZW50ID0gZ2V0UXVlc3Rpb25FbGVtKHF1ZXN0aW9uc1tjdXJyZW50U3RlcC0xXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVlc3Rpb25FbGVtZW50ID0gZ2V0Q29udGFjdEZvcm0oKTtcbiAgICB9XG4gICAgZm9ybS5hcHBlbmQocXVlc3Rpb25FbGVtZW50KTtcbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRm9ybTsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vaGVscGVycy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQge3F1ZXN0aW9uc0RhdGF9IGZyb20gXCIuLi9iYXNlL3F1ZXN0aW9ucy1kYXRhXCI7XG5pbXBvcnQge2dldE1hcEZyb21MU30gZnJvbSBcIi4uL2hlbHBlcnMvZ2V0TWFwRnJvbUxTXCI7XG5pbXBvcnQgY2xlYXJFbGVtZW50IGZyb20gXCIuLi9oZWxwZXJzL2NsZWFyRWxlbWVudFwiO1xuaW1wb3J0IGdldFF1ZXN0aW9uRWxlbSBmcm9tIFwiLi9nZXRRdWVzdGlvbkVsZW1cIjtcbmltcG9ydCBmZXRjaERhdGEgZnJvbSBcIi4uL3BhZ2VzL3Jlc3VsdHMvZnVuY3Rpb25zL2ZldGNoRGF0YVwiO1xuaW1wb3J0IGdldFByZWxvYWRlciBmcm9tIFwiLi9wcmVsb2FkZXIvZ2V0UHJlbG9hZGVyXCI7XG5cbmNvbnN0IGdldENvbnRhY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGVwJykpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZm9ybV9fY29udGFpbmVyJ30pO1xuXG4gICAgY29uc3QgdGl0bGVDb3VudGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZm9ybV9fdGl0bGUtY291bnRlci1jb250YWluZXInfSk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsIHtjbGFzczogJ2Zvcm1fX3RpdGxlJ30sICfQktCw0YjQsCDQv9C+0LTQsdC+0YDQutCwINCz0L7RgtC+0LLQsCEg8J+lsyDQmtGD0LTQsCDQvdCw0Lwg0L7RgtC/0YDQsNCy0LjRgtGMINC10ZE/Jyk7XG4gICAgY29uc3QgY291bnRlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Zvcm1fX2NvdW50ZXInfSwgYNCo0LDQsyAke2N1cnJlbnRTdGVwfS8ke3F1ZXN0aW9uc0RhdGEubGVuZ3RoICsgMX1gKTtcbiAgICB0aXRsZUNvdW50ZXJDb250YWluZXIuYXBwZW5kKHRpdGxlLCBjb3VudGVyKTtcblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnLCB7Y2xhc3M6ICdmaWVsZHNldCd9KTtcblxuICAgIGNvbnN0IG5hbWUgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn0JrQsNC6INCy0LDRgSDQt9C+0LLRg9GCPycsXG4gICAgICAgIGNsYXNzOiAnZmllbGRzZXRfX2lucHV0LXRleHQnLFxuICAgICAgICBpZDogJ25hbWUnLFxuICAgICAgICByZXF1aXJlZDogJycsXG4gICAgfSk7XG5cbiAgICBjb25zdCBudW1iZXIgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgbmFtZTogJ3Bob25lJyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ9Cd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsXG4gICAgICAgIHBhdHRlcm46ICdeXFxcXCs/XFxcXGR7MCwyMH0oXFxcXChcXFxcZHsxLDIwfVxcXFwpKT8kJyxcbiAgICAgICAgY2xhc3M6ICdmaWVsZHNldF9faW5wdXQtdGV4dCcsXG4gICAgICAgIGlkOiAnbnVtYmVyJyxcbiAgICAgICAgcmVxdWlyZWQ6ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZW1haWwgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgbmFtZTogJ2VtYWlsJyxcbiAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFLW1haWwnLFxuICAgICAgICBjbGFzczogJ2ZpZWxkc2V0X19pbnB1dC10ZXh0JyxcbiAgICAgICAgaWQ6ICdlbWFpbCcsXG4gICAgICAgIHJlcXVpcmVkOiAnJyxcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kKG5hbWUsIG51bWJlciwgZW1haWwpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAnYnV0dG9uJywgdHlwZTogJ3N1Ym1pdCd9LCAn0J7RgtC/0YDQsNCy0LjRgtGMJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBbbmFtZS52YWx1ZSwgbnVtYmVyLnZhbHVlLCBlbWFpbC52YWx1ZV07XG4gICAgICAgICAgICBjb25zdCBhbGxJbnB1dHNGaWxsZWQgPSB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICBpZiAoYWxsSW5wdXRzRmlsbGVkKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICByZWNvcmRBbnN3ZXJzVG9MUygpO1xuICAgICAgICAgICAgICAgIHNob3dMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZldGNoRGF0YSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZUNvdW50ZXJDb250YWluZXIsIGZpZWxkc2V0LCBidXR0b24pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IHNob3dMb2FkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjbGVhckVsZW1lbnQoYm9keSk7XG4gICAgYm9keS5hcHBlbmQoZ2V0UHJlbG9hZGVyKCkpO1xufVxuXG5jb25zdCByZWNvcmRBbnN3ZXJzVG9MUyA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpbnB1dHNbaV0udmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7cXVlc3Rpb246IGlucHV0c1tpXS5uYW1lLCB2YWx1ZTogaW5wdXRzW2ldLnZhbHVlLCBpZDogcXVlc3Rpb25zRGF0YS5sZW5ndGggKyBpfTtcbiAgICAgICAgICAgIGxldCBtYXBGcm9tTFMgPSBnZXRNYXBGcm9tTFMoJ3Jlc3BvbnNlcycpO1xuICAgICAgICAgICAgbWFwRnJvbUxTLnNldChxdWVzdGlvbnNEYXRhLmxlbmd0aCArIGkgKyAxLCBkYXRhKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZXNwb25zZXMnLCBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKG1hcEZyb21MUy5lbnRyaWVzKCkpKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXNldEZvcm0gPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0ZXAnLCAnMScpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZXNwb25zZXMnLCAnW10nKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGNsZWFyRWxlbWVudChmb3JtKTtcbiAgICBmb3JtLmFwcGVuZChnZXRRdWVzdGlvbkVsZW0ocXVlc3Rpb25zRGF0YVswXSkpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbnRhY3RGb3JtOyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9oZWxwZXJzL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7cXVlc3Rpb25zRGF0YX0gZnJvbSBcIi4uL2Jhc2UvcXVlc3Rpb25zLWRhdGFcIjtcbmltcG9ydCBnZXRSYWRpb1NldCBmcm9tIFwiLi9nZXRSYWRpb1NldFwiO1xuaW1wb3J0IGdldFNlbGVjdFNldCwge2hhbmRsZVNlbGVjdEFuc3dlcnN9IGZyb20gXCIuL2dldFNlbGVjdFNldFwiO1xuaW1wb3J0IHtkb05leHRTdGVwLCBkb1ByZXZTdGVwfSBmcm9tIFwiLi9mb3JtL2Z1bmN0aW9ucy9kb1N0ZXBcIjtcbmltcG9ydCB7Z2V0TWFwRnJvbUxTfSBmcm9tIFwiLi4vaGVscGVycy9nZXRNYXBGcm9tTFNcIjtcblxuY29uc3QgZ2V0UXVlc3Rpb25FbGVtID0gKHF1ZXN0aW9uT2JqKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXAnKSk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmb3JtX19jb250YWluZXInfSk7XG4gICAgY29uc3QgdGl0bGVDb3VudGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZm9ybV9fdGl0bGUtY291bnRlci1jb250YWluZXInfSk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsIHtjbGFzczogJ2Zvcm1fX3RpdGxlJ30sIHF1ZXN0aW9uT2JqLnF1ZXN0aW9uKTtcbiAgICBjb25zdCBjb3VudGVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZm9ybV9fY291bnRlcid9LCBg0KjQsNCzICR7Y3VycmVudFN0ZXB9LyR7cXVlc3Rpb25zRGF0YS5sZW5ndGgrMX1gKTtcbiAgICB0aXRsZUNvdW50ZXJDb250YWluZXIuYXBwZW5kKHRpdGxlLCBjb3VudGVyKTtcbiAgICBjb25zdCBpbnB1dFNldCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Zvcm1fX3F1ZXN0aW9uJ30pO1xuICAgIGlmIChxdWVzdGlvbk9iai5hbnN3ZXJUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIGlucHV0U2V0LmFwcGVuZChnZXRSYWRpb1NldChxdWVzdGlvbk9iaikpO1xuICAgIH1cbiAgICBpZiAocXVlc3Rpb25PYmouYW5zd2VyVHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgaW5wdXRTZXQuYXBwZW5kKGdldFNlbGVjdFNldChxdWVzdGlvbk9iaikpO1xuICAgIH1cbiAgICBjb25zdCBwcmV2QnV0dG9uID0gcmVuZGVyUHJldkJ1dHRvbihjdXJyZW50U3RlcCk7XG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IHJlbmRlck5leHRCdXR0b24oY3VycmVudFN0ZXAsIHF1ZXN0aW9uT2JqKTtcbiAgICBjb25zdCBidXR0b25zID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnYnV0dG9ucyd9KTtcbiAgICBidXR0b25zLmFwcGVuZChwcmV2QnV0dG9uLCBuZXh0QnV0dG9uKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQodGl0bGVDb3VudGVyQ29udGFpbmVyLCBpbnB1dFNldCwgYnV0dG9ucyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuXG5jb25zdCByZW5kZXJQcmV2QnV0dG9uID0gKHN0ZXApID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzOiAnYnV0dG9uJywgaWQ6ICdwcmV2JyB9LCAn0J3QsNC30LDQtCcpO1xuXG4gICAgY29uc3QgYXJyb3dQcmV2ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge30sICc8Jyk7XG4gICAgYnV0dG9uLmFwcGVuZChhcnJvd1ByZXYpO1xuICAgIGlmIChzdGVwIDw9IDEpIHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gICAgICAgIGRvUHJldlN0ZXAoZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuY29uc3QgcmVuZGVyTmV4dEJ1dHRvbiA9IChzdGVwLCBxdWVzdGlvbk9iaikgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICdidXR0b24nLCBpZDogJ25leHQnIH0sICfQktC/0LXRgNGR0LQnKTtcbiAgICBjb25zdCBhcnJvd05leHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7fSwgJz4nKTtcbiAgICBidXR0b24uYXBwZW5kKGFycm93TmV4dCk7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gIWNoZWNrQ3VycmVudFF1ZXN0aW9uKHF1ZXN0aW9uT2JqLmlkKTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChxdWVzdGlvbk9iai5hbnN3ZXJUeXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgaGFuZGxlU2VsZWN0QW5zd2VycyhxdWVzdGlvbk9iaik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXN0aW9uT2JqLmFuc3dlclR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICAgICAgICAgICAgZG9OZXh0U3RlcChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja0N1cnJlbnRRdWVzdGlvbiA9IChpZCkgPT4ge1xuICAgIGxldCBtYXBGcm9tTFMgPSBnZXRNYXBGcm9tTFMoJ3Jlc3BvbnNlcycpO1xuICAgIHJldHVybiAhIW1hcEZyb21MUy5nZXQoaWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRRdWVzdGlvbkVsZW07IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL2hlbHBlcnMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHtnZXRNYXBGcm9tTFN9IGZyb20gXCIuLi9oZWxwZXJzL2dldE1hcEZyb21MU1wiO1xuaW1wb3J0IHtkb05leHRTdGVwfSBmcm9tIFwiLi9mb3JtL2Z1bmN0aW9ucy9kb1N0ZXBcIjtcblxuY29uc3QgZ2V0UmFkaW9TZXQgPSAocXVlc3Rpb25PYmopID0+IHtcbiAgICBsZXQgY2hlY2tlZEl0ZW07XG4gICAgbGV0IG1hcEZyb21MUyA9IGdldE1hcEZyb21MUygncmVzcG9uc2VzJyk7XG4gICAgaWYgKG1hcEZyb21MUy5nZXQocXVlc3Rpb25PYmouaWQpKSB7XG4gICAgICAgIGNoZWNrZWRJdGVtID0gbWFwRnJvbUxTLmdldChxdWVzdGlvbk9iai5pZCkudmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSBjcmVhdGVFbGVtZW50KCdmaWVsZHNldCcsIHtjbGFzczogJ2ZpZWxkc2V0J30pO1xuICAgIGNvbnN0IHZhcmlhbnRzID0gQXJyYXkuZnJvbShxdWVzdGlvbk9iai52YXJpYW50cy5rZXlzKCkpO1xuXG4gICAgdmFyaWFudHMuZm9yRWFjaChlbGVtID0+IHtcblxuICAgICAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge2NsYXNzOiAnZmllbGRzZXRfX2xhYmVsJywgZm9yOiBlbGVtfSwgcXVlc3Rpb25PYmoudmFyaWFudHMuZ2V0KGVsZW0pKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgIGNsYXNzOiAnZmllbGRzZXRfX2lucHV0JyxcbiAgICAgICAgICAgIGlkOiBlbGVtLFxuICAgICAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgICAgIHZhbHVlOiBxdWVzdGlvbk9iai52YXJpYW50cy5nZXQoZWxlbSksXG4gICAgICAgICAgICBuYW1lOiAndmFyaWFudCcsXG4gICAgICAgICAgICByZXF1aXJlZDogJydcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChlbGVtID09PSBjaGVja2VkSXRlbSkge1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7cXVlc3Rpb246IHF1ZXN0aW9uT2JqLm5hbWUsIHZhbHVlOiBpbnB1dC5pZCwgaWQ6IHF1ZXN0aW9uT2JqLmlkfTtcbiAgICAgICAgICAgIGxldCBtYXBGcm9tTFMgPSBnZXRNYXBGcm9tTFMoJ3Jlc3BvbnNlcycpO1xuICAgICAgICAgICAgbWFwRnJvbUxTLnNldChxdWVzdGlvbk9iai5pZCwgZGF0YSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVzcG9uc2VzJywgSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShtYXBGcm9tTFMuZW50cmllcygpKSkpO1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25OZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcbiAgICAgICAgICAgIGJ1dHRvbk5leHQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGRvTmV4dFN0ZXAoY3VycmVudFF1ZXN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNoZWNrbWFyayA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7Y2xhc3M6ICdmaWVsZHNldF9fY2hlY2ttYXJrJ30pO1xuICAgICAgICBsYWJlbC5hcHBlbmQoaW5wdXQsIGNoZWNrbWFyayk7XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZChsYWJlbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpZWxkc2V0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldFJhZGlvU2V0OyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9oZWxwZXJzL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7Z2V0TWFwRnJvbUxTfSBmcm9tIFwiLi4vaGVscGVycy9nZXRNYXBGcm9tTFNcIjtcbmltcG9ydCB7ZG9OZXh0U3RlcH0gZnJvbSBcIi4vZm9ybS9mdW5jdGlvbnMvZG9TdGVwXCI7XG5cbmNvbnN0IGdldFNlbGVjdFNldCA9IChxdWVzdGlvbk9iaikgPT4ge1xuICAgIGxldCBtYXBGcm9tTFMgPSBnZXRNYXBGcm9tTFMoJ3Jlc3BvbnNlcycpO1xuICAgIGxldCBzZXRPZlNlbGVjdGVkID0gbmV3IFNldCgpO1xuXG4gICAgaWYgKG1hcEZyb21MUy5nZXQocXVlc3Rpb25PYmouaWQpKSB7XG4gICAgICAgIHNldE9mU2VsZWN0ZWQgPSBuZXcgU2V0KG1hcEZyb21MUy5nZXQocXVlc3Rpb25PYmouaWQpLnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3QgPSBjcmVhdGVFbGVtZW50KCdzZWxlY3QnLCB7bXVsdGlwbGU6ICcnLCBuYW1lOiAnb3B0aW9ucycsIGlkOiAnb3B0aW9ucycsIGNsYXNzOiAnc2VsZWN0J30pO1xuICAgIGNvbnN0IHZhcmlhbnRzID0gQXJyYXkuZnJvbShxdWVzdGlvbk9iai52YXJpYW50cy5rZXlzKCkpO1xuXG4gICAgdmFyaWFudHMuZm9yRWFjaChlbGVtID0+IHtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKHF1ZXN0aW9uT2JqLnZhcmlhbnRzLmdldCgpKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgaWQ6IHF1ZXN0aW9uT2JqLmlkLFxuICAgICAgICAgICAgY2xhc3M6ICdmaWVsZHNldF9fb3B0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBlbGVtLFxuICAgICAgICAgICAgbmFtZTogJ3ZhcmlhbnQnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6ICcnXG4gICAgICAgIH0sIHF1ZXN0aW9uT2JqLnZhcmlhbnRzLmdldChlbGVtKSk7XG5cbiAgICAgICAgaWYgKHNldE9mU2VsZWN0ZWQgJiYgc2V0T2ZTZWxlY3RlZC5oYXMoZWxlbSkpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25OZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHQnKTtcbiAgICAgICAgICAgIGJ1dHRvbk5leHQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGVjdC5hcHBlbmQob3B0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0O1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVNlbGVjdEFuc3dlcnMgPSAocXVlc3Rpb25PYmopID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBbXTtcbiAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtxdWVzdGlvbjogcXVlc3Rpb25PYmoubmFtZSwgdmFsdWU6IHNlbGVjdGVkLCBpZDogcXVlc3Rpb25PYmouaWR9O1xuICAgICAgICBsZXQgbWFwRnJvbUxTID0gZ2V0TWFwRnJvbUxTKCdyZXNwb25zZXMnKTtcbiAgICAgICAgbWFwRnJvbUxTLnNldChxdWVzdGlvbk9iai5pZCwgZGF0YSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZXNwb25zZXMnLCBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKG1hcEZyb21MUy5lbnRyaWVzKCkpKSk7XG5cbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gICAgICAgIGRvTmV4dFN0ZXAoZm9ybUNvbnRhaW5lcik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBidXR0b25OZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHQnKTtcbiAgICAgICAgYnV0dG9uTmV4dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZ2V0U2VsZWN0U2V0OyIsImNvbnN0IGdldFByZWxvYWRlciA9ICgpID0+IHtcbiAgICBsZXQgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9hZGVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwibG9hZGluZ2lvLXNwaW5uZXItc3Bpbi1sdGI2OGl0bGl3bFwiPicgK1xuICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwibGRpby05aXhnZW9heGVjXCI+JyArXG4gICAgICAgICcgICAgICAgICAgICA8ZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICA8L2Rpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgIDxkaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgPGRpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICA8ZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICA8L2Rpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgIDxkaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgPGRpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICA8ZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICA8L2Rpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgIDxkaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xuICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAgICAgJyAgICA8L2Rpdj4nXG4gICAgcmV0dXJuIGxvYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJlbG9hZGVyOyIsImNvbnN0IGNsZWFyRWxlbWVudCA9IChwYXJlbnRFbGVtZW50KSA9PiB7XG4gIHdoaWxlIChwYXJlbnRFbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocGFyZW50RWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGNsZWFyRWxlbWVudDtcbiIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnTmFtZSwgYXR0cmlidXRlcywgdGV4dENvbnRlbnQpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9XG4gIGlmICh0ZXh0Q29udGVudCkgZWwudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIGVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRNYXBGcm9tTFMobmFtZSkge1xuICAgIGNvbnN0IG1hcEpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcbiAgICBpZiAobWFwSnNvbiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbmV3IE1hcCgpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IE1hcChKU09OLnBhcnNlKG1hcEpzb24pKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHBhcnNpbmcgSlNPTiBkYXRhIGZvciAke25hbWV9OiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG59IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHJlbmRlckZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9yZW5kZXJGb3JtXCI7XG5cbmNvbnN0IG1haW5QYWdlID0gKCkgPT4ge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXAnKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RlcCcsICcxJyk7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdjb250YWluZXInIH0pO1xuICAgIGNvbnN0IGFib3V0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Fib3V0JyB9KTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gxJywgeyBjbGFzczogJ2Fib3V0X190aXRsZScgfSwgJ9Cf0L7QtNCx0LXRgNC10Lwg0JLQo9CXINC80LXRh9GC0YsnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCB7IGNsYXNzOiAnYWJvdXRfX2Rlc2NyaXB0aW9uJyB9LCAn0J7RgtCy0LXRgtGM0YLQtScgK1xuICAgICAgICAnINC90LAgOCDQv9GA0L7RgdGC0YvRhSDQstC+0L/RgNC+0YHQvtCyLCDQuCDQvNGLINGB0L7RgdGC0LDQstC40Lwg0YHQv9C40YHQvtC6INC90LDQsdC+0LvQtdC1INC/0L7QtNGF0L7QtNGP0YnQuNGFINC00LvRjyDQstCw0YEg0LLRg9C30L7QsicpO1xuXG4gICAgY29uc3QgZGVjb3JDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnYWJvdXRfX2RlY29yJyB9KTtcbiAgICBjb25zdCBkZWNvcldvcmQxID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Fib3V0X19kZWNvcl93b3JkMSBhYm91dF9fZGVjb3Jfd29yZCcgfSwgJ9CR0LXRgdC/0LvQsNGC0L3QvicpO1xuICAgIGNvbnN0IGRlY29yV29yZDIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnYWJvdXRfX2RlY29yX3dvcmQyIGFib3V0X19kZWNvcl93b3JkJyB9LCAn0LfQsCAzMCDRgdC10LrRg9C90LQnKTtcbiAgICBjb25zdCBkZWNvckNpcmNsZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdhYm91dF9fZGVjb3JfY2lyY2xlJyB9KTtcbiAgICBjb25zdCBkZWNvckxpbmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnYWJvdXRfX2RlY29yX2xpbmUnIH0pO1xuICAgIGNvbnN0IGRlY29yTGlnaHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnYWJvdXRfX2RlY29yX2xpZ2h0JyB9KTtcbiAgICBjb25zdCBkZWNvckJvdHRvbSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdhYm91dF9fZGVjb3JfYm90dG9tJyB9KTtcbiAgICBkZWNvckNvbnRhaW5lci5hcHBlbmQoZGVjb3JXb3JkMSwgZGVjb3JXb3JkMiwgZGVjb3JDaXJjbGUsIGRlY29yTGluZSwgZGVjb3JMaWdodCwgZGVjb3JCb3R0b20pO1xuICAgIGFib3V0LmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIGRlY29yQ29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoYWJvdXQsIHJlbmRlckZvcm0oKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmV4cG9ydCBkZWZhdWx0IG1haW5QYWdlOyIsImltcG9ydCBnZXRSZXF1ZXN0Qm9keSBmcm9tIFwiLi9nZXRSZXF1ZXN0Qm9keVwiO1xuaW1wb3J0IGNsZWFyRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9jbGVhckVsZW1lbnRcIjtcbmltcG9ydCByZXN1bHRzUGFnZSBmcm9tIFwiLi4vcmVzdWx0c1BhZ2VcIjtcbmltcG9ydCB7cmVzZXRGb3JtfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9nZXRDb250YWN0Rm9ybVwiO1xuXG5jb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnYWNjZXB0JywgJyovKicpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0gZ2V0UmVxdWVzdEJvZHkoKTtcblxuICAgIGZldGNoKCdodHRwczovL2dvdGhpYy1jYWxsaW5nLTM4OTkxNC51Yy5yLmFwcHNwb3QuY29tL3N1cnZleXMnLCB7XG4gICAgICAgIC8vaHR0cHM6Ly9nb3RoaWMtY2FsbGluZy0zODk5MTQudWMuci5hcHBzcG90LmNvbS9zd2FnZ2VyLXVpL2luZGV4Lmh0bWxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcbiAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNsZWFyRWxlbWVudChib2R5KTtcbiAgICAgICAgYm9keS5hcHBlbmQocmVzdWx0c1BhZ2UoZGF0YSkpO1xuICAgICAgICByZXNldEZvcm0oKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IgKyAnaXRgcyBlcnJvciEnKTtcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTtcbiIsImltcG9ydCB7Z2V0TWFwRnJvbUxTfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9nZXRNYXBGcm9tTFNcIjtcblxuY29uc3QgZ2V0UmVxdWVzdEJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgXCJpbml0aWF0b3JcIjogXCJcIixcbiAgICAgICAgXCJjaXRpZXNcIjogW10sXG4gICAgICAgIFwiY3VycmVudEVkdWNhdGlvblwiOiBcIlwiLFxuICAgICAgICBcImVkdWNhdGlvblRhcmdldFR5cGVcIjogXCJcIixcbiAgICAgICAgXCJsZWFybmluZ0Zvcm1cIjogXCJcIixcbiAgICAgICAgXCJwYWlkRWR1Y2F0aW9uQWxsb3dlZFR5cGVcIjogXCJcIixcbiAgICAgICAgXCJlZHVjYXRpb25TcGVjaWFsaXR5VHlwZVwiOiBbXSxcbiAgICAgICAgXCJob3dNYW55VG9BZG1pc3Npb25cIjogXCJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgIFwicGhvbmVcIjogXCJcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcIlwiXG4gICAgfVxuXG4gICAgbGV0IG1hcEZyb21MUyA9IGdldE1hcEZyb21MUygncmVzcG9uc2VzJyk7XG4gICAgY29uc3QgYW5zd2VycyA9IEFycmF5LmZyb20obWFwRnJvbUxTLnZhbHVlcygpKTtcbiAgICBhbnN3ZXJzLmZvckVhY2goYW5zd2VyID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChib2R5LCBhbnN3ZXIucXVlc3Rpb24pKSB7XG4gICAgICAgICAgICBib2R5W2Fuc3dlci5xdWVzdGlvbl0gPSBhbnN3ZXIudmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYm9keTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmVxdWVzdEJvZHk7IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvY3JlYXRlRWxlbWVudFwiO1xuXG5jb25zdCBnZXRSZXN1bHRFbGVtZW50ID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0aXR1dGUnfSk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsIHtjbGFzczogJ2luc3RpdHV0ZS10aXRsZSd9LCBkYXRhLnRpdGxlKTtcblxuICAgIGNvbnN0IHR5cGUgPSBjcmVhdGVFbGVtZW50KCdwJywge30sIGRhdGEuaW5zdGl0dXRpb25UeXBlKTtcbiAgICBjb25zdCBjaXR5ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge30sIGRhdGEuYWRkcmVzcyk7XG4gICAgY29uc3Qgc3BlY2lhbGl0aWVzID0gZGF0YS5zcGVjaWFsaXRpZXM7XG4gICAgY29uc3Qgc3BlY2lhbGl0eUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHt9KTtcbiAgICBzcGVjaWFsaXRpZXMuZm9yRWFjaChzcGVjaWFsaXR5ID0+IHtcbiAgICAgICAgY29uc3QgZWxlbSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7Y2xhc3M6ICdpbnN0aXR1dGUtc3BlY2lhbGl0eSd9LCBzcGVjaWFsaXR5KTtcbiAgICAgICAgc3BlY2lhbGl0eUNvbnRhaW5lci5hcHBlbmQoZWxlbSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7Y2xhc3M6ICdidXR0b24gcmVzdWx0cy1idXR0b24nfSk7XG4gICAgY29uc3Qgc2l0ZSA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7Y2xhc3M6ICdyZXN1bHRzLWJ1dHRvbl9saW5rJ30sIFwi0J/QvtC00YDQvtCx0L3QtdC1Li4uXCIpO1xuICAgIGNvbnN0IGxpbmsgPSBkYXRhLnNpdGU7XG4gICAgbGluayA/IHNpdGUuaHJlZiA9IGxpbmsgOiBzaXRlLmhyZWYgPSAnIyc7XG4gICAgYnV0dG9uLmFwcGVuZChzaXRlKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHRpdGxlLCB0eXBlLCBjaXR5LCBzcGVjaWFsaXR5Q29udGFpbmVyLCBidXR0b24pO1xuICAgIHJldHVybiBjb250YWluZXI7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmVzdWx0RWxlbWVudDsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vLi4vaGVscGVycy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgZ2V0UmVzdWx0RWxlbWVudCBmcm9tIFwiLi9nZXRSZXN1bHRFbGVtZW50XCI7XG5pbXBvcnQgY2xlYXJFbGVtZW50IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NsZWFyRWxlbWVudFwiO1xuaW1wb3J0IG1haW5QYWdlIGZyb20gXCIuLi9tYWluL21haW5QYWdlXCI7XG5cbmNvbnN0IHJlc3VsdHNQYWdlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnY29udGFpbmVyLXJlc3VsdHMnIH0pO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICdidXR0b24nIH0sIFwi0J/RgNC+0LnRgtC4INGC0LXRgdGCINC30LDQvdC+0LLQvlwiKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNsZWFyRWxlbWVudChib2R5KTtcbiAgICAgICAgYm9keS5hcHBlbmQobWFpblBhZ2UoKSk7XG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcbiAgICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2luc3RpdHV0ZXMnIH0pO1xuICAgIGRhdGEuaW5zdGl0dXRpb25zLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGdldFJlc3VsdEVsZW1lbnQob2JqKTtcbiAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmQoaXRlbSk7XG4gICAgfSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChyZXN1bHRzQ29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXN1bHRzUGFnZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBtYWluUGFnZSBmcm9tIFwiLi9wYWdlcy9tYWluL21haW5QYWdlXCI7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuYm9keS5hcHBlbmQobWFpblBhZ2UoKSk7Il0sIm5hbWVzIjpbImluaXRpYXRvck1hcCIsIk1hcCIsImNpdGllc01hcCIsImN1cnJlbnRFZHVjYXRpb25NYXAiLCJlZHVjYXRpb25UYXJnZXRUeXBlTWFwIiwibGVhcm5pbmdGb3JtTWFwIiwicGFpZEVkdWNhdGlvbkFsbG93ZWRUeXBlTWFwIiwiaG93TWFueVRvQWRtaXNzaW9uTWFwIiwiZWR1Y2F0aW9uU3BlY2lhbGl0eVR5cGVNYXAiLCJxdWVzdGlvbnNEYXRhIiwicXVlc3Rpb24iLCJuYW1lIiwiYW5zd2VyVHlwZSIsInZhcmlhbnRzIiwiaWQiLCJjbGVhckVsZW1lbnQiLCJnZXRRdWVzdGlvbkVsZW0iLCJnZXRDb250YWN0Rm9ybSIsImRvTmV4dFN0ZXAiLCJxdWVzdGlvbkVsZW1lbnQiLCJjdXJyZW50U3RlcCIsIk51bWJlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdGVwc0NvdW50IiwibGVuZ3RoIiwic2V0SXRlbSIsImNvbmNhdCIsIm5leHRRdWVzdGlvbiIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFwcGVuZCIsImRvUHJldlN0ZXAiLCJwcmV2UXVlc3Rpb24iLCJidXR0b25QcmV2IiwiZGlzYWJsZWQiLCJjcmVhdGVFbGVtZW50IiwicmVuZGVyRm9ybSIsInF1ZXN0aW9ucyIsImZvcm0iLCJnZXRNYXBGcm9tTFMiLCJmZXRjaERhdGEiLCJnZXRQcmVsb2FkZXIiLCJ0aXRsZUNvdW50ZXJDb250YWluZXIiLCJ0aXRsZSIsImNvdW50ZXIiLCJmaWVsZHNldCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwibnVtYmVyIiwicGF0dGVybiIsImVtYWlsIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidmFsdWVzIiwidmFsdWUiLCJhbGxJbnB1dHNGaWxsZWQiLCJldmVyeSIsInByZXZlbnREZWZhdWx0IiwicmVjb3JkQW5zd2Vyc1RvTFMiLCJzaG93TG9hZGVyIiwic2V0VGltZW91dCIsImJvZHkiLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImRhdGEiLCJtYXBGcm9tTFMiLCJzZXQiLCJKU09OIiwic3RyaW5naWZ5IiwiQXJyYXkiLCJmcm9tIiwiZW50cmllcyIsInJlc2V0Rm9ybSIsImdldFJhZGlvU2V0IiwiZ2V0U2VsZWN0U2V0IiwiaGFuZGxlU2VsZWN0QW5zd2VycyIsInF1ZXN0aW9uT2JqIiwiaW5wdXRTZXQiLCJwcmV2QnV0dG9uIiwicmVuZGVyUHJldkJ1dHRvbiIsIm5leHRCdXR0b24iLCJyZW5kZXJOZXh0QnV0dG9uIiwiYnV0dG9ucyIsInN0ZXAiLCJhcnJvd1ByZXYiLCJmb3JtQ29udGFpbmVyIiwiYXJyb3dOZXh0IiwiY2hlY2tDdXJyZW50UXVlc3Rpb24iLCJnZXQiLCJjaGVja2VkSXRlbSIsImtleXMiLCJmb3JFYWNoIiwiZWxlbSIsImxhYmVsIiwiaW5wdXQiLCJjaGVja2VkIiwiY3VycmVudFF1ZXN0aW9uIiwiYnV0dG9uTmV4dCIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2ttYXJrIiwic2V0T2ZTZWxlY3RlZCIsIlNldCIsInNlbGVjdCIsIm11bHRpcGxlIiwib3B0aW9uIiwiaGFzIiwic2VsZWN0ZWQiLCJvcHRpb25zIiwicHVzaCIsImxvYWRlciIsImlubmVySFRNTCIsInBhcmVudEVsZW1lbnQiLCJoYXNDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJmaXJzdENoaWxkIiwidGFnTmFtZSIsImF0dHJpYnV0ZXMiLCJ0ZXh0Q29udGVudCIsImVsIiwia2V5Iiwic2V0QXR0cmlidXRlIiwibWFwSnNvbiIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJtYWluUGFnZSIsImFib3V0IiwiZGVzY3JpcHRpb24iLCJkZWNvckNvbnRhaW5lciIsImRlY29yV29yZDEiLCJkZWNvcldvcmQyIiwiZGVjb3JDaXJjbGUiLCJkZWNvckxpbmUiLCJkZWNvckxpZ2h0IiwiZGVjb3JCb3R0b20iLCJnZXRSZXF1ZXN0Qm9keSIsInJlc3VsdHNQYWdlIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJyZXF1ZXN0Qm9keSIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImxvZyIsImFuc3dlcnMiLCJhbnN3ZXIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJnZXRSZXN1bHRFbGVtZW50IiwiaW5zdGl0dXRpb25UeXBlIiwiY2l0eSIsImFkZHJlc3MiLCJzcGVjaWFsaXRpZXMiLCJzcGVjaWFsaXR5Q29udGFpbmVyIiwic3BlY2lhbGl0eSIsInNpdGUiLCJsaW5rIiwiaHJlZiIsInJlc3VsdHNDb250YWluZXIiLCJpbnN0aXR1dGlvbnMiLCJvYmoiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==