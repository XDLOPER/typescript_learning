import {Z_object_Interface} from '../interfaces'

export enum CarType{
     Renault = 'Renault',
     Ford = 'Ford',
     Wolswagen = 'Wolswagen',
     Toyota = 'Toyota',
     Audi = 'Audi',
     Bmw = 'Bmw',
     Mercedes = 'Mercedes',
}

export const X_object:object = {x:0, y:0, z:0, width:0, height:0, depth:0}

export const Y_object:{type:string,model:(string | number),year:number,color?:string} = {type:'renault',model:'megane',year:2007}

export const Z_object:Z_object_Interface = {
     position:{x:0,y:0,z:0},
     size:{width:0,height:0,depth:0},
     body:{
          background:null,
          radius:0,
          border:null
     }
}


// class Model Exmple

class OBJECTEXAMPLE{
     private x:number = 0;
     private y:number = 0;
     private z:number = 0;
     private readonly width:number = 0;
     private readonly height:number = 0;
     private readonly depth:number = 0;

     constructor({x,y,z,width,height,depth}:{x:number,y:number,z:number,width:number,height:number,depth:number}){
          this.x = x
          this.y = y
          this.z = z
          this.width = width
          this.height = height
          this.depth = depth
     }

     public getObject():object {
          return {x:this.x,y:this.y,z:this.z,width:this.width,height:this.height,depth:this.depth}
     }
     public setPosition({x,y,z}:{x:number,y:number,z:number}):object {
          this.x = x
          this.y = y
          this.z = z

          return this.getObject
     }
}

class OBJECT{
     private position:{x:number,y:number,z:number} = {x:0,y:0,z:0}
     private readonly size:{width:number,height:number,depth:number} = {width:0,height:0,depth:0}
     private body:{background:string | null,radius:number,border:string | null} = {background:null,radius:0,border:null}

     constructor({x,y,z,width,height,depth,background,radius,border} : {x:number,y:number,z:number,width:number,height:number,depth:number,background?:string | null,radius?:number,border?:string | null}){
          this.position = {x,y,z}
          this.size = {width,height,depth}
          this.body = {
               background: background ? this.body.background = background : null ,  
               radius: radius ? this.body.radius = radius : 0 ,
               border: border ? this.body.border = border : null
          }
     }

     public getObject():object{
          return {
               position:{...this.position},
               size:{...this.size},
               body:{...this.body}
          }
     }

     public setPosition({x,y,z}:{x:number,y:number,z:number}):object{
          this.position = {x,y,z}

          return this.getObject()
     }

}

const exampleObjectModel = {
     x:10,
     y:5,
     z:10,
     width:100,
     height:100,
     depth:100
}

export const obj = new OBJECTEXAMPLE({...exampleObjectModel})
export const object = new OBJECT({...exampleObjectModel})