const express = require("express");
const router = express.Router();
let customers = require("../data-customer/customerData");

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Customer management API
 */

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Get all customers
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: List of all customers
 */
router.get("/", (req, res) => {
  res.json(customers);
});

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: Get customer by ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer found
 *       404:
 *         description: Customer not found
 */
router.get("/:id", (req, res) => {
  const customer = customers.find((c) => c.id == req.params.id);

  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }

  res.json(customer);
});

/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Add a new customer
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer created successfully
 */
router.post("/", (req, res) => {
  const newCustomer = {
    id: customers.length + 1,
    ...req.body
  };

  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     summary: Update a customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *       404:
 *         description: Customer not found
 */
router.put("/:id", (req, res) => {
  const customer = customers.find((c) => c.id == req.params.id);

  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }

  Object.assign(customer, req.body);
  res.json(customer);
});

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: Delete a customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer deleted successfully
 *       404:
 *         description: Customer not found
 */
router.delete("/:id", (req, res) => {
  const customer = customers.find((c) => c.id == req.params.id);

  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }

  customers = customers.filter((c) => c.id != req.params.id);
  res.json({ message: "Customer deleted successfully" });
});

module.exports = router;