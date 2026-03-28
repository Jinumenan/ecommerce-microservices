const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Order Service API",
      version: "1.0.0",
      description: "API for managing orders"
    },
    servers: [
      {
        url: "http://localhost:8003"
      }
    ]
  },
  apis: ["./routes-order/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;