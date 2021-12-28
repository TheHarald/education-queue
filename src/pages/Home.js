import { Space, Button, Card, Typography, Skeleton, Switch, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


function Home(props) {

    const [posts, setPosts] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const [isLoading, setIsLoading] = useState(true)


    const getPosts = () => {
        const requestOptions = {
            method: 'GET'
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setIsLoading(false)

            }).then()
    }

    useEffect(() => {
        getPosts()
    }, [])

    const { Title } = Typography;
    return (
        <div>
            <Title>Новости</Title>

            <Space direction="vertical" >
                <Button onClick={getPosts}>Test</Button>
                {isLoading ?
                    <Card>
                        <Skeleton active loading={isLoading} />
                    </Card>
                    :
                    posts.map((item) => {
                        return <Card
                            title={item.title}
                            key={item.id}
                        >
                            {item.body}
                        </Card>
                    })
                }
            </Space>
        </div>
    );
}

export default Home;