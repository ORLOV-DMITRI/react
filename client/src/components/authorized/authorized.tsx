import { LoginOutlined } from "@ant-design/icons";
import { FC } from "react";
import { PrimaryButton } from "../../shared/ui/primary-button/primary-button";

type AuthorizedType = {
  onClick: () => void;
};

export const Authorized: FC<AuthorizedType> = ({ onClick }) => {
  return (
    <PrimaryButton type="ghost" icon={<LoginOutlined />} onClick={onClick}>
      Выйти
    </PrimaryButton>
  );
};
