const express = require("express");
const router = express.Router();
let inventory = require("../data-inventory/inventoryData");

/**
 * @swagger
 * tags:
 *   name: Inventory
 *   description: Inventory management API
 */

/**
 * @swagger
 * /api/inventory:
 *   get:
 *     summary: Get all inventory records
 *     tags: [Inventory]
 *     responses:
 *       200:
 *         description: List of all inventory records
 */
router.get("/", (req, res) => {
  res.json(inventory);
});

/**
 * @swagger
 * /api/inventory/{productId}:
 *   get:
 *     summary: Get inventory by product ID
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inventory record found
 *       404:
 *         description: Inventory record not found
 */
router.get("/:productId", (req, res) => {
  const item = inventory.find((i) => i.productId == req.params.productId);

  if (!item) {
    return res.status(404).json({ message: "Inventory record not found" });
  }

  res.json(item);
});

/**
 * @swagger
 * /api/inventory:
 *   post:
 *     summary: Add a new inventory record
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *               stockQuantity:
 *                 type: integer
 *               warehouseLocation:
 *                 type: string
 *               availabilityStatus:
 *                 type: string
 *     responses:
 *       201:
 *         description: Inventory created successfully
 */
router.post("/", (req, res) => {
  const newItem = req.body;
  inventory.push(newItem);
  res.status(201).json(newItem);
});

/**
 * @swagger
 * /api/inventory/{productId}:
 *   put:
 *     summary: Update inventory by product ID
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inventory updated successfully
 *       404:
 *         description: Inventory record not found
 */
router.put("/:productId", (req, res) => {
  const item = inventory.find((i) => i.productId == req.params.productId);

  if (!item) {
    return res.status(404).json({ message: "Inventory record not found" });
  }

  Object.assign(item, req.body);
  res.json(item);
});

/**
 * @swagger
 * /api/inventory/{productId}:
 *   delete:
 *     summary: Delete inventory by product ID
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inventory deleted successfully
 *       404:
 *         description: Inventory record not found
 */
router.delete("/:productId", (req, res) => {
  const item = inventory.find((i) => i.productId == req.params.productId);

  if (!item) {
    return res.status(404).json({ message: "Inventory record not found" });
  }

  inventory = inventory.filter((i) => i.productId != req.params.productId);
  res.json({ message: "Inventory deleted successfully" });
});

module.exports = router;