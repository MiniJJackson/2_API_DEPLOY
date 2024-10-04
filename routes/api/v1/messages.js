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
            messages: messages // return the messages array
        }
    });
});

// GET /api/v1/messages/:id
router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id); // Parse the ID for request parameters
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

// POST /api/v1/messages
router.post('/', (req, res, next) => {
  const { user, text } = req.body.message; // Get user and text from the request

    // Calculate the new ID
    const newId = messages.length > 0 ? Math.max(...messages.map(msg => msg.id)) + 1 : 1;

    // Create the new message
    const newMessage = {
        id: newId,
        user: user,
        message: text
    };

    // Add the new message to the messages array
    messages.push(newMessage);

    res.status(201).json({
        status: "success",
        message: 'Message added!',
        data: {
            message: newMessage
        }
    });
});

// PUT: /api/v1/messages/:id
router.put('/:id', (req, res, next) => {
  const id = parseInt(req.params.id); // Parse the ID from the request parameters
  const message = messages.find(msg => msg.id === id); // Find the message by ID

  if (message) {
      const { user, text } = req.body.message; // Get user and text from the request body

      message.user = user;
      message.message = text;

      res.status(200).json({
          status: "success",
          message: 'Message updated!',
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

// DELETE: /api/v1/messages/:id
router.delete('/:id', (req, res, next) => {
  const id = parseInt(req.params.id); // Parse the ID from the request parameters
  const messageIndex = messages.findIndex(msg => msg.id === id); // Find the index of the message by ID

  if (messageIndex !== -1) {
      messages.splice(messageIndex, 1); // Remove the message from the array

      res.status(200).json({
          status: "success",
          message: 'Message is deleted! :) '
      });
  } else {
      res.status(404).json({
          status: "error",
          message: "Message not found :c "
      });
  }
});

// GET: /api/v1/messages?user=username
router.get('/', (req, res, next) => {
  const user = req.query.user; // Get the user query parameter
  if (user) {
      const userMessages = messages.filter(msg => msg.user === user); // Filter messages by user
      res.status(200).json({
          status: "success",
          message: 'GET messages by user ' + user,
          data: {
              messages: userMessages
          }
      });
  } else {
      res.status(400).json({
          status: "error",
          message: "User parameter is required"
      });
  }
});

module.exports = router;