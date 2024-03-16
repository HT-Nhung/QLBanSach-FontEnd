import React, { useState } from "react";
import { Button, Modal } from "antd";
import { PlusOutlined } from '@ant-design/icons'
import TableComponent from "../TableComponent/TableComponent";
import { WrapperHeader } from "./style";

const AdminProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {

    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <WrapperHeader>Quản lý sản phẩm</WrapperHeader>
            <div style={{ marginTop: '10px' }}>
                <Button style={{
                    height: '150px',
                    width: '150px',
                    borderRadius: '6px',
                    borderStyle: 'dashed'
                }} onClick={() => setIsModalOpen(true)}>
                    <PlusOutlined style={{ fontSize: '60px' }} />
                </Button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <TableComponent />
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default AdminProduct