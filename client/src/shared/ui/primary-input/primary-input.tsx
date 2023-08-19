import { Form, Input } from "antd";
import { FC } from "react";
import { PrimaryInputType } from "../../../type/ui";

export const PrimaryInput: FC<PrimaryInputType> = ({
  name,
  placeholder,
  type = "text",
}) => {
  return (
    <Form.Item
      name={name}
      shouldUpdate={true}
      rules={[
        {
          required: true,
          message: "Поле обазятельно к заполнению ",
          whitespace: true,
        },
      ]}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};
