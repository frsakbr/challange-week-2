const { Router } = require('express');
const router = Router();
const controller = require('./controller')


router.get("/products", controller.getProducts);
router.post("/products", controller.addProducts);
router.put("/products", controller.updateProducts);
router.delete("/products", controller.deleteProducts);

module.exports = router;