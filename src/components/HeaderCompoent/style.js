import { Row } from "antd";
import styled from "styled-components";

//display: flex;
export const WrapperHeader = styled(Row)`
    padding: 10px 0;
    background-color: #99FFCC;
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
`

//Định dạng Home
export const WrapperTextHeader = styled.span`
    font-size: 18px; 
    color: black; 
    font-weight: bold;
    text-align: left;
    
`

//Định dạng phần ĐN, ĐK, TK
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: black;
    gap: 10px;
    font-size: 15px;
    
`

//Định dạng giỏ hàng
export const WrapperHeaderSmall = styled.span`
    font-size: 15px;
    color: black;
    white-space: nowrap;
`

//Định dạng chức năng đăng xuất
export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover{
        color: rgb(26, 148, 255);
    }
`
