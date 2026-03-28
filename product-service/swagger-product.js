const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product Service API",
      version: "1.0.0",
      description: "API for managing products in the E-Commerce system"
    },
    servers: [
      {
        url: "http://localhost:8001"
      }
    ]
  },
  apis: ["./routes-product/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;