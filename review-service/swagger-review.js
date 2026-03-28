const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Review Service API",
      version: "1.0.0",
      description: "API for managing reviews"
    },
    servers: [
      {
        url: "http://localhost:8005"
      }
    ]
  },
  apis: ["./routes-review/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;