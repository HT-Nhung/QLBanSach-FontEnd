import { Col, Row, Image } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/daotinh.jpg'
import imageProductSmall from '../../assets/images/daotinh2.webp'
import {
    WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct,
    WrapperStyleTextSell, WrapperSpiceProduct, WrapperPriceTextProduct,
    WrapperAddressProduct, WrapperQualityProduct, WrapperInputNumber
} from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailsComponent = () => {
    const onChange = () => { }
    return (
        <Row style={{ padding: '16px', background: '#fff', borderRadius: '5px' }}>
            <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '10px' }}>
                <Image src={imageProduct} alt="image product" preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={4} >
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{ paddingLeft: '10px' }}>
                <WrapperStyleNameProduct>Đạo tình combo 2 tập</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(235, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(235, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(235, 216, 54)' }} />
                    <WrapperStyleTextSell> | Đã bán 1000+ </WrapperStyleTextSell>
                </div>
                <WrapperSpiceProduct>
                    <WrapperPriceTextProduct>200.000đ</WrapperPriceTextProduct>
                </WrapperSpiceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến địa chỉ: </span>
                    <span className='address'>Hoằng Đức-Hoằng Hóa-Thanh Hóa </span> -
                    <span className='change-address'>Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                    <div style={{ marginBottom: '10px' }}>Số lượng</div>
                    <WrapperQualityProduct>
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                        </button>
                        <WrapperInputNumber defaultValue={3} onChange={onChange} size="small" />
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                        </button>
                    </WrapperQualityProduct>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background: 'red', height: '48px',
                            width: '220px', border: 'none', borderRadius: '4px'
                        }}
                        textButton={'Mua ngay'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>

                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background: '#fff', height: '48px',
                            width: '220px', border: '1px solid rgb(13, 92, 182)', borderRadius: '4px'
                        }}
                        textButton={'Thanh toán khi nhận hàng'}
                        styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
                    ></ButtonComponent>
                </div>

            </Col>
        </Row >
    )
}

export default ProductDetailsComponent