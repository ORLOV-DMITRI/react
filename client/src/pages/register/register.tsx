import { Card, Form, Row, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { Layout } from "../../layout/layout";
import { PATH } from "../../route/path";
import { PasswordInpit } from "../../shared/ui/password-input/password-input";
import { PrimaryButton } from "../../shared/ui/primary-button/primary-button";
import { PrimaryInput } from "../../shared/ui/primary-input/primary-input";

export const Register = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегестрируйтесь" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <PrimaryInput
                name="name"
                placeholder="Введите ваше Имя"
                type="text"
              />

              <PrimaryInput name="email" placeholder="Email" type="email" />

              <PasswordInpit name="password" placeholder="Введите пароль" />

              <PasswordInpit
                name="confirmPassword"
                placeholder="Подтвердите пароль"
              />

              <PrimaryButton type="primary" htmlType="submit">
                Зарегестрироваться
              </PrimaryButton>
            </Space>
            <Space direction="vertical" size={"large"}>
              <Typography.Text>
                Уже есть аккаунт? <Link to={PATH.login}>Войдите</Link>
              </Typography.Text>
            </Space>
          </Form>
        </Card>
      </Row>
    </Layout>
  );
};
