import { PlusCircleOutlined } from "@ant-design/icons";
import { Employee } from "@prisma/client";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../layout/layout";
import { PATH } from "../../route/path";
import { PrimaryButton } from "../../shared/ui/primary-button/primary-button";
import { selectUser } from "../../store/duck/auth/slice";
import { useAppSelector } from "../../store/hooks";
import { useGetAllEmployeesQuery } from "../../store/services/employee";

const colums: ColumnsType<Employee> = [
  {
    title: "Имя",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Возраст",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Адрес",
    dataIndex: "address",
    key: "address",
  },
];
export const Employees = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useGetAllEmployeesQuery();

  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const goToAddEmployee = () => {
    navigate(PATH.employeeAdd);
  };
  return (
    <Layout>
      <PrimaryButton
        type="primary"
        icon={<PlusCircleOutlined />}
        onClick={goToAddEmployee}
      >
        Добавить
      </PrimaryButton>
      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={colums}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return {
            onClick: () => navigate(`${PATH.employee}/${record.id}`),
          };
        }}
      />
    </Layout>
  );
};
