const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Customer Service API",
      version: "1.0.0",
      description: "API for managing customers in the E-Commerce system"
    },
    servers: [
      {
        url: "http://localhost:8002"
      }
    ]
  },
  apis: ["./routes-customer/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;