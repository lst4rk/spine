const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/library');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

router.get('/', ensureAuth, libraryController.getBooks);
router.post('/addBook', libraryController.addBook);
router.put('/markRead', libraryController.markRead);
router.put('/markUnread', libraryController.markUnread);
router.delete('/removeBook', libraryController.deleteBook);

module.exports = router;