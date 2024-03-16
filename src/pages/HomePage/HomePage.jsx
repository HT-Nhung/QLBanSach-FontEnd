import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct, WrapperButtonMore, WpapperProducts } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'

const HomePage = () => {
    const arr = ['Tiểu thuyết', 'Truyện tranh', 'Quà tặng cuộc sống']

    const fetchProductAll = async () => {
        const res = await ProductService.getAllProduct()
        return res
    }

    const { isLoading, data: products } = useQuery(['product'], fetchProductAll, { retry: 3, retryDelay: 1000 })
    return (
        <>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div className='body' style={{ backgroundColor: "#DDDDDD", width: '100%' }}>
                <div id="container" style={{ height: '1000px', width: '1270px', margin: '0 auto' }}>
                    <SliderComponent arrImages={[slider1, slider2, slider3]} />
                    <WpapperProducts>
                        {products?.data?.map((products) => {
                            return (
                                <CardComponent
                                    key={products._id}
                                    countInStock={products.countInStock}
                                    description={products.description}
                                    image={products.image}
                                    name={products.name}
                                    price={products.price}
                                    rating={products.rating}
                                    type={products.type}
                                    selled={products.selled}
                                    discount={products.discount}
                                />
                            )
                        })}
                    </WpapperProducts>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <WrapperButtonMore textButton="Xem thêm" type="outline"
                            styleButton={{
                                border: '1px solid rgb(11, 116, 299)', color: 'rgb(11, 116, 299)',
                                width: '240px', height: '40px', borderRadius: '4px'
                            }}
                            styleTextButton={{ fontWeight: 500 }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage