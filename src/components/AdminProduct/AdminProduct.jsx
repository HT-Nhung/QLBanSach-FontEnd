import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import TableComponent from "../TableComponent/TableComponent";
import { WrapperHeader, WrapperUploadFile } from "./style";
import InputComponent from '../InputComponent/InputComponent'
import { getBase64 } from "../../utils";
import * as ProductService from '../../services/ProductService'
import { useMutationHooks } from '../../hooks/UserMutationHook'
import Loading from "../../components/LoadingComponent/Loading";
import * as message from '../../components/Message/Massage'
import { useQuery } from "@tanstack/react-query";

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

    const [form] = Form.useForm();


    const mutation = useMutationHooks(
        (data) => {
            const { name,
                price,
                description,
                rating,
                image,
                type,
                countInstock: countInStock,
                discount } = data
            const res = ProductService.createProduct({
                name,
                price,
                description,
                rating,
                image,
                type,
                countInStock,
                discount
            })
            return res
        }
    )

    const getAllProducts = async () => {
        const res = await ProductService.getAllProduct()
        // console.log('res', res)
        return res
    }

    const { data, isLoading, isSuccess, isError } = mutation
    const { isLoading: isLoadingProducts, data: products } = useQuery({ queryKey: ['products'], queryFn: getAllProducts })
    const renderAction = () => {
        return (
            <div>
                <EditOutlined style={{ color: 'green', fontSize: '25px', cursor: 'pointer' }} />
                <DeleteOutlined style={{ color: 'red', fontSize: '25px', cursor: 'pointer' }} />
            </div>
        )
    }
    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Giá bán',
            dataIndex: 'price',
        },
        {
            title: 'Đánh giá',
            dataIndex: 'rating',
        },
        {
            title: 'Thể loại',
            dataIndex: 'type',
        },
        {
            title: 'Hoạt động',
            dataIndex: 'action',
            render: renderAction
        },
    ];
    const dataTable = products?.data?.length && products?.data?.map((product) => {
        return { ...product, key: product._id }
    })

    useEffect(() => {
        if (isSuccess && data?.status === 'OK') {
            message.success()
            handleCancel()
        } else if (isError) {
            message.error()
        }
    }, [isSuccess])

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateProduct({
            name: '',
            price: '',
            description: '',
            rating: '',
            image: '',
            type: '',
            countInstock: ''
        })
        form.resetFields()
    }

    const onFinish = () => {
        mutation.mutate(stateProduct)
    }

    const handleOnchange = (e) => {
        setStateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value
        })
    }

    const handleOnchangeAvatar = async ({ fileList }) => {
        const file = fileList[0]
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateProduct({
            ...stateProduct,
            image: file.preview
        })
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
                <TableComponent columns={columns} isLoading={isLoadingProducts} data={dataTable} />
            </div>
            <Modal title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Loading isLoading={isLoading}>
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        style={{ maxWidth: 600 }}
                        // initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="on"
                        form={form}
                    >
                        <Form.Item
                            label="Tên sách"
                            name="Name"
                            rules={[{ required: true, message: 'Vui lòng nhập tên sách!' }]}
                        >
                            <InputComponent value={stateProduct.name} onChange={handleOnchange} name="name" />
                        </Form.Item>

                        <Form.Item
                            label="Thể loại"
                            name="Type"
                            rules={[{ required: true, message: 'Vui lòng nhập thể loại!' }]}
                        >
                            <InputComponent value={stateProduct.type} onChange={handleOnchange} name="type" />
                        </Form.Item>

                        <Form.Item
                            label="Tồn kho"
                            name="countInStock"
                            rules={[{ required: true, message: 'Vui lòng nhập số lượng tồn kho!' }]}
                        >
                            <InputComponent value={stateProduct.countInstock} onChange={handleOnchange} name="countInstock" />
                        </Form.Item>

                        <Form.Item
                            label="Giá bán"
                            name="price"
                            rules={[{ required: true, message: 'Vui lòng nhập giá bản!' }]}
                        >
                            <InputComponent value={stateProduct.price} onChange={handleOnchange} name="price" />
                        </Form.Item>

                        <Form.Item
                            label="Mô tả"
                            name="description"
                            rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}
                        >
                            <InputComponent value={stateProduct.description} onChange={handleOnchange} name="description" />
                        </Form.Item>

                        <Form.Item
                            label="Đánh giá"
                            name="rating"
                            rules={[{ required: true, message: 'Vui lòng nhập đánh giá sản phẩm!' }]}
                        >
                            <InputComponent value={stateProduct.rating} onChange={handleOnchange} name="rating" />
                        </Form.Item>

                        <Form.Item
                            label="Ảnh"
                            name="image"
                            rules={[{ required: true, message: 'Vui lòng tải ảnh lên!' }]}
                        >
                            <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                                <Button >Select File</Button>
                                {stateProduct?.image && (
                                    <img src={stateProduct?.image} style={{
                                        height: '60px',
                                        width: '60px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginLeft: '10px'
                                    }} alt="avatar" />
                                )}
                            </WrapperUploadFile>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Loading>
            </Modal>
        </div>
    )
}

export default AdminProduct