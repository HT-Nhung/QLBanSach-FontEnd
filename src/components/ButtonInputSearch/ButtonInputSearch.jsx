import { Button } from 'antd';
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const ButtonInputSearch = (props) => {
    const { 
        size, placeholder, textButton, bordered, 
        backgroundColorInput = "#fff", 
        backgroundColorButton = '#00CCFF',
        colorButton = '#fff'
    } = props
    return (
        <div style={{ display: 'flex', borderRadius: '7px' }}>
            <InputComponent
                size={size} 
                placeholder={placeholder} 
                bordered={bordered} 
                style={{ backgroundColor: backgroundColorInput}}
            />
            <ButtonComponent
                size={size} 
                styleButton={{ background: backgroundColorButton, borde: !bordered && 'none' }} 
                icon={<SearchOutlined color={colorButton} style={{color: '#fff'}}/>}
                textButton={ textButton }
            />
        </div>
    )
}

export default ButtonInputSearch