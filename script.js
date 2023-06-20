//Ingresar nombre
/* let nombreUsuario = prompt("ingrese su nombre")

alert("Bienvenido a Electronics" + " " + nombreUsuario)
console.log("Bienvenido " + nombreUsuario)
alert("Electronics se especializa en la venta de Notebooks personalizadas")
 */
//Objetos + Array

class notebooks {

    constructor(id,marca,nombre,descripcion,precio,cantidad){
        this.id = id;
        this.marca = marca;
        this.nombre = nombre;
        this.descrpcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad
    }
}

const producto1 = new notebooks(001,"ASUS","ASUS VivoBookLED C403NA-FQ0062"," ASUS VivoBook OLED C403NA-FQ0062, 15.6 2.8K, Intel® Core™ i5-12500H, 16GB RAM, 512GB SSD, Iris® Xe Graphics, Windows 11 Home",550000,10)

const producto2 = new notebooks(002,"DELL","NOTEBOOK DELL TF2Y5 AMD R5"," Notebook - TF2Y5 DELL, 15,6, Full-HD, Intel Core, 8 GB, 256 GB, Intel® UHD Graphics, Windows 11 Home Negro",420000,15)

const producto3 = new notebooks(003,"HP","HP Notebook 15S-EQ1066NL-Chalkboard gray","HP 14s-dq5001ns, 14 Full HD, Intel® Core™ i5-1235U, 8GB RAM, 512GB SSD, Iris® Xᵉ, W11 H",525000,14)

const producto4 = new notebooks(004,"SAMSUNG","SAMSUNG Notebook GALAXY BOOK3 PRO-Graphite","Samsung Galaxy Book3, 15.6 Full-HD, Intel® Core™ i5-1335U, 8GB RAM, 512GB SSD, Iris® Xe Graphics, Windows 11 Home, Teclado Retroiluminado",605300,20)

const producto5 = new notebooks(005,"APPLE","MacBook Air 13, hip Apple M1 con CPU 8‑core, GPU 7‑core","APPLE MacBook Air (2020), 13.3 Retina, Chip M1 de Apple, 8 GB, 256 GB SSD, MacOS, Teclado Magic Keyboard Touch ID, Gris espacial",875000,8)

const producto6 = new notebooks(006,"LENOVO","Legion 5 Pro 16IAH7H, 16 pollici, processore Intel® Core™ i7","Portátil gaming - Lenovo Legion 5 15IAH7H, 15.6 Full HD, Intel® Core™ i7-12700H, 16GB RAM, 512GB SSD, GeForce RTX™ 3060, Windows 11 Home",925450,12)

const arrayProductos = [producto1, producto2, producto3, producto4, producto5, producto6]

console.log(arrayProductos)


let productosDentroPresupuesto = parseInt(prompt("Quiere continuar realizando una compra?. Ahora tambien puede buscar productos dentro de su presupuesto. Indique un valor: "))

const DentroPresupuesto = productos.filter((elementos)=>(elementos.precio < productosDentroPresupuesto))
    
console.log(DentroPresupuesto)
