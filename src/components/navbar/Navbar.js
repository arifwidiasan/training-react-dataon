import React from 'react'
import {Layout, Menu} from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

function Navbar() {
    const navigate = useNavigate();
  return (
    <Header>
      <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            /*items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
                key,
                label: `nav ${key}`,
            };
            })} */
        >
            <Menu.Item 
                onClick={() => {
                    navigate('/');
                }         
                } key={"home"}>
                Home
            </Menu.Item>
            <Menu.Item
                onClick={() => {
                    navigate('/product');
                }         
                } key={"product"}>
                Product
            </Menu.Item>
        </Menu>
    </Header>
  )
}

export default Navbar