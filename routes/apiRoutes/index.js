const router = require('express').Router();
const noteWorldRoutes = require('./noteWorldRoutes');

router.use(noteWorldRoutes);

module.exports = router;
