interface Z_object_Interface_Posititon{
     position:{x:number,y:number,z:number},
}
interface Z_object_Interface_Size{
     size:{width:number,height:number,depth:number},
}
interface Z_object_Interface_Body{
     body:{background:(string | null),radius:number,border:(string | null)},
}

export interface Z_object_Interface extends Z_object_Interface_Posititon,Z_object_Interface_Size,Z_object_Interface_Body{}
