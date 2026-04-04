//express
const express = require("express");
const route = express.Router();

const AdminMiddleware = require("../../middleware/admin.middleware");

//controller
const AdminController = require("../../controllers/admin/admin.controller");

const checkAccessWithSecretKey = require("../../checkAccess");
route.use(checkAccessWithSecretKey());

var _0x1cc0f5 = _0x10aa;
function _0x10aa(_0x166820, _0x158848) {
  _0x166820 = _0x166820 - (0x93b + 0x130b + 0x33 * -0x8b);
  var _0x1e8a64 = _0x2471();
  var _0x39481b = _0x1e8a64[_0x166820];
  return _0x39481b;
}
function _0x2471() {
  var _0xa456ec = [
    "357825HmVWcy",
    "/login",
    "store",
    "853640YQEttA",
    "13zIPpWO",
    "9387290sALbGl",
    "3945ctRGkH",
    "24frAJOU",
    "3133493sVlojF",
    "63ppETDh",
    "9WdBIcv",
    "/signUp",
    "1585574EyqrtT",
    "post",
    "1GRntBI",
    "66CGqItW",
    "login",
    "1468tGNTtb",
    "10126424uZYIVP",
  ];
  _0x2471 = function () {
    return _0xa456ec;
  };
  return _0x2471();
}
((function (_0x34e26f, _0xf7cf02) {
  var _0x24ca44 = _0x10aa,
    _0xdb85c6 = _0x34e26f();
  while (!![]) {
    try {
      var _0x59a00b =
        (parseInt(_0x24ca44(0xa7)) / (-0x21fc + -0x574 + 0x1b7 * 0x17)) * (parseInt(_0x24ca44(0xa5)) / (-0x15fc + -0xd * 0x1a9 + -0x61 * -0x73)) +
        (parseInt(_0x24ca44(0x9f)) / (-0x1791 + 0x189a + -0x106)) * (-parseInt(_0x24ca44(0x97)) / (-0x1537 * -0x1 + 0xdef + -0x2322)) +
        (parseInt(_0x24ca44(0x99)) / (0x565 * 0x3 + 0x1206 + -0x2230)) * (parseInt(_0x24ca44(0x95)) / (0x2227 * -0x1 + -0x1 * 0x5c5 + 0x2 * 0x13f9)) +
        (parseInt(_0x24ca44(0xa2)) / (0x177e + 0x117 + -0x188e)) * (-parseInt(_0x24ca44(0x9c)) / (0x1 * -0x6aa + -0x119d * -0x1 + 0x5 * -0x22f)) +
        (-parseInt(_0x24ca44(0xa3)) / (0x154f + 0x109c + 0x1a * -0x175)) * (parseInt(_0x24ca44(0x9e)) / (0x1 * 0xd3d + 0x6f5 + -0x1428)) +
        (parseInt(_0x24ca44(0xa1)) / (-0x26ff + -0x17fd + 0x3f07)) * (parseInt(_0x24ca44(0xa0)) / (0x11 * 0x133 + 0x720 + 0x59 * -0x4f)) +
        (parseInt(_0x24ca44(0x9d)) / (-0x748 * -0x2 + 0x2182 + -0x1 * 0x3005)) * (parseInt(_0x24ca44(0x98)) / (0x194c + 0xb * -0x4f + 0x77 * -0x2f));
      if (_0x59a00b === _0xf7cf02) break;
      else _0xdb85c6["push"](_0xdb85c6["shift"]());
    } catch (_0x501b82) {
      _0xdb85c6["push"](_0xdb85c6["shift"]());
    }
  }
})(_0x2471, -0x2af * -0x389 + -0x9ed2e + -0x1fbfb * -0x4),
  route[_0x1cc0f5(0xa6)](_0x1cc0f5(0xa4), AdminController[_0x1cc0f5(0x9b)]),
  route[_0x1cc0f5(0xa6)](_0x1cc0f5(0x9a), AdminController[_0x1cc0f5(0x96)]));

//update admin profile
route.patch("/updateProfile", AdminMiddleware, AdminController.update);

//get admin profile
route.get("/profile", AdminMiddleware, AdminController.getProfile);

//send email for forgot the password (forgot password)
route.post("/forgotPassword", AdminController.forgotPassword);

//update admin password
route.patch("/updatePassword", AdminMiddleware, AdminController.updatePassword);

//set password
route.patch("/setPassword", AdminMiddleware, AdminController.setPassword);

module.exports = route;
