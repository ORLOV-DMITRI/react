import { Card, Form, Row, Space, Typography } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../components/error-message/error-message";
import { Layout } from "../../layout/layout";
import { PATH } from "../../route/path";
import { PasswordInpit } from "../../shared/ui/password-input/password-input";
import { PrimaryButton } from "../../shared/ui/primary-button/primary-button";
import { PrimaryInput } from "../../shared/ui/primary-input/primary-input";
import { useLoginMutation, UserData } from "../../store/services/auth";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

export const Login = () => {
  const navigate = useNavigate();
  const [loginUser, loginUserResult] = useLoginMutation();

  const [error, setError] = useState("");

  const onLogin = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();

      navigate("/");
    } catch (error) {
      const hasError = isErrorWithMessage(error);

      if (hasError) {
        setError(error.data.message);
      } else {
        setError("Не известная ошибка");
      }
    }
  };
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={{ width: "30rem" }}>
          <Form onFinish={onLogin}>
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
              <ErrorMessage message={error} />
            </Space>
          </Form>
        </Card>
      </Row>
    </Layout>
  );
};
