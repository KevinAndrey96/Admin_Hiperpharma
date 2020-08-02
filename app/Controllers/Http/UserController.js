'use strict'

class UserController {
    async login ({ request, auth, response }) {
        const { email, password } = request.all()
        await auth.attempt(email, password)
        return response.redirect('/dashboard');
      }
    show ({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
          return 'You cannot see someone else\'s profile'
        }
        return auth.user
      }
      async logout({response,auth}){
        await auth.logout();
        return response.redirect('/');
     }
      
}

module.exports = UserController
