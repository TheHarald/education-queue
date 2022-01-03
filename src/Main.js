import { Layout, Menu, Space } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import NavigationBar from './components/navigation/NavigationBar';
import CreateQueue from './pages/CreateQueue';
import Group from './pages/Group';
import Home from './pages/Home';
import Queue from './pages/Queue';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  HomeOutlined,
  ProfileOutlined,
  OrderedListOutlined
} from "@ant-design/icons";
import Profile from './pages/Profile';

const Main = () => {

  const { Header, Content, Sider } = Layout;

  return (
    <div>
      <Layout>
        <Header className='header' theme='light'>
          <div className="logo" />
          <Space>
            <Link to={'/profile'} >Name</Link >
            <a href={'/login'} >Exit</a >
          </Space>



        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background" >
            <Menu
              mode="inline"
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to='/'>Главная</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<ProfileOutlined />}>
                <Link to='/group'>Группа</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<OrderedListOutlined />}>
                <Link to='/queue'>Очередь</Link>
              </Menu.Item>

            </Menu>

          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/group' element={<Group />} />
                <Route path='/queue' element={<Queue />} />
                <Route path='/create' element={<CreateQueue />} />
                <Route path='/profile' element={<Profile />} />

              </Routes>

            </Content>
          </Layout>
        </Layout>


      </Layout>
    </div>

  );
}

export default Main;
