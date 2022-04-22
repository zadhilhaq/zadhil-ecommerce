const { police_check } = require('../../middlewares')
const deliveryAddressController = require('./controller')

const router = require('express').Router()

router.post(
    '/delivery-addresses',
    police_check('create', 'DeliveryAddress'),
    deliveryAddressController.store
)

router.put('/delivery-addreses/:id', deliveryAddressController.update)
router.delete('/delivery-addreses/:id', deliveryAddressController.destroy)

router.get(
    '/delivery-addreses',
    police_check('view', 'DeliveryAddress'),
    deliveryAddressController.index
)

module.exports = router