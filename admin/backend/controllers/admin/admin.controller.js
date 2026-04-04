const Admin = require("../../models/admin.model");
const SubAdmin = require("../../models/subAdmin.model");

//jwt token
const jwt = require("jsonwebtoken");

//resend
const { Resend } = require("resend");

//Cryptr
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotallySecretKey");

//deleteFromStorage
const { deleteFromStorage } = require("../../util/storageHelper");

function _0x46e2() {
  const _0x177696 = [
    "ver\x20error:",
    "qOutP",
    "\x20|\x20buyer=",
    "sign",
    "OIrGy",
    "[AUTH]\x20Pur",
    "e\x20failed\x20L",
    "594HjNuJj",
    "Purchase\x20c",
    "\x20|\x20code=",
    "ode\x20not\x20va",
    "headers",
    "min\x20creati",
    "admin",
    "iveUser\x20va",
    "response",
    "valid",
    "Yuiwx",
    "HWndC",
    "[AUTH]\x20Inv",
    "trim",
    "MSMDq",
    "replace",
    "../../mode",
    "get",
    "92364tPfFaj",
    "entials\x20do",
    "pUFVa",
    "chase\x20code",
    "[AUTH]\x20Ite",
    "lastLoginI",
    "qIbat",
    "n\x20script",
    "ode\x20is\x20not",
    "Invalid\x20de",
    "login",
    "NWYnD",
    "247225hbFGEg",
    "image",
    "alid\x20respo",
    "Vsafv",
    "referer",
    "[STORE]\x20In",
    "origin",
    "toString",
    "123WCDktv",
    "ever\x20Error",
    "Admin\x20Crea",
    "odel",
    "RTQhP",
    "EPScU",
    "2280HvPwRJ",
    "ive!",
    "Login\x20succ",
    "Internal\x20S",
    "1043SORucd",
    "YwIUV",
    "Unknown",
    "ror:",
    "\x20valid",
    "fied\x20|\x20cod",
    "axios",
    "dNOyh",
    "https://li",
    "40bBrkjn",
    "y\x20exists,\x20",
    "cannot\x20reg",
    "kyYnq",
    "registered",
    "[STORE]\x20Pu",
    "led.",
    "ion\x20failed",
    "buyer",
    "https://ap",
    "isting\x20log",
    "email",
    "KlxUp",
    "r\x20|\x20domain",
    "d\x20|\x20email=",
    "been\x20login",
    "data",
    "nse\x20from\x20E",
    "able:",
    "ternal\x20ser",
    "Purchase\x20v",
    "26860BsHZYi",
    "[STORE]\x20Ex",
    "pi/license",
    "1R8snTfNCp",
    "buyerName",
    "cean.com/a",
    "ssing\x20requ",
    "purchaseCo",
    "is\x20not\x20act",
    "[STORE]\x20Ne",
    "UXibO",
    "permission",
    "cense\x20serv",
    "populate",
    "58PBANBX",
    "post",
    "[STORE]\x20Ad",
    "VYGop",
    "KJOFT",
    "json",
    "Your\x20accou",
    "YOvVf",
    "/activate-",
    "er\x20unreach",
    "DnCdA",
    "1024128PsnDzV",
    "Vngdv",
    "kjxXA",
    "UldYK",
    "Oops\x20!\x20Pas",
    "ierQe",
    "active!",
    "Admin\x20and\x20",
    "oEBBq",
    "MlWLR",
    "pzBUT",
    "rchase\x20cod",
    "cord\x20creat",
    "is\x20time",
    "on\x20request",
    "cation\x20fai",
    "min\x20create",
    "sfully!",
    "body",
    "i.envato.c",
    "isActive",
    "9kOVbapnP",
    "Unable\x20to\x20",
    "entials.",
    "QvukL",
    "status",
    "USxMm",
    "erver\x20Erro",
    "lastLoginA",
    "decrypt",
    "\x20|\x20got=",
    "wqSiR",
    "oJVHO",
    "findOne",
    "verify\x20lic",
    "[STORE]\x20Mi",
    "these\x20cred",
    "ode\x20verifi",
    "\x20|\x20email=",
    "item",
    "subAdmin",
    "log",
    "om/v3/mark",
    "ense\x20serve",
    "gfUbX",
    "or-create",
    "qevOG",
    "Xkqbw",
    "ls!",
    "min\x20alread",
    "w\x20login\x20re",
    "et/author/",
    "error",
    "yBouz",
    "725463wYhHfj",
    "ense\x20at\x20th",
    "[STORE]\x20Se",
    "message",
    "sale?code=",
    "Admin\x20has\x20",
    "[AUTH]\x20Env",
    "er\x20respons",
    "fZbqI",
    "updated",
    "encrypt",
    "tails",
    "save",
    "alid\x20detai",
    "sword\x20does",
    "est\x20to\x20lic",
    "XkacO",
    "essful",
    "password",
    "BdPRC",
    "ls/login.m",
    "lidation",
    "in\x20record\x20",
    "her",
    "Shortie",
    "role",
    "Sub\x20Admin\x20",
    "store",
    "n\x27t\x20matche",
    "chase\x20veri",
    "cted=",
    "aqqyb",
    "Your\x20role\x20",
    "This\x20purch",
    "Oops!\x20cred",
    "nt\x20is\x20not\x20",
    "ted\x20Succes",
    "warn",
    "Yhegv",
    "Bearer\x20G9o",
    "nding\x20requ",
    "\x20verificat",
    "hgpgc",
    "RgMzzKmpQP",
    "xoEry",
    "FqTPg",
    "erificatio",
    "ister\x20anot",
    "_id",
    "m\x20ID\x20misma",
    "Oops\x20!\x20Inv",
    "53328735",
    "both\x20not\x20f",
    "host",
    "\x20-\x20",
    "cence.digi",
    "nvato\x20API",
    "ot\x20found!",
    "kDCEr",
    "ase\x20code\x20i",
    "Password\x20n",
    "name",
    "[STORE]\x20Li",
    "ired\x20field",
    "lid",
    "kJyYh",
    "esn\x27t\x20matc",
    "ound\x20with\x20",
    "tch\x20|\x20expe",
    "er\x20validat",
    "s\x20already\x20",
    "ato\x20API\x20er",
  ];
  _0x46e2 = function () {
    return _0x177696;
  };
  return _0x46e2();
}
const _0x48e7ee = _0x5601;
(function (_0x204df8, _0x440171) {
  const _0x49e1eb = _0x5601,
    _0xdc7d62 = _0x204df8();
  while (!![]) {
    try {
      const _0x30a3ee =
        (-parseInt(_0x49e1eb(0x117)) / (0x2 * -0x97f + -0x2ef + -0xaf7 * -0x2)) * (-parseInt(_0x49e1eb(0x14d)) / (0x2690 + -0x9f9 + -0x32d * 0x9)) +
        parseInt(_0x49e1eb(0x18e)) / (-0x1 * -0x23c5 + -0xa87 + -0x193b) +
        (-parseInt(_0x49e1eb(0x103)) / (-0x204 + 0x4f3 + -0x2eb)) * (-parseInt(_0x49e1eb(0x12a)) / (-0x8 * 0x2b3 + 0x5 * -0xa + 0x15cf)) +
        -parseInt(_0x49e1eb(0x158)) / (-0x159 * 0x1 + 0x1919 + -0x1 * 0x17ba) +
        (-parseInt(_0x49e1eb(0x121)) / (-0xc57 + 0x11ea + -0x58c)) * (-parseInt(_0x49e1eb(0x11d)) / (0x13d9 + 0x1b52 + 0x1 * -0x2f23)) +
        (-parseInt(_0x49e1eb(0xf1)) / (-0x1b8 + 0x89 * 0x1 + -0x8 * -0x27)) * (parseInt(_0x49e1eb(0x13f)) / (-0x1457 * -0x1 + -0x43 * 0x1f + 0x5 * -0x270)) +
        parseInt(_0x49e1eb(0x10f)) / (-0x2f1 + 0xc8f * 0x2 + 0x1622 * -0x1);
      if (_0x30a3ee === _0x440171) break;
      else _0xdc7d62["push"](_0xdc7d62["shift"]());
    } catch (_0x4e6d71) {
      _0xdc7d62["push"](_0xdc7d62["shift"]());
    }
  }
})(_0x46e2, 0x37c97 * -0x1 + -0x8c9 * -0x7a + 0x83cb * 0x3);
function _0x5601(_0x516024, _0x50cbc2) {
  _0x516024 = _0x516024 - (0x210 * -0xc + 0x7 * -0x2a6 + -0x1 * -0x2c05);
  const _0x4f5ba7 = _0x46e2();
  let _0x446863 = _0x4f5ba7[_0x516024];
  return _0x446863;
}
const Login = require(_0x48e7ee(0x101) + _0x48e7ee(0x1a2) + _0x48e7ee(0x11a)),
  axios = require(_0x48e7ee(0x127));
