import React, { useEffect } from 'react';
import { Button, Card, Skeleton, Space, Table, Typography } from 'antd';
import { useState } from 'react/cjs/react.development';

function Queue(props) {

    const { Title } = Typography;
    const [students, setStudents] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const url = 'https://jsonplaceholder.typicode.com/users'


    const getStudents = () => {
        const requestOptions = {
            method: 'GET'
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setStudents(data)
                setIsLoading(false)

            }).then()
    }

    useEffect(() => {
        getStudents()
    }, [])


    const columns = [
        {
            title: 'Позиция',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },

        {
            title: 'Статус',
            dataIndex: 'website',
            key: 'website',
        }
    ]

    return (
        <div>
            <Title>Очередь</Title>
            {isLoading ? <Card>
                <Skeleton active />
            </Card> :
                <Table columns={columns} dataSource={students} />
            }


        </div>
    );
}

export default Queue;