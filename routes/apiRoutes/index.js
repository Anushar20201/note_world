const router = require('express').Router();
const noteWorldRoutes = require('./noteWorldRoutes');

// routing it to noteWorldRoutes - where we have all the routings for Save, Get and Delete
router.use(noteWorldRoutes);

module.exports = router;
