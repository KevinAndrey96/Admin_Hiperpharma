'use strict'
const Category = use('App/Models/Category')
class CategoryController {

    async new({request, response, view})
    {
        
        return view.render('add-category')
    }
    async create({request, response, view})
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
              category.image="../"+category.id+".png"
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
}

module.exports = CategoryController
