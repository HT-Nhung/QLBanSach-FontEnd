import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";


import { Col } from "antd";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;  
    height: 44px;
`

//Định dạng button Xem thêm
export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover{
        color: #fff;
        background: rgb(13, 92, 182);
        span {
            color: #fff;
        }
    }
    width: 100%;
    text-align: center;
`

export const WpapperProducts = styled(Col)`
    display: flex;
    gap: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
`