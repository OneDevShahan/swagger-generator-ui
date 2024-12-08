// Dummy JSON data
export const dummyData = `[
  {
    "endpoint": "/restaurant",
    "httpMethod": "POST",
    "requestSchema": {
      "restaurantId": "string",
      "name": "string",
      "location": {
        "address": "string",
        "city": "string",
        "zipCode": "string"
      },
      "cuisine": ["string"]
    },
    "responseSchema": {
      "restaurantId": "string",
      "name": "string",
      "status": "string",
      "location": {
        "address": "string",
        "city": "string",
        "zipCode": "string"
      },
      "menu": [
        {
          "itemId": "string",
          "itemName": "string",
          "price": "number"
        }
      ]
    },
    "tags": ["Restaurant"],
    "parameters": [
      {
        "name": "Authorization",
        "in": "header",
        "required": true,
        "schema": { "type": "string" }
      }
    ],
    "operationId": "createRestaurant",
    "description": "Create a new restaurant entry"
  }
]`;
