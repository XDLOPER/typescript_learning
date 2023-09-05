export interface OBJECT_POSITION{
     x:number,y:number,z:number,
} 
export interface OBJECT_SIZE{
     width:number,height:number,depth:number,
}
export interface OBJECT_BODY{
     background?:(string | null),radius?:number,border?:(string | null)
}

export interface OBJECT_INTERFACE_MAIN extends OBJECT_POSITION,OBJECT_SIZE,OBJECT_BODY{}


export interface OBJECT_INTERFACE_COMPLATED{
     position:OBJECT_POSITION,
     size:OBJECT_SIZE,
     body:OBJECT_BODY
}


export interface Position3DInterface{
     x:number,
     y:number,
     z:number
}
export interface SizeInterface3D{
     width:number,
     height:number,
     depth:number     
}
export interface StyleInterfaceBox {
     background:string,
     radius:number | string
     border: string
}

export interface EXTREME_OBJECT_CLASS_INTERFACE extends Position3DInterface,SizeInterface3D,SizeInterface3D{}
