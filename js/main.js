// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "1",
        titulo: "Adidas Stan Smith",
        imagen: "./img/img__shoes/stansmith1.png",
        categoria: {
            nombre: "Adidas",
            id: "Adidas"
        },
        precio: 24650
    },
    {
        id: "2",
        titulo: "Air Jordan 1",
        imagen: "./img/img__shoes/sopas.png",
        categoria: {
            nombre: "Jordan",
            id: "Jordan"
        },
        precio: 45729
    },
    {
        id: "3",
        titulo: "Air Force 1",
        imagen: "./img/img__shoes/af1-2.png",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 34899
    },
    {
        id: "4",
        titulo: "Air Jordan 3",
        imagen: "./img/img__shoes/aj3.png",
        categoria: {
            nombre: "Jordan",
            id: "Jordan"
        },
        precio: 56299
    },
    {
        id: "5",
        titulo: "Puma Suede",
        imagen: "./img/img__shoes/pumasuede1.png",
        categoria: {
            nombre: "Puma",
            id: "Puma"
        },
        precio: 23139
    },
    {
        id: "6",
        titulo: "Nike Cortez",
        imagen: "./img/img__shoes/forum.png",
        categoria: {
            nombre: "Adidas",
            id: "Adidas"
        },
        precio: 36999
    },
    {
        id: "7",
        titulo: "Nike Cortez",
        imagen: "./img/img__shoes/cortez.png",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 37299
    },
    {
        id: "8",
        titulo: "Nike SB Dunk",
        imagen: "./img/img__shoes/dunk.png",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 56199
    },
    {
        id: "9",
        titulo: "Vans Old Skool",
        imagen: "./img/img__shoes/vans1.png",
        categoria: {
            nombre: "Vans",
            id: "Vans"
        },
        precio: 24299
    },
    {
        id: "10",
        titulo: "Jordan 11 Concord",
        imagen: "./img/img__shoes/aj11-concord.png",
        categoria: {
            nombre: "Jordan",
            id: "Jordan"
        },
        precio: 73999
    },
    {
        id: "11",
        titulo: "Converse x Comme des Garcons",
        imagen: "./img/img__shoes/converse1.png",
        categoria: {
            nombre: "Converse",
            id: "Converse"
        },
        precio: 132269
    },
    {
        id: "12",
        titulo: "Puma RSX",
        imagen: "./img/img__shoes/rsx.png",
        categoria: {
            nombre: "Puma",
            id: "Puma"
        },
        precio: 32699
    },
    {
        id: "13",
        titulo: "Air Jordan 1 Low",
        imagen: "./img/img__shoes/aj1low.png",
        categoria: {
            nombre: "Jordan",
            id: "Jordan"
        },
        precio: 45129
    },
    {
        id: "14",
        titulo: "Adidas NMD Human Race",
        imagen: "./img/img__shoes/nmd-human-race.png",
        categoria: {
            nombre: "Adidas",
            id: "Adidas"
        },
        precio: 192139
    },
    {
        id: "15",
        titulo: "Air Max 97 SE",
        imagen: "./img/img__shoes/97se.png",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 92799
    },
    {
        id: "16",
        titulo: "Air Force 1 07",
        imagen: "./img/img__shoes/af1-07.png",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 52539
    },
    {
        id: "17",
        titulo: "Air Max 95 SE",
        imagen: "./img/img__shoes/95se.png",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 32499
    },
    {
        id: "18",
        titulo: "Air Force 1 x Travis Scott",
        imagen: "./img/img__shoes/af1ts.png",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 316999
    },
    {
        id: "19",
        titulo: "Air Force 1 x Travis Scott",
        imagen: "./img/img__shoes/fearofgod.png",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 610999
    },
    {
        id: "20",
        titulo: "Yeezy 350 V2 Zebra",
        imagen: "./img/img__shoes/yeezy1.png",
        categoria: {
            nombre: "Yeezy",
            id: "Yeezy"
        },
        precio: 181999
    },
    {
        id: "21",
        titulo: "Nike Element React 55",
        imagen: "./img/img__shoes/react1.png",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 52999
    },
    {
        id: "22",
        titulo: "Adidas Nite Jogger",
        imagen: "./img/img__shoes/nitejogger.png",
        categoria: {
            nombre: "Adidas",
            id: "Adidas"
        },
        precio: 73499
    },
    {
        id: "23",
        titulo: "Adidas Stan Smith x Monster Inc.",
        imagen: "./img/img__shoes/stansmith2.png",
        categoria: {
            nombre: "Adidas",
            id: "Adidas"
        },
        precio: 25799
    },
    {
        id: "24",
        titulo: "Vans Flame Old Skool",
        imagen: "./img/img__shoes/vans2.png",
        categoria: {
            nombre: "Vans",
            id: "Vans"
        },
        precio: 32450
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = ""

    productosElegidos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>`

            contenedorProductos.append(div)
    })

    actualizarBotonesAgregar()
}

cargarProductos(productos)

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if(e.currentTarget.id !== "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        } else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }       
    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado) 
    }
    actualizarNumerito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito
}

