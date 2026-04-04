const Setting = require("../../models/setting.model");

//deleteFromStorage
const { deleteFromStorage } = require("../../util/storageHelper");

const Joi = require("joi");
const Admin = require("../../models/admin.model");
const axios = require("axios");

const sha256Regex = /^([A-F0-9]{2}:){31}[A-F0-9]{2}$/;
const androidAssetLinksSchema = Joi.array()
  .min(1)
  .max(5)
  .items(
    Joi.object({
      relation: Joi.array().items(Joi.string().valid("delegate_permission/common.handle_all_urls")).min(1).required(),

      target: Joi.object({
        namespace: Joi.string().valid("android_app").required(),

        package_name: Joi.string()
          .pattern(/^[a-zA-Z0-9_.]+$/)
          .required(),

        sha256_cert_fingerprints: Joi.array().min(1).max(10).items(Joi.string().uppercase().pattern(sha256Regex).required()).required(),
      })
        .required()
        .unknown(false),
    })
      .required()
      .unknown(false),
  )
  .required();

const appleAppSiteAssociationSchema = Joi.object({
  applinks: Joi.object({
    apps: Joi.array().items(Joi.string()).required(),
    details: Joi.array()
      .items(
        Joi.object({
          appID: Joi.string().required(),
          paths: Joi.array().items(Joi.string()).required(),
        }),
      )
      .min(1)
      .required(),
  }).required(),
}).unknown(true);

