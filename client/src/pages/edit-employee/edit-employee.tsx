import { Employee } from "@prisma/client";
import { Row } from "antd";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeForm } from "../../components/employee-form/emloyee-form";
import { Layout } from "../../layout/layout";
import { PATH } from "../../route/path";
import {
  useEditEmployeeMutation,
  useGetEmployeeQuery,
} from "../../store/services/employee";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

export const EditEmployee = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { data, isLoading } = useGetEmployeeQuery(params.id || "");
  const [editEmployee] = useEditEmployeeMutation();

  if (isLoading) {
    return <span>Загрузка</span>;
  }

  const handleEditUser = async (employee: Employee) => {
    try {
      const editedEmployee = {
        ...data,
        ...employee,
      };
      await editEmployee(editedEmployee).unwrap();

      navigate(`${PATH.status}/updated`);
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
      <Row align={"middle"} justify={"center"}>
        <EmployeeForm
          title="Редактировать сотрудника"
          btnText="Редактировать"
          error={error}
          employee={data}
          onFinish={handleEditUser}
        />
      </Row>
    </Layout>
  );
};
