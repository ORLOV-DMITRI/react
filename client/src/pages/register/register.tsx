import { User } from "@prisma/client";
import { Card, Form, Row, Space, Typography } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../components/error-message/error-message";
import { Layout } from "../../layout/layout";
import { PATH } from "../../route/path";
import { PasswordInpit } from "../../shared/ui/password-input/password-input";
import { PrimaryButton } from "../../shared/ui/primary-button/primary-button";
import { PrimaryInput } from "../../shared/ui/primary-input/primary-input";
import { selectUser } from "../../store/duck/auth/slice";
import { useAppSelector } from "../../store/hooks";
import { useRegisterMutation } from "../../store/services/auth";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

type RegisterData = Omit<User, "id"> & { confirmPassword: string };

export const Register = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const [error, setError] = useState("");

  const [registerUser] = useRegisterMutation();

  const onRegister = async (data: RegisterData) => {
    try {
      await registerUser(data).unwrap();

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
        <Card title="Зарегестрируйтесь" style={{ width: "30rem" }}>
          <Form onFinish={onRegister}>
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
            <ErrorMessage message={error} />
          </Form>
        </Card>
      </Row>
    </Layout>
  );
};
