import { Badge, Button, Descriptions, Form, Image, Space, Tag } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Layout from 'antd/lib/layout/layout';
import ShowProfile from './ShowProfile';
import EditProfile from './EditProfile';


const useLogger = (value) => {
    useEffect(() => {
        console.log('value: ', value)
    }, [value])
}

function Profile(props) {

    const [isEdit, setIsEdit] = useState(false)

    const [user, setUser] = useState({
        id: '32424',
        name: 'Ivan Ivanov',
        group: 'IvBO-23-24',
        email: 'example@example.ru',
        avatar: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
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


    return (
        <div>
            {
                isEdit ?
                    <EditProfile user={user} setUser={setUser} onSave={() => setIsEdit(false)} />
                    :
                    <ShowProfile user={user} onEdit={() => setIsEdit(true)} />
            }
        </div>
    );
}

export default Profile;