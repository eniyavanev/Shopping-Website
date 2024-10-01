const express = require("express");
const router = express.Router();
const {
    newOrder,
    getOrderById,
    getMyOrders,
    getAllOrders,
    updateOrderStatus,
    deleteOrder
    
} = require("../Controllers/orderController.js");
const { checkToken, authorizeRoles } = require("../Middleware/checkToken.js");

//User Routes
router.route("/newOrder").post(checkToken, newOrder);

router.route("/getOrderById/:id").get(checkToken, getOrderById);

router.route("/getMyOrders").get(checkToken, getMyOrders);

//Admin Routes
router.route("/getAllOrders").get(checkToken, authorizeRoles("admin"), getAllOrders);

router.route("/updateOrderStatus/:id").put(checkToken, authorizeRoles("admin"), updateOrderStatus);

router.route("/deleteOrder/:id").delete(checkToken, authorizeRoles("admin"), deleteOrder);

module.exports = router;