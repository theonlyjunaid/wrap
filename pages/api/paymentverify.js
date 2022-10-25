import mongoose from "mongoose";
import Order from "../../model/Order";
import connectDB from "../../middleware/mongoose";


const handler = async (req, res) => {

    let order;
    order = await Order.findOneAndUpdate({ 'paymentInfo.id': req.body.razorpay_order_id }, { status: 'paid', paymentInfo: req.body });
    let products = order.products;
    for (let slug in products) {
        await mongoose.connection.db.collection('products').updateOne({ slug: slug }, { $inc: { availableQty: -products[slug].qty } });
    }
    res.redirect('/order?id=' + order._id + '&clearCart=1');

}

export default connectDB(handler);