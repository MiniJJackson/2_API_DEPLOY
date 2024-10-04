//add routes
const express = require('express');
const router = express.Router();

// GET /api/v1/messages
router.get('/', (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: 'GET messages!',
        data: {
            messages: [
                { id: 1, user: "Jenna", message: "We got this" },
                { id: 2, user: "Jackson", message: "Yes we do!" }
            ]
        }
    });
});

module.exports = router;