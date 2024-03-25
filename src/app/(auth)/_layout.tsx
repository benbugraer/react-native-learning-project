import React from "react";
import { Stack, Redirect } from "expo-router";
import { useAuth } from "@/providers/AuthProviders";

const AuthLayout = () => {
  const { session } = useAuth();

  if (session) {
    return <Redirect href={"/"} />;
  }

  return <Stack />;
};

export default AuthLayout;
