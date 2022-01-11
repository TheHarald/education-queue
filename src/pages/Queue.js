import React, { useEffect } from 'react';
import { Avatar, Button, Card, Skeleton, Space, Table, Tag, Typography } from 'antd';
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
            render: (name) => {
                return (
                    <Space key={name}>

                        <Avatar
                            size={32}
                            src={'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'} />
                        <a>{name}</a>

                    </Space>
                )
            }
        },

        {
            title: 'Статус',
            dataIndex: 'website',
            key: 'website',
            render: website => {
                return (
                    <Tag key={website} color={'red'} >
                        {website}
                    </Tag>
                )
            }
        }
    ]

    return (
        <div>
            <Title>Очередь</Title>
            <Space direction='vertical'>
                <Button size={'large'} type='primary' >Встать в очередь</Button>
            </Space>
            {
                isLoading ? <Card>
                    <Skeleton active />
                </Card> :
                    <Table columns={columns} dataSource={students} />
            }


        </div >
    );
}

export default Queue;