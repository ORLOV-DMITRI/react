import { Employee } from "@prisma/client";
import { Card, Form, Space } from "antd";
import { FC } from "react";
import { PrimaryButton } from "../../shared/ui/primary-button/primary-button";
import { PrimaryInput } from "../../shared/ui/primary-input/primary-input";
import { ErrorMessage } from "../error-message/error-message";

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title?: string;
  error: string;
  employee?: T;
};

export const EmployeeForm: FC<Props<Employee>> = ({
  onFinish,
  btnText,
  title,
  error,
  employee,
}) => {
  return (
    <Card title={title} style={{ width: "30rem" }}>
      <Form name="EmployeeForm" onFinish={onFinish} initialValues={employee}>
        <PrimaryInput type="text" name="firstName" placeholder="Имя" />
        <PrimaryInput type="text" name="lastName" placeholder="Фамилия" />
        <PrimaryInput type="number" name="age" placeholder="Возраст" />
        <PrimaryInput type="text" name="address" placeholder="Адрес" />
        <Space>
          <ErrorMessage message={error} />
          <PrimaryButton htmlType="submit">{btnText}</PrimaryButton>
        </Space>
      </Form>
    </Card>
  );
};
