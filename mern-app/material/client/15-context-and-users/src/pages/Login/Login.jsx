import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useUserContext } from "./../../contexts/UserContext";

import "./Login.scss";

const Login = () => {
   const { username, login } = useUserContext();
   const history = useHistory();

   const handleLogin = ({ username }) => {
      login(username);
   };

   useEffect(() => {
      if (username) history.push("/");
   }, [username, history]);

   return (
      <main className='login'>
         <h1>Login</h1>
         <Form onFinish={handleLogin} layout='vertical'>
            <Form.Item label='Username' name='username' rules={[{ required: true, message: "Must not be blank" }]}>
               <Input />
            </Form.Item>
            <Form.Item>
               <Button size='large' type='primary' htmlType='submit'>
                  Login
               </Button>
            </Form.Item>
         </Form>
      </main>
   );
};

export default Login;
