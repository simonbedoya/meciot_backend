/**
 * @apiDefine User
 * @apiParam {Object} Usuario Objeto JSON
 * @apiParam {String} Usuario._id Identificador de usuario, ignorar en registro
 * @apiParam {String} Usuario.nombre Nombre de usuario
 * @apiParam {String} Usuario.email Email de usuario
 * @apiParam {String} Usuario.celular Celular de usuario
 * @apiParam {String} Usuario.password Password de usuario
 */
export class User{
    _id?:string;
    nombre:string;
    email:string;
    celular:string;
    password:string;
}