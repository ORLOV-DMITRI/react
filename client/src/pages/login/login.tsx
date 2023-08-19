import { Card, Form, Row, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { Layout } from "../../layout/layout";
import { PATH } from "../../route/path";
import { PasswordInpit } from "../../shared/ui/password-input/password-input";
import { PrimaryButton } from "../../shared/ui/primary-button/primary-button";
import { PrimaryInput } from "../../shared/ui/primary-input/primary-input";

export const Login = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <PrimaryInput name="email" placeholder="Email" type="email" />

              <PasswordInpit name="password" placeholder="Введите пароль" />

              <PrimaryButton type="primary" htmlType="submit">
                Войти
              </PrimaryButton>
            </Space>
            <Space direction="vertical" size={"large"}>
              <Typography.Text>
                Нет аккаунта? <Link to={PATH.register}>Зарегистрироваться</Link>
              </Typography.Text>
            </Space>
          </Form>
        </Card>
      </Row>
    </Layout>
  );
};
