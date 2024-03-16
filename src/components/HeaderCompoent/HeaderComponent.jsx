import React, { useEffect, useState } from 'react'
import { Badge, Button, Col, Popover, Row } from 'antd'
import { WrapperContentPopup, WrapperHeader, WrapperHeaderAccount, WrapperHeaderSmall, WrapperTextHeader } from './style'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService';
import { resetUser } from '../../redux/slides/userSlide'
import Loading from '../LoadingComponent/Loading';

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCard = false }) => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [loading, setLoading] = useState(false)
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        localStorage.removeItem('access_token');
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        setLoading(false)
    }, [user?.name, user?.avatar])

    const content = (
        <div>
            <WrapperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WrapperContentPopup>
            {user?.isAdmin && (
                <WrapperContentPopup onClick={() => navigate('/system/admin')}>Quản lý hệ thống</WrapperContentPopup>
            )}
            <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
        </div>
    );

    return (
        <div style={{
            width: '100%',
            background: 'rgb(153, 255, 204)',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <WrapperHeader style={{ justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset' }}>
                <Col span={5}>
                    <WrapperTextHeader>TIỆM SÁCH ONLINE</WrapperTextHeader>
                </Col>
                {!isHiddenSearch && (
                    <Col span={13}>
                        <ButtonInputSearch
                            size="lager"
                            bodered={false}
                            textButton="Tìm kiếm"
                            placeholder="Nhập ở đây để tìm kiếm sách"
                        //onSearch={onSearch}
                        />
                    </Col>
                )}
                <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
                    <Loading isLoading={loading}>
                        <WrapperHeaderAccount>
                            {userAvatar ? (
                                <img src={userAvatar} alt="avatar" style={{
                                    height: '30px',
                                    width: '30px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }} />
                            ) : (
                                <UserOutlined style={{ fontSize: '30px' }} />
                            )}
                            {user?.access_token ? (
                                <>
                                    <Popover content={content} trigger="click" >
                                        <div style={{ cursor: 'pointer' }}>{userName?.length ? userName : user?.email}</div>
                                    </Popover>
                                </>
                            ) : (
                                <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                                    <WrapperHeaderSmall>Đăng nhập/Đăng ký</WrapperHeaderSmall>
                                    <div>
                                        <WrapperHeaderSmall>Tài Khoản</WrapperHeaderSmall>
                                        <CaretDownOutlined />
                                    </div>
                                </div>
                            )}

                        </WrapperHeaderAccount>
                    </Loading>
                    {!isHiddenCard && (
                        <div>
                            <Badge count={4} size="small">
                                <ShoppingCartOutlined style={{ fontSize: '30px' }} />
                            </Badge>
                            <WrapperHeaderSmall>Giỏ hàng</WrapperHeaderSmall>
                        </div>
                    )}
                </Col>
            </WrapperHeader>
        </div >
    )
}

export default HeaderComponent