async function Auth(_0x15c24c, _0x18266f) {
  const _0x545bf6 = _0x48e7ee,
    _0xafa70 = {
      hgpgc: _0x545bf6(0x13e) + _0x545bf6(0xd0) + _0x545bf6(0x10a),
      dNOyh: _0x545bf6(0xfd) + _0x545bf6(0x111) + _0x545bf6(0x13b) + _0x545bf6(0xda),
      UXibO: function (_0x36cdc5, _0xfce578) {
        return _0x36cdc5 !== _0xfce578;
      },
      MlWLR: function (_0x3d4f1f, _0x190f35) {
        return _0x3d4f1f === _0x190f35;
      },
      YOvVf: _0x545bf6(0x194) + _0x545bf6(0xe9) + _0x545bf6(0x124),
      qevOG: _0x545bf6(0xf2) + _0x545bf6(0x17d) + _0x545bf6(0x167) + _0x545bf6(0x130),
    };
  try {
    const _0x4f143c = await axios[_0x545bf6(0x102)](_0x545bf6(0x133) + _0x545bf6(0x16b) + _0x545bf6(0x182) + _0x545bf6(0x18b) + _0x545bf6(0x192) + _0x15c24c, {
        headers: { Authorization: _0x545bf6(0xc9) + _0x545bf6(0x142) + _0x545bf6(0xcd) + _0x545bf6(0x16d), "User-Agent": _0xafa70[_0x545bf6(0xcc)] },
        validateStatus: () => !![],
      }),
      _0x25871f = _0x4f143c[_0x545bf6(0x13a)];
    if (!_0x25871f || !_0x25871f[_0x545bf6(0x17f)]) return (console[_0x545bf6(0xc7)](_0xafa70[_0x545bf6(0x128)], _0x25871f), { valid: ![] });
    if (_0xafa70[_0x545bf6(0x149)](_0x25871f[_0x545bf6(0x17f)]["id"][_0x545bf6(0x116)](), _0x18266f[_0x545bf6(0x116)]()))
      return (console[_0x545bf6(0xc7)](_0x545bf6(0x107) + _0x545bf6(0xd3) + _0x545bf6(0xe6) + _0x545bf6(0xc0) + _0x18266f + _0x545bf6(0x176) + _0x25871f[_0x545bf6(0x17f)]["id"]), { valid: ![] });
    const _0x1c02a8 = _0x25871f[_0x545bf6(0x132)] || null;
    return (console[_0x545bf6(0x181)](_0x545bf6(0xef) + _0x545bf6(0xbf) + _0x545bf6(0x126) + "e=" + _0x15c24c + _0x545bf6(0xec) + _0x1c02a8), { valid: !![], buyerName: _0x1c02a8 });
  } catch (_0x3040e0) {
    const _0x107529 = _0x3040e0?.[_0x545bf6(0xf9)]?.[_0x545bf6(0x171)];
    if (_0xafa70[_0x545bf6(0x161)](_0x107529, 0x5 * 0x371 + -0x14f8 + 0x1 * 0x557) || _0xafa70[_0x545bf6(0x161)](_0x107529, 0x1 * -0x1d5e + -0x11b9 + 0x30aa))
      return (console[_0x545bf6(0x18c)](_0x545bf6(0xef) + _0x545bf6(0x106) + _0x545bf6(0xcb) + _0x545bf6(0x131) + ":\x20" + _0x107529 + _0x545bf6(0xd8) + _0x3040e0[_0x545bf6(0x191)]), { valid: ![] });
    console[_0x545bf6(0x18c)](_0xafa70[_0x545bf6(0x154)], _0x3040e0[_0x545bf6(0x191)]);
    throw new Error(_0xafa70[_0x545bf6(0x186)]);
  }
}
((exports[_0x48e7ee(0xbd)] = async (_0x1267e9, _0x46d72e) => {
  const _0x40aa40 = _0x48e7ee,
    _0x6ac6b = {
      xoEry: function (_0x4d3075, _0x5108b3) {
        return _0x4d3075 || _0x5108b3;
      },
      VYGop: _0x40aa40(0x17b) + _0x40aa40(0x145) + _0x40aa40(0xe1) + "s",
      wqSiR: _0x40aa40(0x10c) + _0x40aa40(0x199),
      USxMm: _0x40aa40(0x14f) + _0x40aa40(0x189) + _0x40aa40(0x12b) + _0x40aa40(0x12c) + _0x40aa40(0xd1) + _0x40aa40(0x1a5),
      HWndC: _0x40aa40(0xc3) + _0x40aa40(0xdd) + _0x40aa40(0xe8) + _0x40aa40(0x12e),
      pzBUT: function (_0xd84920, _0x231c29, _0x47e337) {
        return _0xd84920(_0x231c29, _0x47e337);
      },
      UldYK: _0x40aa40(0xd5),
      pUFVa: _0x40aa40(0x12f) + _0x40aa40(0x163) + _0x40aa40(0xf0) + _0x40aa40(0xf8) + _0x40aa40(0x1a3),
      RTQhP: _0x40aa40(0xf2) + _0x40aa40(0xf4) + _0x40aa40(0xe2),
      YwIUV: _0x40aa40(0x123),
      ierQe: _0x40aa40(0x129) + _0x40aa40(0xd9) + _0x40aa40(0x144) + _0x40aa40(0x141) + _0x40aa40(0x155) + _0x40aa40(0x185),
      kDCEr: _0x40aa40(0x1a6),
      QvukL: _0x40aa40(0xe0) + _0x40aa40(0x14b) + _0x40aa40(0x156) + _0x40aa40(0x13c),
      NWYnD: _0x40aa40(0x16e) + _0x40aa40(0x17a) + _0x40aa40(0x18f) + _0x40aa40(0x165),
      EPScU: _0x40aa40(0xe0) + _0x40aa40(0x14b) + _0x40aa40(0xe7) + _0x40aa40(0x131),
      Xkqbw: _0x40aa40(0xf2) + _0x40aa40(0x10b) + _0x40aa40(0x125),
      oEBBq: _0x40aa40(0x148) + _0x40aa40(0x18a) + _0x40aa40(0x164) + "ed",
      KlxUp: _0x40aa40(0x140) + _0x40aa40(0x134) + _0x40aa40(0x1a4) + _0x40aa40(0x197),
      kyYnq: _0x40aa40(0x119) + _0x40aa40(0xc6) + _0x40aa40(0x169),
      KJOFT: _0x40aa40(0x114) + _0x40aa40(0x13d) + _0x40aa40(0xea),
      Vngdv: _0x40aa40(0x120) + _0x40aa40(0x173) + "r",
    };
  try {
    const { email: _0x187238, password: _0x4a4bb3, code: _0x2d70a4 } = _0x1267e9[_0x40aa40(0x16a)] || {};
    console[_0x40aa40(0x181)](_0x40aa40(0x14f) + _0x40aa40(0xf6) + _0x40aa40(0x166) + _0x40aa40(0x17e) + _0x187238 + _0x40aa40(0xf3) + _0x2d70a4);
    if (_0x6ac6b[_0x40aa40(0xce)](!_0x187238, !_0x4a4bb3) || !_0x2d70a4)
      return (
        console[_0x40aa40(0xc7)](_0x6ac6b[_0x40aa40(0x150)]),
        _0x46d72e[_0x40aa40(0x171)](0x4dd + 0x1 * 0x17e9 + 0x81 * -0x36)[_0x40aa40(0x152)]({ status: ![], message: _0x6ac6b[_0x40aa40(0x177)] })
      );
    const _0xb7bcb3 = await Admin[_0x40aa40(0x179)]();
    if (_0xb7bcb3)
      return (
        console[_0x40aa40(0xc7)](_0x6ac6b[_0x40aa40(0x172)]),
        _0x46d72e[_0x40aa40(0x171)](-0x89b + 0x8 * -0x3b8 + 0x13f7 * 0x2)[_0x40aa40(0x152)]({ status: ![], message: _0x6ac6b[_0x40aa40(0xfc)] })
      );
    const _0x32dfb2 = await _0x6ac6b[_0x40aa40(0x162)](Auth, _0x2d70a4, _0x6ac6b[_0x40aa40(0x15b)]);
    if (!_0x32dfb2[_0x40aa40(0xfa)])
      return (
        console[_0x40aa40(0xc7)](_0x6ac6b[_0x40aa40(0x105)]),
        _0x46d72e[_0x40aa40(0x171)](0x2 * 0x1e8 + -0x1 * 0xb93 + -0xa * -0xef)[_0x40aa40(0x152)]({ status: ![], message: _0x6ac6b[_0x40aa40(0x11b)] })
      );
    const _0x46472e = _0x32dfb2[_0x40aa40(0x143)] || _0x6ac6b[_0x40aa40(0x122)];
    let _0x4140dc;
    try {
      const _0x1f4f4b = _0x1267e9[_0x40aa40(0xf5)][_0x40aa40(0x115)] || _0x1267e9[_0x40aa40(0xf5)][_0x40aa40(0x113)] || _0x1267e9[_0x40aa40(0xf5)][_0x40aa40(0xd7)];
      (console[_0x40aa40(0x181)](_0x40aa40(0x190) + _0x40aa40(0xca) + _0x40aa40(0x19d) + _0x40aa40(0x183) + _0x40aa40(0x137) + "=" + _0x1f4f4b),
        (_0x4140dc = await axios[_0x40aa40(0x14e)](
          _0x6ac6b[_0x40aa40(0x15d)],
          { licenseKey: _0x2d70a4, clientName: _0x46472e, appName: _0x6ac6b[_0x40aa40(0xdc)] },
          { headers: { "x-client-setup-url": _0x1f4f4b }, validateStatus: () => !![] },
        )));
    } catch (_0x3e9bb5) {
      return (
        console[_0x40aa40(0x18c)](_0x6ac6b[_0x40aa40(0x170)], _0x3e9bb5[_0x40aa40(0x191)]),
        _0x46d72e[_0x40aa40(0x171)](0x1cd7 + 0x1f84 + -0x3a67)[_0x40aa40(0x152)]({ status: ![], message: _0x6ac6b[_0x40aa40(0x10e)] })
      );
    }
    const _0x2895d4 = _0x4140dc[_0x40aa40(0x13a)];
    console[_0x40aa40(0x181)](_0x40aa40(0xe0) + _0x40aa40(0x14b) + _0x40aa40(0x195) + "e:", _0x2895d4);
    if (!_0x2895d4[_0x40aa40(0x171)])
      return (
        console[_0x40aa40(0xc7)](_0x6ac6b[_0x40aa40(0x11c)]),
        _0x46d72e[_0x40aa40(0x171)](-0x1 * 0x1e95 + -0x13f9 * -0x1 + 0xc2f * 0x1)[_0x40aa40(0x152)]({ status: ![], message: _0x2895d4[_0x40aa40(0x191)] || _0x6ac6b[_0x40aa40(0x187)] })
      );
    const _0x4656c1 = new Admin({ email: _0x187238[_0x40aa40(0xfe)](), password: cryptr[_0x40aa40(0x198)](_0x4a4bb3), purchaseCode: _0x2d70a4[_0x40aa40(0xfe)]() });
    (await _0x4656c1[_0x40aa40(0x19a)](), console[_0x40aa40(0x181)](_0x40aa40(0x14f) + _0x40aa40(0x168) + _0x40aa40(0x138) + _0x187238 + _0x40aa40(0xf3) + _0x2d70a4));
    const _0x1c709a = await Login[_0x40aa40(0x179)]({});
    if (!_0x1c709a) {
      const _0x2e61dd = new Login({ login: !![] });
      (await _0x2e61dd[_0x40aa40(0x19a)](), console[_0x40aa40(0x181)](_0x6ac6b[_0x40aa40(0x160)]));
    } else ((_0x1c709a[_0x40aa40(0x10d)] = !![]), await _0x1c709a[_0x40aa40(0x19a)](), console[_0x40aa40(0x181)](_0x6ac6b[_0x40aa40(0x136)]));
    return _0x46d72e[_0x40aa40(0x171)](0x15b9 + 0x74f * 0x2 + 0x1 * -0x238f)[_0x40aa40(0x152)]({ status: !![], message: _0x6ac6b[_0x40aa40(0x12d)], admin: _0x4656c1 });
  } catch (_0x442fdb) {
    return (
      console[_0x40aa40(0x18c)](_0x6ac6b[_0x40aa40(0x151)], _0x442fdb),
      _0x46d72e[_0x40aa40(0x171)](-0xe9b + -0xb83 + -0x1 * -0x1c12)[_0x40aa40(0x152)]({ status: ![], message: _0x442fdb[_0x40aa40(0x191)] || _0x6ac6b[_0x40aa40(0x159)] })
    );
  }
}),
  (exports[_0x48e7ee(0x10d)] = async (_0x22a204, _0x385921) => {
    const _0x1b6e9f = _0x48e7ee,
      _0x1f9ce8 = {
        FqTPg: _0x1b6e9f(0xd4) + _0x1b6e9f(0x19b) + _0x1b6e9f(0x188),
        qOutP: _0x1b6e9f(0xbb),
        fZbqI: _0x1b6e9f(0x15f) + _0x1b6e9f(0xbc) + _0x1b6e9f(0xd6) + _0x1b6e9f(0xe5) + _0x1b6e9f(0x17c) + _0x1b6e9f(0x16f),
        qIbat: _0x1b6e9f(0xc2) + _0x1b6e9f(0x147) + _0x1b6e9f(0x11e),
        yBouz: _0x1b6e9f(0x153) + _0x1b6e9f(0xc5) + _0x1b6e9f(0x15e),
        Yhegv: _0x1b6e9f(0xde) + _0x1b6e9f(0xdb),
        XkacO: function (_0xb71f0a, _0x1bd1cf) {
          return _0xb71f0a !== _0x1bd1cf;
        },
        Vsafv: _0x1b6e9f(0xc4) + _0x1b6e9f(0x104) + _0x1b6e9f(0xe4) + "h!",
        Yuiwx: _0x1b6e9f(0x180),
        kjxXA: _0x1b6e9f(0x11f) + _0x1b6e9f(0x19f),
        kJyYh: function (_0x65e371, _0x29cd2b, _0x38a7e3) {
          return _0x65e371(_0x29cd2b, _0x38a7e3);
        },
        oJVHO: _0x1b6e9f(0xd5),
        OIrGy: _0x1b6e9f(0x12f) + _0x1b6e9f(0x163) + _0x1b6e9f(0xf0) + _0x1b6e9f(0xf8) + _0x1b6e9f(0x1a3),
        gfUbX: _0x1b6e9f(0xf2) + _0x1b6e9f(0xf4) + _0x1b6e9f(0xe2),
        MSMDq: _0x1b6e9f(0x15c) + _0x1b6e9f(0x19c) + _0x1b6e9f(0xbe) + "d!",
        aqqyb: _0x1b6e9f(0xf7),
        DnCdA: _0x1b6e9f(0x193) + _0x1b6e9f(0x139) + ".",
        BdPRC: _0x1b6e9f(0x120) + _0x1b6e9f(0x118),
      };
    try {
      if (!_0x22a204[_0x1b6e9f(0x16a)][_0x1b6e9f(0x135)] || !_0x22a204[_0x1b6e9f(0x16a)][_0x1b6e9f(0x1a0)])
        return _0x385921[_0x1b6e9f(0x171)](0x2709 + -0x443 * -0x4 + -0x374d)[_0x1b6e9f(0x152)]({ status: ![], message: _0x1f9ce8[_0x1b6e9f(0xcf)] });
      const _0x2a7b23 = await Admin[_0x1b6e9f(0x179)]({ email: _0x22a204[_0x1b6e9f(0x16a)][_0x1b6e9f(0x135)][_0x1b6e9f(0xfe)]() });
      if (!_0x2a7b23) {
        const _0x1247ca = await SubAdmin[_0x1b6e9f(0x179)]({ email: _0x22a204[_0x1b6e9f(0x16a)][_0x1b6e9f(0x135)][_0x1b6e9f(0xfe)]() })[_0x1b6e9f(0x14c)](_0x1f9ce8[_0x1b6e9f(0xeb)]);
        if (!_0x1247ca) return _0x385921[_0x1b6e9f(0x171)](-0x1f39 + -0x3 * -0xc6f + -0x54c)[_0x1b6e9f(0x152)]({ status: ![], message: _0x1f9ce8[_0x1b6e9f(0x196)] });
        if (!_0x1247ca[_0x1b6e9f(0xbb)][_0x1b6e9f(0x16c)])
          return _0x385921[_0x1b6e9f(0x171)](-0x1d * 0x9f + -0x5 * 0x48 + 0x1433)[_0x1b6e9f(0x152)]({ status: ![], message: _0x1f9ce8[_0x1b6e9f(0x109)] });
        if (!_0x1247ca[_0x1b6e9f(0x16c)]) return _0x385921[_0x1b6e9f(0x171)](-0x3e * -0x8 + 0x1f97 * -0x1 + 0x1e6f)[_0x1b6e9f(0x152)]({ status: ![], message: _0x1f9ce8[_0x1b6e9f(0x18d)] });
        if (!_0x1247ca[_0x1b6e9f(0x1a0)]) return _0x385921[_0x1b6e9f(0x171)](-0x5 * 0x727 + 0x16 * 0x18f + 0x241 * 0x1)[_0x1b6e9f(0x152)]({ status: ![], message: _0x1f9ce8[_0x1b6e9f(0xc8)] });
        if (_0x1f9ce8[_0x1b6e9f(0x19e)](cryptr[_0x1b6e9f(0x175)](_0x1247ca[_0x1b6e9f(0x1a0)]), _0x22a204[_0x1b6e9f(0x16a)][_0x1b6e9f(0x1a0)][_0x1b6e9f(0xfe)]()))
          return _0x385921[_0x1b6e9f(0x171)](-0x143 * 0xa + 0x821 + 0x545)[_0x1b6e9f(0x152)]({ status: ![], message: _0x1f9ce8[_0x1b6e9f(0x112)] });
        const _0x23a420 = _0x22a204["ip"][_0x1b6e9f(0x100)](/^::ffff:/, "");
        ((_0x1247ca[_0x1b6e9f(0x108) + "p"] = _0x23a420), (_0x1247ca[_0x1b6e9f(0x174) + "t"] = new Date()), await _0x1247ca[_0x1b6e9f(0x19a)]());
        const _0x1391a0 = {
            _id: _0x1247ca[_0x1b6e9f(0xd2)],
            name: _0x1247ca[_0x1b6e9f(0xdf)],
            email: _0x1247ca[_0x1b6e9f(0x135)],
            role: _0x1247ca[_0x1b6e9f(0xbb)][_0x1b6e9f(0xdf)],
            permissions: _0x1247ca[_0x1b6e9f(0xbb)][_0x1b6e9f(0x14a) + "s"],
            type: _0x1f9ce8[_0x1b6e9f(0xfb)],
          },
          _0x32964c = jwt[_0x1b6e9f(0xed)](_0x1391a0, process?.env?.JWT_SECRET, { expiresIn: "1h" });
        return _0x385921[_0x1b6e9f(0x171)](0x1 * 0x1bd9 + 0x1 * 0x1abd + -0x35ce)[_0x1b6e9f(0x152)]({
          status: !![],
          message: _0x1f9ce8[_0x1b6e9f(0x15a)],
          data: _0x32964c,
          role: _0x1f9ce8[_0x1b6e9f(0xfb)],
          subAdmin: {
            _id: _0x1247ca[_0x1b6e9f(0xd2)],
            name: _0x1247ca[_0x1b6e9f(0xdf)],
            email: _0x1247ca[_0x1b6e9f(0x135)],
            role: _0x1247ca[_0x1b6e9f(0xbb)][_0x1b6e9f(0xdf)],
            permissions: _0x1247ca[_0x1b6e9f(0xbb)][_0x1b6e9f(0x14a) + "s"],
          },
        });
      }
      const _0x364a72 = await _0x1f9ce8[_0x1b6e9f(0xe3)](Auth, _0x2a7b23?.[_0x1b6e9f(0x146) + "de"], _0x1f9ce8[_0x1b6e9f(0x178)]);
      if (!_0x364a72[_0x1b6e9f(0xfa)])
        return (
          console[_0x1b6e9f(0xc7)](_0x1f9ce8[_0x1b6e9f(0xee)]),
          _0x385921[_0x1b6e9f(0x171)](-0x16a * 0x14 + -0x1a8 * -0x15 + -0x4ed)[_0x1b6e9f(0x152)]({ status: ![], message: _0x1f9ce8[_0x1b6e9f(0x184)] })
        );
      if (_0x1f9ce8[_0x1b6e9f(0x19e)](cryptr[_0x1b6e9f(0x175)](_0x2a7b23[_0x1b6e9f(0x1a0)]), _0x22a204[_0x1b6e9f(0x16a)][_0x1b6e9f(0x1a0)][_0x1b6e9f(0xfe)]()))
        return _0x385921[_0x1b6e9f(0x171)](-0x1838 + 0x7 * 0x380 + 0x8 * 0x10)[_0x1b6e9f(0x152)]({ status: ![], message: _0x1f9ce8[_0x1b6e9f(0xff)] });
      const _0xb48914 = { _id: _0x2a7b23[_0x1b6e9f(0xd2)], name: _0x2a7b23[_0x1b6e9f(0xdf)], email: _0x2a7b23[_0x1b6e9f(0x135)], image: _0x2a7b23[_0x1b6e9f(0x110)], type: _0x1f9ce8[_0x1b6e9f(0xc1)] },
        _0x342093 = jwt[_0x1b6e9f(0xed)](_0xb48914, process?.env?.JWT_SECRET, { expiresIn: "1h" });
      return _0x385921[_0x1b6e9f(0x171)](-0x1fa2 * -0x1 + 0x5cf * -0x6 + 0x400)[_0x1b6e9f(0x152)]({
        status: !![],
        message: _0x1f9ce8[_0x1b6e9f(0x157)],
        data: _0x342093,
        role: _0x1f9ce8[_0x1b6e9f(0xc1)],
      });
    } catch (_0x59dd08) {
      return (
        console[_0x1b6e9f(0x181)](_0x59dd08),
        _0x385921[_0x1b6e9f(0x171)](0x1052 * -0x1 + -0x1 * 0xaa2 + 0x4a * 0x64)[_0x1b6e9f(0x152)]({ status: ![], message: _0x59dd08[_0x1b6e9f(0x191)] || _0x1f9ce8[_0x1b6e9f(0x1a1)] })
      );
    }
  }));

