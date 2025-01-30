const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dt8bskazs",
  api_key: "696964191697198",
  api_secret: "8Xdn76UGHbIZnK8aJsyYea1oZ0Q",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}
const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };