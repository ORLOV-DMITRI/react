import { TeamOutlined } from "@ant-design/icons";
import { Layout, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../route/path";
import { PrimaryButton } from "../../shared/ui/primary-button/primary-button";
import { actions, selectUser } from "../../store/duck/auth/slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Authorized } from "../authorized/authorized";
import { NoAuthorized } from "../no-authorized/no-authorized";
import styles from "./header.module.css";

export const Header = () => {
  const user = useAppSelector(selectUser);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuthorized = user ? true : false;

  const onLogout = () => {
    dispatch(actions.logout);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Layout.Header className={styles.header}>
      <Space size="small">
        <TeamOutlined className={styles.teamIcon} />
        <Link to={PATH.home}>
          <PrimaryButton type="ghost">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </PrimaryButton>
        </Link>
      </Space>
      {isAuthorized && <Authorized onClick={onLogout} />}
      {!isAuthorized && <NoAuthorized />}
    </Layout.Header>
  );
};
