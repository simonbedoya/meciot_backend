export class RestaurantPlate{
    _id:string;
    nombre:string;
    direccion:string;
}

export class Plate{
    _id:string;
    nombre:string;
    categoria:string;
    precio:number;
    porciones:number;
    imagen:string;
    ingredientes:string[];
    restaurante:RestaurantPlate;
}