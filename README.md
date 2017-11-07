# Restaurantes v1.0.0

Backend para restaurantes y platos

- [Usuarios](#usuarios)
	- [Inicio de sesión](#inicio-de-sesión)
	- [Registro de usuario](#registro-de-usuario)
	


# Usuarios

## Inicio de sesión



	POST /api/v1/users/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Credenciales			| Object			|  <p>Objeto JSON</p>							|
| Credenciales.email			| String			|  <p>Email de usuario</p>							|
| Credenciales.password			| String			|  <p>Password de usuario</p>							|

## Registro de usuario



	POST /api/v1/users/signin


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Usuario			| Object			|  <p>Objeto JSON</p>							|
| Usuario._id			| String			|  <p>Identificador de usuario, ignorar en registro</p>							|
| Usuario.nombre			| String			|  <p>Nombre de usuario</p>							|
| Usuario.email			| String			|  <p>Email de usuario</p>							|
| Usuario.celular			| String			|  <p>Celular de usuario</p>							|
| Usuario.password			| String			|  <p>Password de usuario</p>							|


