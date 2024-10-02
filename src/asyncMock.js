//electrodomesticos "MLA5726"
//herramientas "MLA407134"
//ropa "MLA1430"
//autos "MLA1743"
//muebles "MLA1574"
//electronica "MLA1000"
export const CATEGORIES = [
    {
        "id": "MLA5725",
        "name": "Accesorios para Vehículos",
        "picture": "https://http2.mlstatic.com/storage/categories-api/images/6fc20d84-2ce6-44ee-8e7e-e5479a78eab0.png"
    },
    {
        "id": "MLA407134",
        "name": "Herramientas",
        "picture": "https://http2.mlstatic.com/storage/categories-api/images/783e7f75-e58d-4020-a165-827ec39c21ec.png"
    },
    {
        "id": "MLA1430",
        "name": "Ropa y Accesorios",
        "picture": "https://http2.mlstatic.com/storage/categories-api/images/eb722172-7d47-4a40-a65e-dab06e4f8ee6.png"
    },
    {
        "id": "MLA1743",
        "name": "Autos, Motos y Otros",
        "picture": "https://http2.mlstatic.com/storage/categories-api/images/e1a43666-ad57-4b8b-b405-f9d04dbbd8fc.png"
    },
    {
        "id": "MLA1574",
        "name": "Hogar, Muebles y Jardín",
        "picture": "https://http2.mlstatic.com/storage/categories-api/images/5194ee98-9095-4ef6-b9a5-c78073fa60af.png"
    },
    {
        "id": "MLA1039",
        "name": "Cámaras y Accesorios",
        "picture": "https://http2.mlstatic.com/storage/categories-api/images/9a56d785-c169-4040-b0e3-599f2e669d83.png"
    }
]


export const GetCategory = async (category) => {
    let urlCategory = category.split("-")
    urlCategory = urlCategory[urlCategory.length - 1]
    return await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${urlCategory}&limit=10`)
    .then(result => result.json())
}

export const GetProduct = async (product) => {
    return await fetch(`https://api.mercadolibre.com/items/${product}`)
    .then(result => result.json())
}

export const GetCategories = new Promise((resolve, reject) => {
    resolve(CATEGORIES)
})