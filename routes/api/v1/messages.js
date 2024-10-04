//add routes
const express = require('express');
const router = express.Router();
const messageController = require('../../../controllers/api/v1/message');

//DATA messages
const messages = [
    { id: 1, user: "Jenna", message: "We got this" },
    { id: 2, user: "Jackson", message: "Yes we do!" },
    { id: 3, user: "Pam", message: "We go go!" },
    { id: 4, user: "Jack", message: "Do we do!" },
];

// GET /api/v1/messages
router.get('/', messageController.index);

// GET /api/v1/messages/:id
router.get('/:id', messageController.show);

// POST /api/v1/messages
router.post('/', messageController.create);

// PUT: /api/v1/messages/:id
router.put('/:id', messageController.update);

// DELETE: /api/v1/messages/:id
router.delete('/:id', messageController.destroy);

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