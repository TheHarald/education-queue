import { Badge, Button, Descriptions, Form, Image, Space, Tag } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Layout from 'antd/lib/layout/layout';


const useLogger = (value) => {
    useEffect(() => {
        console.log('value: ', value)
    }, [value])
}

function Profile(props) {

    const [user, setUser] = useState({
        id: '32424',
        name: 'Ivan Ivanov',
        group: 'IvBO-23-24',
        email: 'example@example.ru',
        queues: [
            {
                id: '1324',
                title: 'Math'
            },
            {
                id: '45635',
                title: 'Programming'
            }
        ]
    })

    const [a, setA] = useState(0)
    const test = () => {
        setA(prev => {
            prev = prev + 1
            console.log(prev)
            return prev
        })

    }

    useLogger(a)




    return (
        <div>
            <Space direction='horizontal' size={'large'}  >
                <Image
                    width={200}
                    src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
                />
                <Space direction={'vertical'}>

                    <Button icon={<EditOutlined />}>
                        Редактировать
                    </Button>

                    <Descriptions
                        title={user.name}
                        layout='horizontal'
                        size={'small'}
                        column={1}
                    >
                        <Descriptions.Item label={'Группа'} >{user.group}</Descriptions.Item>
                        <Descriptions.Item label={'Почта'} >{user.email}</Descriptions.Item>
                        <Descriptions.Item label={'Очереди'} >{
                            user.queues.map((item) => (
                                <Tag key={item.id}>
                                    {item.title}
                                </Tag>)
                            )
                        }</Descriptions.Item>

                    </Descriptions>
                </Space>

            </Space>

        </div>
    );
}

export default Profile;