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
  fetch('http://eco-silicon-387419.uc.r.appspot.com/surveys', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksQ0FBQzFFLE9BQU8sQ0FBQyxVQUFBMkUsR0FBRyxFQUFJO0lBQzdCLElBQU1DLElBQUksR0FBR2IsNkRBQWdCLENBQUNZLEdBQUcsQ0FBQztJQUNsQ0YsZ0JBQWdCLENBQUN6SSxNQUFNLENBQUM0SSxJQUFJLENBQUM7RUFDakMsQ0FBQyxDQUFDO0VBQ0YvSSxTQUFTLENBQUNHLE1BQU0sQ0FBQ3lJLGdCQUFnQixDQUFDO0VBQ2xDLE9BQU81SSxTQUFTO0FBQ3BCLENBQUM7QUFFRCxpRUFBZWtILFdBQVc7Ozs7Ozs7Ozs7O0FDeEIxQjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ3VCO0FBQzdDLElBQU05RSxJQUFJLEdBQUduQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDM0NrQyxJQUFJLENBQUNqQyxNQUFNLENBQUNvRyxnRUFBUSxFQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aXovLi9zcmMvYmFzZS9xdWVzdGlvbnMtZGF0YS5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2NvbXBvbmVudHMvZm9ybS9mdW5jdGlvbnMvZG9TdGVwLmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvY29tcG9uZW50cy9mb3JtL3JlbmRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9jb21wb25lbnRzL2dldENvbnRhY3RGb3JtLmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvY29tcG9uZW50cy9nZXRRdWVzdGlvbkVsZW0uanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9jb21wb25lbnRzL2dldFJhZGlvU2V0LmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvY29tcG9uZW50cy9nZXRTZWxlY3RTZXQuanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9jb21wb25lbnRzL3ByZWxvYWRlci9nZXRQcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9oZWxwZXJzL2NsZWFyRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2hlbHBlcnMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2hlbHBlcnMvZ2V0TWFwRnJvbUxTLmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvcGFnZXMvbWFpbi9tYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL3BhZ2VzL3Jlc3VsdHMvZnVuY3Rpb25zL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL3BhZ2VzL3Jlc3VsdHMvZnVuY3Rpb25zL2dldFJlcXVlc3RCb2R5LmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvcGFnZXMvcmVzdWx0cy9nZXRSZXN1bHRFbGVtZW50LmpzIiwid2VicGFjazovL3F1aXovLi9zcmMvcGFnZXMvcmVzdWx0cy9yZXN1bHRzUGFnZS5qcyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL3N0eWxlLnNjc3M/YmMzYiIsIndlYnBhY2s6Ly9xdWl6L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3F1aXovd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3F1aXovd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9xdWl6L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWF0b3JNYXAgPSBuZXcgTWFwKFtbJ1lPVVJTRUxGJywgJ9Ch0LXQsdC1J10sIFsnU1BPVVNFJywgJ9Ch0YPQv9GA0YPQs9GDL9GB0YPQv9GA0YPQs9C1J10sIFsnUkVMQVRJVkUnLCAn0KDQvtC00YHRgtCy0LXQvdC90LjQutGDJ10sIFsnQ09MTEVBR1VFJywgJ9Ca0L7Qu9C70LXQs9C1J10sIFsnQ0hJTEQnLCAn0KDQtdCx0LXQvdC60YMnXSwgWydPVEhFUicsICfQlNGA0YPQs9C+0LUnXV0pO1xuY29uc3QgY2l0aWVzTWFwID0gbmV3IE1hcChbWyfQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsycsICfQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsyddLCBbJ9Cc0L7RgdC60LLQsCcsICfQnNC+0YHQutCy0LAnXSwgWyfQndC40LbQvdC40Lkg0J3QvtCy0LPQvtGA0L7QtCcsICfQndC40LbQvdC40Lkg0J3QvtCy0LPQvtGA0L7QtCddLCBbJ9Cg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDJywgJ9Cg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDJ11dKTtcbmNvbnN0IGN1cnJlbnRFZHVjYXRpb25NYXAgPSBuZXcgTWFwKFtbJ0dSQURFXzknLCAnOSDQutC70LDRgdGB0L7QsiddLCBbJ0dSQURFXzExJywgJzExINC60LvQsNGB0YHQvtCyJ10sIFsnVEVDSE5JQ0FMX1NDSE9PTCcsICfQo9GH0LjQu9C40YnQtSddLCBbJ1RFQ0hOSUNBTF9DT0xMRUdFJywgJ9Ca0L7Qu9C70LXQtNC2L9GC0LXRhdC90LjQutGD0LwnXSwgWydVTkNPTVBMRVRFRF9VTklWRVJTSVRZJywgJ9Cd0LXQvtC60L7QvdGH0LXQvdC90L7QtSDQstGL0YHRiNC10LUnXSwgWydVTklWRVJTSVRZJywgJ9CS0YvRgdGI0LXQtSddXSk7XG5jb25zdCBlZHVjYXRpb25UYXJnZXRUeXBlTWFwID0gbmV3IE1hcChbWydVTklWRVJTSVRZJywgJ9CS0YPQtyddLCBbJ1RFQ0hOSUNBTF9DT0xMRUdFJywgJ9Ca0L7Qu9C70LXQtNC2L9GC0LXRhdC90LjQutGD0LwnXSwgWydURUNITklDQUxfU0NIT09MJywgJ9Cj0YfQuNC70LjRidC1J11dKTtcbmNvbnN0IGxlYXJuaW5nRm9ybU1hcCA9IG5ldyBNYXAoW1snRlVMTF9USU1FJywgJ9Ce0YfQvdGD0Y4nXSwgWydFWFRSQU1VUkFMJywgJ9CX0LDQvtGH0L3Rg9GOJ10sIFsnRElTVEFOQ0UnLCAn0JTQuNGB0YLQsNC90YbQuNC+0L3QvdGD0Y4nXV0pO1xuY29uc3QgcGFpZEVkdWNhdGlvbkFsbG93ZWRUeXBlTWFwID0gbmV3IE1hcChbWydCVURHRVRfT05MWScsICfQndC10YIsINGC0L7Qu9GM0LrQviDQsdGO0LTQttC10YInXSwgWydQQUlEX0VEVUNBVElPTicsICfQlNCwLCDQv9C70LDQvdC40YDRg9GOINGD0YfQuNGC0YzRgdGPINC/0LvQsNGC0L3QviddLCBbJ0FOWScsICfQktC+0LfQvNC+0LbQvdGLINC+0LHQsCDQstCw0YDQuNCw0L3RgtCwJ11dKTtcbmNvbnN0IGhvd01hbnlUb0FkbWlzc2lvbk1hcCA9IG5ldyBNYXAoW1snQVNBUCcsICfQmtCw0Log0LzQvtC20L3QviDQsdGL0YHRgtGA0LXQtSddLCBbJ01PTlRIJywgJ9Cc0LXRgdGP0YYnXSwgWydRVUFSVEVSJywgJ9Ca0LLQsNGA0YLQsNC7J10sIFsnU0lYX01PTlRIUycsICfQn9C+0LvQs9C+0LTQsCddLCBbJ1lFQVInLCAn0JPQvtC0J11dKTtcbmNvbnN0IGVkdWNhdGlvblNwZWNpYWxpdHlUeXBlTWFwID0gbmV3IE1hcChbWydFQ09OT01JQ1MnLCAn0K3QutC+0L3QvtC80LjQutCwJ10sIFsnUEhJTE9TT1BIWScsICfQpNC40LvQvtGB0L7RhNC40Y8nXSwgWydTT0NJT0xPR1knLCAn0KHQvtGG0LjQvtC70L7Qs9C40Y8nXSwgWydMQVcnLCAn0K7RgNC40YHQv9GA0YPQtNC10L3RhtC40Y8nXV0pO1xuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uc0RhdGEgPSBbXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ9CU0LvRjyDQutC+0LPQviDQstGLINC40YnQtdGC0LUg0YPRh9C10LHQvdC+0LUg0LfQsNCy0LXQtNC10L3QuNC1PycsXG4gICAgICAgIG5hbWU6ICdpbml0aWF0b3InLFxuICAgICAgICBhbnN3ZXJUeXBlOiAncmFkaW8nLFxuICAgICAgICB2YXJpYW50czogaW5pdGlhdG9yTWFwLFxuICAgICAgICBpZDogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcXVlc3Rpb246ICfQkiDQutCw0LrQvtC8INCz0L7RgNC+0LTQtSDQv9C70LDQvdC40YDRg9C10YLQtSDQv9C+0YHRgtGD0L/QsNGC0Yw/JyxcbiAgICAgICAgbmFtZTogJ2NpdGllcycsXG4gICAgICAgIGFuc3dlclR5cGU6ICdzZWxlY3QnLFxuICAgICAgICB2YXJpYW50czogY2l0aWVzTWFwLFxuICAgICAgICBpZDogMixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcXVlc3Rpb246ICfQmtCw0LrQvtC1INC+0LHRgNCw0LfQvtCy0LDQvdC40LUg0YPQttC1INC10YHRgtGMPycsXG4gICAgICAgIG5hbWU6ICdjdXJyZW50RWR1Y2F0aW9uJyxcbiAgICAgICAgYW5zd2VyVHlwZTogJ3JhZGlvJyxcbiAgICAgICAgdmFyaWFudHM6IGN1cnJlbnRFZHVjYXRpb25NYXAsXG4gICAgICAgIGlkOiAzLFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ9Ca0YPQtNCwINC/0LvQsNC90LjRgNGD0LXRgtC1INC/0L7RgdGC0YPQv9Cw0YLRjD8nLFxuICAgICAgICBuYW1lOiAnZWR1Y2F0aW9uVGFyZ2V0VHlwZScsXG4gICAgICAgIGFuc3dlclR5cGU6ICdyYWRpbycsXG4gICAgICAgIHZhcmlhbnRzOiBlZHVjYXRpb25UYXJnZXRUeXBlTWFwLFxuICAgICAgICBpZDogNCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcXVlc3Rpb246ICfQmtCw0LrRg9GOINGE0L7RgNC80YMg0L7QsdGD0YfQtdC90LjRjyDQv9GA0LXQtNC/0L7Rh9C40YLQsNC10YLQtT8nLFxuICAgICAgICBuYW1lOiAnbGVhcm5pbmdGb3JtJyxcbiAgICAgICAgYW5zd2VyVHlwZTogJ3JhZGlvJyxcbiAgICAgICAgdmFyaWFudHM6IGxlYXJuaW5nRm9ybU1hcCxcbiAgICAgICAgaWQ6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHF1ZXN0aW9uOiAn0KDQsNGB0YHQvNCw0YLRgNC40LLQsNC10YLQtSDQv9C70LDRgtC90L7QtSDQvtCx0YPRh9C10L3QuNC1PycsXG4gICAgICAgIG5hbWU6ICdwYWlkRWR1Y2F0aW9uQWxsb3dlZFR5cGUnLFxuICAgICAgICBhbnN3ZXJUeXBlOiAncmFkaW8nLFxuICAgICAgICB2YXJpYW50czogcGFpZEVkdWNhdGlvbkFsbG93ZWRUeXBlTWFwLFxuICAgICAgICBpZDogNixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcXVlc3Rpb246ICfQmtCw0LrQsNGPINGB0L/QtdGG0LjQsNC70YzQvdC+0YHRgtGMINC40L3RgtC10YDQtdGB0YPQtdGCPycsXG4gICAgICAgIG5hbWU6ICdlZHVjYXRpb25TcGVjaWFsaXR5VHlwZScsXG4gICAgICAgIGFuc3dlclR5cGU6ICdzZWxlY3QnLFxuICAgICAgICB2YXJpYW50czogZWR1Y2F0aW9uU3BlY2lhbGl0eVR5cGVNYXAsXG4gICAgICAgIGlkOiA3LFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ9Ca0LDQuiDRgdC60L7RgNC+INC/0LvQsNC90LjRgNGD0LXRgtC1INC/0L7RgdGC0YPQv9Cw0YLRjD8nLFxuICAgICAgICBuYW1lOiAnaG93TWFueVRvQWRtaXNzaW9uJyxcbiAgICAgICAgYW5zd2VyVHlwZTogJ3JhZGlvJyxcbiAgICAgICAgdmFyaWFudHM6IGhvd01hbnlUb0FkbWlzc2lvbk1hcCxcbiAgICAgICAgaWQ6IDgsXG4gICAgfSxcbl07IiwiaW1wb3J0IHtxdWVzdGlvbnNEYXRhfSBmcm9tIFwiLi4vLi4vLi4vYmFzZS9xdWVzdGlvbnMtZGF0YVwiO1xuaW1wb3J0IGNsZWFyRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9jbGVhckVsZW1lbnRcIjtcbmltcG9ydCBnZXRRdWVzdGlvbkVsZW0gZnJvbSBcIi4uLy4uL2dldFF1ZXN0aW9uRWxlbVwiO1xuaW1wb3J0IGdldENvbnRhY3RGb3JtIGZyb20gXCIuLi8uLi9nZXRDb250YWN0Rm9ybVwiO1xuXG5leHBvcnQgY29uc3QgZG9OZXh0U3RlcCA9IChxdWVzdGlvbkVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RlcCcpKTtcbiAgICBjb25zdCBzdGVwc0NvdW50ID0gcXVlc3Rpb25zRGF0YS5sZW5ndGgrMTtcblxuICAgIGlmIChjdXJyZW50U3RlcCA9PT0gc3RlcHNDb3VudC0xKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGVwJywgYCR7KGN1cnJlbnRTdGVwICsgMSl9YCk7XG4gICAgICAgIGNvbnN0IG5leHRRdWVzdGlvbiA9IGdldENvbnRhY3RGb3JtKCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gICAgICAgIGNsZWFyRWxlbWVudChjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKG5leHRRdWVzdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRTdGVwIDwgc3RlcHNDb3VudC0xKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGVwJywgYCR7KGN1cnJlbnRTdGVwICsgMSl9YCk7XG4gICAgICAgIGNvbnN0IG5leHRRdWVzdGlvbiA9IGdldFF1ZXN0aW9uRWxlbShxdWVzdGlvbnNEYXRhW2N1cnJlbnRTdGVwXSk7XG4gICAgICAgIGNsZWFyRWxlbWVudChxdWVzdGlvbkVsZW1lbnQpO1xuICAgICAgICBxdWVzdGlvbkVsZW1lbnQuYXBwZW5kKG5leHRRdWVzdGlvbik7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBkb1ByZXZTdGVwID0gKHF1ZXN0aW9uRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGVwJykpO1xuICAgIGlmIChjdXJyZW50U3RlcCA+PSAyKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGVwJywgYCR7KGN1cnJlbnRTdGVwIC0gMSl9YCk7XG4gICAgICAgIGNsZWFyRWxlbWVudChxdWVzdGlvbkVsZW1lbnQpO1xuICAgICAgICBjb25zdCBwcmV2UXVlc3Rpb24gPSBnZXRRdWVzdGlvbkVsZW0ocXVlc3Rpb25zRGF0YVtjdXJyZW50U3RlcC0yXSk7XG4gICAgICAgIHF1ZXN0aW9uRWxlbWVudC5hcHBlbmQocHJldlF1ZXN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBidXR0b25QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXYnKTtcbiAgICAgICAgYnV0dG9uUHJldi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBnZXRRdWVzdGlvbkVsZW0gZnJvbSBcIi4uL2dldFF1ZXN0aW9uRWxlbVwiO1xuaW1wb3J0IHtxdWVzdGlvbnNEYXRhfSBmcm9tIFwiLi4vLi4vYmFzZS9xdWVzdGlvbnMtZGF0YVwiO1xuaW1wb3J0IGdldENvbnRhY3RGb3JtIGZyb20gXCIuLi9nZXRDb250YWN0Rm9ybVwiO1xuXG5cbmNvbnN0IHJlbmRlckZvcm0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBxdWVzdGlvbnMgPSBxdWVzdGlvbnNEYXRhO1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVFbGVtZW50KCdmb3JtJywgeyBjbGFzczogJ2Zvcm0nIH0pO1xuICAgIGxldCBjdXJyZW50U3RlcCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGVwJyk7XG4gICAgbGV0IHF1ZXN0aW9uRWxlbWVudDtcbiAgICBpZiAoY3VycmVudFN0ZXAgPCBxdWVzdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXN0aW9uRWxlbWVudCA9IGdldFF1ZXN0aW9uRWxlbShxdWVzdGlvbnNbY3VycmVudFN0ZXAtMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXN0aW9uRWxlbWVudCA9IGdldENvbnRhY3RGb3JtKCk7XG4gICAgfVxuICAgIGZvcm0uYXBwZW5kKHF1ZXN0aW9uRWxlbWVudCk7XG4gICAgcmV0dXJuIGZvcm07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckZvcm07IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL2hlbHBlcnMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHtxdWVzdGlvbnNEYXRhfSBmcm9tIFwiLi4vYmFzZS9xdWVzdGlvbnMtZGF0YVwiO1xuaW1wb3J0IHtnZXRNYXBGcm9tTFN9IGZyb20gXCIuLi9oZWxwZXJzL2dldE1hcEZyb21MU1wiO1xuaW1wb3J0IGNsZWFyRWxlbWVudCBmcm9tIFwiLi4vaGVscGVycy9jbGVhckVsZW1lbnRcIjtcbmltcG9ydCBnZXRRdWVzdGlvbkVsZW0gZnJvbSBcIi4vZ2V0UXVlc3Rpb25FbGVtXCI7XG5pbXBvcnQgZmV0Y2hEYXRhIGZyb20gXCIuLi9wYWdlcy9yZXN1bHRzL2Z1bmN0aW9ucy9mZXRjaERhdGFcIjtcbmltcG9ydCBnZXRQcmVsb2FkZXIgZnJvbSBcIi4vcHJlbG9hZGVyL2dldFByZWxvYWRlclwiO1xuXG5jb25zdCBnZXRDb250YWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RlcCcpKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Zvcm1fX2NvbnRhaW5lcid9KTtcblxuICAgIGNvbnN0IHRpdGxlQ291bnRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Zvcm1fX3RpdGxlLWNvdW50ZXItY29udGFpbmVyJ30pO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCB7Y2xhc3M6ICdmb3JtX190aXRsZSd9LCAn0JLQsNGI0LAg0L/QvtC00LHQvtGA0LrQsCDQs9C+0YLQvtCy0LAhIPCfpbMg0JrRg9C00LAg0L3QsNC8INC+0YLQv9GA0LDQstC40YLRjCDQtdGRPycpO1xuICAgIGNvbnN0IGNvdW50ZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmb3JtX19jb3VudGVyJ30sIGDQqNCw0LMgJHtjdXJyZW50U3RlcH0vJHtxdWVzdGlvbnNEYXRhLmxlbmd0aCArIDF9YCk7XG4gICAgdGl0bGVDb3VudGVyQ29udGFpbmVyLmFwcGVuZCh0aXRsZSwgY291bnRlcik7XG5cbiAgICBjb25zdCBmaWVsZHNldCA9IGNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jywge2NsYXNzOiAnZmllbGRzZXQnfSk7XG5cbiAgICBjb25zdCBuYW1lID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ9Ca0LDQuiDQstCw0YEg0LfQvtCy0YPRgj8nLFxuICAgICAgICBjbGFzczogJ2ZpZWxkc2V0X19pbnB1dC10ZXh0JyxcbiAgICAgICAgaWQ6ICduYW1lJyxcbiAgICAgICAgcmVxdWlyZWQ6ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgbnVtYmVyID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgIG5hbWU6ICdwaG9uZScsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnLFxuICAgICAgICBwYXR0ZXJuOiAnXlxcXFwrP1xcXFxkezAsMjB9KFxcXFwoXFxcXGR7MSwyMH1cXFxcKSk/JCcsXG4gICAgICAgIGNsYXNzOiAnZmllbGRzZXRfX2lucHV0LXRleHQnLFxuICAgICAgICBpZDogJ251bWJlcicsXG4gICAgICAgIHJlcXVpcmVkOiAnJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGVtYWlsID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRS1tYWlsJyxcbiAgICAgICAgY2xhc3M6ICdmaWVsZHNldF9faW5wdXQtdGV4dCcsXG4gICAgICAgIGlkOiAnZW1haWwnLFxuICAgICAgICByZXF1aXJlZDogJycsXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZChuYW1lLCBudW1iZXIsIGVtYWlsKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ2J1dHRvbicsIHR5cGU6ICdzdWJtaXQnfSwgJ9Ce0YLQv9GA0LDQstC40YLRjCcpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gW25hbWUudmFsdWUsIG51bWJlci52YWx1ZSwgZW1haWwudmFsdWVdO1xuICAgICAgICAgICAgY29uc3QgYWxsSW5wdXRzRmlsbGVkID0gdmFsdWVzLmV2ZXJ5KHZhbHVlID0+IHZhbHVlLmxlbmd0aCA+IDApO1xuICAgICAgICAgICAgaWYgKGFsbElucHV0c0ZpbGxlZCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcmVjb3JkQW5zd2Vyc1RvTFMoKTtcbiAgICAgICAgICAgICAgICBzaG93TG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmZXRjaERhdGEsIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQodGl0bGVDb3VudGVyQ29udGFpbmVyLCBmaWVsZHNldCwgYnV0dG9uKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBzaG93TG9hZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY2xlYXJFbGVtZW50KGJvZHkpO1xuICAgIGJvZHkuYXBwZW5kKGdldFByZWxvYWRlcigpKTtcbn1cblxuY29uc3QgcmVjb3JkQW5zd2Vyc1RvTFMgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW5wdXRzW2ldLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge3F1ZXN0aW9uOiBpbnB1dHNbaV0ubmFtZSwgdmFsdWU6IGlucHV0c1tpXS52YWx1ZSwgaWQ6IHF1ZXN0aW9uc0RhdGEubGVuZ3RoICsgaX07XG4gICAgICAgICAgICBsZXQgbWFwRnJvbUxTID0gZ2V0TWFwRnJvbUxTKCdyZXNwb25zZXMnKTtcbiAgICAgICAgICAgIG1hcEZyb21MUy5zZXQocXVlc3Rpb25zRGF0YS5sZW5ndGggKyBpICsgMSwgZGF0YSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVzcG9uc2VzJywgSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShtYXBGcm9tTFMuZW50cmllcygpKSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVzZXRGb3JtID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGVwJywgJzEnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVzcG9uc2VzJywgJ1tdJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBjbGVhckVsZW1lbnQoZm9ybSk7XG4gICAgZm9ybS5hcHBlbmQoZ2V0UXVlc3Rpb25FbGVtKHF1ZXN0aW9uc0RhdGFbMF0pKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb250YWN0Rm9ybTsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vaGVscGVycy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQge3F1ZXN0aW9uc0RhdGF9IGZyb20gXCIuLi9iYXNlL3F1ZXN0aW9ucy1kYXRhXCI7XG5pbXBvcnQgZ2V0UmFkaW9TZXQgZnJvbSBcIi4vZ2V0UmFkaW9TZXRcIjtcbmltcG9ydCBnZXRTZWxlY3RTZXQsIHtoYW5kbGVTZWxlY3RBbnN3ZXJzfSBmcm9tIFwiLi9nZXRTZWxlY3RTZXRcIjtcbmltcG9ydCB7ZG9OZXh0U3RlcCwgZG9QcmV2U3RlcH0gZnJvbSBcIi4vZm9ybS9mdW5jdGlvbnMvZG9TdGVwXCI7XG5pbXBvcnQge2dldE1hcEZyb21MU30gZnJvbSBcIi4uL2hlbHBlcnMvZ2V0TWFwRnJvbUxTXCI7XG5cbmNvbnN0IGdldFF1ZXN0aW9uRWxlbSA9IChxdWVzdGlvbk9iaikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGVwJykpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZm9ybV9fY29udGFpbmVyJ30pO1xuICAgIGNvbnN0IHRpdGxlQ291bnRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Zvcm1fX3RpdGxlLWNvdW50ZXItY29udGFpbmVyJ30pO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDInLCB7Y2xhc3M6ICdmb3JtX190aXRsZSd9LCBxdWVzdGlvbk9iai5xdWVzdGlvbik7XG4gICAgY29uc3QgY291bnRlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Zvcm1fX2NvdW50ZXInfSwgYNCo0LDQsyAke2N1cnJlbnRTdGVwfS8ke3F1ZXN0aW9uc0RhdGEubGVuZ3RoKzF9YCk7XG4gICAgdGl0bGVDb3VudGVyQ29udGFpbmVyLmFwcGVuZCh0aXRsZSwgY291bnRlcik7XG4gICAgY29uc3QgaW5wdXRTZXQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmb3JtX19xdWVzdGlvbid9KTtcbiAgICBpZiAocXVlc3Rpb25PYmouYW5zd2VyVHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICBpbnB1dFNldC5hcHBlbmQoZ2V0UmFkaW9TZXQocXVlc3Rpb25PYmopKTtcbiAgICB9XG4gICAgaWYgKHF1ZXN0aW9uT2JqLmFuc3dlclR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIGlucHV0U2V0LmFwcGVuZChnZXRTZWxlY3RTZXQocXVlc3Rpb25PYmopKTtcbiAgICB9XG4gICAgY29uc3QgcHJldkJ1dHRvbiA9IHJlbmRlclByZXZCdXR0b24oY3VycmVudFN0ZXApO1xuICAgIGNvbnN0IG5leHRCdXR0b24gPSByZW5kZXJOZXh0QnV0dG9uKGN1cnJlbnRTdGVwLCBxdWVzdGlvbk9iaik7XG4gICAgY29uc3QgYnV0dG9ucyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2J1dHRvbnMnfSk7XG4gICAgYnV0dG9ucy5hcHBlbmQocHJldkJ1dHRvbiwgbmV4dEJ1dHRvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKHRpdGxlQ291bnRlckNvbnRhaW5lciwgaW5wdXRTZXQsIGJ1dHRvbnMpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cblxuY29uc3QgcmVuZGVyUHJldkJ1dHRvbiA9IChzdGVwKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogJ2J1dHRvbicsIGlkOiAncHJldicgfSwgJ9Cd0LDQt9Cw0LQnKTtcblxuICAgIGNvbnN0IGFycm93UHJldiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHt9LCAnPCcpO1xuICAgIGJ1dHRvbi5hcHBlbmQoYXJyb3dQcmV2KTtcbiAgICBpZiAoc3RlcCA8PSAxKSB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICAgICAgICBkb1ByZXZTdGVwKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG59XG5cbmNvbnN0IHJlbmRlck5leHRCdXR0b24gPSAoc3RlcCwgcXVlc3Rpb25PYmopID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzOiAnYnV0dG9uJywgaWQ6ICduZXh0JyB9LCAn0JLQv9C10YDRkdC0Jyk7XG4gICAgY29uc3QgYXJyb3dOZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge30sICc+Jyk7XG4gICAgYnV0dG9uLmFwcGVuZChhcnJvd05leHQpO1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9ICFjaGVja0N1cnJlbnRRdWVzdGlvbihxdWVzdGlvbk9iai5pZCk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAocXVlc3Rpb25PYmouYW5zd2VyVHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdEFuc3dlcnMocXVlc3Rpb25PYmopO1xuICAgICAgICB9XG4gICAgICAgIGlmIChxdWVzdGlvbk9iai5hbnN3ZXJUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICAgICAgICAgIGRvTmV4dFN0ZXAoZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgY29uc3QgY2hlY2tDdXJyZW50UXVlc3Rpb24gPSAoaWQpID0+IHtcbiAgICBsZXQgbWFwRnJvbUxTID0gZ2V0TWFwRnJvbUxTKCdyZXNwb25zZXMnKTtcbiAgICByZXR1cm4gISFtYXBGcm9tTFMuZ2V0KGlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UXVlc3Rpb25FbGVtOyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9oZWxwZXJzL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7Z2V0TWFwRnJvbUxTfSBmcm9tIFwiLi4vaGVscGVycy9nZXRNYXBGcm9tTFNcIjtcbmltcG9ydCB7ZG9OZXh0U3RlcH0gZnJvbSBcIi4vZm9ybS9mdW5jdGlvbnMvZG9TdGVwXCI7XG5cbmNvbnN0IGdldFJhZGlvU2V0ID0gKHF1ZXN0aW9uT2JqKSA9PiB7XG4gICAgbGV0IGNoZWNrZWRJdGVtO1xuICAgIGxldCBtYXBGcm9tTFMgPSBnZXRNYXBGcm9tTFMoJ3Jlc3BvbnNlcycpO1xuICAgIGlmIChtYXBGcm9tTFMuZ2V0KHF1ZXN0aW9uT2JqLmlkKSkge1xuICAgICAgICBjaGVja2VkSXRlbSA9IG1hcEZyb21MUy5nZXQocXVlc3Rpb25PYmouaWQpLnZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnLCB7Y2xhc3M6ICdmaWVsZHNldCd9KTtcbiAgICBjb25zdCB2YXJpYW50cyA9IEFycmF5LmZyb20ocXVlc3Rpb25PYmoudmFyaWFudHMua2V5cygpKTtcblxuICAgIHZhcmlhbnRzLmZvckVhY2goZWxlbSA9PiB7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtjbGFzczogJ2ZpZWxkc2V0X19sYWJlbCcsIGZvcjogZWxlbX0sIHF1ZXN0aW9uT2JqLnZhcmlhbnRzLmdldChlbGVtKSk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2ZpZWxkc2V0X19pbnB1dCcsXG4gICAgICAgICAgICBpZDogZWxlbSxcbiAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICB2YWx1ZTogcXVlc3Rpb25PYmoudmFyaWFudHMuZ2V0KGVsZW0pLFxuICAgICAgICAgICAgbmFtZTogJ3ZhcmlhbnQnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6ICcnXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZWxlbSA9PT0gY2hlY2tlZEl0ZW0pIHtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge3F1ZXN0aW9uOiBxdWVzdGlvbk9iai5uYW1lLCB2YWx1ZTogaW5wdXQuaWQsIGlkOiBxdWVzdGlvbk9iai5pZH07XG4gICAgICAgICAgICBsZXQgbWFwRnJvbUxTID0gZ2V0TWFwRnJvbUxTKCdyZXNwb25zZXMnKTtcbiAgICAgICAgICAgIG1hcEZyb21MUy5zZXQocXVlc3Rpb25PYmouaWQsIGRhdGEpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Jlc3BvbnNlcycsIEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20obWFwRnJvbUxTLmVudHJpZXMoKSkpKTtcblxuICAgICAgICAgICAgY29uc3QgYnV0dG9uTmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XG4gICAgICAgICAgICBidXR0b25OZXh0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBkb05leHRTdGVwKGN1cnJlbnRRdWVzdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjaGVja21hcmsgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywge2NsYXNzOiAnZmllbGRzZXRfX2NoZWNrbWFyayd9KTtcbiAgICAgICAgbGFiZWwuYXBwZW5kKGlucHV0LCBjaGVja21hcmspO1xuICAgICAgICBmaWVsZHNldC5hcHBlbmQobGFiZWwpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaWVsZHNldDtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRSYWRpb1NldDsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vaGVscGVycy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQge2dldE1hcEZyb21MU30gZnJvbSBcIi4uL2hlbHBlcnMvZ2V0TWFwRnJvbUxTXCI7XG5pbXBvcnQge2RvTmV4dFN0ZXB9IGZyb20gXCIuL2Zvcm0vZnVuY3Rpb25zL2RvU3RlcFwiO1xuXG5jb25zdCBnZXRTZWxlY3RTZXQgPSAocXVlc3Rpb25PYmopID0+IHtcbiAgICBsZXQgbWFwRnJvbUxTID0gZ2V0TWFwRnJvbUxTKCdyZXNwb25zZXMnKTtcbiAgICBsZXQgc2V0T2ZTZWxlY3RlZCA9IG5ldyBTZXQoKTtcblxuICAgIGlmIChtYXBGcm9tTFMuZ2V0KHF1ZXN0aW9uT2JqLmlkKSkge1xuICAgICAgICBzZXRPZlNlbGVjdGVkID0gbmV3IFNldChtYXBGcm9tTFMuZ2V0KHF1ZXN0aW9uT2JqLmlkKS52YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ID0gY3JlYXRlRWxlbWVudCgnc2VsZWN0Jywge211bHRpcGxlOiAnJywgbmFtZTogJ29wdGlvbnMnLCBpZDogJ29wdGlvbnMnLCBjbGFzczogJ3NlbGVjdCd9KTtcbiAgICBjb25zdCB2YXJpYW50cyA9IEFycmF5LmZyb20ocXVlc3Rpb25PYmoudmFyaWFudHMua2V5cygpKTtcblxuICAgIHZhcmlhbnRzLmZvckVhY2goZWxlbSA9PiB7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhxdWVzdGlvbk9iai52YXJpYW50cy5nZXQoKSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgIGlkOiBxdWVzdGlvbk9iai5pZCxcbiAgICAgICAgICAgIGNsYXNzOiAnZmllbGRzZXRfX29wdGlvbicsXG4gICAgICAgICAgICB2YWx1ZTogZWxlbSxcbiAgICAgICAgICAgIG5hbWU6ICd2YXJpYW50JyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiAnJ1xuICAgICAgICB9LCBxdWVzdGlvbk9iai52YXJpYW50cy5nZXQoZWxlbSkpO1xuXG4gICAgICAgIGlmIChzZXRPZlNlbGVjdGVkICYmIHNldE9mU2VsZWN0ZWQuaGFzKGVsZW0pKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0Jyk7XG4gICAgICAgICAgICBidXR0b25OZXh0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdDtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVTZWxlY3RBbnN3ZXJzID0gKHF1ZXN0aW9uT2JqKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gW107XG4gICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7cXVlc3Rpb246IHF1ZXN0aW9uT2JqLm5hbWUsIHZhbHVlOiBzZWxlY3RlZCwgaWQ6IHF1ZXN0aW9uT2JqLmlkfTtcbiAgICAgICAgbGV0IG1hcEZyb21MUyA9IGdldE1hcEZyb21MUygncmVzcG9uc2VzJyk7XG4gICAgICAgIG1hcEZyb21MUy5zZXQocXVlc3Rpb25PYmouaWQsIGRhdGEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVzcG9uc2VzJywgSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShtYXBGcm9tTFMuZW50cmllcygpKSkpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICAgICAgICBkb05leHRTdGVwKGZvcm1Db250YWluZXIpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYnV0dG9uTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0Jyk7XG4gICAgICAgIGJ1dHRvbk5leHQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGdldFNlbGVjdFNldDsiLCJjb25zdCBnZXRQcmVsb2FkZXIgPSAoKSA9PiB7XG4gICAgbGV0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvYWRlci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImxvYWRpbmdpby1zcGlubmVyLXNwaW4tbHRiNjhpdGxpd2xcIj4nICtcbiAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cImxkaW8tOWl4Z2VvYXhlY1wiPicgK1xuICAgICAgICAnICAgICAgICAgICAgPGRpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICA8ZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICA8L2Rpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgIDxkaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgPGRpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICA8ZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICA8L2Rpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgIDxkaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgPGRpdj4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICA8ZGl2PicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+JyArXG4gICAgICAgICcgICAgICAgICAgICA8L2Rpdj4nICtcbiAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICcgICAgPC9kaXY+J1xuICAgIHJldHVybiBsb2FkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFByZWxvYWRlcjsiLCJjb25zdCBjbGVhckVsZW1lbnQgPSAocGFyZW50RWxlbWVudCkgPT4ge1xuICB3aGlsZSAocGFyZW50RWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBjbGVhckVsZW1lbnQ7XG4iLCJjb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZ05hbWUsIGF0dHJpYnV0ZXMsIHRleHRDb250ZW50KSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfVxuICBpZiAodGV4dENvbnRlbnQpIGVsLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIHJldHVybiBlbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0TWFwRnJvbUxTKG5hbWUpIHtcbiAgICBjb25zdCBtYXBKc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgaWYgKG1hcEpzb24gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAoKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAoSlNPTi5wYXJzZShtYXBKc29uKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBwYXJzaW5nIEpTT04gZGF0YSBmb3IgJHtuYW1lfTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgfVxufSIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCByZW5kZXJGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vcmVuZGVyRm9ybVwiO1xuXG5jb25zdCBtYWluUGFnZSA9ICgpID0+IHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGVwJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0ZXAnLCAnMScpO1xuICAgIH1cbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnY29udGFpbmVyJyB9KTtcbiAgICBjb25zdCBhYm91dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdhYm91dCcgfSk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMScsIHsgY2xhc3M6ICdhYm91dF9fdGl0bGUnIH0sICfQn9C+0LTQsdC10YDQtdC8INCS0KPQlyDQvNC10YfRgtGLJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KCdwJywgeyBjbGFzczogJ2Fib3V0X19kZXNjcmlwdGlvbicgfSwgJ9Ce0YLQstC10YLRjNGC0LUnICtcbiAgICAgICAgJyDQvdCwIDgg0L/RgNC+0YHRgtGL0YUg0LLQvtC/0YDQvtGB0L7Qsiwg0Lgg0LzRiyDRgdC+0YHRgtCw0LLQuNC8INGB0L/QuNGB0L7QuiDQvdCw0LHQvtC70LXQtSDQv9C+0LTRhdC+0LTRj9GJ0LjRhSDQtNC70Y8g0LLQsNGBINCy0YPQt9C+0LInKTtcblxuICAgIGNvbnN0IGRlY29yQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Fib3V0X19kZWNvcicgfSk7XG4gICAgY29uc3QgZGVjb3JXb3JkMSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdhYm91dF9fZGVjb3Jfd29yZDEgYWJvdXRfX2RlY29yX3dvcmQnIH0sICfQkdC10YHQv9C70LDRgtC90L4nKTtcbiAgICBjb25zdCBkZWNvcldvcmQyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Fib3V0X19kZWNvcl93b3JkMiBhYm91dF9fZGVjb3Jfd29yZCcgfSwgJ9C30LAgMzAg0YHQtdC60YPQvdC0Jyk7XG4gICAgY29uc3QgZGVjb3JDaXJjbGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnYWJvdXRfX2RlY29yX2NpcmNsZScgfSk7XG4gICAgY29uc3QgZGVjb3JMaW5lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Fib3V0X19kZWNvcl9saW5lJyB9KTtcbiAgICBjb25zdCBkZWNvckxpZ2h0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2Fib3V0X19kZWNvcl9saWdodCcgfSk7XG4gICAgY29uc3QgZGVjb3JCb3R0b20gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnYWJvdXRfX2RlY29yX2JvdHRvbScgfSk7XG4gICAgZGVjb3JDb250YWluZXIuYXBwZW5kKGRlY29yV29yZDEsIGRlY29yV29yZDIsIGRlY29yQ2lyY2xlLCBkZWNvckxpbmUsIGRlY29yTGlnaHQsIGRlY29yQm90dG9tKTtcbiAgICBhYm91dC5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uLCBkZWNvckNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGFib3V0LCByZW5kZXJGb3JtKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5leHBvcnQgZGVmYXVsdCBtYWluUGFnZTsiLCJpbXBvcnQgZ2V0UmVxdWVzdEJvZHkgZnJvbSBcIi4vZ2V0UmVxdWVzdEJvZHlcIjtcbmltcG9ydCBjbGVhckVsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvY2xlYXJFbGVtZW50XCI7XG5pbXBvcnQgcmVzdWx0c1BhZ2UgZnJvbSBcIi4uL3Jlc3VsdHNQYWdlXCI7XG5pbXBvcnQge3Jlc2V0Rm9ybX0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZ2V0Q29udGFjdEZvcm1cIjtcblxuY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ2FjY2VwdCcsICcqLyonKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IGdldFJlcXVlc3RCb2R5KCk7XG5cbiAgICBmZXRjaCgnaHR0cDovL2Vjby1zaWxpY29uLTM4NzQxOS51Yy5yLmFwcHNwb3QuY29tL3N1cnZleXMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjbGVhckVsZW1lbnQoYm9keSk7XG4gICAgICAgIGJvZHkuYXBwZW5kKHJlc3VsdHNQYWdlKGRhdGEpKTtcbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yICsgJ2l0YHMgZXJyb3IhJyk7XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaERhdGE7IiwiaW1wb3J0IHtnZXRNYXBGcm9tTFN9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2dldE1hcEZyb21MU1wiO1xuXG5jb25zdCBnZXRSZXF1ZXN0Qm9keSA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICBcImluaXRpYXRvclwiOiBcIlwiLFxuICAgICAgICBcImNpdGllc1wiOiBbXSxcbiAgICAgICAgXCJjdXJyZW50RWR1Y2F0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwiZWR1Y2F0aW9uVGFyZ2V0VHlwZVwiOiBcIlwiLFxuICAgICAgICBcImxlYXJuaW5nRm9ybVwiOiBcIlwiLFxuICAgICAgICBcInBhaWRFZHVjYXRpb25BbGxvd2VkVHlwZVwiOiBcIlwiLFxuICAgICAgICBcImVkdWNhdGlvblNwZWNpYWxpdHlUeXBlXCI6IFtdLFxuICAgICAgICBcImhvd01hbnlUb0FkbWlzc2lvblwiOiBcIlwiLFxuICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgXCJwaG9uZVwiOiBcIlwiLFxuICAgICAgICBcImVtYWlsXCI6IFwiXCJcbiAgICB9XG5cbiAgICBsZXQgbWFwRnJvbUxTID0gZ2V0TWFwRnJvbUxTKCdyZXNwb25zZXMnKTtcbiAgICBjb25zdCBhbnN3ZXJzID0gQXJyYXkuZnJvbShtYXBGcm9tTFMudmFsdWVzKCkpO1xuICAgIGFuc3dlcnMuZm9yRWFjaChhbnN3ZXIgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGJvZHksIGFuc3dlci5xdWVzdGlvbikpIHtcbiAgICAgICAgICAgIGJvZHlbYW5zd2VyLnF1ZXN0aW9uXSA9IGFuc3dlci52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBib2R5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSZXF1ZXN0Qm9keTsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vLi4vaGVscGVycy9jcmVhdGVFbGVtZW50XCI7XG5cbmNvbnN0IGdldFJlc3VsdEVsZW1lbnQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RpdHV0ZSd9KTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywge2NsYXNzOiAnaW5zdGl0dXRlLXRpdGxlJ30sIGRhdGEudGl0bGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgZGF0YS5pbnN0aXR1dGlvblR5cGUpO1xuICAgIGNvbnN0IGNpdHkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7fSwgZGF0YS5hZGRyZXNzKTtcbiAgICBjb25zdCBzcGVjaWFsaXRpZXMgPSBkYXRhLnNwZWNpYWxpdGllcztcbiAgICBjb25zdCBzcGVjaWFsaXR5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge30pO1xuICAgIHNwZWNpYWxpdGllcy5mb3JFYWNoKHNwZWNpYWxpdHkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHtjbGFzczogJ2luc3RpdHV0ZS1zcGVjaWFsaXR5J30sIHNwZWNpYWxpdHkpO1xuICAgICAgICBzcGVjaWFsaXR5Q29udGFpbmVyLmFwcGVuZChlbGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ2J1dHRvbiByZXN1bHRzLWJ1dHRvbid9KTtcbiAgICBjb25zdCBzaXRlID0gY3JlYXRlRWxlbWVudCgnYScsIHtjbGFzczogJ3Jlc3VsdHMtYnV0dG9uX2xpbmsnfSwgXCLQn9C+0LTRgNC+0LHQvdC10LUuLi5cIik7XG4gICAgY29uc3QgbGluayA9IGRhdGEuc2l0ZTtcbiAgICBsaW5rID8gc2l0ZS5ocmVmID0gbGluayA6IHNpdGUuaHJlZiA9ICcjJztcbiAgICBidXR0b24uYXBwZW5kKHNpdGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQodGl0bGUsIHR5cGUsIGNpdHksIHNwZWNpYWxpdHlDb250YWluZXIsIGJ1dHRvbik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSZXN1bHRFbGVtZW50OyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBnZXRSZXN1bHRFbGVtZW50IGZyb20gXCIuL2dldFJlc3VsdEVsZW1lbnRcIjtcbmltcG9ydCBjbGVhckVsZW1lbnQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvY2xlYXJFbGVtZW50XCI7XG5pbXBvcnQgbWFpblBhZ2UgZnJvbSBcIi4uL21haW4vbWFpblBhZ2VcIjtcblxuY29uc3QgcmVzdWx0c1BhZ2UgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdjb250YWluZXItcmVzdWx0cycgfSk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogJ2J1dHRvbicgfSwgXCLQn9GA0L7QudGC0Lgg0YLQtdGB0YIg0LfQsNC90L7QstC+XCIpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY2xlYXJFbGVtZW50KGJvZHkpO1xuICAgICAgICBib2R5LmFwcGVuZChtYWluUGFnZSgpKTtcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZChidXR0b24pO1xuICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnaW5zdGl0dXRlcycgfSk7XG4gICAgZGF0YS5pbnN0aXR1dGlvbnMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZ2V0UmVzdWx0RWxlbWVudChvYmopO1xuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZChpdGVtKTtcbiAgICB9KTtcbiAgICBjb250YWluZXIuYXBwZW5kKHJlc3VsdHNDb250YWluZXIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc3VsdHNQYWdlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IG1haW5QYWdlIGZyb20gXCIuL3BhZ2VzL21haW4vbWFpblBhZ2VcIjtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5ib2R5LmFwcGVuZChtYWluUGFnZSgpKTsiXSwibmFtZXMiOlsiaW5pdGlhdG9yTWFwIiwiTWFwIiwiY2l0aWVzTWFwIiwiY3VycmVudEVkdWNhdGlvbk1hcCIsImVkdWNhdGlvblRhcmdldFR5cGVNYXAiLCJsZWFybmluZ0Zvcm1NYXAiLCJwYWlkRWR1Y2F0aW9uQWxsb3dlZFR5cGVNYXAiLCJob3dNYW55VG9BZG1pc3Npb25NYXAiLCJlZHVjYXRpb25TcGVjaWFsaXR5VHlwZU1hcCIsInF1ZXN0aW9uc0RhdGEiLCJxdWVzdGlvbiIsIm5hbWUiLCJhbnN3ZXJUeXBlIiwidmFyaWFudHMiLCJpZCIsImNsZWFyRWxlbWVudCIsImdldFF1ZXN0aW9uRWxlbSIsImdldENvbnRhY3RGb3JtIiwiZG9OZXh0U3RlcCIsInF1ZXN0aW9uRWxlbWVudCIsImN1cnJlbnRTdGVwIiwiTnVtYmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0ZXBzQ291bnQiLCJsZW5ndGgiLCJzZXRJdGVtIiwiY29uY2F0IiwibmV4dFF1ZXN0aW9uIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kIiwiZG9QcmV2U3RlcCIsInByZXZRdWVzdGlvbiIsImJ1dHRvblByZXYiLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXJGb3JtIiwicXVlc3Rpb25zIiwiZm9ybSIsImdldE1hcEZyb21MUyIsImZldGNoRGF0YSIsImdldFByZWxvYWRlciIsInRpdGxlQ291bnRlckNvbnRhaW5lciIsInRpdGxlIiwiY291bnRlciIsImZpZWxkc2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJudW1iZXIiLCJwYXR0ZXJuIiwiZW1haWwiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ2YWx1ZXMiLCJ2YWx1ZSIsImFsbElucHV0c0ZpbGxlZCIsImV2ZXJ5IiwicHJldmVudERlZmF1bHQiLCJyZWNvcmRBbnN3ZXJzVG9MUyIsInNob3dMb2FkZXIiLCJzZXRUaW1lb3V0IiwiYm9keSIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwiZGF0YSIsIm1hcEZyb21MUyIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJBcnJheSIsImZyb20iLCJlbnRyaWVzIiwicmVzZXRGb3JtIiwiZ2V0UmFkaW9TZXQiLCJnZXRTZWxlY3RTZXQiLCJoYW5kbGVTZWxlY3RBbnN3ZXJzIiwicXVlc3Rpb25PYmoiLCJpbnB1dFNldCIsInByZXZCdXR0b24iLCJyZW5kZXJQcmV2QnV0dG9uIiwibmV4dEJ1dHRvbiIsInJlbmRlck5leHRCdXR0b24iLCJidXR0b25zIiwic3RlcCIsImFycm93UHJldiIsImZvcm1Db250YWluZXIiLCJhcnJvd05leHQiLCJjaGVja0N1cnJlbnRRdWVzdGlvbiIsImdldCIsImNoZWNrZWRJdGVtIiwia2V5cyIsImZvckVhY2giLCJlbGVtIiwibGFiZWwiLCJpbnB1dCIsImNoZWNrZWQiLCJjdXJyZW50UXVlc3Rpb24iLCJidXR0b25OZXh0IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja21hcmsiLCJzZXRPZlNlbGVjdGVkIiwiU2V0Iiwic2VsZWN0IiwibXVsdGlwbGUiLCJvcHRpb24iLCJoYXMiLCJzZWxlY3RlZCIsIm9wdGlvbnMiLCJwdXNoIiwibG9hZGVyIiwiaW5uZXJIVE1MIiwicGFyZW50RWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImZpcnN0Q2hpbGQiLCJ0YWdOYW1lIiwiYXR0cmlidXRlcyIsInRleHRDb250ZW50IiwiZWwiLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJtYXBKc29uIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsIm1haW5QYWdlIiwiYWJvdXQiLCJkZXNjcmlwdGlvbiIsImRlY29yQ29udGFpbmVyIiwiZGVjb3JXb3JkMSIsImRlY29yV29yZDIiLCJkZWNvckNpcmNsZSIsImRlY29yTGluZSIsImRlY29yTGlnaHQiLCJkZWNvckJvdHRvbSIsImdldFJlcXVlc3RCb2R5IiwicmVzdWx0c1BhZ2UiLCJoZWFkZXJzIiwiSGVhZGVycyIsInJlcXVlc3RCb2R5IiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibG9nIiwiYW5zd2VycyIsImFuc3dlciIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImdldFJlc3VsdEVsZW1lbnQiLCJpbnN0aXR1dGlvblR5cGUiLCJjaXR5IiwiYWRkcmVzcyIsInNwZWNpYWxpdGllcyIsInNwZWNpYWxpdHlDb250YWluZXIiLCJzcGVjaWFsaXR5Iiwic2l0ZSIsImxpbmsiLCJocmVmIiwicmVzdWx0c0NvbnRhaW5lciIsImluc3RpdHV0aW9ucyIsIm9iaiIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9