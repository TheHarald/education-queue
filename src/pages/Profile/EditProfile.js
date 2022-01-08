import React from 'react';
import { Badge, Button, Descriptions, Form, Image, Input, Space, Tag } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react/cjs/react.development';


function useInput(value, setValue) {

    const onChange = event => {
        setValue(event.target.value)
    }

    return {
        value, onChange
    }

}

function EditProfile(props) {

    const name = useInput(props.user.name)

    return (
        <div>
            <Space direction='horizontal' size={'large'}>
                <div>
                    <Space direction='vertical' size={'large'}  >

                        <Button
                            icon={<EditOutlined />}
                            onClick={props.onSave}>
                            Сохранить
                        </Button>

                        <Input
                            placeholder='Имя'
                            value={props.user.name}
                            onChange={(event) => props.setUser({
                                ...props.user,
                                name: event.target.value
                            })}
                            prefix={<EditOutlined />}
                        />

                        <Input
                            placeholder='Группа'
                            value={props.user.group}
                            onChange={(event) => props.setUser({
                                ...props.user,
                                group: event.target.value
                            })}
                            prefix={<EditOutlined />}
                        />

                        <Input
                            placeholder='Аватар'
                            value={props.user.avatar}
                            onChange={(event) => props.setUser({
                                ...props.user,
                                avatar: event.target.value
                            })}
                            prefix={<EditOutlined />}
                        />


                    </Space>

                </div>

                <Image
                    width={200}
                    src={props.user.avatar}
                    alt='Картинка не найдена'
                />
            </Space>

        </div>
    );
}

export default EditProfile;