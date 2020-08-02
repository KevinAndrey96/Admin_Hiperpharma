'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Category = use('App/Models/Category')

class CategorySeeder {
  async run () {
    await Category.truncate()

    var category_new

    const category={}
    category.id=1
    category.name="Medicamentos"
    category.image="https://image.flaticon.com/icons/png/512/107/107831.png"
    category_new = await Category.create(category)
    console.log(category)
    
    category.id=2
    category.name="Cosmetica"
    category.image="https://image.flaticon.com/icons/png/512/107/107831.png"
    category_new = await Category.create(category)
    console.log(category)

    category.id=3
    category.name="Cuidado para el cabello"
    category.image="https://image.flaticon.com/icons/png/512/107/107831.png"
    category_new = await Category.create(category)
    console.log(category)

    category.id=4
    category.name="Cuidado para la piel"
    category.image="https://image.flaticon.com/icons/png/512/107/107831.png"
    category_new = await Category.create(category)
    console.log(category)

    category.id=5
    category.name="Cuidado oral"
    category.image="https://image.flaticon.com/icons/png/512/107/107831.png"
    category_new = await Category.create(category)
    console.log(category)

    category.id=6
    category.name="Cuidado personal"
    category.image="https://image.flaticon.com/icons/png/512/107/107831.png"
    category_new = await Category.create(category)
    console.log(category)
  }
}

module.exports = CategorySeeder
