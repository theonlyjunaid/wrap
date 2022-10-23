
export default function handler(req, res) {
let pincodes = {
    "110001": ["Delhi","New Delhi"],
    "201005": ["uttar pradesh","ghaziabad"],
}
    res.status(200).json({pincodes});

}
