import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useState } from 'react';
import FormAdd from '../index/components/formAdd';
import Image from 'next/image'
import { useDispatch, useSelector } from "react-redux";


const MenuHeader = () => {
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();
    const homeData = useSelector((state) => state.homeData);
    const { favorites } = homeData;

    const labels = {
        favorites: 'Favoritos',
        add: 'Agregar'
    }

    const generateItemsMenu = () => {
        let items = favorites.map((favorite, index) => {
            return {
                key: favorite.id,
                label: (
                    <div>
                        <div><Image src={favorite.image} width={34} height={34} /></div>
                        <div>{favorite.name}</div>
                        <div><Image src='/images/icons/trash.png' width={24} height={24} /></div>
                    </div>
                ),
            }
        })
        console.log(items);
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
                <Dropdown overlay={generateItemsMenu}>
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