class ProductManager{
    constructor(){
        this.products = []
    }

    generateID = ()=>{
        if (this.products.length === 0) return 1
        return this.products[this.products.length-1].id + 1
    }

    getProducts = ()=>{
        return this.products
    }

    addProduct = (title, description, price, thumbnail,code,stock) => {

        const id = this.generateID()
        const product = {id,title,description,price,thumbnail,code,stock}
        if(!title || !description || !price || !thumbnail || !code || !stock ){
            return console.log('faltan datos');
        }

        const codeExists = this.products.some((p) => p.code === code)
        if (codeExists) {
            return console.log('El código ya existe');
    }

        //Validar que no se repita la propiedad "code"
        this.products.push(product)
    }
}   

const manager = new ProductManager()
manager.addProduct('Arroz', 'blanco', 350 , 'https://example.com/thumbnail.jpg' ,'J221' ,1600 )
manager.addProduct('Fideos', 'spaghetti', 500 , 'https://example.com/thumbnail.jpg' ,'J526' ,1300 )
manager.addProduct('Leche', 'entera', 400 , 'https://example.com/thumbnail.jpg' ,'J581' ,1000 )
console.log(manager.products);