const express = require("express");
const router = express.Router();
let orders = require("../data-order/orderData");

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management API
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of all orders
 */
router.get("/", (req, res) => {
  res.json(orders);
});

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Order found
 *       404:
 *         description: Order not found
 */
router.get("/:id", (req, res) => {
  const order = orders.find((o) => o.id == req.params.id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json(order);
});

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Add a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerId:
 *                 type: integer
 *               productId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               totalAmount:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Order created successfully
 */
router.post("/", (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    ...req.body
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});

/**
 * @swagger
 * /api/orders/{id}:
 *   put:
 *     summary: Update an order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       404:
 *         description: Order not found
 */
router.put("/:id", (req, res) => {
  const order = orders.find((o) => o.id == req.params.id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  Object.assign(order, req.body);
  res.json(order);
});

/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: Delete an order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 */
router.delete("/:id", (req, res) => {
  const order = orders.find((o) => o.id == req.params.id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  orders = orders.filter((o) => o.id != req.params.id);
  res.json({ message: "Order deleted successfully" });
});

module.exports = router;