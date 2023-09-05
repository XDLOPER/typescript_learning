"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("./variables");
const functions_1 = require("./functions");
const object_1 = require("./object");
////////////////////////////////////////////////////////////////
// typescript üzerinde denemeler ve öğrenme çabaları
// değişkeni başka yerden alıp ts e uygun bir şekilde veriyi çekmek ve değiştirmek
let islog = (0, functions_1.setLoggedFunc)(variables_1.isLogged, true);
// tür kontrolü için bir örnek
let isJsonObjectControl = typeof variables_1.JSONobject == "object" ? true : false;
// obje birleştirme ve birkaç tür örnekleri 'userObj' object olarak dönüyor
const user = (0, functions_1.userObj)({ name: "yaso", surname: "kaso", age: 19 }); // bir instance oluşturuyor aslında
const assignObject = Object.assign(user, { objects: [object_1.X_object] });
////////////////////////////////////////////////////////////////
// birazcıkta function örnekleri yapalım
const userFunc = (0, functions_1.exampleType)({ name: "yaso", surname: "kaso", age: 19 });
////////////////////////////////////////////////////////////////
// array ile bikaç deneme rest operator ile
const array = []; // type tanımlamaları bikaç tane olabilir mesela :[] ,string[],number[] şeklinde veya Array<any> Array<string>,Array<number> şeklinde olabilir
array.push('hello');
array.push('days!');
// array.push(2) // buna kızacaktır çünkü array türü string değerleri alıyor
const array1 = [{}, {}, {}];
const array2 = [{}, {}];
const arrayAssign = [...array1, ...array2];
const numbers = [1, 2, 3];
numbers.push(2);
numbers.push('wada');
// numbers.push({}) // bu türü kabul etmeyecektir çünkü bu object türündedir 
const userExample = { name: 'yaso', email: 'yaso@example.com', password: 123 };
const objArray = [];
objArray.push(userExample);
// objArray.push({}) // type User duşında olan hiçbir şeyi kabul etmeyecektir userExample'da username girmedik çünkü username type da opsiyonel olarak ayarlandı. 
////////////////////////////////////////////////////////////////
// tuple examples birazcıkta tuple neymiş ona bakalım 
const tuple = [1, 'hello worlds!', 2]; // tuple lar sınırlı sayıda indexe sahiptirler ve typescript compiler sayesinde okunabilir vanilla js de yoktur
////////////////////////////////////////////////////////////////
// OBJECT çalışmaları ve ve biraz oynama vakti
const exampleObjectModel = {
    x: 0,
    y: 0,
    z: 0,
    width: 0,
    height: 0,
    depth: 0
};
const obj = new object_1.OBJECTEXAMPLE(Object.assign({}, exampleObjectModel));
const object = new object_1.OBJECT(Object.assign({}, exampleObjectModel));
const position = new object_1.Position({ x: exampleObjectModel.x, y: exampleObjectModel.y, z: exampleObjectModel.z });
const size = new object_1.Size3D({ width: exampleObjectModel.width, height: exampleObjectModel.height, depth: exampleObjectModel.depth });
const styleBox = new object_1.StyleBox({ background: '', radius: 0, border: '' });
// classic bir güncelleme fonksiyonu
obj.setPosition({ x: 0, y: 0, z: 0 });
// biraz daha profesyonel callback ile güncelleme fonksiyonu
object.setPosition((prevState) => (Object.assign(Object.assign({}, prevState), { x: 50 })));
// burada aslında obje size methodu type türünden herşey belirli olmasına karşın çalışmıyor yani setSize içinde x y z diye bir prop yok width.height.depth var fakat diğerlerini ekleyebiliyor type tanımlı olmasına karşın 
object.setSize((prevState) => (Object.assign(Object.assign({}, prevState), { y: 1510 }))); // burası yanlış çalışıyor mesela şuan çalıştı azönce çalışmıyordu
object.setSize((prevState) => (Object.assign(Object.assign({}, prevState), { depth: 100 }))); // doğrusu bu olması lazım
object.setBody((prevState) => (Object.assign(Object.assign({}, prevState), { background: 'example', radius: 100, border: '2px solid black' })));
////////////// - Logları burada basıyorum - /////////////
//console.log(getUserId)
//console.log(user)
//console.log(getLoggedFunc(islog))
//console.log(isJsonObjectControl)
//console.log(userFunc)
//console.log(array)
//console.log('object assign : ', assignObject, typeof assignObject)
//console.log('object assign : ', arrayAssign, typeof arrayAssign)
//console.log(numbers)
//console.log(objArray[0])
//console.log(tuple)
//console.log(Y_object)
//console.log(CarType.Audi,CarType.Mercedes,CarType.Renault)
//console.log(Z_object)
//console.log(onionTypes('code'),onionTypes(404))
//console.log(obj)
//console.log(object.getObject())
console.log(position.setPosition((prevState) => (Object.assign(Object.assign({}, prevState), { x: 100 }))));
console.log(size.setSize((prevState) => (Object.assign(Object.assign({}, prevState), { width: 100 }))));
console.log(styleBox.setStyle((prevState) => (Object.assign(Object.assign({}, prevState), { background: 'hello' }))));
