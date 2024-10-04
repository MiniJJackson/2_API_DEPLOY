const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    status: "success",
    message: 'GET messages',
    data: {
      messages: [],
    },
  });
});

// Export router for use in main app
module.exports = router;