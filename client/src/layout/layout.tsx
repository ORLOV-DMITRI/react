import { Layout as AntLayout } from "antd";
import { FC } from "react";
import { Header } from "../components/header/header";
import { LayoutProps } from "../type/layout";
import style from "./style.module.css";
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.main}>
      <Header />
      <AntLayout style={{ height: "100%", backgroundColor: "transparent" }}>
        {children}
      </AntLayout>
    </div>
  );
};
