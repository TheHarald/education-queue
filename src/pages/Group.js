import React from 'react';
import { Button, Space, Table, Typography } from 'antd';

const { Title } = Typography;

function group(props) {

    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Номер студака',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        }
    ]

    const data = [
        {
            name: 'Vlad',
            number: '324',
            status: 'good'
        }
    ]
    return (
        <div>

            <Title>Группа ИВБО-07-19</Title>
            <Space>
                <Button type='primary'>Добавить студента</Button>
                <Button type='primary' >Добавить студента</Button>
                <Button type='primary' >Добавить студента</Button>
            </Space>

            <Table columns={columns} dataSource={data} />


        </div>
    );
}

export default group;