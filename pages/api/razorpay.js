const Razorpay = require("razorpay");
const shortid = require("shortid");
import connectDB from "../../middleware/mongoose";
import Order from "../../model/Order";
import Product from "../../model/Product";
import pincode from '../../pincode.json'

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { subTotal, qty, cart, oid, info } = req.body;


        if (!Object.keys(pincode).includes(info.pincode)) {

            res.status(200).json({ success: false, message: 'Sorry, we do not deliver to your pincode' });
            return;
        }

        // console.log(cart);
        if (info.phone.length != 10) {
            res.status(200).json({ success: false, message: 'Please enter 10 digit valid number' });
        }
        //check if cart is tempered
        let product, sumTotal = 0;
        if (subTotal <= 0) {
            res.status(400).json({ success: false, message: "some items in your cart went out of sock" });
            res.redirect("/");
            return;
        }
        for (let item in cart) {
            console.log(item);
            sumTotal += cart[item].price * cart[item].qty;
            product = await Product.findOne({ slug: item });
            if (product.availableQty < cart[item].qty) {
                res.status(200).json({ success: false, message: "Product is out of stock", cartClear: true });
                return
            } else if (product.price !== cart[item].price) {
                res.status(200).json({ success: false, message: "Cart is tempered", cartClear: true });
                return;
            }
        }
        if (sumTotal !== subTotal) {
            res.status(200).json({ success: false, message: 'Cart is tempered total', cartClear: true });
            return;
        }


        //check if details is valid


        // Initialize razorpay object
        let order = new Order({
            name: info.name,
            email: info.email,
            orderId: oid,
            phone: info.phone,
            address: info.address,
            city: info.city,
            state: info.state,
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