import { LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { Link } from "react-router-dom";
import { PATH } from "../../route/path";
import { PrimaryButton } from "../../shared/ui/primary-button/primary-button";

export const NoAuthorized = () => {
  return (
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
  );
};