//update admin profile
exports.update = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id);
    if (!admin) {
      if (req?.body?.image) {
        await deleteFromStorage(req?.body?.image);
      }

      return res.status(200).json({ status: false, message: "admin does not found!" });
    }

    admin.name = req?.body?.name ? req?.body?.name : admin.name;
    admin.email = req?.body?.email ? req?.body?.email.trim() : admin.email;

    if (req?.body?.image) {
      if (admin?.image) {
        await deleteFromStorage(admin?.image);
      }

      admin.image = req?.body?.image ? req?.body?.image : admin.image;
    }

    await admin.save();

    const data = await Admin.findById(admin._id);
    data.password = cryptr.decrypt(data.password);

    return res.status(200).json({
      status: true,
      message: "Admin profile has been updated.",
      data: data,
    });
  } catch (error) {
    if (req?.body?.image) {
      await deleteFromStorage(req?.body?.image);
    }

    console.log(error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};

//get admin profile
exports.getProfile = async (req, res) => {
  try {
    if (req.admin) {
      const admin = await Admin.findById(req.admin._id);
      if (!admin) {
        return res.status(200).json({ status: false, message: "admin does not found." });
      }

      admin.password = cryptr.decrypt(admin.password);
      return res.status(200).json({ status: true, message: "admin profile get by admin!", data: admin });
    } else if (req.subAdmin) {
      const subAdmin = await SubAdmin.findById(req.subAdmin._id);
      if (!subAdmin) {
        return res.status(200).json({ status: false, message: "subAdmin does not found." });
      }

      subAdmin.password = cryptr.decrypt(subAdmin.password);
      return res.status(200).json({ status: true, message: "subAdmin profile get by subAdmin!", data: subAdmin });
    }

    return res.status(200).json({ status: false, message: "No admin or subAdmin found." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};

//send email for forgot the password (forgot password)
exports.forgotPassword = async (req, res) => {
  try {
    if (!req.query.email) {
      return res.status(200).json({ status: false, message: "email must be requried." });
    }

    const email = req.query.email.trim();

    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return res.status(200).json({ status: false, message: "admin does not found with that email." });
    }

    var tab = "";
    tab += "<!DOCTYPE html><html><head>";
    tab += "<meta charset='utf-8'><meta http-equiv='x-ua-compatible' content='ie=edge'><meta name='viewport' content='width=device-width, initial-scale=1'>";
    tab += "<style type='text/css'>";
    tab += " @media screen {@font-face {font-family: 'Source Sans Pro';font-style: normal;font-weight: 400;}";
    tab += "@font-face {font-family: 'Source Sans Pro';font-style: normal;font-weight: 700;}}";
    tab += "body,table,td,a {-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }";
    tab += "table,td {mso-table-rspace: 0pt;mso-table-lspace: 0pt;}";
    tab += "img {-ms-interpolation-mode: bicubic;}";
    tab +=
      "a[x-apple-data-detectors] {font-family: inherit !important;font-size: inherit !important;font-weight: inherit !important;line-height:inherit !important;color: inherit !important;text-decoration: none !important;}";
    tab += "div[style*='margin: 16px 0;'] {margin: 0 !important;}";
    tab += "body {width: 100% !important;height: 100% !important;padding: 0 !important;margin: 0 !important;}";
    tab += "table {border-collapse: collapse !important;}";
    tab += "a {color: #1a82e2;}";
    tab += "img {height: auto;line-height: 100%;text-decoration: none;border: 0;outline: none;}";
    tab += "</style></head><body>";
    tab += "<table border='0' cellpadding='0' cellspacing='0' width='100%'>";
    tab += "<tr><td align='center' bgcolor='#e9ecef'><table border='0' cellpadding='0' cellspacing='0' width='100%' style='max-width: 600px;'>";
    tab += "<tr><td align='center' valign='top' bgcolor='#ffffff' style='padding:36px 24px 0;border-top: 3px solid #d4dadf;'><a href='#' target='_blank' style='display: inline-block;'>";
    tab +=
      "<img src='https://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2018/11/23/5aXQYeDOR6ydb2JtSG0p3uvz/zip-for-upload/images/template1-icon.png' alt='Logo' border='0' width='48' style='display: block; width: 500px; max-width: 500px; min-width: 500px;'></a>";
    tab +=
      "</td></tr></table></td></tr><tr><td align='center' bgcolor='#e9ecef'><table border='0' cellpadding='0' cellspacing='0' width='100%' style='max-width: 600px;'><tr><td align='center' bgcolor='#ffffff'>";
    tab += "<h1 style='margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;'>SET YOUR PASSWORD</h1></td></tr></table></td></tr>";
    tab +=
      "<tr><td align='center' bgcolor='#e9ecef'><table border='0' cellpadding='0' cellspacing='0' width='100%' style='max-width: 600px;'><tr><td align='center' bgcolor='#ffffff' style='padding: 24px; font-size: 16px; line-height: 24px;font-weight: 600'>";
    tab += "<p style='margin: 0;'>Not to worry, We got you! Let's get you a new password.</p></td></tr><tr><td align='left' bgcolor='#ffffff'>";
    tab += "<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td align='center' bgcolor='#ffffff' style='padding: 12px;'>";
    tab += "<table border='0' cellpadding='0' cellspacing='0'><tr><td align='center' style='border-radius: 4px;padding-bottom: 50px;'>";
    tab +=
      "<a href='" +
      process?.env?.baseURL +
      "changePassword?id=" +
      `${admin._id}` +
      "' target='_blank' style='display: inline-block; padding: 16px 36px; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 4px;background: #FE9A16; box-shadow: -2px 10px 20px -1px #33cccc66;'>SUBMIT PASSWORD</a>";
    tab += "</td></tr></table></td></tr></table></td></tr></table></td></tr></table></body></html>";

    const resend = new Resend(settingJSON?.resendApiKey);

    const response = await resend.emails.send({
      from: process?.env?.EMAIL,
      to: email,
      subject: `Sending email from ${process?.env?.projectName} for Password Security`,
      html: tab,
    });

    if (response.error) {
      console.error("Error sending email via Resend:", response.error);
      return res.status(500).json({ status: false, message: "Failed to send OTP email", error: response.error.message });
    }

    return res.status(200).json({ status: true, message: "OTP sent successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};

//update password
exports.updatePassword = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id);
    if (!admin) {
      return res.status(200).json({ status: false, message: "admin does not found." });
    }

    if (!req.body.oldPass || !req.body.newPass || !req.body.confirmPass) {
      return res.status(200).json({ status: false, message: "Oops! Invalid details!" });
    }

    if (cryptr.decrypt(admin.password) !== req.body.oldPass) {
      return res.status(200).json({
        status: false,
        message: "Oops! Password doesn't match!",
      });
    }

    if (req.body.newPass !== req.body.confirmPass) {
      return res.status(200).json({
        status: false,
        message: "Oops! New Password and Confirm Password don't match!",
      });
    }

    const hash = cryptr.encrypt(req.body.newPass);
    admin.password = hash;

    const [savedAdmin, data] = await Promise.all([admin.save(), Admin.findById(admin._id)]);

    data.password = cryptr.decrypt(savedAdmin.password);

    return res.status(200).json({
      status: true,
      message: "Password has been changed by the admin.",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};

//set Password
exports.setPassword = async (req, res) => {
  try {
    const admin = await Admin.findById(req?.admin._id);
    if (!admin) {
      return res.status(200).json({ status: false, message: "Admin does not found." });
    }

    const { newPassword, confirmPassword } = req.body;

    if (!newPassword || !confirmPassword) {
      return res.status(200).json({ status: false, message: "Oops ! Invalid details!" });
    }

    if (newPassword !== confirmPassword) {
      return res.status(200).json({
        status: false,
        message: "Oops! New Password and Confirm Password don't match!",
      });
    }

    admin.password = cryptr.encrypt(newPassword);
    await admin.save();

    admin.password = cryptr.decrypt(admin?.password);

    return res.status(200).json({
      status: true,
      message: "Password has been updated Successfully.",
      data: admin,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};
