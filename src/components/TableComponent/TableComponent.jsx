import { Divider, Radio, Table } from "antd";
import React from "react";

const TableComponent = (props) => {
    const { selectionType = 'checkbox', products = [], isLoading = false } = props

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
            render: (text) => <a>{text}</a>,
        },
    ];
    const data = products.length && products?.map((product) => {
        return { ...product, key: product._id }
    })

    console.log('data', data)

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };
    return (
        <Table
            rowSelection={{
                type: selectionType,
                ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
        />
    )
}

export default TableComponent
