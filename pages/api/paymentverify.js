 import mongoose from "mongoose";
 import Order from "../../model/Order";
    import connectDB from "../../middleware/mongoose";
    import CryptoJS from "crypto-js";


    const handler = async (req, res) => {
    

 await Order.findOneAndUpdate({'paymentInfo.id': req.body.razorpay_order_id},{status: 'paid', paymentInfo: req.body});
 let order = await Order.findOne({paymentInfo: req.body});
    // res.status(200).json(order._id);
    res.redirect('/order?id='+order._id);
        
    }

    export default connectDB(handler);