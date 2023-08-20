import { Loading3QuartersOutlined } from "@ant-design/icons";
import React from "react";
import { useCurrentQuery } from "../../services/auth";

type AuthType = {
  children: React.ReactNode;
};
export const Auth = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return (
      <span>
        Загрузка <Loading3QuartersOutlined />
      </span>
    );
  }
  return children;
};
