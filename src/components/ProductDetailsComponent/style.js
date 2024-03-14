import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

//Định dạng ảnh chính
export const WrapperStyleImageSmall = styled(Image)`
    height: 64px;
    width: 64px;
    
`

//Định dạng ảnh phụ nhỏ
export const WrapperStyleColImage = styled(Col)`
    flex-basics: unset;
    display: contents;
`

//Định dạng tên sản phẩm
export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    word-break: break-word;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);
`

export const WrapperSpiceProduct = styled.div`
    background: rgb(250, 250, 250);
    border-radius" 4px;
`
//Định dạng giá tiền
export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8px;
    font-weight: 500;
    padding: 10px;
    margin-top: 10px;
`

//Định dạng địa điểm giao hàng
export const WrapperAddressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsisl
    };
    span.change-address {
        color: rgb(11, 116, 229);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }
`

//Định dạng số lượng
export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    width: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm {
        width: 60px;
        border-top: none;
        border-bottom: none;
        &.ant-input-number-handler-wrap {
        display: none !important;
    }
`