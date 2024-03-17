import { Table } from "antd";
import React from "react";
import Loading from '../../components/LoadingComponent/Loading'

const TableComponent = (props) => {
    const { selectionType = 'checkbox', data = [], isLoading = false, columns = [] } = props

    // const columns = [
    //     {
    //         title: 'Tên sản phẩm',
    //         dataIndex: 'name',
    //         render: (text) => <a>{text}</a>,
    //     },
    //     {
    //         title: 'Giá bán',
    //         dataIndex: 'price',
    //     },
    //     {
    //         title: 'Đánh giá',
    //         dataIndex: 'rating',
    //     },
    //     {
    //         title: 'Thể loại',
    //         dataIndex: 'type',
    //     },
    //     {
    //         title: 'Hoạt động',
    //         dataIndex: 'action',
    //         render: (text) => <a>{text}</a>,
    //     },
    // ];
    // const data = products.length && products?.map((product) => {
    //     return { ...product, key: product._id }
    // })

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
        <Loading isLoading={isLoading}>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </Loading>
    )
}

export default TableComponent
