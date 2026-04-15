//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const languageController = require("../../controllers/admin/language.controller");

route.use(checkAccessWithSecretKey());

// create Language
route.post("/createLanguage", languageController.createLanguage);

// get all languages
route.get("/getAllLanguages", languageController.getAllLanguages);

// get single Lnaguage
route.get("/getLanguage", languageController.getLanguage);

// update Language
route.patch("/updateLanguage", languageController.updateLanguage);

// toggle isActive and isDefault switch
route.patch("/toggleSwitch", languageController.toggleSwitch);

// delete Language and its Translations
route.delete("/deleteLanguage", languageController.deleteLanguage);

module.exports = route;
