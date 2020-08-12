'use strict'

const Client = use('App/Models/Client')
class ClientController {
    async index ({ view }) {
        
        const clients = await Client.all()
        return view.render('clients', { clients: clients.toJSON() })
      }
}

module.exports = ClientController
