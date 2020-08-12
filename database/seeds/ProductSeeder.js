'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Product = use('App/Models/Product')

class ProductSeeder {
  async run () {
    await Product.truncate()

    var new_product
    const product={}
    product.id=1
    product.category="Medicamentos"
    product.image="https://metrocolombiafood.vteximg.com.br/arquivos/ids/159469-750-750/7702132010959-1.jpg?v=636670250900430000"
    product.name="Advil Gripa"
    product.price=10000
    product.code="15123"
    product.short_description="Medicamento para la gripa"
    product.long_description="Medicamento para la gripa x 12 tabletas"
    new_product = await Product.create(product)
    console.log(product)

    product.id=2
    product.category="Cuidado Oral"
    product.image="https://dentalista.es/web/wp-content/uploads/2018/05/1697501.jpeg"
    product.name="Crema Colgate"
    product.price=12000
    product.code="25626"
    product.short_description="Crema de dientes"
    product.long_description="Crema de dientes x 500ml"
    new_product = await Product.create(product)
    console.log(product)
  }
}

module.exports = ProductSeeder
