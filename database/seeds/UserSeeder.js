'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')
const Hash = use('Hash')
class UserSeeder {
  async run () {
    await User.truncate()

    var user = new User()
    user.username="Administrador"
    user.email="kaherreras@unal.edu.co"
    user.password=await Hash.make("123456")
    user.save()
    console.log(user)
    //$2a$10$OV9I4iZHc7e9QWOFVCoFPeNSH7cLH3qOUYBqeEqxhwTySEir0W8du
  }
}

module.exports = UserSeeder
