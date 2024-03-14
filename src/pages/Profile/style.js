import styled from "styled-components";

//Định dạng all khung
export const WrapperHeader = styled.h1`
    color: #000;
    font-size: 18px;
    margin: 4px 0;
`

//Định dạng all hàng, cột
export const WrapperContentProfile = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    width: 600px;
    margin: 0 auto;
    padding: 30px;
    border-radius: 10px;
    gap: 30px;
`

//Định dạng email
export const WrapperLabel = styled.label`
    color: #000;
    font-size: 12px;
    line-height: 30px;
    font-weight: 600;
    width: 80px;
    text-align: left;
`

//Định dạng txt
export const WrapperInput = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`