"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onionTypes = exports.userObj = exports.getLoggedFunc = exports.setLoggedFunc = exports.getIDRandom = void 0;
// basic düzey bir type fonksiyon
const getIDRandom = (min, max) => {
    min = Math.min(min);
    max = Math.max(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
exports.getIDRandom = getIDRandom;
// başka dosyadaki bir değişkeni değiştirmek için bu yapıyı kullanıyoruz çünkü ts import export yapıldığında değişken constants olmasa bile değişken değerini değiştirmene izin vermez
function setLoggedFunc(variable, set) {
    return variable = set;
}
exports.setLoggedFunc = setLoggedFunc;
function getLoggedFunc(variable) {
    return variable;
}
exports.getLoggedFunc = getLoggedFunc;
// location?:object, ünlem koyduğumuz zaman bunun opsiyonel olduğunu veriyi vermesende olur diyoruz
function userObj({ name, surname, age, location = {} }) {
    return {
        name,
        surname,
        age,
        location
    };
}
exports.userObj = userObj;
function onionTypes(value) {
    // bu şekilde ts if else scopları içinde türün ne olduğuna göre işlem yapabiliyor
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        return value;
    }
    // return value.toUpperCase() // bu hata verecektir tür string mi number mı bilemiyoruz
}
exports.onionTypes = onionTypes;
