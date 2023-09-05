// basic düzey bir type fonksiyon
export const getIDRandom = (min:number,max:number):number => {
     min = Math.min(min)
     max = Math.max(max)

     return Math.floor(Math.random() * (max - min)) + min
}

// başka dosyadaki bir değişkeni değiştirmek için bu yapıyı kullanıyoruz çünkü ts import export yapıldığında değişken constants olmasa bile değişken değerini değiştirmene izin vermez
export function setLoggedFunc(variable:boolean,set:boolean):boolean{
     return variable = set
}

export function getLoggedFunc(variable:boolean):boolean{
     return variable
}

// location?:object, ünlem koyduğumuz zaman bunun opsiyonel olduğunu veriyi vermesende olur diyoruz
export function userObj({name,surname,age,location = {}}:{name:string,surname:string,age:number,location?:object}):object{
     return {
          name,
          surname,
          age,
          location
     }
}


export function onionTypes(value:string | number):string | number{
     // bu şekilde ts if else scopları içinde türün ne olduğuna göre işlem yapabiliyor
     if(typeof value === 'string'){
          return value.toUpperCase()
     }else{
          return value
     }
     // return value.toUpperCase() // bu hata verecektir tür string mi number mı bilemiyoruz
}


type User = {
     name:string,
     surname:string,
     age:number
}

export function exampleType (user:User):User{
     return user
}












