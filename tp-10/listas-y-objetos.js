var listaDePersonas = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

/**
 * 01 - ordenarPorApellido
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * 
 * Retorna: 
 * - el mismo listado, ordenado alfabéticamente por el apellido de la persona 
 */
function ordenarPorApellido(listaDePersonas) {
    var listaDePersonas = [
        {
            "apellido": "Perez",
            "nombre": "Juan",
            "edad": 20,
            "documento": 12345
        },
        {
            "apellido": "Lopez",
            "nombre": "Luis",
            "edad": 20,
            "documento": 23456
        },
        {
            "apellido": "Zapata",
            "nombre": "Pablo",
            "edad": 10,
            "documento": 34567
        },
        {
            "apellido": "Acuña",
            "nombre": "Ana",
            "edad": 30,
            "documento": 45678
        },
    ];
    listaDePersonas.sort((a,b) =>
    a.apellido.localeCompare(b.apellido));
    return listaDePersonas
}

/**
 * 02 - soloNombres
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista de strings, con sólo los nombres de las personas
 */
function soloNombres(listaDePersonas) {
    var listaDePersonas = [
        {
            "apellido": "Perez",
            "nombre": "Juan",
            "edad": 20,
            "documento": 12345
        },
        {
            "apellido": "Lopez",
            "nombre": "Luis",
            "edad": 20,
            "documento": 23456
        },
        {
            "apellido": "Zapata",
            "nombre": "Pablo",
            "edad": 10,
            "documento": 34567
        },
        {
            "apellido": "Acuña",
            "nombre": "Ana",
            "edad": 30,
            "documento": 45678
        },
    ];
    listaDePersonas.sort((a,b) => 
    a.nombre.localeCompare(b.nombre));
    return listaDePersonas;
}

/**
 * 03 - promedioEdades
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - un numero, con el cálculo del promedio de las edades
 */
var promedio;
function promedioEdades(listaDePersonas) {
    var listaDePersonas = [
        {
            "apellido": "Perez",
            "nombre": "Juan",
            "edad": 20,
            "documento": 12345
        },
        {
            "apellido": "Lopez",
            "nombre": "Luis",
            "edad": 20,
            "documento": 23456
        },
        {
            "apellido": "Zapata",
            "nombre": "Pablo",
            "edad": 10,
            "documento": 34567
        },
        {
            "apellido": "Acuña",
            "nombre": "Ana",
            "edad": 30,
            "documento": 45678
        },
    ];
    var suma = 0;
    for(i = 0; i < listaDePersonas.length; i++){
        suma += listaDePersonas[i].edad; 
    }
promedio = suma / i;
return promedio;
}

/**
 * 04 - soloMayoresDeEdad
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista, array, conteniendo solamente las personas con más de 18 años
 */
function soloMayoresDeEdad(listaDePersonas) {
var listaFiltrada = listaDePersonas.filter((listaDePersonas) => {
    return listaDePersonas.edad > 18;
})
return listaFiltrada;
} 
    

/**
 * 05 - laPersonaMayor
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una objeto con la persona de mayor edad en todo el listado. En caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado.
 */
function laPersonaMayor(listaDePersonas) {
    var listaDePersonas = [
        {
            "apellido": "Perez",
            "nombre": "Juan",
            "edad": 20,
            "documento": 12345
        },
        {
            "apellido": "Lopez",
            "nombre": "Luis",
            "edad": 20,
            "documento": 23456
        },
        {
            "apellido": "Zapata",
            "nombre": "Pablo",
            "edad": 10,
            "documento": 34567
        },
        {
            "apellido": "Acuña",
            "nombre": "Ana",
            "edad": 30,
            "documento": 45678
        },
    ];
    mayor = {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    }
    for(i = 0; i < listaDePersonas.length; i ++){
        if(mayor.edad < listaDePersonas[i].edad){
            mayor = listaDePersonas[i];
        }
    }
    return mayor;
}
