import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useState } from 'react';
import FormAdd from '../index/components/formAdd';
import Image from 'next/image'

const MenuHeader = () => {
    const [openModal, setOpenModal] = useState(false);
    const labels = {
        favorites: 'Favoritos',
        add: 'Agregar'
    }

    const menu = (
        <Menu className='menu-favorites'
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                            1st menu item
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            2nd menu item (disabled)
                        </a>
                    ),
                    icon: <SmileOutlined />,
                    disabled: true,
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                            3rd menu item (disabled)
                        </a>
                    ),
                    disabled: true,
                },
                {
                    key: '4',
                    danger: true,
                    label: 'a danger item',
                },
            ]}
        />
    );

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <div className='menu'>
            <div className='favorites'>
                <Dropdown overlay={menu}>
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