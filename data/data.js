const products = [
{
    id: "asdss111",
    name: "Pelota Cuerva",
    description: "La pelota de fútbol azulgrana",
    price: 40000,
    stock: 8,
    image: "/public/pelotauno1.jpg",
    category: "pelotas"
},

{
    id: "hashah77",
    name: "Camiseta Titular",
    description: "La favorita de todos, bien cuerva como vos",
    price: 90000,
    stock: 3,
    image: "/public/camisetauno1.webp",
    category: "camisetas"
},

{
    id: "aad4232",
    name: "Botines Cuervos",
    description: "Para que estés bien lookeado hasta para jugar al fútbol",
    price: 65000,
    stock: 21,
    image: "/public/botinesuno1.webp",
    category: "botines"
},
]


const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}

export {getProducts}