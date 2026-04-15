const express = require("express");
const multer = require("multer");

const localizationController = require("../../controllers/admin/translation.controller");
const checkAccessWithSecretKey = require("../../checkAccess");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.use(checkAccessWithSecretKey());

// create Translations for languages using CSV file
router.post(
  "/uploadTranslations",
  upload.single("file"),
  localizationController.uploadTranslations
);

// Update specific key-value pairs for a language
router.patch("/updateLanguageTranslations", localizationController.updateLanguageTranslations);

// download all translations as CSV file
router.get("/downloadTranslationsCSV", localizationController.downloadTranslationsCSV);

// get single Language's translations
router.get("/getLanguageTranslations", localizationController.getLanguage);


module.exports = router;