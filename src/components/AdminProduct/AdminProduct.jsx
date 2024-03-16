import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { PlusOutlined } from '@ant-design/icons'
import TableComponent from "../TableComponent/TableComponent";
import { WrapperHeader } from "./style";
import InputComponent from '../InputComponent/InputComponent'

const AdminProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stateProduct, setStateProduct] = useState({
        name: '',
        price: '',
        description: '',
        rating: '',
        image: '',
        type: '',
        countInstock: ''
    })
    const handleOk = () => {
        onFinish()
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    const onFinish = () => {
        console.log('finish', stateProduct)
    }

    const handleOnchange = (e) => {
        setStateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value
        })
        // console.log('e.target.name', e.target.name, e.target.value)
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
            <Modal title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} onOk={handleOk}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Tên sản phẩm"
                        name="Name"
                        rules={[{ required: true, message: 'Nhập tên sản phẩm' }]}
                    >
                        <InputComponent value={stateProduct.name} onChange={handleOnchange} name="name" />
                    </Form.Item>

                    <Form.Item
                        label="Kiểu"
                        name="Type"
                        rules={[{ required: true, message: 'Nhập kiểu sản phẩm' }]}
                    >
                        <InputComponent value={stateProduct.type} onChange={handleOnchange} name="type" />
                    </Form.Item>

                    <Form.Item
                        label="Tồn kho"
                        name="countInStock"
                        rules={[{ required: true, message: 'Số lượng tồn kho của sản phẩm' }]}
                    >
                        <InputComponent value={stateProduct.countInstock} onChange={handleOnchange} name="countInstock" />
                    </Form.Item>

                    <Form.Item
                        label="Giá bán"
                        name="price"
                        rules={[{ required: true, message: 'Giá bản sản phẩm' }]}
                    >
                        <InputComponent value={stateProduct.price} onChange={handleOnchange} name="price" />
                    </Form.Item>

                    <Form.Item
                        label="Mô tả"
                        name="description"
                        rules={[{ required: true, message: 'Số lượng tồn kho của sản phẩm' }]}
                    >
                        <InputComponent value={stateProduct.description} onChange={handleOnchange} name="description" />
                    </Form.Item>

                    <Form.Item
                        label="Đánh giá"
                        name="rating"
                        rules={[{ required: true, message: 'Đánh giá sản phẩm' }]}
                    >
                        <InputComponent value={stateProduct.rating} onChange={handleOnchange} name="rating" />
                    </Form.Item>

                    {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item> */}
                </Form>
            </Modal>
        </div>
    )
}

export default AdminProduct