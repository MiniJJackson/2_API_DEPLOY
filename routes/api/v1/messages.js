//add routes
const express = require('express');
const router = express.Router();

//DATA messages
const messages = [
    { id: 1, user: "Jenna", message: "We got this" },
    { id: 2, user: "Jackson", message: "Yes we do!" },
    { id: 3, user: "Pam", message: "We go go!" },
    { id: 4, user: "Jack", message: "Do we do!" },

];

// GET /api/v1/messages
router.get('/', (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: 'GET messages!',
        data: {
            messages: messages
        }
    });
});

// GET /api/v1/messages/:id
router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id); // Parse the ID from the request parameters
  const message = messages.find(msg => msg.id === id); // Find the message by ID
  if (message) {
      res.status(200).json({
          status: "success",
          message: 'GET message with id ' + id,
          data: {
              message: message
          }
      });
  } else {
      res.status(404).json({
          status: "error",
          message: "Message not found"
      });
  }
});

module.exports = router;