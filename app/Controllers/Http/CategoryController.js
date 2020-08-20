'use strict'
const Category = use('App/Models/Category')
class CategoryController {

    async new({request, response, view})
    {
        
        return view.render('add-category')
    }
    async create({request, response, session})
    {
        const categoryData = request.only(['name','image'])
        const category = await Category.create(categoryData)

        try {
            const photo = request.file('image', {
                types: ['image'],
                size: '10mb',
                extnames: ['png', 'gif', 'jpg', 'jpeg','PNG', 'GIF', 'JPG', 'JPEG']
            })
            let filename = category.id+'.png'
            await photo.move('../public_html/categories/', {
                name: filename,
                overwrite: true
            })
            if (!photo.moved()) {
                return response.status(422).send({
                    status: false,
                    message: photo.error(),
                    errors: photo.error()
                })
            }else
            {
              category.image="../categories/"+category.id+".png"
            }
            category.save()
            
            session.flash({ type: 'info', message: 'Producto agregado correctamente' })
            return response.redirect('/categories');
        } catch (e) {
            return response.status(500).send({
                status: false,
                message: 'Error upload'+e
            })
        }
    }
    async index ({request, response, view})
    {
        const categories= await Category.all()
        console.log(categories)
        return view.render("categories",{categories: categories.toJSON()})
    }
    async destroy ({ request, response, session }) {
        const id = await request.input('id')
        const category = await Category.find(id)
        await category.delete()
        return response.redirect('/categories');
      }
    async edit({ params, view }) {
        const category = await Category.find(params.id);
        return view.render("edit-category", {category: category});
    }
    
    async update ({ request, response, session }) {
        //const productData = request.only(['id','name', 'code', 'category', 'price','short_description','long_description','image'])
        const id = await request.input('id')
        const category = await Category.find(id)
        category.name= await request.input('name')
        category.save();

        try {
            const photo = request.file('image', {
                types: ['image'],
                size: '10mb',
                extnames: ['png', 'gif', 'jpg', 'jpeg','PNG', 'GIF', 'JPG', 'JPEG']
            })
            let filename = category.id+'.png'
            await photo.move('../public_html/categories/', {
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
            return response.redirect('/categories');
        } catch (e) {
            /*return response.status(500).send({
                status: false,
                message: 'Error upload'+e
            })*/
        }
        return response.redirect('/categories');
      }
}

module.exports = CategoryController