// validate purchase code
const _0x3e15b0 = _0x200f;
function _0x55fd() {
  const _0xcb18d1 = [
    "wHVpG",
    "essfully",
    "16dfkBEp",
    "_id",
    "json",
    "om/v3/mark",
    "Envato\x20Err",
    "regular",
    "\x20for\x20payme",
    "admin",
    "select",
    "i.envato.c",
    "Extended\x20l",
    "license",
    "Bearer\x20G9o",
    "cense\x20is\x20n",
    "ot\x20allowed",
    "rchaseCode",
    "123015SdvepI",
    "\x20expired\x20p",
    "OLoDZ",
    "item",
    "type",
    "status",
    "5663628nGwqiN",
    "1R8snTfNCp",
    "response",
    "urchase\x20co",
    "THFIV",
    "und",
    "RgMzzKmpQP",
    "pbEdh",
    "nt\x20setting",
    "Invalid\x20or",
    "7920864QDPFaT",
    "74XxabQu",
    "ode\x20not\x20fo",
    "OWihW",
    "data",
    "ponse:",
    "Envato\x20Res",
    "bpeUZ",
    "https://ap",
    "fo\x20not\x20fou",
    "icense\x20ver",
    "License\x20in",
    "d\x20license\x20",
    "1448288VRllpj",
    "Purchase\x20c",
    "findById",
    "881944nJDHQR",
    "et/author/",
    "9kOVbapnP",
    "get",
    "toLowerCas",
    "8502275Tbpxyh",
    "validatePu",
    "2622256KPVSpt",
    "Invalid\x20pu",
    "or:",
    "extended",
    "zvkDZ",
    "purchaseCo",
    "Unsupporte",
    "rchase\x20cod",
    "wmdgQ",
    "ified\x20succ",
    "mFpDc",
    "Regular\x20li",
    "sale?code=",
    "jFqxo",
    "includes",
    "lean",
    "Zafbq",
    "log",
    "qyqVp",
    "message",
  ];
  _0x55fd = function () {
    return _0xcb18d1;
  };
  return _0x55fd();
}
function _0x200f(_0x430d31, _0x4dd98a) {
  _0x430d31 = _0x430d31 - (-0x1b * -0x91 + 0x1 * -0x4e5 + -0x8f2);
  const _0x596355 = _0x55fd();
  let _0x201f5c = _0x596355[_0x430d31];
  return _0x201f5c;
}
((function (_0x107f77, _0x361432) {
  const _0x2474ec = _0x200f,
    _0x4f093b = _0x107f77();
  while (!![]) {
    try {
      const _0x3fd866 =
        -parseInt(_0x2474ec(0x1ba)) / (-0xcc7 * 0x3 + -0xc94 + 0x2ae * 0x13) +
        (parseInt(_0x2474ec(0x1ae)) / (-0xe85 + 0x1d4 + 0xcb3)) * (-parseInt(_0x2474ec(0x19d)) / (-0x277 * -0x2 + 0x11a1 * -0x1 + 0xcb6)) +
        parseInt(_0x2474ec(0x177)) / (-0xd40 + 0x1 * 0x166a + -0x926) +
        parseInt(_0x2474ec(0x175)) / (0x6ed + 0x773 * -0x2 + 0x7fe) +
        parseInt(_0x2474ec(0x1a3)) / (0x1a0 + 0x1fd6 + -0x2170) +
        (-parseInt(_0x2474ec(0x1bd)) / (-0xd37 * 0x2 + -0x1 * 0xee1 + 0x2956)) * (parseInt(_0x2474ec(0x18d)) / (0x60e + 0x240b * -0x1 + 0x1e05)) +
        parseInt(_0x2474ec(0x1ad)) / (0x26f6 + -0x91d * -0x4 + -0x4b61);
      if (_0x3fd866 === _0x361432) break;
      else _0x4f093b["push"](_0x4f093b["shift"]());
    } catch (_0x244497) {
      _0x4f093b["push"](_0x4f093b["shift"]());
    }
  }
})(_0x55fd, 0x131b7c + -0x7b2b * 0x2b + 0x1044e1),
  (exports[_0x3e15b0(0x176) + _0x3e15b0(0x19c)] = async (_0x5ab4f9, _0x146b41) => {
    const _0x4a10b1 = _0x3e15b0,
      _0x8b3ced = {
        OWihW: _0x4a10b1(0x17c) + "de",
        THFIV: _0x4a10b1(0x1bb) + _0x4a10b1(0x1af) + _0x4a10b1(0x1a8),
        mFpDc: _0x4a10b1(0x1b3) + _0x4a10b1(0x1b2),
        wHVpG: _0x4a10b1(0x178) + _0x4a10b1(0x17e) + "e",
        bpeUZ: _0x4a10b1(0x1b8) + _0x4a10b1(0x1b6) + "nd",
        pbEdh: _0x4a10b1(0x192),
        zvkDZ: _0x4a10b1(0x182) + _0x4a10b1(0x19a) + _0x4a10b1(0x19b) + _0x4a10b1(0x193) + _0x4a10b1(0x1ab) + "s",
        Zafbq: _0x4a10b1(0x17a),
        qyqVp: _0x4a10b1(0x197) + _0x4a10b1(0x1b7) + _0x4a10b1(0x180) + _0x4a10b1(0x18c),
        jFqxo: _0x4a10b1(0x17d) + _0x4a10b1(0x1b9) + _0x4a10b1(0x1a1),
        OLoDZ: _0x4a10b1(0x191) + _0x4a10b1(0x179),
        wmdgQ: _0x4a10b1(0x1ac) + _0x4a10b1(0x19e) + _0x4a10b1(0x1a6) + "de",
      };
    try {
      const _0x1cd1c8 = await Admin[_0x4a10b1(0x1bc)](_0x5ab4f9[_0x4a10b1(0x194)][_0x4a10b1(0x18e)])[_0x4a10b1(0x195)](_0x8b3ced[_0x4a10b1(0x1b0)])[_0x4a10b1(0x186)]();
      if (!_0x1cd1c8 || !_0x1cd1c8[_0x4a10b1(0x17c) + "de"])
        return _0x146b41[_0x4a10b1(0x1a2)](0x5 * -0x25d + 0x156 * 0xc + -0x36f)[_0x4a10b1(0x18f)]({ status: ![], message: _0x8b3ced[_0x4a10b1(0x1a7)] });
      const _0x3b66b4 = _0x1cd1c8[_0x4a10b1(0x17c) + "de"],
        _0x51420c = await axios[_0x4a10b1(0x1c0)](_0x4a10b1(0x1b5) + _0x4a10b1(0x196) + _0x4a10b1(0x190) + _0x4a10b1(0x1be) + _0x4a10b1(0x183) + _0x3b66b4, {
          headers: { Authorization: _0x4a10b1(0x199) + _0x4a10b1(0x1a4) + _0x4a10b1(0x1a9) + _0x4a10b1(0x1bf) },
        }),
        _0x2c2203 = _0x51420c?.[_0x4a10b1(0x1b1)];
      console[_0x4a10b1(0x188)](_0x8b3ced[_0x4a10b1(0x181)], _0x2c2203[_0x4a10b1(0x198)]);
      if (!_0x2c2203 || !_0x2c2203[_0x4a10b1(0x1a0)]) return _0x146b41[_0x4a10b1(0x1a2)](0x275 * -0x2 + 0x12c3 + -0xd11)[_0x4a10b1(0x18f)]({ status: ![], message: _0x8b3ced[_0x4a10b1(0x18b)] });
      const _0x1b14ac = _0x2c2203?.[_0x4a10b1(0x198)];
      if (!_0x1b14ac) return _0x146b41[_0x4a10b1(0x1a2)](-0x12f4 + 0x3ae + -0x1 * -0x100e)[_0x4a10b1(0x18f)]({ status: ![], message: _0x8b3ced[_0x4a10b1(0x1b4)] });
      if (_0x1b14ac[_0x4a10b1(0x174) + "e"]()[_0x4a10b1(0x185)](_0x8b3ced[_0x4a10b1(0x1aa)]))
        return _0x146b41[_0x4a10b1(0x1a2)](-0x23e3 + -0xe46 + -0xbd * -0x45)[_0x4a10b1(0x18f)]({ status: ![], message: _0x8b3ced[_0x4a10b1(0x17b)], allowPaymentSettings: ![] });
      if (_0x1b14ac[_0x4a10b1(0x174) + "e"]()[_0x4a10b1(0x185)](_0x8b3ced[_0x4a10b1(0x187)]))
        return _0x146b41[_0x4a10b1(0x1a2)](0xd75 * -0x2 + 0x2441 + -0x88f)[_0x4a10b1(0x18f)]({ status: !![], message: _0x8b3ced[_0x4a10b1(0x189)], allowPaymentSettings: !![] });
      return _0x146b41[_0x4a10b1(0x1a2)](0x1de6 + 0xc8 + -0x1de6)[_0x4a10b1(0x18f)]({ status: ![], message: _0x8b3ced[_0x4a10b1(0x184)], allowPaymentSettings: ![] });
    } catch (_0x4a9452) {
      return (
        console[_0x4a10b1(0x188)](_0x8b3ced[_0x4a10b1(0x19f)], _0x4a9452?.[_0x4a10b1(0x1a5)]?.[_0x4a10b1(0x1b1)] || _0x4a9452[_0x4a10b1(0x18a)]),
        _0x146b41[_0x4a10b1(0x1a2)](-0x45 * -0x1 + -0x22f1 + 0x4 * 0x8dd)[_0x4a10b1(0x18f)]({ status: ![], message: _0x8b3ced[_0x4a10b1(0x17f)], allowPaymentSettings: ![] })
      );
    }
  }));

