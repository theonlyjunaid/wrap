const Razorpay = require("razorpay");
const shortid = require("shortid");
import connectDB from "../../middleware/mongoose";
import Order from "../../model/Order";
import Product from "../../model/Product";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { subTotal, qty, cart, oid, info } = req.body;
        // console.log(cart);

        //check if cart is tempered
        let product, sumTotal = 0;
        for (let item in cart) {
            console.log(item);
            sumTotal += cart[item].price * cart[item].qty;
            product = await Product.findOne({ slug: item });
            if (product.price !== cart[item].price) {
                res.status(200).json({ success: false, message: "Cart is tempered" });
                return;
            }
        }
        if (sumTotal !== subTotal) {
            res.status(200).json({ success: false, message: 'Cart is tempered total' });
            return;
        }
        //check cart item is available


        //check if details is valid

        // Initialize razorpay object
        let order = new Order({
            name: info.name,
            email: info.email,
            orderId: oid,
            phone: info.phone,
            address: info.address,
            pincode: info.pincode,
            amount: subTotal,
            products: cart,
            paymentInfo: { 'getting': 'payment info' },
            paymentDump: { 'getting': 'payment dump' }
        });
        await order.save();
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        // Create an order -> generate the OrderID -> Send it to the Front-end
        // Also, check the amount and currency on the backend (Security measure)
        const payment_capture = qty;
        const amount = subTotal;
        const currency = "INR";
        const options = {
            amount: (amount * 100).toString(),
            currency,
            receipt: oid,
            payment_capture,
        };

        try {
            const response = await razorpay.orders.create(options);
            await order.updateOne({ paymentInfo: response });
            res.status(200).json({
                success: true,
                id: response.id,
                currency: response.currency,
                amount: response.amount,
                receipt: response.receipt,
            });
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    } else {
        // Handle any other HTTP method
    }
}
// export default connectDB(handler); 
export default connectDB(handler);