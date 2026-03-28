const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Inventory Service API",
      version: "1.0.0",
      description: "API for managing inventory"
    },
    servers: [
      {
        url: "http://localhost:8004"
      }
    ]
  },
  apis: ["./routes-inventory/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;