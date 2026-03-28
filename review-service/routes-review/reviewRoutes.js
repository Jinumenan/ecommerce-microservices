const express = require("express");
const router = express.Router();
let reviews = require("../data-review/reviewData");

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management API
 */

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Get all reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: List of all reviews
 */
router.get("/", (req, res) => {
  res.json(reviews);
});

/**
 * @swagger
 * /api/reviews/{id}:
 *   get:
 *     summary: Get review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Review found
 *       404:
 *         description: Review not found
 */
router.get("/:id", (req, res) => {
  const review = reviews.find((r) => r.id == req.params.id);

  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }

  res.json(review);
});

/**
 * @swagger
 * /api/reviews/product/{productId}:
 *   get:
 *     summary: Get reviews by product ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reviews for the product
 */
router.get("/product/:productId", (req, res) => {
  const productReviews = reviews.filter((r) => r.productId == req.params.productId);
  res.json(productReviews);
});

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Add a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *               customerId:
 *                 type: integer
 *               rating:
 *                 type: integer
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Review created successfully
 */
router.post("/", (req, res) => {
  const newReview = {
    id: reviews.length + 1,
    ...req.body
  };

  reviews.push(newReview);
  res.status(201).json(newReview);
});

/**
 * @swagger
 * /api/reviews/{id}:
 *   put:
 *     summary: Update a review
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Review updated successfully
 *       404:
 *         description: Review not found
 */
router.put("/:id", (req, res) => {
  const review = reviews.find((r) => r.id == req.params.id);

  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }

  Object.assign(review, req.body);
  res.json(review);
});

/**
 * @swagger
 * /api/reviews/{id}:
 *   delete:
 *     summary: Delete a review
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Review deleted successfully
 *       404:
 *         description: Review not found
 */
router.delete("/:id", (req, res) => {
  const review = reviews.find((r) => r.id == req.params.id);

  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }

  reviews = reviews.filter((r) => r.id != req.params.id);
  res.json({ message: "Review deleted successfully" });
});

module.exports = router;