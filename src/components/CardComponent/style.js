import styled from "styled-components";
import { Card } from "antd";

//Định dạng Card(thẻ)
export const WrapperCardStyle = styled(Card)`
    with: 200px;
    & img {
        height: 200px;
        width: 200px;
    }
    position: relative;
`

//Định dạng Icon Chính hãng
export const WrapperImageStyte = styled.img`
    top: -1px;
    left: -1px;
    border-top-left-radius: 3px;
    height: 14px;
    width: 68px;
    postition: absolute;
`

//Định dạng tên
export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: rgb(56, 56, 61);
    font-weight: 400;
`

//Định dạng đánh giá sản phẩm 
export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 0;
`

//Định dạng số tiền
export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weight: 500;
`

//Định dạng %
export const WrapperDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: 500;
`

