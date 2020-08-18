const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const controller = require('./controller');

router.route('/list').get(asyncHandler(controller.list));
router.route('/battle/:id').get(asyncHandler(controller.getBattle));
router.route('/count').get(asyncHandler(controller.count));
router.route('/search').get(asyncHandler(controller.search));

module.exports = router;