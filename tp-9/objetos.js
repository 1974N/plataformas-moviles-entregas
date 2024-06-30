/*var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};

/**
 * 01 - crearPersona
 * 
 * Recibe
 * - `nombre`: string, con el nombre.
 * - `apellido`: string, con el apellido.
 * - `edad`: numero entero, con la edad de la persona.
 * - `documento`: numero entero, con el documento de la persona.
 * 
 * Retorna: 
 * - un objeto, representando una persona, con los campos recibidos.
 * 
 * Ejemplos:
 * - crearPersona("Juan", "Pérez", 20, 123456)
 * {
 *   nombre: "Juan",
 *   apellido: "Pérez",
 *   edad: 20,
 *   documento: 123456,
 * }
 */
var persona = {
    nombre: 'Gonzalo',
    apellido: 'Montenegro',
    'edad': 18,
    'Dni': 47894978
};
function crearPersona(persona) {
    return persona;
}



/**
 * 02 - agregarApodo
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * - `apodo`: string, con el apodo que agregarle a la persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un nuevo campo 'apodo'.
 */
var persona = {
    nombre: 'Gonzalo',
    apellido: 'Montenegro',
    'edad': 18,
    'Dni': 47894978
};
function agregarApodo(persona) {
    for(i = 0; i < persona.length; i++ ){
        persona[i].push(apodo)
    }
    persona.apodo = 'chiquito';
    return persona;
}



/**
 * 03 - sinDocumento
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero sin el campo documento.
 */
var persona = {
    nombre: 'Gonzalo',
    apellido: 'Montenegro',
    'edad': 18,
    'Dni': 47894978
};
function sinDocumento(persona) {
    delete persona.Dni;
    return persona;
}



/**
 * 04 - nombreCompletoDePersona
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un string, con el nombre completo de una persona. Asumimos que nombre completo tiene el formato "Apellido, Nombre". Por ejemplo para una persona con nombre "Juan" y apellido "Pérez", el nombre completo sería "Pérez, Juan".
 */
var persona = {
    nombre: 'Gonzalo',
    apellido: 'Montenegro',
    'edad': 18,
    'Dni': 47894978
};
var nombre_completo;
var apellido_completo;
var nombre_apellido_completo;
function nombreCompletoDePersona(persona) {
    nombre_completo = persona.nombre;
    apellido_completo = persona.apellido;
    nombre_apellido_completo = nombre_completo + apellido_completo;
    return nombre_apellido_completo;
}


/**
 * 05 - felizCumpleaños
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un año más. 
 */
var persona = {
    nombre: 'Gonzalo',
    apellido: 'Montenegro',
    'edad': 18,
    'Dni': 47894978
};
function felizCumpleaños(persona) {
    persona.edad+=1;
    return persona; 
}


/**
 * 06 - sonLaMismaPersona
 * 
 * Recibe
 * - `persona1`: Un objeto de la forma persona.
 * - `persona2`: Otro objeto de la forma persona.
 * 
 * Retorna: 
 * - un valor boolean ('true' o 'false'), indicando si persona1 y persona2 son la misma persona.
 */
var persona = {
    nombre: 'Gonzalo',
    apellido: 'Montenegro',
    'edad': 18,
    'Dni': 47894978
};
var persona_2 = {
    nombre: 'Gonzalo',
    apellido: 'Montenegro',
    'edad': 18,
    'Dni': 47894978
};
function sonLaMismaPersona(persona, persona_2) {
    if(persona.Dni == persona_2.Dni){
       console.log('Son las mismas personas');
    }else {
        return ('No son las mismas personas');
    }
}

