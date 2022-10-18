import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useState } from 'react';
import FormAdd from '../index/components/formAdd';
import Image from 'next/image'
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../store/actions/homeAction";
import { useEffect } from "react";
import Helpers from '../../utils/helpers';


const MenuHeader = () => {
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();
    const homeData = useSelector((state) => state.homeData);
    const { favorites } = homeData;

    useEffect(() => {
        return () => {
            // clean up
        };
    }, []);

    const labels = {
        favorites: 'Favoritos',
        add: 'Agregar'
    }

    const removeFavoriteAction = (id) => {
        dispatch(removeFavorite(id));
        Helpers.showNotification('success', 'Eliminado Correctamente', 'Personaje eliminado de tus favoritos', 5)
    }

    const generateItemsMenu = () => {
        let items = favorites.map((favorite, index) => {
            return {
                key: index,
                label: (
                    <div className='item-favorite'>
                        <div className='image'><Image src={favorite.image} width={34} height={34} /></div>
                        <div className='name'>{favorite.name}</div>
                        <div className='trash'><a onClick={() => { removeFavoriteAction(favorite.id) }}><Image src='/images/icons/trash.png' width={24} height={24} /></a></div>
                    </div>
                ),
            }
        })
        return (<>
            <Menu className='menu-favorites'
                items={items}
            />
        </>)
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <div className='menu'>
            <div className='favorites'>
                <Dropdown overlay={generateItemsMenu} placement="top">
                    <a onClick={(e) => e.preventDefault()}>
                        {labels.favorites} <Image className='icon-mark' src='/images/icons/bookmark_fill.png' width={16} height={16} />
                    </a>
                </Dropdown>
            </div>
            <div className='add-content'>
                <a onClick={() => { setOpenModal(true) }}>{labels.add} <Image className='icon-add' src='/images/icons/user_fill_add.png' width={16} height={16} /></a>
            </div>
            <FormAdd openModal={openModal} closeModal={closeModal} />
        </div>
    )
}

export default MenuHeader