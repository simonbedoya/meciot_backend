export class Location{
    type:string;
    coordinates:number[];
}

export class Table{
    numero:number;
    disponible:boolean;
}

export class Restaurant{
    _id?:string;
    nombre:string;
    direccion:string;
    contacto:string;
    imagen:string;
    localizacion:Location;
    mesas?:Table[];
}