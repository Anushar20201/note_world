const router = require('express').Router();
const noteWorldRoutes = require('../apiRoutes/noteWorldRoutes');

router.use(noteWorldRoutes);

module.exports = router;
