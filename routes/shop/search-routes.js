const express = require("express");

const {searchProducts} = require("../../controllers/shop/search-controller");

const { upload } = require("../../helpers/cloudinary");

const router = express.Router();

router.get("/:keyword", searchProducts);

module.exports = router;
