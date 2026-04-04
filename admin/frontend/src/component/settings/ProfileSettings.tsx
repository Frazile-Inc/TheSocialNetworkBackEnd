"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../../styles/ProfileSettings.module.css";
import { useSelector } from "react-redux";
import { RootStore, useAppDispatch } from "@/store/store";
import {
  adminProfileUpdated,
  updateAdminPassword,
  uploadFile,
  adminProfileGet,
} from "@/store/adminSlice";

import SettingsCard from "../ui/SettingsCard";
import FormField from "../ui/FormField";
import Button from "../ui/button";
import Badge from "../ui/Badge";

import { User, Upload, Lock, Mail, Shield, Eye, EyeOff } from "lucide-react";

import { usePermission } from "@/hooks/usePermission";
import { projectName } from "@/util/config";

const ProfileSettings = () => {
  const dispatch = useAppDispatch();

  const { admin, isLoading } = useSelector((state: RootStore) => state.admin);

  const { can } = usePermission();
  const canEdit = can("Setting", "Edit");
  const loginType = typeof window !== "undefined" && sessionStorage.getItem("loginType");
  console.log("loginType", loginType);

  const getAdminData =
    typeof window !== "undefined" &&
    JSON.parse(sessionStorage.getItem("admin_") || "{}");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: "Admin",
    image: "",
  });

  const [password, setPassword] = useState({
    oldPass: "",
    newPass: "",
    confirmPass: "",
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const folderStructure = `${projectName}/admin/adminImage`;

  /* ---------------- GET PROFILE ---------------- */

  useEffect(() => {
    dispatch(
      adminProfileGet({
        adminId: getAdminData?._id,
      } as any)
    );
  }, [dispatch]);

  useEffect(() => {
    if (admin) {
      setProfile({
        name: admin?.name || "",
        email: admin?.email || "",
        role: admin?.name || "Admin",
        image: admin?.image || "",
      });
    }
  }, [admin]);

  /* ---------------- IMAGE UPLOAD ---------------- */

  const handleUploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {


    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();

    formData.append("folderStructure", folderStructure);
    formData.append("keyName", file.name);
    formData.append("content", file);

    try {
      const response: any = await dispatch(
        uploadFile({ data: formData } as any)
      ).unwrap();

      if (response?.data?.url) {
        setProfile((prev) => ({
          ...prev,
          image: response.data.url,
        }));

        dispatch(
          adminProfileUpdated({
            data: { image: response.data.url },
            silent: true,
          } as any)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  /* ---------------- PROFILE UPDATE ---------------- */

  const handleSaveProfile = () => {


    const payload = {
      adminId: admin?._id,
      data: {
        name: profile.name,
        email: profile.email,
      },
    };

    dispatch(adminProfileUpdated(payload as any));
  };

  /* ---------------- PASSWORD UPDATE ---------------- */

  const handleSavePassword = () => {


    const payload = {
      adminId: admin?._id,
      data: {
        oldPass: password.oldPass,
        newPass: password.newPass,
        confirmPass: password.confirmPass,
      },
    };

    dispatch(updateAdminPassword(payload as any));
  };

  return (
    <div className={styles.wrapper}>
      {/* PROFILE CARD */}

      <SettingsCard>
        <div className={styles.profileRow}>
          {/* AVATAR */}

          <div className={styles.avatarSection}>
            <div className={styles.avatar}>
              {profile.image ? (
                <img
                  src={profile.image}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e: any) => {
                    e.target.src = "/images/8.jpg";
                  }}
                />
              ) : (
                profile.name?.charAt(0)?.toUpperCase()
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleUploadImage}
            />
            {loginType !== "staff" && (
              <Button
                className={styles.uploadBtn}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload size={16} />
                Upload Photo
              </Button>
            )}

            <p className={styles.avatarNote}>
              JPG, PNG or GIF. Max size 2MB
            </p>
          </div>

          {/* PROFILE INFO */}

          <div className={styles.profileInfo}>
            <div className={styles.profileHeader}>
              <User size={22} />

              <div>
                <h3 className={styles.profileName}>{profile.name}</h3>

                <Badge className={styles.roleBadge}>
                  <Shield size={12} />
                  {profile.role}
                </Badge>
              </div>
            </div>

            <div className={styles.formGrid}>
              <FormField
                label="Full Name"
                name="name"
                value={profile.name}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    name: e.target.value,
                  })
                }
              />

              <FormField
                label="Email Address"
                name="email"
                type="email"
                value={profile.email}
                icon={<Mail size={16} />}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div style={{ marginTop: "1rem" }}>
              {loginType !== "staff" && (
                <Button
                  onClick={handleSaveProfile}
                  disabled={isLoading}
                >
                  Save Profile
                </Button>
              )}
            </div>
          </div>
        </div>
      </SettingsCard>

      {/* PASSWORD */}

      <SettingsCard
        title="Change Password"
        description="Update your password"
        icon={<Lock size={18} />}
      >
        <div className={styles.passwordSection}>
          <FormField
            label="Current Password"
            name="oldPass"
            type={showOldPassword ? "text" : "password"}
            value={password.oldPass}
            onChange={(e) =>
              setPassword({
                ...password,
                oldPass: e.target.value,
              })
            }
            rightIcon={
              showOldPassword ? (
                <EyeOff
                  size={18}
                  onClick={() => setShowOldPassword(false)}
                />
              ) : (
                <Eye
                  size={18}
                  onClick={() => setShowOldPassword(true)}
                />
              )
            }
          />
          {loginType !== "staff" && (
            <div className={styles.formGrid}>
              <FormField
                label="New Password"
                name="newPass"
                type={showNewPassword ? "text" : "password"}
                value={password.newPass}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    newPass: e.target.value,
                  })
                }
                rightIcon={
                  showNewPassword ? (
                    <EyeOff
                      size={18}
                      onClick={() => setShowNewPassword(false)}
                    />
                  ) : (
                    <Eye
                      size={18}
                      onClick={() => setShowNewPassword(true)}
                    />
                  )
                }
              />

              <FormField
                label="Confirm Password"
                name="confirmPass"
                type={showConfirmPassword ? "text" : "password"}
                value={password.confirmPass}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    confirmPass: e.target.value,
                  })
                }
                rightIcon={
                  showConfirmPassword ? (
                    <EyeOff
                      size={18}
                      onClick={() =>
                        setShowConfirmPassword(false)
                      }
                    />
                  ) : (
                    <Eye
                      size={18}
                      onClick={() =>
                        setShowConfirmPassword(true)
                      }
                    />
                  )
                }
              />
            </div>
          )}


          <div className={styles.passwordRules}>
            <h4>Password Requirements</h4>

            <ul>
              <li>At least 8 characters long</li>
              <li>Uppercase & lowercase letters</li>
              <li>Includes numbers</li>
              <li>Contains special character</li>
            </ul>
          </div>
          {loginType !== "staff" && (
            <Button
              onClick={handleSavePassword}
              disabled={isLoading}
            >
              Update Password
            </Button>
          )}
        </div>
      </SettingsCard>
    </div>
  );
};

export default ProfileSettings;