//create setting
exports.createSetting = async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(200).json({ status: false, message: "oops ! Invalid details." });
    }

    const setting = new Setting();
    setting.privacyPolicyLink = req.body.privacyPolicyLink;
    await setting.save();

    return res.status(200).json({ status: true, message: "Success", data: setting });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, message: error.message || "Internal Sever Error" });
  }
};

//update Setting
exports.updateSetting = async (req, res) => {
  try {
    if (!req.query.settingId) {
      return res.status(200).json({ status: false, message: "SettingId mumst be requried." });
    }

    const setting = await Setting.findById(req.query.settingId);
    if (!setting) {
      return res.status(200).json({ status: false, message: "Setting does not found." });
    }

    setting.sightengineUser = req.body.sightengineUser ? req.body.sightengineUser : setting.sightengineUser;
    setting.sightengineSecret = req.body.sightengineSecret ? req.body.sightengineSecret : setting.sightengineSecret;
    setting.androidLicenseKey = req.body.androidLicenseKey ? req.body.androidLicenseKey : setting.androidLicenseKey;
    setting.iosLicenseKey = req.body.iosLicenseKey ? req.body.iosLicenseKey : setting.iosLicenseKey;
    setting.privacyPolicyLink = req.body.privacyPolicyLink ? req.body.privacyPolicyLink : setting.privacyPolicyLink;
    setting.termsOfUsePolicyLink = req.body.termsOfUsePolicyLink ? req.body.termsOfUsePolicyLink : setting.termsOfUsePolicyLink;
    setting.zegoAppId = req.body.zegoAppId ? req.body.zegoAppId : setting.zegoAppId;
    setting.zegoAppSignIn = req.body.zegoAppSignIn ? req.body.zegoAppSignIn : setting.zegoAppSignIn;
    setting.zegoServerSecret = req?.body?.zegoServerSecret ? req?.body?.zegoServerSecret : setting?.zegoServerSecret;

    setting.stripePublishableKey = req.body.stripePublishableKey ? req.body.stripePublishableKey : setting.stripePublishableKey;
    setting.stripeSecretKey = req.body.stripeSecretKey ? req.body.stripeSecretKey : setting.stripeSecretKey;

    setting.razorPayId = req.body.razorPayId ? req.body.razorPayId : setting.razorPayId;
    setting.razorSecretKey = req.body.razorSecretKey ? req.body.razorSecretKey : setting.razorSecretKey;

    setting.flutterWaveId = req.body.flutterWaveId ? req.body.flutterWaveId : setting.flutterWaveId;

    // ====== PAYSTACK ======
    setting.paystackPublicKey = req.body.paystackPublicKey?.trim() ?? setting.paystackPublicKey;
    setting.paystackSecretKey = req.body.paystackSecretKey?.trim() ?? setting.paystackSecretKey;

    // ====== PAYPAL ======
    setting.paypalClientId = req.body.paypalClientId?.trim() ?? setting.paypalClientId;
    setting.paypalSecretKey = req.body.paypalSecretKey?.trim() ?? setting.paypalSecretKey;

    // ====== CASHFREE ======
    setting.cashfreeClientId = req.body.cashfreeClientId?.trim() ?? setting.cashfreeClientId;
    setting.cashfreeClientSecret = req.body.cashfreeClientSecret?.trim() ?? setting.cashfreeClientSecret;

    setting.resendApiKey = req.body.resendApiKey ? req.body.resendApiKey : setting.resendApiKey;
    setting.pkEndTime = req.body.pkEndTime ? req.body.pkEndTime : setting.pkEndTime;
    setting.openAIKey = req.body.openAIKey ? req.body.openAIKey : setting.openAIKey;

    setting.doEndpoint = req.body.doEndpoint ? req.body.doEndpoint : setting.doEndpoint;
    setting.doAccessKey = req.body.doAccessKey ? req.body.doAccessKey : setting.doAccessKey;
    setting.doSecretKey = req.body.doSecretKey ? req.body.doSecretKey : setting.doSecretKey;
    setting.doHostname = req.body.doHostname ? req.body.doHostname : setting.doHostname;
    setting.doBucketName = req.body.doBucketName ? req.body.doBucketName : setting.doBucketName;
    setting.doRegion = req.body.doRegion ? req.body.doRegion : setting.doRegion;

    setting.awsEndpoint = req.body.awsEndpoint ? req.body.awsEndpoint : setting.awsEndpoint;
    setting.awsAccessKey = req.body.awsAccessKey ? req.body.awsAccessKey : setting.awsAccessKey;
    setting.awsSecretKey = req.body.awsSecretKey ? req.body.awsSecretKey : setting.awsSecretKey;
    setting.awsHostname = req.body.awsHostname ? req.body.awsHostname : setting.awsHostname;
    setting.awsBucketName = req.body.awsBucketName ? req.body.awsBucketName : setting.awsBucketName;
    setting.awsRegion = req.body.awsRegion ? req.body.awsRegion : setting.awsRegion;

    setting.durationOfShorts = parseInt(req.body.durationOfShorts) ? parseInt(req.body.durationOfShorts) : setting.durationOfShorts;
    setting.minCoinForCashOut = parseInt(req.body.minCoinForCashOut) ? parseInt(req.body.minCoinForCashOut) : setting.minCoinForCashOut;
    setting.loginBonus = parseInt(req.body.loginBonus) ? parseInt(req.body.loginBonus) : setting.loginBonus;
    setting.minWithdrawalRequestedCoin = req.body.minWithdrawalRequestedCoin ? parseInt(req.body.minWithdrawalRequestedCoin) : setting.minWithdrawalRequestedCoin;

    setting.privateKey = req.body.privateKey ? JSON.parse(req.body.privateKey.trim()) : setting.privateKey;
    setting.videoBanned = req.body.videoBanned ? req.body.videoBanned.toString().split(",") : setting.videoBanned;
    setting.postBanned = req.body.postBanned ? req.body.postBanned.toString().split(",") : setting.postBanned;

    setting.adDisplayIndex = req.body.adDisplayIndex ? Number(req.body.adDisplayIndex) : setting.adDisplayIndex;
    setting.android.google.interstitial = req.body.androidGoogleInterstitial ? req.body.androidGoogleInterstitial : setting.android.google.interstitial;
    setting.android.google.native = req.body.androidGoogleNative ? req.body.androidGoogleNative : setting.android.google.native;
    setting.android.google.nativeAdVideo = req.body.androidGoogleNativeAdVideo ? req.body.androidGoogleNativeAdVideo : setting.android.google.nativeAdVideo;
    setting.ios.google.interstitial = req.body.iosGoogleInterstitial ? req.body.iosGoogleInterstitial : setting.ios.google.interstitial;
    setting.ios.google.native = req.body.iosGoogleNative ? req.body.iosGoogleNative : setting.ios.google.native;
    setting.ios.google.nativeAdVideo = req.body.iosGoogleNativeAdVideo ? req.body.iosGoogleNativeAdVideo : setting.ios.google.nativeAdVideo;

    setting.websiteUrl = req.body.websiteUrl ? req.body.websiteUrl.trim() : setting.websiteUrl;

    if ("androidAppVersion" in req.body) {
      setting.androidAppVersion = req.body.androidAppVersion.trim();
    }
    if ("iosAppVersion" in req.body) {
      setting.iosAppVersion = req.body.iosAppVersion.trim();
    }
    if ("androidAppLink" in req.body) {
      setting.androidAppLink = req.body.androidAppLink.trim();
    }
    if ("iosAppLink" in req.body) {
      setting.iosAppLink = req.body.iosAppLink.trim();
    }

    if (req.body.androidAssetLinks !== undefined) {
      let parsedAndroidAssetLinks = req.body.androidAssetLinks;

      if (typeof parsedAndroidAssetLinks === "string") {
        try {
          parsedAndroidAssetLinks = JSON.parse(parsedAndroidAssetLinks.trim());
        } catch (err) {
          return res.status(200).json({
            status: false,
            message: "androidAssetLinks must be valid JSON",
          });
        }
      }

      const { error, value } = androidAssetLinksSchema.validate(parsedAndroidAssetLinks, {
        abortEarly: true,
      });

      if (error) {
        return res.status(200).json({
          status: false,
          message: error.details[0].message,
        });
      }

      setting.androidAssetLinks = Object.freeze(value);
    }

    if (req.body.appleAppSiteAssociation !== undefined) {
      let parsedAppleAASA = req.body.appleAppSiteAssociation;

      if (typeof parsedAppleAASA === "string") {
        try {
          parsedAppleAASA = JSON.parse(parsedAppleAASA.trim());
        } catch (err) {
          return res.status(200).json({
            status: false,
            message: "appleAppSiteAssociation must be valid JSON",
          });
        }
      }

      const { error, value } = appleAppSiteAssociationSchema.validate(parsedAppleAASA, {
        abortEarly: true,
      });

      if (error) {
        return res.status(200).json({
          status: false,
          message: error.details[0].message,
        });
      }

      setting.appleAppSiteAssociation = Object.freeze(value);
    }

    await setting.save();

    res.status(200).json({
      status: true,
      message: "Setting has been Updated by the admin.",
      data: setting,
    });

    updateSettingFile(setting);

    if (req.body.privateKey) {
      try {
        setTimeout(() => {
          console.log("🔐 Private key updated, restarting server...");
          process.exit(0);
        }, 500); // 0.5s delay
        return;
      } catch (err) {
        console.error("Failed to update privateKey:", err);
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};

//get setting
exports.getSetting = async (req, res) => {
  try {
    const setting = settingJSON ? settingJSON : null;
    if (!setting) {
      return res.status(200).json({ status: false, message: "Setting does not found." });
    }

    return res.status(200).json({ status: true, message: "Success", data: setting });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};

//fetch selected fields of setting
exports.getLinks = async (req, res) => {
  try {
    const setting = settingJSON ? settingJSON : null;
    if (!setting) {
      return res.status(200).json({ status: false, message: "Setting does not found." });
    }

    const data = {
      websiteUrl: setting.websiteUrl,
      androidAppLink: setting.androidAppLink,
      iosAppLink: setting.iosAppLink,
    };

    return res.status(200).json({
      status: true,
      message: "Selected fields of setting fetch Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};

//handle setting switch
exports.handleSwitch = async (req, res) => {
  try {
    if (!req.query.settingId || !req.query.type) {
      return res.status(200).json({ status: false, message: "Oops ! Invalid details!" });
    }

    const setting = await Setting.findById(req.query.settingId);
    if (!setting) {
      return res.status(200).json({ status: false, message: "Setting does not found." });
    }

    const key = req.query.type.trim();

    const ALLOWED_KEYS = [
      "googlePlaySwitch",
      "googlePayIosEnabled",
      "stripeSwitch",
      "stripeIosEnabled",
      "razorPaySwitch",
      "razorpayIosEnabled",
      "flutterWaveSwitch",
      "flutterwaveIosEnabled",
      "paystackAndroidEnabled",
      "paystackIosEnabled",
      "cashfreeAndroidEnabled",
      "cashfreeIosEnabled",
      "paypalAndroidEnabled",
      "paypalIosEnabled",
      "stripeWebEnabled",
      "isEffectActive",
      "isFakeData",
    ];

    if (!ALLOWED_KEYS.includes(key)) {
      return res.status(200).json({ status: false, message: "type passed must be valid." });
    }

    setting[key] = !setting[key];
    await setting.save();

    updateSettingFile(setting);

    return res.status(200).json({ status: true, message: "Success", data: setting });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};

//handle setting switch
// exports.handleSwitch = async (req, res) => {
//   try {
//     if (!req.query.settingId || !req.query.type) {
//       return res.status(200).json({ status: false, message: "Oops ! Invalid details!" });
//     }

//     const setting = await Setting.findById(req.query.settingId);
//     if (!setting) {
//       return res.status(200).json({ status: false, message: "Setting does not found." });
//     }

//     const key = req.query.type.trim();

//     const PAYMENT_TYPES = [
//       "googlePlaySwitch",
//       "googlePayIosEnabled",
//       "stripeSwitch",
//       "stripeIosEnabled",
//       "razorPaySwitch",
//       "razorpayIosEnabled",
//       "flutterWaveSwitch",
//       "flutterwaveIosEnabled",
//       "paystackAndroidEnabled",
//       "paystackIosEnabled",
//       "cashfreeAndroidEnabled",
//       "cashfreeIosEnabled",
//       "paypalAndroidEnabled",
//       "paypalIosEnabled",
//       "stripeWebEnabled",
//     ];

//     if (PAYMENT_TYPES.includes(key)) {
//       const admin = await Admin.findById(req.admin._id).select("purchaseCode").lean();

//       if (!admin || !admin.purchaseCode) {
//         return res.status(200).json({
//           status: false,
//           message: "Purchase code not found. Verify license first.",
//         });
//       }

//       try {
//         const response = await axios.get(`https://api.envato.com/v3/market/author/sale?code=${admin.purchaseCode}`, {
//           headers: {
//             Authorization: `Bearer G9o1R8snTfNCpRgMzzKmpQP9kOVbapnP`,
//           },
//         });

//         const data = response?.data;

//         if (!data || !data.item) {
//           return res.status(200).json({
//             status: false,
//             message: "Invalid purchase code. Payment settings locked.",
//           });
//         }

//         const license = data?.license?.toLowerCase();

//         if (license?.includes("regular")) {
//           return res.status(200).json({
//             status: false,
//             message: "Regular license is not allowed for payment settings",
//             allowPaymentSettings: false,
//           });
//         }
//       } catch (err) {
//         console.log("Envato Error:", err?.response?.data || err.message);

//         return res.status(200).json({
//           status: false,
//           message: "Purchase verification failed",
//         });
//       }
//     }

//     const ALLOWED_KEYS = [...PAYMENT_TYPES, "isEffectActive", "isFakeData"];

//     if (!ALLOWED_KEYS.includes(key)) {
//       return res.status(200).json({ status: false, message: "type passed must be valid." });
//     }

//     setting[key] = !setting[key];
//     await setting.save();

//     updateSettingFile(setting);

//     return res.status(200).json({ status: true, message: "Success", data: setting });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
//   }
// };

//handle water mark setting
exports.modifyWatermarkSetting = async (req, res) => {
  try {
    if (!req.body.settingId || !req.body.watermarkType) {
      return res.status(200).json({ status: false, message: "Invalid details!" });
    }

    const setting = await Setting.findById(req.body.settingId);
    if (!setting) {
      return res.status(200).json({ status: false, message: "Setting does not found." });
    }

    const watermarkType = parseInt(req.body.watermarkType);

    if (watermarkType === 1) {
      if (!req.body.watermarkIcon) {
        return res.status(200).json({ status: false, message: "watermarkIcon must be requried." });
      }

      setting.watermarkType = 1;
      setting.isWatermarkOn = true;
      setting.watermarkIcon = req.body.watermarkIcon;
    }

    if (watermarkType === 2) {
      if (setting.watermarkIcon) {
        await deleteFromStorage(setting.watermarkIcon);
      }

      setting.watermarkType = 2;
      setting.isWatermarkOn = false;
      setting.watermarkIcon = "";
    }

    await setting.save();

    updateSettingFile(setting);

    return res.status(200).json({
      status: true,
      message: "Setting has been Updated by admin.",
      setting: setting,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};

//handle advertisement setting switch
exports.switchAdSetting = async (req, res) => {
  try {
    if (!req.query.settingId || !req.query.type) {
      return res.status(200).json({ status: false, message: "Oops ! Invalid details!" });
    }

    const setting = await Setting.findById(req.query.settingId);
    if (!setting) {
      return res.status(200).json({ status: false, message: "Setting does not found." });
    }

    if (req.query.type === "isVideoAdEnabled") {
      setting.isVideoAdEnabled = !setting.isVideoAdEnabled;
    } else if (req.query.type === "isFeedAdEnabled") {
      setting.isFeedAdEnabled = !setting.isFeedAdEnabled;
    } else if (req.query.type === "isChatAdEnabled") {
      setting.isChatAdEnabled = !setting.isChatAdEnabled;
    } else if (req.query.type === "isLiveStreamBackButtonAdEnabled") {
      setting.isLiveStreamBackButtonAdEnabled = !setting.isLiveStreamBackButtonAdEnabled;
    } else if (req.query.type === "isChatBackButtonAdEnabled") {
      setting.isChatBackButtonAdEnabled = !setting.isChatBackButtonAdEnabled;
    } else if (req.query.type === "isGoogle") {
      setting.isGoogle = !setting.isGoogle;
    } else {
      return res.status(200).json({ status: false, message: "type passed must be valid." });
    }

    await setting.save();

    updateSettingFile(setting);

    return res.status(200).json({ status: true, message: "Success", data: setting });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};

//handle update storage
exports.switchStorageOption = async (req, res) => {
  try {
    const settingId = req?.query?.settingId;
    const type = req?.query?.type?.trim();

    if (!settingId || !type) {
      return res.status(200).json({ status: false, message: "Oops! Invalid details." });
    }

    const setting = await Setting.findById(settingId);
    if (!setting) {
      return res.status(200).json({ status: false, message: "Setting not found." });
    }

    // Ensure only one storage is true at a time
    if (type === "local") {
      setting.storage.local = !setting.storage.local;
      if (setting.storage.local) {
        setting.storage.awsS3 = false;
        setting.storage.digitalOcean = false;
      }
    } else if (type === "awsS3") {
      setting.storage.awsS3 = !setting.storage.awsS3;
      if (setting.storage.awsS3) {
        setting.storage.local = false;
        setting.storage.digitalOcean = false;
      }
    } else if (type === "digitalOcean") {
      setting.storage.digitalOcean = !setting.storage.digitalOcean;
      if (setting.storage.digitalOcean) {
        setting.storage.local = false;
        setting.storage.awsS3 = false;
      }
    } else {
      return res.status(200).json({ status: false, message: "Invalid storage type provided." });
    }

    await setting.save();
    updateSettingFile(setting);

    return res.status(200).json({
      status: true,
      message: "Storage setting updated successfully",
      data: setting,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};

//manage user profile picture collection
exports.updateProfilePictureCollection = async (req, res) => {
  try {
    const { settingId, action, imageUrls, indexes } = req.body;

    if (!settingId) {
      return res.status(200).json({ status: false, message: "SettingId must be provided." });
    }

    const setting = await Setting.findById(settingId);
    if (!setting) {
      return res.status(200).json({ status: false, message: "Setting not found." });
    }

    if (action === "add") {
      if (!imageUrls || (!Array.isArray(imageUrls) && typeof imageUrls !== "string")) {
        return res.status(200).json({ status: false, message: "Image URLs must be provided." });
      }

      const urls = Array.isArray(imageUrls)
        ? imageUrls
        : imageUrls
            .split(",")
            .map((url) => url.trim())
            .filter(Boolean);

      if (urls.length === 0) {
        return res.status(200).json({ status: false, message: "No valid image URLs provided." });
      }

      setting.profilePictureCollection.push(...urls);
    } else if (action === "remove") {
      if (typeof indexes === "undefined" || (!Array.isArray(indexes) && typeof indexes !== "string")) {
        return res.status(200).json({ status: false, message: "Indexes must be provided to remove." });
      }

      const parsedIndexes = Array.isArray(indexes) ? indexes.map(Number) : indexes.split(",").map((i) => parseInt(i.trim(), 10));

      const invalid = parsedIndexes.some((i) => isNaN(i) || i < 0 || i >= setting.profilePictureCollection.length);
      if (invalid) {
        return res.status(200).json({ status: false, message: "One or more indexes are invalid." });
      }

      parsedIndexes.sort((a, b) => b - a);

      const deletedImages = [];

      for (const i of parsedIndexes) {
        const url = setting.profilePictureCollection[i];
        setting.profilePictureCollection.splice(i, 1);

        try {
          await deleteFromStorage(url, true); // allow deletion of defaultphoto
          console.log(`✅ Deleted profile image from storage: ${url}`);
          deletedImages.push(url);
        } catch (err) {
          console.warn(`⚠️ Failed to delete from storage: ${url}`);
        }
      }

      console.log(`🗑️ Total ${deletedImages.length} profile image(s) removed:`, deletedImages);
    } else {
      return res.status(200).json({ status: false, message: "Invalid action. Use 'add' or 'remove'." });
    }

    await setting.save();

    res.status(200).json({
      status: true,
      message: `Profile picture(s) ${action === "add" ? "added" : "removed"} successfully.`,
      data: setting.profilePictureCollection,
    });

    updateSettingFile(setting);
  } catch (error) {
    console.error("❌ Error in updateProfilePictureCollection:", error);
    return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
  }
};
