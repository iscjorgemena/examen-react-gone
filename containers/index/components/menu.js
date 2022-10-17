import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useState } from 'react';
import FormAdd from './formAdd';

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
                        <Space>
                            Hover me
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className='add-content'>
                <a onClick={() => { setOpenModal(true) }}>{labels.add}</a>
            </div>
            <FormAdd openModal={openModal} closeModal={closeModal} />
        </div>
    )
}

export default MenuHeader