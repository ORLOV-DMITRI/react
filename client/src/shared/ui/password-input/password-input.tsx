import { Form, Input } from "antd";
import { FC } from "react";
import { PasswordInputType } from "../../../type/ui";

export const PasswordInpit: FC<PasswordInputType> = ({
  name,
  placeholder,
  dependencies,
}) => {
  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      hasFeedback
      rules={[
        { required: true, message: "Обязательно" },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve();
            }

            if (name === "confirmPassword") {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error("Пароли должны совпадать"));
            } else {
              if (value.lenght < 6) {
                return Promise.reject(new Error("Пароль меньше 6 символов"));
              }
              //   return Promise.resolve();
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={placeholder} size="large"></Input.Password>
    </Form.Item>
  );
};
