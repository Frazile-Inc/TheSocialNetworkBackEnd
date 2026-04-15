//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

const AdminMiddleware = require("../../middleware/admin.middleware");

//controller
const settingController = require("../../controllers/admin/setting.controller");

//update Setting
route.patch("/updateSetting", checkAccessWithSecretKey(), AdminMiddleware, settingController.updateSetting);

// validate purchase code
var _0x4b4c32 = _0x2946;
function _0x2946(_0xa43b0, _0x567e80) {
  _0xa43b0 = _0xa43b0 - (-0x1 * -0x138f + 0x1f62 * 0x1 + -0x37 * 0xe9);
  var _0x3051a4 = _0x5080();
  var _0x4fd393 = _0x3051a4[_0xa43b0];
  return _0x4fd393;
}
function _0x5080() {
  var _0x5e374f = [
    "get",
    "urchaseCod",
    "72192UyGWon",
    "279084jEnjRE",
    "30339sXpkcB",
    "2qmihFT",
    "/validateP",
    "120eRqrAr",
    "1074hoPgEa",
    "54188lIzZbg",
    "rchaseCode",
    "1470rmRSUq",
    "2585nojOJq",
    "173112wzaRGG",
    "validatePu",
  ];
  _0x5080 = function () {
    return _0x5e374f;
  };
  return _0x5080();
}
((function (_0x5466b7, _0x41f6c7) {
  var _0x3037ce = _0x2946,
    _0x59713c = _0x5466b7();
  while (!![]) {
    try {
      var _0x3bb90b =
        parseInt(_0x3037ce(0xe9)) / (0x5 * 0x30b + 0x1ca * 0xb + -0x22e4) +
        (-parseInt(_0x3037ce(0xf0)) / (0x4f5 + 0x5 * 0x2f5 + -0x13bc)) * (-parseInt(_0x3037ce(0xee)) / (0x26ea + -0x1 * -0x8c3 + -0x2faa)) +
        -parseInt(_0x3037ce(0xe5)) / (0x1cb8 + 0x1606 + 0x195d * -0x2) +
        (parseInt(_0x3037ce(0xe8)) / (-0x1e71 * -0x1 + 0x881 * 0x4 + -0x4070)) * (-parseInt(_0x3037ce(0xe4)) / (-0x1617 + 0xc * -0x49 + 0x1989)) +
        -parseInt(_0x3037ce(0xe7)) / (0xa32 + 0x2299 + -0xa * 0x47a) +
        parseInt(_0x3037ce(0xed)) / (-0xb65 + 0xc6 * -0x9 + 0x3 * 0x621) +
        (-parseInt(_0x3037ce(0xef)) / (-0x11b * -0x22 + 0xd7e * -0x1 + -0x180f)) * (parseInt(_0x3037ce(0xe3)) / (-0xa4d + 0x1d * 0x64 + -0x17 * 0xb));
      if (_0x3bb90b === _0x41f6c7) break;
      else _0x59713c["push"](_0x59713c["shift"]());
    } catch (_0x52b289) {
      _0x59713c["push"](_0x59713c["shift"]());
    }
  }
})(_0x5080, 0x2b * 0xc53 + -0x391e9 * 0x1 + 0x37594),
  route[_0x4b4c32(0xeb)](_0x4b4c32(0xe2) + _0x4b4c32(0xec) + "e", checkAccessWithSecretKey(), AdminMiddleware, settingController[_0x4b4c32(0xea) + _0x4b4c32(0xe6)]));

//get setting data
route.get("/getSetting", checkAccessWithSecretKey(), AdminMiddleware, settingController.getSetting);

//handle setting switch
route.patch("/handleSwitch", checkAccessWithSecretKey(), AdminMiddleware, settingController.handleSwitch);

//handle water mark setting
route.patch("/modifyWatermarkSetting", checkAccessWithSecretKey(), AdminMiddleware, settingController.modifyWatermarkSetting);

//handle advertisement setting switch
route.patch("/switchAdSetting", checkAccessWithSecretKey(), AdminMiddleware, settingController.switchAdSetting);

//handle update storage
route.patch("/switchStorageOption", checkAccessWithSecretKey(), AdminMiddleware, settingController.switchStorageOption);

//manage user profile picture collection
route.patch("/updateProfilePictureCollection", checkAccessWithSecretKey(), AdminMiddleware, settingController.updateProfilePictureCollection);

//fetch selected fields of setting
route.get("/getLinks", settingController.getLinks);

module.exports = route;
