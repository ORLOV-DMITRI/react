import { NamePath } from "antd/es/form/interface";
import React from "react";

export type PrimaryButtonType = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?:
    | "link"
    | "text"
    | "default"
    | "primary"
    | "dashed"
    | "ghost"
    | undefined;
  danger?: boolean | undefined;
  loading?: boolean;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: React.ReactNode;
};

export type PrimaryInputType = {
  name: string;
  placeholder: string;
  type?: string;
};
export type PasswordInputType = {
  name: string;
  placeholder: string;
  dependencies?: NamePath[];
};
