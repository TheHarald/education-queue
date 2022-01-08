import { Badge, Button, Descriptions, Form, Image, Space, Tag } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Layout from 'antd/lib/layout/layout';

function ShowProfile(props) {


    return (
        <div>
            <Space direction='horizontal' size={'large'}  >
                <Image
                    width={200}
                    src={props.user.avatar}
                />
                <Space direction={'vertical'}>

                    <Button
                        icon={<EditOutlined />}
                        onClick={props.onEdit}>
                        Редактировать
                    </Button>

                    <Descriptions
                        title={props.user.name}
                        layout='horizontal'
                        size={'small'}
                        column={1}
                    >
                        <Descriptions.Item label={'Группа'} >{props.user.group}</Descriptions.Item>
                        <Descriptions.Item label={'Почта'} >{props.user.email}</Descriptions.Item>
                        <Descriptions.Item label={'Очереди'} >{
                            props.user.queues.map((item) => (
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

export default ShowProfile;