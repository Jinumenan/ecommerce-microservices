const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger-review");
const reviewRoutes = require("./routes-review/reviewRoutes");

const app = express();
const PORT = 8005;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Review Service is running...");
});

app.use("/api/reviews", reviewRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Review Service running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});