'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('login')

Route.get('users/:id', 'UserController.show').middleware('auth')

Route.post('login', 'UserController.login')
Route.get('login', ({ view }) => {  
    return view.render('login')
  })
Route.get('logout', 'UserController.logout')

  Route.get('404', ({ view }) => {
    return view.render('404')
  })
  Route.get('500', ({ view }) => {
    return view.render('500')
  })
  Route.get('add-product', 'ProductController.new')
  Route.post('add-product', 'ProductController.create')
  Route.get('clients', ({ view }) => {
    return view.render('clients')
  })
  Route.get('dashboard', ({ view }) => {
    return view.render('dashboard')
  })
  Route.get('edit-client', ({ view }) => {
    return view.render('edit-client')
  })
  Route.get('order-detail', ({ view }) => {
    return view.render('order-detail')
  })
  Route.get('orders', ({ view }) => {
    return view.render('orders')
  })
  Route.get('products', 'ProductController.index')
  Route.delete('products', 'ProductController.destroy')

  /*Route.get('edit-product/:id', ({ view }) => {
    return view.render('edit-product')
  })*/
  Route.get("edit-product/:id", "ProductController.edit");
  Route.post("edit-product/", "ProductController.update");
  Route.get('profile', ({ view }) => {
    return view.render('profile')
  })
  Route.get('restore-pass', ({ view }) => {
    return view.render('restore-pass')
  })
  Route.get('restore-pass-c', ({ view }) => {
    return view.render('restore-pass-c')
  })
