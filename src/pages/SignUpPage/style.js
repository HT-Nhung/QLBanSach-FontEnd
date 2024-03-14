import styled from "styled-components";

//Định dạng màn đăng nhập bên phải
export const WrapperContainerLeft = styled.div`
    flex: 1;
    padding: 40px 45px 24px;
    display: flex;
    flex-direction: column;
`

//Định dạng màn đăng nhập bên trái
export const WrapperContainerRight = styled.div`
    width: 300px;
    background: linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(129, 238, 255) 85%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 4px
`

//Định dạng quên pw, tạo tk
export const WrapperTextLight = styled.span`
    color: rgb(13, 92, 182);
    font-size: 13px;
    cursor: poniter;
`