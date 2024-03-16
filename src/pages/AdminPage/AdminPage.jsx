import { Menu } from "antd";
import React, { useState } from "react";
import { getItem } from "../../utils";
import { UserOutlined, AppstoreOutlined } from '@ant-design/icons'
import HeaderComponent from '../../components/HeaderCompoent/HeaderComponent';
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import AdminUser from "../../components/AdminUser/AdminUser";

const AdminPage = () => {
    const items = [
        getItem('Thông tin người dùng', 'user', <UserOutlined />),
        getItem('Sản phẩm', 'product', <AppstoreOutlined />),
    ];

    // const rootSubmenuKeys = ['user', 'product'];
    // const [openKeys, setOpenKeys] = useState(['user']);
    const [keySelected, setKeySelected] = useState('')

    const renderPage = (key) => {
        switch (key) {
            case 'user':
                return (
                    <AdminUser />
                )
            case 'product':
                return (
                    <AdminProduct />
                )
            default:
                return <></>
        }
    }

    // const onOpenChange = (keys) => {
    //     // console.log('keys', keys)
    //     const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    //     if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //         setOpenKeys(keys);
    //     } else {
    //         setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    //     }
    // };

    const handleOnClick = ({ key }) => {
        // console.log('click', { key })
        setKeySelected(key)
    }
    console.log('keySelected', keySelected)

    return (
        <>
            <HeaderComponent isHiddenSearch isHiddenCard />
            <div style={{ display: 'flex' }}>
                <Menu
                    mode="inline"
                    // openKeys={openKeys}
                    // onOpenChange={onOpenChange}
                    style={{
                        width: 256,
                        boxShadow: '1px 1px 2px #ccc',
                        height: '100vh'
                    }}
                    items={items}
                    onClick={handleOnClick}
                />
                <div style={{ flex: 1, padding: '15px' }}>
                    {renderPage(keySelected)}
                </div>
            </div >
        </>
    )
}

export default AdminPage