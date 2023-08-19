import { ConfigProvider, theme } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Register } from "./pages";
import { PATH } from "./route/path";

const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <h1>home</h1>,
  },
  {
    path: PATH.register,
    element: <Register />,
  },
  {
    path: PATH.login,
    element: <Login />,
  },
  {
    path: PATH.login,
    element: <h1>Login</h1>,
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <RouterProvider router={router} />;
    </ConfigProvider>
  );
}

export default App;
