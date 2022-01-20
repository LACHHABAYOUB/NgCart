const express = require('express');
const router = express.Router();

const inventoryData = require('./inventory.data');

router.route('/inventory').get(
    (request, response) => {
        response.json(inventoryData);
    }
);

module.exports = router;