import { Router } from 'express';
import { login, signin } from '../controllers/users/index';


const users: Router = Router();

/**
 * @api {POST} /api/v1/users/login Inicio de sesión
 * @apiName Login
 * @apiGroup Usuarios
 * @apiVersion 1.0.0
 *
 * @apiUse LoginBody
 *
 * @apiSuccess {Object} Respuesta Objeto JSON
 * @apiSuccess {Boolean} Repuesta.success True si las credenciales son correctas
 * @apiSuccess {String} Respuesta.data Token de sesión
 */
users.post("/login", login);

/**
 * @api {POST} /api/v1/users/signin Registro de usuario
 * @apiName Signin
 * @apiGroup Usuarios
 * @apiVersion 1.0.0
 *
 * @apiUse User
 *
 * @apiSuccess {Object} Respuesta Objeto JSON
 * @apiSuccess {Boolean} Repuesta.success True si el registro es correcto
 */
users.post("/signin", signin);

export default users;
