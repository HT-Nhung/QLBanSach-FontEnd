import React from 'react'
import {
    WrapperLableText, WrapperTextValue, WrapperContent,
    WrapperTextPrice
} from './style'
import { Checkbox, Col, Rate, Row } from 'antd'

const NavBarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((options) => {
                    return <WrapperTextValue>{options}</WrapperTextValue>
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span>{`Đánh giá từ ${option} sao`}</span>
                        </div>
                    )
                })

            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )
                })
            default:
                return {}
        }
    }
    return (
        <div style={{}}>
            <WrapperLableText>Danh mục</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['Tiểu thuyết', 'Truyện tranh', 'Quà tặng cuộc sống'])}
            </WrapperContent>
        </div >
    )
}

export default NavBarComponent