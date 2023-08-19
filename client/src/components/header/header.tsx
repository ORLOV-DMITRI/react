import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { PATH } from "../../route/path";
import { PrimaryButton } from "../../shared/ui/primary-button/primary-button";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={PATH.home}>
          <PrimaryButton type="ghost">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </PrimaryButton>
        </Link>
      </Space>
      <Space>
        <Link to={PATH.register}>
          <PrimaryButton type="primary" icon={<UserOutlined />}>
            Зарегистрироваться
          </PrimaryButton>
        </Link>
        <Link to={PATH.login}>
          <PrimaryButton type="default" icon={<LoginOutlined />}>
            Войти
          </PrimaryButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};
