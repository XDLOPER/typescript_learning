import {OBJECT_INTERFACE_COMPLATED,OBJECT_INTERFACE_MAIN,OBJECT_POSITION,OBJECT_SIZE,OBJECT_BODY,Position3DInterface,SizeInterface3D,StyleInterfaceBox,EXTREME_OBJECT_CLASS_INTERFACE} from '../interfaces'

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

export const Z_object:OBJECT_INTERFACE_COMPLATED = {
     position:{x:0,y:0,z:0},
     size:{width:0,height:0,depth:0},
     body:{
          background:null,
          radius:0,
          border:null
     }
}


// class Model Example

class OBJECTEXAMPLE{
     private x:number = 0;
     private y:number = 0;
     private z:number = 0;
     private width:number = 0;
     private height:number = 0;
     private depth:number = 0;

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
     // class properties are defined
     private position:OBJECT_POSITION = {x:0,y:0,z:0}
     private size:OBJECT_SIZE = {width:0,height:0,depth:0}
     private body:OBJECT_BODY = {background:null,radius:0,border:null}

     // really private properties 
     private prevState = {...this.getObject()}

     constructor({x,y,z,width,height,depth,background,radius,border} : OBJECT_INTERFACE_MAIN){
          this.position = {x,y,z}
          this.size = {width,height,depth}
          this.body = {
               background: background ? this.body.background = background : null ,  
               radius: radius ? this.body.radius = radius : 0 ,
               border: border ? this.body.border = border : null
          }
     }

     public getObject():OBJECT_INTERFACE_COMPLATED{
          return {
               position:{...this.position},
               size:{...this.size},
               body:{...this.body}
          }
     }

     public setPosition(updateFunc:(data: OBJECT_POSITION) => OBJECT_POSITION):object{
          const updateData = updateFunc({...this.prevState.position})
          this.position = updateData

          return this.getObject()
     }
     public setSize(updateFunc:(data: OBJECT_SIZE) => OBJECT_SIZE):object{
          const updateData = updateFunc({...this.prevState.size})
          this.size = updateData

          return this.getObject()
     }
     public setBody(updateFunct: (data: OBJECT_BODY) => OBJECT_BODY):object{
          const updateData = updateFunct({...this.prevState.body})
          this.body = updateData

          return this.getObject()
     }

}

abstract class Position3D{
     private position:Position3DInterface = {x:0,y:0,z:0}

     constructor({x,y,z}:Position3DInterface){
          this.position = {x,y,z}
     }

     public getPosition():Position3DInterface{
          return this.position
     }
     public setPosition(updateFunc:(argm:Position3DInterface) => Position3DInterface):Position3DInterface{
          const updatePosition = updateFunc(this.position)
          this.position = updatePosition
          return this.getPosition()     
     }
}

abstract class Size3D{
     private size:SizeInterface3D = {width:0,height:0,depth:0}

     constructor({width,height,depth}:SizeInterface3D){
          this.size = {width,height,depth}
     }

     public getSize():SizeInterface3D{
          return this.size
     }

     public setSize(updateFunc:(argm:SizeInterface3D)=>SizeInterface3D):SizeInterface3D{
          const updateSize = updateFunc(this.size)
          this.size = updateSize
          return this.getSize()
     }
     
}

abstract class StyleBox{
     private style:StyleInterfaceBox = {background:'',radius:0,border:''}

     constructor({background,radius,border}:StyleInterfaceBox){
          this.style = {background,radius,border}
     }

     public getStyle():StyleInterfaceBox{
          return this.style
     }

     public setStyle(updateFunc:(argm:StyleInterfaceBox)=>StyleInterfaceBox):StyleInterfaceBox{
          const updateStyle = updateFunc(this.style)
          this.style = updateStyle
          return this.getStyle()
     }
     
}



// henüz daha çözebilmiş değilim buradan devam edeceğim
/*class EXTREME_OBJECT_CLASS implements Position3D,Size3D,StyleBox{



}*/


export {OBJECT,OBJECTEXAMPLE,Position3D,Size3D,StyleBox}