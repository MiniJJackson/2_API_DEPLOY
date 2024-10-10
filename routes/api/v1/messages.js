//add routes
const express = require('express');
const router = express.Router();
const messageController = require('../../../controllers/api/v1/message.js');

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


module.exports = router;