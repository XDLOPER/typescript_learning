import {getUserId,isLogged,JSONobject} from "./variables"
import {getLoggedFunc,setLoggedFunc,userObj,onionTypes, exampleType} from "./functions"
import {X_object,Y_object,CarType,Z_object,OBJECT,OBJECTEXAMPLE, Size3D, StyleBox, Position3D} from "./object"
import {OBJECT_INTERFACE_MAIN} from "./interfaces"
import {} from "./loops"

////////////////////////////////////////////////////////////////
// typescript üzerinde denemeler ve öğrenme çabaları

// değişkeni başka yerden alıp ts e uygun bir şekilde veriyi çekmek ve değiştirmek
let islog = setLoggedFunc(isLogged,true)

// tür kontrolü için bir örnek
let isJsonObjectControl:boolean = typeof JSONobject == "object" ? true : false

// obje birleştirme ve birkaç tür örnekleri 'userObj' object olarak dönüyor
const user = userObj({name: "yaso",surname:"kaso",age:19}) // bir instance oluşturuyor aslında
const assignObject:{objects:object[]} = Object.assign(user,{objects:[X_object]})

////////////////////////////////////////////////////////////////
// birazcıkta function örnekleri yapalım

const userFunc = exampleType({name: "yaso",surname:"kaso",age:19})

////////////////////////////////////////////////////////////////
// array ile bikaç deneme rest operator ile

const array:Array<string> = [] // type tanımlamaları bikaç tane olabilir mesela :[] ,string[],number[] şeklinde veya Array<any> Array<string>,Array<number> şeklinde olabilir
array.push('hello')
array.push('days!')
// array.push(2) // buna kızacaktır çünkü array türü string değerleri alıyor

const array1 = [{},{},{}]
const array2 = [{},{}]
const arrayAssign:object[] = [...array1,...array2]

const numbers:(number | string)[]= [1,2,3]
numbers.push(2) 
numbers.push('wada') 
// numbers.push({}) // bu türü kabul etmeyecektir çünkü bu object türündedir 

const userExample = {name:'yaso',email:'yaso@example.com',password:123}
type User = { name:string; username?:string, email:string; password:number | string}
const objArray:Array<User> = []

objArray.push(userExample)
// objArray.push({}) // type User duşında olan hiçbir şeyi kabul etmeyecektir userExample'da username girmedik çünkü username type da opsiyonel olarak ayarlandı. 


////////////////////////////////////////////////////////////////
// tuple examples birazcıkta tuple neymiş ona bakalım 

const tuple:[number,string,number?] = [1,'hello worlds!',2] // tuple lar sınırlı sayıda indexe sahiptirler ve typescript compiler sayesinde okunabilir vanilla js de yoktur

////////////////////////////////////////////////////////////////
// OBJECT çalışmaları ve ve biraz oynama vakti

const exampleObjectModel = {
     x:0,
     y:0,
     z:0,
     width:0,
     height:0,
     depth:0
}

const obj = new OBJECTEXAMPLE({...exampleObjectModel})
const object = new OBJECT({...exampleObjectModel})
// const position = new Position3D({x:exampleObjectModel.x,y:exampleObjectModel.y,z:exampleObjectModel.z}) // abstract class lar somut hale getirelemez
// const size = new Size3D({width:exampleObjectModel.width,height:exampleObjectModel.height,depth:exampleObjectModel.depth}) // abstract class lar somut hale getirelemez
// const styleBox = new StyleBox({background:'',radius:0,border:''}) // abstract class lar somut hale getirelemez

// classic bir güncelleme fonksiyonu
obj.setPosition({x:0,y:0,z:0})

// biraz daha profesyonel callback ile güncelleme fonksiyonu
object.setPosition((prevState) => ({...prevState, x:50}))

// burada aslında obje size methodu type türünden herşey belirli olmasına karşın çalışmıyor yani setSize içinde x y z diye bir prop yok width.height.depth var fakat diğerlerini ekleyebiliyor type tanımlı olmasına karşın 
object.setSize((prevState) => ({...prevState, y:1510})) // burası yanlış çalışıyor mesela şuan çalıştı azönce çalışmıyordu
object.setSize((prevState) => ({...prevState, depth:100})) // doğrusu bu olması lazım


object.setBody((prevState) => ({...prevState, background:'example',radius:100,border:'2px solid black'}))









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
//console.log(position.setPosition((prevState)=>({...prevState,x:100})))
//console.log(size.setSize((prevState)=>({...prevState,width:100})))
//console.log(styleBox.setStyle((prevState)=>({...prevState,background:'hello'})))

