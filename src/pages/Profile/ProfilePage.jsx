import React, { useState } from "react"
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel } from "./style"
import InputForm from "../../components/InputForm/ImputForm"
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import * as UserService from '../../services/UserService'
import { useMutation } from "@tanstack/react-query"

const ProfilePage = () => {
    const user = useSelector((state) => state.user)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')
    const mutation = useMutation(
        (id, data) => UserService.updateUser(id, data)
    )
    const { data, isLoading, isSuccess } = mutation
    console.log('dataa', data)

    useEffect(() => {
        setEmail(user?.email)
        setName(user?.name)
        setPhone(user?.phone)
        setAddress(user?.address)
        setAvatar(user?.avatar)
    }, [user])

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnchangeName = (value) => {
        setName(value)
    }

    const handleOnchangePhone = (value) => {
        setPhone(value)
    }

    const handleOnchangeAddress = (value) => {
        setAddress(value)
    }

    const handleOnchangeAvatar = (value) => {
        setAvatar(value)
    }

    const handleUpdate = () => {
        UserService()
        mutation.mutate(user?.id, { email, name, phone, address, avatar })
        // console.log('update', email, name, phone, address, avatar)
    }
    return (
        <div style={{ width: '1270px', margin: '0 auto', height: '500px' }}>
            <WrapperHeader>Thông tin người dùng</WrapperHeader>
            <WrapperContentProfile>
                <WrapperInput>
                    <WrapperLabel htmlFor="name">Tên: </WrapperLabel>
                    <InputForm style={{ width: '300px' }} id="name" value={name} onChange={handleOnchangeName} />
                    <ButtonComponent
                        onClick={handleUpdate}
                        size={40}
                        styleButton={{
                            height: '30px',
                            width: 'fit-content',
                            borderRadius: '4px',
                            padding: '4px 6px 6px'
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: '#rgb(26, 148, 225)', fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                </WrapperInput>
                <WrapperInput>
                    <WrapperLabel htmlFor="email">Email: </WrapperLabel>
                    <InputForm style={{ width: '300px' }} id="email" value={email} onChange={handleOnchangeEmail} />
                    <ButtonComponent
                        onClick={handleUpdate}
                        size={40}
                        styleButton={{
                            height: '30px',
                            width: 'fit-content',
                            borderRadius: '4px',
                            padding: '4px 6px 6px'
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: '#rgb(26, 148, 225)', fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                </WrapperInput>
                <WrapperInput>
                    <WrapperLabel htmlFor="phone">Số điện thoại: </WrapperLabel>
                    <InputForm style={{ width: '300px' }} id="phone" value={phone} onChange={handleOnchangePhone} />
                    <ButtonComponent
                        onClick={handleUpdate}
                        size={40}
                        styleButton={{
                            height: '30px',
                            width: 'fit-content',
                            borderRadius: '4px',
                            padding: '4px 6px 6px'
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: '#rgb(26, 148, 225)', fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                </WrapperInput>
                <WrapperInput>
                    <WrapperLabel htmlFor="address">Địa chỉ: </WrapperLabel>
                    <InputForm style={{ width: '300px' }} id="address" value={address} onChange={handleOnchangeAddress} />
                    <ButtonComponent
                        onClick={handleUpdate}
                        size={40}
                        styleButton={{
                            height: '30px',
                            width: 'fit-content',
                            borderRadius: '4px',
                            padding: '4px 6px 6px'
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: '#rgb(26, 148, 225)', fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                </WrapperInput>
                <WrapperInput>
                    <WrapperLabel htmlFor="avatar">Ảnh: </WrapperLabel>
                    <InputForm style={{ width: '300px' }} id="avatar" value={avatar} onChange={handleOnchangeAvatar} />
                    <ButtonComponent
                        onClick={handleUpdate}
                        size={40}
                        styleButton={{
                            height: '30px',
                            width: 'fit-content',
                            borderRadius: '4px',
                            padding: '4px 6px 6px'
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: '#rgb(26, 148, 225)', fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                </WrapperInput>
            </WrapperContentProfile>
        </div>
    )
}

export default ProfilePage