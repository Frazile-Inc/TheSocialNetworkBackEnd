"use client";

import { useState, useEffect } from "react";
import styles from "../../styles/PaymentSettings.module.css";
import { useSelector } from "react-redux";
import { RootStore, useAppDispatch } from "@/store/store";
import { getSetting, updateSetting, settingSwitch, verifyPurchaseCode } from "@/store/settingSlice";

import { setToast } from "@/util/toastServices";
import {
  razorpayContent,
  stripeContent,
  paystackContent,
  cashfreeContent,
  paypalContent,
  flutterWaveContent,
  googlePlayContent,
} from "@/extra/infoContent";
import InfoTooltip from "@/extra/InfoTooltip";

import SettingsCard from "../ui/SettingsCard";
import FormField from "../ui/FormField";
import Button from "../ui/button";
import Switch from "../ui/switch";
import PaymentRestrictionsDialog from "./PaymentRestrictionsDialog";

import { Smartphone, Apple, Globe, CreditCard, DollarSign } from "lucide-react";
import { usePermission } from "@/hooks/usePermission";

interface PaymentState {
  enabled: boolean;
  androidEnabled: boolean;
  iosEnabled: boolean;
  // stripeWebEnabled?: boolean;
  [key: string]: any;
}

const PaymentSettings = () => {
  const dispatch = useAppDispatch();
  const { settingData, allowPaymentSettings } = useSelector((state: RootStore) => state.setting);
  const { can } = usePermission();
  const canEdit = can("Setting", "Edit");

  const [razorPay, setRazorPay] = useState<PaymentState>({
    enabled: false,
    androidEnabled: false,
    iosEnabled: false,
    razorPayId: "",
    razorSecretKey: "",
  });

  const [stripe, setStripe] = useState<PaymentState>({
    enabled: false,
    androidEnabled: false,
    iosEnabled: false,
    // stripeWebEnabled: false,
    stripePublishableKey: "",
    stripeSecretKey: "",
  });

  const [paystack, setPaystack] = useState<PaymentState>({
    enabled: false,
    androidEnabled: false,
    iosEnabled: false,
    paystackPublicKey: "",
    paystackSecretKey: "",
  });

  const [cashfree, setCashfree] = useState<PaymentState>({
    enabled: false,
    androidEnabled: false,
    iosEnabled: false,
    cashfreeClientId: "",
    cashfreeClientSecret: "",
  });

  const [paypal, setPaypal] = useState<PaymentState>({
    enabled: false,
    androidEnabled: false,
    iosEnabled: false,
    paypalClientId: "",
    paypalSecretKey: "",
  });

  const [flutterwave, setFlutterwave] = useState<PaymentState>({
    enabled: false,
    androidEnabled: false,
    iosEnabled: false,
    flutterWaveId: "",
  });

  const [googlePlay, setGooglePlay] = useState<PaymentState>({
    enabled: false,
    androidEnabled: false,
    iosEnabled: false,
  });

  const [restrictionDialogOpen, setRestrictionDialogOpen] = useState(false);

  const [initialValues, setInitialValues] = useState<any>({});

  useEffect(() => {
    dispatch(verifyPurchaseCode({} as any))
  }, [dispatch])

  useEffect(() => {
      dispatch(getSetting({} as any));
  }, [dispatch]);



  useEffect(() => {
    if (settingData) {
      const newState = {
        razorPay: {
          enabled: settingData.razorPaySwitch || settingData.razorpayIosEnabled || false,
          androidEnabled: settingData.razorPaySwitch || false,
          iosEnabled: settingData.razorpayIosEnabled || false,
          razorPayId: settingData.razorPayId || "",
          razorSecretKey: settingData.razorSecretKey || "",
        },
        stripe: {
          // enabled: settingData.stripeSwitch || settingData.stripeIosEnabled || settingData.stripeWebEnabled || false,
          enabled: settingData.stripeSwitch || settingData.stripeIosEnabled || false,
          androidEnabled: settingData.stripeSwitch || false,
          iosEnabled: settingData.stripeIosEnabled || false,
          // stripeWebEnabled: settingData.stripeWebEnabled || false,
          stripePublishableKey: settingData.stripePublishableKey || "",
          stripeSecretKey: settingData.stripeSecretKey || "",
        },
        paystack: {
          enabled: settingData.paystackAndroidEnabled || settingData.paystackIosEnabled || false,
          androidEnabled: settingData.paystackAndroidEnabled || false,
          iosEnabled: settingData.paystackIosEnabled || false,
          paystackPublicKey: settingData.paystackPublicKey || "",
          paystackSecretKey: settingData.paystackSecretKey || "",
        },
        cashfree: {
          enabled: settingData.cashfreeAndroidEnabled || settingData.cashfreeIosEnabled || false,
          androidEnabled: settingData.cashfreeAndroidEnabled || false,
          iosEnabled: settingData.cashfreeIosEnabled || false,
          cashfreeClientId: settingData.cashfreeClientId || "",
          cashfreeClientSecret: settingData.cashfreeClientSecret || "",
        },
        paypal: {
          enabled: settingData.paypalAndroidEnabled || settingData.paypalIosEnabled || false,
          androidEnabled: settingData.paypalAndroidEnabled || false,
          iosEnabled: settingData.paypalIosEnabled || false,
          paypalClientId: settingData.paypalClientId || "",
          paypalSecretKey: settingData.paypalSecretKey || "",
        },
        flutterwave: {
          enabled: settingData.flutterWaveSwitch || settingData.flutterwaveIosEnabled || false,
          androidEnabled: settingData.flutterWaveSwitch || false,
          iosEnabled: settingData.flutterwaveIosEnabled || false,
          flutterWaveId: settingData.flutterWaveId || "",
        },
        googlePlay: {
          enabled: settingData.googlePlaySwitch || settingData.googlePayIosEnabled || false,
          androidEnabled: settingData.googlePlaySwitch || false,
          iosEnabled: settingData.googlePayIosEnabled || false,
        },
      };

      setRazorPay(newState.razorPay);
      setStripe(newState.stripe);
      setPaystack(newState.paystack);
      setCashfree(newState.cashfree);
      setPaypal(newState.paypal);
      setFlutterwave(newState.flutterwave);
      setGooglePlay(newState.googlePlay);

      setInitialValues({
        razorPayId: settingData.razorPayId || "",
        razorSecretKey: settingData.razorSecretKey || "",
        stripePublishableKey: settingData.stripePublishableKey || "",
        stripeSecretKey: settingData.stripeSecretKey || "",
        paystackPublicKey: settingData.paystackPublicKey || "",
        paystackSecretKey: settingData.paystackSecretKey || "",
        cashfreeClientId: settingData.cashfreeClientId || "",
        cashfreeClientSecret: settingData.cashfreeClientSecret || "",
        paypalClientId: settingData.paypalClientId || "",
        paypalSecretKey: settingData.paypalSecretKey || "",
        flutterWaveId: settingData.flutterWaveId || "",
      });
    }
  }, [settingData]);

  const handleSwitchChange = (type: string, value: boolean, gateway: string, platform?: string) => {


    if (!allowPaymentSettings) {
      setRestrictionDialogOpen(true);
      return;
    }    // Update local state for optimistic UI updates
    if (gateway === 'razorPay') setRazorPay({ ...razorPay, [platform || 'enabled']: value });
    if (gateway === 'stripe') setStripe({ ...stripe, [platform || 'enabled']: value });
    if (gateway === 'paystack') setPaystack({ ...paystack, [platform || 'enabled']: value });
    if (gateway === 'cashfree') setCashfree({ ...cashfree, [platform || 'enabled']: value });
    if (gateway === 'paypal') setPaypal({ ...paypal, [platform || 'enabled']: value });
    if (gateway === 'flutterwave') setFlutterwave({ ...flutterwave, [platform || 'enabled']: value });
    if (gateway === 'googlePlay') setGooglePlay({ ...googlePlay, [platform || 'enabled']: value });

    dispatch(settingSwitch({ settingId: settingData?._id, type } as any));
  };


  const handleSave = () => {


    const changedData: any = {};
    let hasChanges = false;

    if (razorPay.razorPayId !== initialValues.razorPayId) changedData.razorPayId = razorPay.razorPayId;
    if (razorPay.razorSecretKey !== initialValues.razorSecretKey) changedData.razorSecretKey = razorPay.razorSecretKey;

    if (stripe.stripePublishableKey !== initialValues.stripePublishableKey) changedData.stripePublishableKey = stripe.stripePublishableKey;
    if (stripe.stripeSecretKey !== initialValues.stripeSecretKey) changedData.stripeSecretKey = stripe.stripeSecretKey;

    if (paystack.paystackPublicKey !== initialValues.paystackPublicKey) changedData.paystackPublicKey = paystack.paystackPublicKey;
    if (paystack.paystackSecretKey !== initialValues.paystackSecretKey) changedData.paystackSecretKey = paystack.paystackSecretKey;

    if (cashfree.cashfreeClientId !== initialValues.cashfreeClientId) changedData.cashfreeClientId = cashfree.cashfreeClientId;
    if (cashfree.cashfreeClientSecret !== initialValues.cashfreeClientSecret) changedData.cashfreeClientSecret = cashfree.cashfreeClientSecret;

    if (paypal.paypalClientId !== initialValues.paypalClientId) changedData.paypalClientId = paypal.paypalClientId;
    if (paypal.paypalSecretKey !== initialValues.paypalSecretKey) changedData.paypalSecretKey = paypal.paypalSecretKey;

    if (flutterwave.flutterWaveId !== initialValues.flutterWaveId) changedData.flutterWaveId = flutterwave.flutterWaveId;

    if (Object.keys(changedData).length > 0) {
      hasChanges = true;
      dispatch(updateSetting({ data: changedData, settingId: settingData?._id } as any));
    } else {
      setToast("info", "No changes detected.");
    }
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>

        {/* Razorpay */}
        <SettingsCard>
          <div className={styles.gatewayWrapper}>
            <div className={styles.gatewayHeader}>
              <div className={styles.gatewayInfo}>
                <div className={styles.logoBox}>
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className={styles.gatewayTitle}>Razorpay</h3>
                  <p className={styles.gatewayDesc}>Payment gateway for India</p>
                </div>
              </div>
              <InfoTooltip title="Razorpay Setting" content={razorpayContent} />
            </div>

            <div className={styles.gatewayBody}>
              <div className={styles.platformGrid}>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Smartphone size={16} /> Android
                  </div>
                  <Switch
                    checked={razorPay.androidEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("razorPaySwitch", checked, "razorPay", "androidEnabled")}
                    disabled={!canEdit}
                  />
                </div>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Apple size={16} /> iOS
                  </div>
                  <Switch
                    checked={razorPay.iosEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("razorpayIosEnabled", checked, "razorPay", "iosEnabled")}
                    disabled={!canEdit}
                  />
                </div>
              </div>

              <div className={styles.formArea}>
                <FormField
                  label="Razorpay Key"
                  name="razorPayId"
                  value={razorPay.razorPayId}
                  placeholder={"Razorpay Key"}
                  onChange={(e) => setRazorPay({ ...razorPay, razorPayId: e.target.value })}
                />
                <FormField
                  label="Secret Key"
                  name="razorSecretKey"
                  value={razorPay.razorSecretKey}
                  placeholder={"Razorpay Secret Key"}
                  onChange={(e) => setRazorPay({ ...razorPay, razorSecretKey: e.target.value })}
                />
              </div>
            </div>
          </div>
        </SettingsCard>

        {/* Stripe */}
        <SettingsCard>
          <div className={styles.gatewayWrapper}>
            <div className={styles.gatewayHeader}>
              <div className={styles.gatewayInfo}>
                <div className={styles.logoBox}>
                  <DollarSign size={24} />
                </div>
                <div>
                  <h3 className={styles.gatewayTitle}>Stripe</h3>
                  <p className={styles.gatewayDesc}>Global payment gateway</p>
                </div>
              </div>
              <InfoTooltip title="Stripe Setting" content={stripeContent} />
            </div>

            <div className={styles.gatewayBody}>
              <div className={styles.platformGrid}>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Smartphone size={16} /> Android
                  </div>
                  <Switch
                    checked={stripe.androidEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("stripeSwitch", checked, "stripe", "androidEnabled")}
                    disabled={!canEdit}
                  />
                </div>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Apple size={16} /> iOS
                  </div>
                  <Switch
                    checked={stripe.iosEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("stripeIosEnabled", checked, "stripe", "iosEnabled")}
                    disabled={!canEdit}
                  />
                </div>
                {/* <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Globe size={16} /> Web
                  </div>
                  <Switch
                    checked={stripe.stripeWebEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("stripeWebEnabled", checked, "stripe", "stripeWebEnabled")}
                    disabled={!canEdit}
                  />
                </div> */}
              </div>

              <div className={styles.formArea}>
                <FormField
                  label="Publishable Key"
                  name="stripePublishableKey"
                  value={stripe.stripePublishableKey}
                  placeholder={"Stripe Publishable Key"}
                  onChange={(e) => setStripe({ ...stripe, stripePublishableKey: e.target.value })}
                />
                <FormField
                  label="Secret Key"
                  name="stripeSecretKey"
                  value={stripe.stripeSecretKey}
                  placeholder={"Stripe Secret Key"}
                  onChange={(e) => setStripe({ ...stripe, stripeSecretKey: e.target.value })}
                />
              </div>
            </div>
          </div>
        </SettingsCard>

        {/* Paystack */}
        <SettingsCard>
          <div className={styles.gatewayWrapper}>
            <div className={styles.gatewayHeader}>
              <div className={styles.gatewayInfo}>
                <div className={styles.logoBox}>
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className={styles.gatewayTitle}>Paystack</h3>
                  <p className={styles.gatewayDesc}>African payment gateway</p>
                </div>
              </div>
              <InfoTooltip title="Paystack Setting" content={paystackContent} />
            </div>

            <div className={styles.gatewayBody}>
              <div className={styles.platformGrid}>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Smartphone size={16} /> Android
                  </div>
                  <Switch
                    checked={paystack.androidEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("paystackAndroidEnabled", checked, "paystack", "androidEnabled")}
                    disabled={!canEdit}
                  />
                </div>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Apple size={16} /> iOS
                  </div>
                  <Switch
                    checked={paystack.iosEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("paystackIosEnabled", checked, "paystack", "iosEnabled")}
                    disabled={!canEdit}
                  />
                </div>
              </div>

              <div className={styles.formArea}>
                <FormField
                  label="Public Key"
                  name="paystackPublicKey"
                  value={paystack.paystackPublicKey}
                  placeholder={"Paystack Public Key"}
                  onChange={(e) => setPaystack({ ...paystack, paystackPublicKey: e.target.value })}
                />
                <FormField
                  label="Secret Key"
                  name="paystackSecretKey"
                  value={paystack.paystackSecretKey}
                  placeholder={"Paystack Secret Key"}
                  onChange={(e) => setPaystack({ ...paystack, paystackSecretKey: e.target.value })}
                />
              </div>
            </div>
          </div>
        </SettingsCard>


        {/* Cashfree */}
        <SettingsCard>
          <div className={styles.gatewayWrapper}>
            <div className={styles.gatewayHeader}>
              <div className={styles.gatewayInfo}>
                <div className={styles.logoBox}>
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className={styles.gatewayTitle}>Cashfree</h3>
                  <p className={styles.gatewayDesc}>Payment and API banking</p>
                </div>
              </div>
              <InfoTooltip title="Cashfree Setting" content={cashfreeContent} />
            </div>

            <div className={styles.gatewayBody}>
              <div className={styles.platformGrid}>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Smartphone size={16} /> Android
                  </div>
                  <Switch
                    checked={cashfree.androidEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("cashfreeAndroidEnabled", checked, "cashfree", "androidEnabled")}
                    disabled={!canEdit}
                  />
                </div>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Apple size={16} /> iOS
                  </div>
                  <Switch
                    checked={cashfree.iosEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("cashfreeIosEnabled", checked, "cashfree", "iosEnabled")}
                    disabled={!canEdit}
                  />
                </div>
              </div>

              <div className={styles.formArea}>
                <FormField
                  label="Client ID"
                  name="cashfreeClientId"
                  value={cashfree.cashfreeClientId}
                  placeholder={"Cashfree Client ID"}
                  onChange={(e) => setCashfree({ ...cashfree, cashfreeClientId: e.target.value })}
                />
                <FormField
                  label="Client Secret"
                  name="cashfreeClientSecret"
                  value={cashfree.cashfreeClientSecret}
                  placeholder={"Cashfree Client Secret"}
                  onChange={(e) => setCashfree({ ...cashfree, cashfreeClientSecret: e.target.value })}
                />
              </div>
            </div>
          </div>
        </SettingsCard>

        {/* PayPal */}
        <SettingsCard>
          <div className={styles.gatewayWrapper}>
            <div className={styles.gatewayHeader}>
              <div className={styles.gatewayInfo}>
                <div className={styles.logoBox}>
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className={styles.gatewayTitle}>PayPal</h3>
                  <p className={styles.gatewayDesc}>Global online payments</p>
                </div>
              </div>
              <InfoTooltip title="PayPal Setting" content={paypalContent} />
            </div>

            <div className={styles.gatewayBody}>
              <div className={styles.platformGrid}>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Smartphone size={16} /> Android
                  </div>
                  <Switch
                    checked={paypal.androidEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("paypalAndroidEnabled", checked, "paypal", "androidEnabled")}
                    disabled={!canEdit}
                  />
                </div>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Apple size={16} /> iOS
                  </div>
                  <Switch
                    checked={paypal.iosEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("paypalIosEnabled", checked, "paypal", "iosEnabled")}
                    disabled={!canEdit}
                  />
                </div>
              </div>

              <div className={styles.formArea}>
                <FormField
                  label="Client ID"
                  name="paypalClientId"
                  value={paypal.paypalClientId}
                  placeholder={"PayPal Client ID"}
                  onChange={(e) => setPaypal({ ...paypal, paypalClientId: e.target.value })}
                />
                <FormField
                  label="Secret Key"
                  name="paypalSecretKey"
                  value={paypal.paypalSecretKey}
                  placeholder={"PayPal Secret Key"}
                  onChange={(e) => setPaypal({ ...paypal, paypalSecretKey: e.target.value })}
                />
              </div>
            </div>
          </div>
        </SettingsCard>

        {/* Flutterwave */}
        <SettingsCard>
          <div className={styles.gatewayWrapper}>
            <div className={styles.gatewayHeader}>
              <div className={styles.gatewayInfo}>
                <div className={styles.logoBox}>
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className={styles.gatewayTitle}>Flutterwave</h3>
                  <p className={styles.gatewayDesc}>Payment infrastucture</p>
                </div>
              </div>
              <InfoTooltip title="Flutterwave Setting" content={flutterWaveContent} />
            </div>

            <div className={styles.gatewayBody}>
              <div className={styles.platformGrid}>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Smartphone size={16} /> Android
                  </div>
                  <Switch
                    checked={flutterwave.androidEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("flutterWaveSwitch", checked, "flutterwave", "androidEnabled")}
                    disabled={!canEdit}
                  />
                </div>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Apple size={16} /> iOS
                  </div>
                  <Switch
                    checked={flutterwave.iosEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("flutterwaveIosEnabled", checked, "flutterwave", "iosEnabled")}
                    disabled={!canEdit}
                  />
                </div>
              </div>

              <div className={styles.formArea}>
                <FormField
                  label="Flutterwave ID"
                  name="flutterWaveId"
                  value={flutterwave.flutterWaveId}
                  placeholder={"Flutterwave ID"}
                  onChange={(e) => setFlutterwave({ ...flutterwave, flutterWaveId: e.target.value })}
                />
              </div>
            </div>
          </div>
        </SettingsCard>

        {/* Google Play */}
        <SettingsCard>
          <div className={styles.gatewayWrapper}>
            <div className={styles.gatewayHeader}>
              <div className={styles.gatewayInfo}>
                <div className={styles.logoBox}>
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className={styles.gatewayTitle}>Google Play In-App Review</h3>
                  <p className={styles.gatewayDesc}>In-App purchases</p>
                </div>
              </div>
              <InfoTooltip title="Google Play Setting" content={googlePlayContent} />
            </div>

            <div className={styles.gatewayBody}>
              <div className={styles.platformGrid}>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Smartphone size={16} /> Android
                  </div>
                  <Switch
                    checked={googlePlay.androidEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("googlePlaySwitch", checked, "googlePlay", "androidEnabled")}
                    disabled={!canEdit}
                  />
                </div>
                <div className={styles.platformCard}>
                  <div className={styles.platformInfo}>
                    <Apple size={16} /> iOS
                  </div>
                  <Switch
                    checked={googlePlay.iosEnabled}
                    onCheckedChange={(checked) => handleSwitchChange("googlePayIosEnabled", checked, "googlePlay", "iosEnabled")}
                    disabled={!canEdit}
                  />
                </div>
              </div>
            </div>
          </div>
        </SettingsCard>

      </div>

      {/* Save */}
      {canEdit && (
        <div className={styles.saveRow}>
          <Button size="lg" onClick={handleSave}>Save Changes</Button>
        </div>
      )}

      <PaymentRestrictionsDialog
        open={restrictionDialogOpen}
        onClose={() => setRestrictionDialogOpen(false)}
      />
    </div>
  );
};

export default PaymentSettings;