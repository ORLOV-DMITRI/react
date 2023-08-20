import { Employee } from "@prisma/client";
import { Row } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeForm } from "../../components/employee-form/emloyee-form";
import { Layout } from "../../layout/layout";
import { PATH } from "../../route/path";
import { selectUser } from "../../store/duck/auth/slice";
import { useAppSelector } from "../../store/hooks";
import { useAddEmployeeMutation } from "../../store/services/employee";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

export const AddEmployee = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const user = useAppSelector(selectUser);

  const [AddEmployee] = useAddEmployeeMutation();

  const handleAddEmployee = async (data: Employee) => {
    try {
      await AddEmployee(data).unwrap();

      navigate(`${PATH.status}/created`);
    } catch (error) {
      const hasError = isErrorWithMessage(error);

      if (hasError) {
        setError(error.data.message);
      } else {
        setError("Не известная ошибка");
      }
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);
  return (
    <Layout>
      <Row align={"middle"} justify={"center"}>
        <EmployeeForm
          title="Добавить сотрудника"
          btnText="Добавить"
          onFinish={handleAddEmployee}
          error={error}
        />
      </Row>
    </Layout>
  );
};
