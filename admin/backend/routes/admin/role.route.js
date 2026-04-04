const express = require("express");
const router = express.Router();

const roleCtrl = require("../../controllers/admin/role.controller");
const AdminMiddleware = require("../../middleware/admin.middleware");

const checkAccessWithSecretKey = require("../../checkAccess");


router.use(checkAccessWithSecretKey());

// Create Role
router.post("/registerRole", AdminMiddleware, roleCtrl.registerRole);

// Update Role
router.patch("/modifyRole", AdminMiddleware, roleCtrl.modifyRole);

// Get All Roles
router.get("/listRoles", AdminMiddleware, roleCtrl.listRoles);

// Delete Role
router.delete("/removeRole", AdminMiddleware, roleCtrl.removeRole);

// Get All Roles ( When Create Staff )
router.get("/listAssignableRoles", AdminMiddleware, roleCtrl.listAssignableRoles);

// Toggle Role Active Status
router.patch("/changeRoleActivation", AdminMiddleware, roleCtrl.changeRoleActivation);

module.exports = router;
