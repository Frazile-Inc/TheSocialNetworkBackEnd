"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/store";
import { setHydrate } from "@/store/adminSlice";
import { getAllLanguages } from "@/store/languageSlice";

interface AuthCheckProps {
  children: React.ReactNode;
}

const AuthCheck = (props: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Check sessionStorage
    const storedIsAuth = sessionStorage.getItem("isAuth");
    const isAuth = storedIsAuth === "true";

    const admin = JSON.parse(sessionStorage.getItem("admin_") || "{}");
    const loginType = sessionStorage.getItem("loginType") || "admin";
    const permissions = JSON.parse(sessionStorage.getItem("permissions") || "[]");

    dispatch(setHydrate({ isAuth, admin, loginType, permissions }));
    setIsMounted(true);

    const publicRoutes = ["/", "/forgotPassword", "/Registration"];

    if (isAuth) {
      dispatch(getAllLanguages({ start: 1, limit: 10 }));
    }

    if (router.pathname === "/share") {
      return;
    }

    if (!isAuth && !publicRoutes.includes(router.pathname)) {
      router.push("/");
    }
  }, [dispatch, router]);

  if (!isMounted) {
    return null;
  }

  return <>{props.children}</>;
};

export default AuthCheck;
