import {getUserId,isLogged,JSONobject} from "./variables"
import {getLoggedFunc,setLoggedFunc,userObj,onionTypes} from "./functions"
import {X_object,Y_object,CarType,Z_object,obj,object} from "./object"
import {} from "./loops"

// değişkeni başka yerden alıp ts e uygun bir şekilde veriyi çekmek ve değiştirmek
let islog = setLoggedFunc(isLogged,true)

// tür kontrolü için bir örnek
let isJsonObjectControl:boolean = typeof JSONobject == "object" ? true : false

// obje birleştirme ve birkaç tür örnekleri 'userObj' object olarak dönüyor
const user = userObj({name: "yaso",surname:"kaso",age:19}) // bir instance oluşturuyor aslında
const assignObject:{objects:object[]} = Object.assign(user,{objects:[X_object]})

// array ile bikaç deneme rest operator ile
const array1 = [{},{},{}]
const array2 = [{},{}]
const arrayAssign:object[] = [...array1,...array2]

const numbers:(number | string)[]= [1,2,3]
numbers.push(2) 
numbers.push('wada') 
// numbers.push({}) // bu türü kabul etmeyecektir çünkü bu object türündedir 

// OBJECT ile biraz oynama vakti
obj.setPosition({x:0,y:0,z:0})
object.setPosition({x:1,y:2,z:3})

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
console.log(obj)
console.log(object)

