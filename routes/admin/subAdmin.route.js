const express = require("express");
const router = express.Router();

const subAdminCtrl = require("../../controllers/admin/subAdmin.controller");
const AdminMiddleware = require("../../middleware/admin.middleware");

const checkAccessWithSecretKey = require("../../checkAccess");

router.use(checkAccessWithSecretKey());

// Create sub admin
router.post("/registerSubAdminAccount", AdminMiddleware, subAdminCtrl.registerSubAdminAccount);

// Update Sub Admin
router.patch("/modifySubAdminProfile", AdminMiddleware, subAdminCtrl.modifySubAdminProfile);

// Toggle Sub Admin Active Status
router.patch("/switchSubAdminAccess", AdminMiddleware, subAdminCtrl.switchSubAdminAccess);

// Delete Sub Admin
router.delete("/revokeSubAdminAccount", AdminMiddleware, subAdminCtrl.revokeSubAdminAccount);

// Get All Sub Admin
router.get("/fetchSubAdminDirectory", AdminMiddleware, subAdminCtrl.fetchSubAdminDirectory);

// Login Sub Admin
router.post("/authenticateSubAdminAccount", subAdminCtrl.authenticateSubAdminAccount);

module.exports = router;
