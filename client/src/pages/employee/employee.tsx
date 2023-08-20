import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Descriptions, Divider, Modal, Space } from "antd";
import { FC, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ErrorMessage } from "../../components/error-message/error-message";
import { Layout } from "../../layout/layout";
import { PATH } from "../../route/path";
import { PrimaryButton } from "../../shared/ui/primary-button/primary-button";
import { selectUser } from "../../store/duck/auth/slice";
import { useAppSelector } from "../../store/hooks";
import {
  useGetEmployeeQuery,
  useRemoveEmployeeMutation,
} from "../../store/services/employee";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

export const Employee: FC = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetEmployeeQuery(params.id || "");
  const [removeEmployee] = useRemoveEmployeeMutation();

  const user = useAppSelector(selectUser);
  if (!data) {
    return <Navigate to={"/"} />;
  }
  if (isLoading) {
    return <span>Загрузка</span>;
  }
  const handleDelete = async () => {
    setIsModalOpen(false);
    try {
      await removeEmployee(data.id).unwrap();

      navigate(`${PATH.status}/deleted`);
    } catch (error) {
      const hasError = isErrorWithMessage(error);
      if (hasError) {
        setError(error.data.message);
      }
      setError("Не известная ошибка");
    }
  };

  return (
    <Layout>
      <Descriptions title={"Информация о сотруднике"} bordered>
        <Descriptions.Item label="Имя" span={3}>
          {`${data.firstName} ${data.lastName}`}
        </Descriptions.Item>
        <Descriptions.Item label="Возраст" span={3}>
          {`${data.age}`}
        </Descriptions.Item>
        <Descriptions.Item label="Адресс" span={3}>
          {`${data.address}`}
        </Descriptions.Item>
      </Descriptions>
      {user?.id === data.userId && (
        <>
          <Divider orientation="left">Действие</Divider>
          <Space>
            <Link to={`/employee/edit/${params.id}`}>
              <PrimaryButton
                shape="round"
                type="default"
                icon={<EditOutlined />}
              >
                Редактировать
              </PrimaryButton>
            </Link>
            <PrimaryButton
              shape="round"
              type="default"
              danger
              icon={<DeleteOutlined />}
              onClick={() => setIsModalOpen(true)}
            >
              Удалить
            </PrimaryButton>
          </Space>
        </>
      )}
      <ErrorMessage message={error} />
      <Modal
        title={"Подтвердите удаление"}
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={() => setIsModalOpen(false)}
        okText={"Подтвердить"}
        cancelText={"Отменить"}
      >
        Вы действительно хотите удалить сотрудника?
      </Modal>
    </Layout>
  );
};
