//Ingresar nombre
let nombreUsuario = prompt("ingrese su nombre")

alert("Bienvenido " + nombreUsuario)
console.log("Bienvenido " + nombreUsuario)
alert("Electronics se especializa en la venta de Notebooks hechas a medida")

//Funcion elegir modelo
let precio = 450000

let modelo = modeloNotebook(prompt("Seleccione el modelo de su Notebook (precio base $450.000): \n1-ASUS BlackNight (C403NA-FQ0062) \n2-ASUS Ultrabook (UX3402ZA-KM637W-PONDER BLUE) \n3-ASUS Neron (F1605ZA-MB198W-TRANSPARENT SILVER) \n4-ASUS Tramonto (Notebook F515EA-BQ1563W)"))

function modeloNotebook(modelo){
    if(modelo==1)
    return "ASUS BlackNight (C403NA-FQ0062)"
    else if (modelo==2)
    return "ASUS Ultrabook (UX3402ZA-KM637W-PONDER BLUE)"
    else if(modelo==3)
    return "ASUS Neron (F1605ZA-MB198W-TRANSPARENT SILVER)"
    else if(modelo==4)
    return "ASUS Tramonto (Notebook F515EA-BQ1563W)"
}

console.log("El modelo seleccionado es: " + modelo)

//Funcion elegir memoria RAM
const memoria = memoriaRAM(prompt("Selecciona la memoria RAM: \n1- 8 GB RAM $25.000 \n2- 16 GB RAM $50.000"))

function memoriaRAM(memoria){
    if(memoria==1)
        alert("El costo total es de:  " + (25000+precio))
    else if(memoria==2)
    alert("El costo total es de:  " + (50000+precio))
    else("Seleccionar opcion 1 o 2 para indicar la memoria deseada")
}

console.log("La memoria seleccionada es: " + memoria)

//Tiempo de entrega

let destino = prompt("Seleccione el destino de entrega \n1-BSAS \n2-CORDOBA \n3-SANTA FE \n4-MENDOZA")

let destinoCABA = 1
let destinoBSAS = 2
let destinoSANTAFE = 3
let destinoCORDOBA =  8
let destinoMENDOZA = 16

switch(destino){
    case "1":
        var tiempoEntrega = destinoBSAS - destinoCABA
        alert("El tiempo de entrega estimado  hasta BsAs es de horas:  " + tiempoEntrega)
        break
    case "2":
        var tiempoEntrega = destinoCORDOBA - destinoCABA
        alert("El tiempo de entrega estimado hasta Cordoba es de horas:  " + tiempoEntrega)
        break
    case "3":
        var tiempoEntrega = destinoSANTAFE - destinoCABA
        alert("El tiempo de entrega estimado hasta Santa Fe es de horas:  " + tiempoEntrega)
        break
    case "4":
        var tiempoEntrega = destinoMENDOZA - destinoCABA
        alert("El tiempo de entrega estimado hasta Mendoza es de horas:  " + tiempoEntrega)
        break

        default:
            alert("Por favor eliga una opcion")
            break;
} 

console.log("El tiempo de entrega estimado hasta " + destino) + console.log("es de horas: " + tiempoEntrega)

//Creo un Array

const productos = [
    {
        id: 1,
        nombre : "ASUS BlackNight (C403NA-FQ0062)",
        precio : 450000
    },
    {
        id: 2,
        nombre : "ASUS Ultrabook (UX3402ZA-KM637W-PONDER BLUE)",
        precio : 450000
    },
    {
        id: 3,
        nombre : "ASUS Neron (F1605ZA-MB198W-TRANSPARENT SILVER)",
        precio : 450000
    },
    {
        id: 4,
        nombre : "ASUS Tramonto (Notebook F515EA-BQ1563W)",
        precio : 450000
    }
    ]
    
let productosDentroPresupuesto = parseInt(prompt("Quiere continuar realizando una compra?. Ahora tambien puede buscar productos dentro de su presupuesto. Indique el valor maximo de su presupuesto: "))

const DentroPresupuesto = productos.filter((elementos)=>(elementos.precio < productosDentroPresupuesto))
    
console.log(DentroPresupuesto)