import { FC } from "react";
import { PrimaryButtonType } from "../../../type/ui";

export const PrimaryButton: FC<PrimaryButtonType> = ({
  children,
  htmlType,
  onClick,
  type = "primary",
  danger,
  loading,
  shape,
  icon,
}) => {
  return (
    <Form.Item>
      <Button
        onClick={onClick}
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
      >
        {children}
      </Button>
    </Form.Item>
  );
};
