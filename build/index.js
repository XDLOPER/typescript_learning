"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("./variables");
const functions_1 = require("./functions");
const object_1 = require("./object");
// değişkeni başka yerden alıp ts e uygun bir şekilde veriyi çekmek ve değiştirmek
let islog = (0, functions_1.setLoggedFunc)(variables_1.isLogged, true);
// tür kontrolü için bir örnek
let isJsonObjectControl = typeof variables_1.JSONobject == "object" ? true : false;
// obje birleştirme ve birkaç tür örnekleri 'userObj' object olarak dönüyor
const user = (0, functions_1.userObj)({ name: "yaso", surname: "kaso", age: 19 }); // bir instance oluşturuyor aslında
const assignObject = Object.assign(user, { objects: [object_1.X_object] });
// array ile bikaç deneme rest operator ile
const array1 = [{}, {}, {}];
const array2 = [{}, {}];
const arrayAssign = [...array1, ...array2];
const numbers = [1, 2, 3];
numbers.push(2);
numbers.push('wada');
// numbers.push({}) // bu türü kabul etmeyecektir çünkü bu object türündedir 
// OBJECT ile biraz oynama vakti
object_1.obj.setPosition({ x: 0, y: 0, z: 0 });
object_1.object.setPosition({ x: 1, y: 2, z: 3 });
////////////// - console - /////////////u
//console.log(getUserId)
//console.log(user)
//console.log(getLoggedFunc(islog))
//console.log(isJsonObjectControl)
//console.log('object assign : ', assignObject, typeof assignObject)
//console.log('object assign : ', arrayAssign, typeof arrayAssign)
//console.log(numbers)
//console.log(Y_object)
//console.log(CarType.Audi,CarType.Mercedes,CarType.Renault)
//console.log(Z_object)
//console.log(onionTypes('code'),onionTypes(404))
console.log(object_1.obj);
console.log(object_1.object);
