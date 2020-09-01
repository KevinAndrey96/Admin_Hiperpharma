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
    //user.password=await Hash.make("123456")
    user.password="$2a$10$jNridxFnTok7zrsRH41vr.ZzswnnoqwKr0UDDZHyKbq0c3K0bTusq"
    user.save()
    console.log(user)

    var user = new User()
    user.username="Administrador2"
    user.email="iddominio.testing@gmail.com"
    //user.password=await Hash.make("User273012")
    user.password="$2a$10$fROhW4NG.nz2W9b1jD7geOam3W2vOXluwYaE8Zav963GldGvCjpfm"
    user.save()
    console.log(user)

    //$2a$10$OV9I4iZHc7e9QWOFVCoFPeNSH7cLH3qOUYBqeEqxhwTySEir0W8du
    //$2a$10$fROhW4NG.nz2W9b1jD7geOam3W2vOXluwYaE8Zav963GldGvCjpfm
  }
}

module.exports = UserSeeder
