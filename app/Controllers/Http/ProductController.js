'use strict'
const Product = use('App/Models/Product')
const Category = use('App/Models/Category')

class ProductController {
    async create ({ request, response, session }) {
        const productData = request.only(['name', 'code', 'category', 'price','short_description','long_description','image'])
        const product = await Product.create(productData)

        try {
            const photo = request.file('image', {
                types: ['image'],
                size: '10mb',
                extnames: ['png', 'gif', 'jpg', 'jpeg','PNG', 'GIF', 'JPG', 'JPEG']
            })
            let filename = product.id+'.png'
            await photo.move('./public/files', {
                name: filename,
                overwrite: true
            })
            if (!photo.moved()) {
                return response.status(422).send({
                    status: false,
                    message: photo.error(),
                    errors: photo.error()
                })
            }
            session.flash({ type: 'info', message: 'Producto agregado correctamente' })
            return response.redirect('/products');
        } catch (e) {
            return response.status(500).send({
                status: false,
                message: 'Error upload'+e
            })
        }
      }
      async destroy ({ request, response, session }) {
        const id = await request.input('id')
        const product = await Product.find(id)
        await product.delete()
        return response.redirect('/products');
      }
      formatCurrency (locales, currency, fractionDigits, number) {
        var formatted = new Intl.NumberFormat(locales, {
          style: 'currency',
          currency: currency,
          minimumFractionDigits: fractionDigits
        }).format(number);
        return formatted;
      }
      async index ({ view }) {
        
        const products = await Product.all()
        var products2=[]
        
        for(const product of products.toJSON())
        {
            product.price=this.formatCurrency("es-CO", "COP", 0, product.price);
            products2.push(product)
        }

        return view.render('products', { products: products2 })

        
      }
      
      async edit({ params, view }) {
        const product = await Product.find(params.id);
        const categories = await Category.all()
        return view.render("edit-product", {product: product, categories: categories.toJSON()},);
      }
      async new({ params, view }) {
        const categories = await Category.all()
        return view.render("add-product", {categories: categories.toJSON()},);
      }

      async update ({ request, response, session }) {
        //const productData = request.only(['id','name', 'code', 'category', 'price','short_description','long_description','image'])
        const id = await request.input('id')
        const product = await Product.find(id)
        product.name= await request.input('name')
        product.code= await request.input('code')
        product.category= await request.input('category')
        product.price= await request.input('price')
        product.short_description= await request.input('short_description')
        product.long_description= await request.input('long_description')
        product.save();

        try {
            const photo = request.file('image', {
                types: ['image'],
                size: '10mb',
                extnames: ['png', 'gif', 'jpg', 'jpeg','PNG', 'GIF', 'JPG', 'JPEG']
            })
            let filename = product.id+'.png'
            await photo.move('./public/files', {
                name: filename,
                overwrite: true
            })
            if (!photo.moved()) {
                return response.status(422).send({
                    status: false,
                    message: photo.error(),
                    errors: photo.error()
                })
            }
            session.flash({ type: 'info', message: 'Producto agregado correctamente' })
            return response.redirect('/products');
        } catch (e) {
            /*return response.status(500).send({
                status: false,
                message: 'Error upload'+e
            })*/
        }
        return response.redirect('/products');
      }

      async cart({request, response, view})
      {

        return view.render("cart", {products: products.toJSON()},);
      }
      


/*
      index ({ request, response, session }) {
        //const products = Product.all()
        //return products
        //return response.view.render('products')
        //return view.render('products', { products: products.toJSON() })
      }*/
}

module.exports = ProductController
