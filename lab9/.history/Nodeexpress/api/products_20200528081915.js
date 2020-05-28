var expressFunction = require('express')
const router = expressFunction.Router()
const auth = require('../config/auth')

const products = [
    {
        type:'cpu',
        id:'10001',
        name:'Intel Core i7 Gen 10th',
        detail:'The Intel Core i7-10750H is a high-end processor',
        quantity:10,
        price:10
    }
]

router.route('/products')
.get(auth,(req,res) => {
    res.status(200).json(products)
})

module.exports = router