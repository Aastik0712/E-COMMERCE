const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "drkqassa2",
  api_key: "223342983761911",
  api_secret: "SZW7xeddLWw_FzOAr9pG7tz2C_g",
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
