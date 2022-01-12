import { Form, Input, Button, Space } from 'antd';
import React from 'react';
import { useState } from 'react/cjs/react.development';

import {
    UserOutlined,
    LockOutlined

} from "@ant-design/icons";
import { Link } from 'react-router-dom';

function LogIn(props) {

    const [user, setUser] = useState({
        name: 'name',
        password: 'password'
    })


    return (
        <div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
            >

                <Form.Item
                    name="username"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}

                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                        onChange={prev => setUser({ ...user, name: prev.target.value })}
                    />


                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        onChange={prev => setUser({ ...user, password: prev.target.value })}

                    />
                </Form.Item>

                <Form.Item>
                    <Space>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            onClick={() => console.log(user)}
                        >
                            <Link to={'/'} >Войти</Link>
                        </Button>
                        Или <Link to='/register'>Зарегестрироваться</Link>
                    </Space>
                </Form.Item>

            </Form>
        </div>
    );
}

export default LogIn;