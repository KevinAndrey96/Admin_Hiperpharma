'use strict'

const Order = use('App/Models/Order')
const Client = use('App/Models/Client')
const Product = use('App/Models/Product')
class OrderController {
    async index({request, response, view})
    {
        /*const clients=await Client.query()
        .with('Orders')
        .fetch()
        console.log(clients.toJSON())*/
        const orders = await Order.query().with('Client').orderBy('id', 'desc').fetch()
        console.log(JSON.stringify(orders.toJSON()))
        return view.render("orders",{orders:orders.toJSON()})
    }
    formatCurrency (locales, currency, fractionDigits, number) {
        var formatted = new Intl.NumberFormat(locales, {
          style: 'currency',
          currency: currency,
          minimumFractionDigits: fractionDigits
        }).format(number);
        return formatted;
      }
    async details({params, view})
    {

        const id= params.id
        const order = await Order.find(id)
        const clientOrder=await order.Client().fetch()
        var productsOrder = await order.Products().fetch()
        var po=[]
        for(const producto of productsOrder.toJSON())
        {
            var obj={}
            
            const product=await Product.find(producto.product_id)
            obj.id=product.id
            obj.order_id=producto.order_id
            obj.product_id=producto.product_id
            obj.name=product.name
            obj.price=product.price
            obj.quantity=producto.quantity
            obj.total=this.formatCurrency("es-CO", "COP", 0, parseInt(product.price)*parseInt(producto.quantity));
            
            po.push(obj)
        }
        
        return view.render("order-detail", {order: order, client: clientOrder, products: po})
    }
    
}

module.exports = OrderController
