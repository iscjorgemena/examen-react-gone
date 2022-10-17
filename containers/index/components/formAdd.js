import { Button, Modal } from 'antd';
import { useState } from 'react';

const FormAdd = (props) => {
    let { openModal, closeModal } = props;
    const labels = {
        favorites: 'Favoritos',
        add: 'Agregar'
    }
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = (e) => {
        e.preventDefault;
        closeModal();
    };

    return (
        <Modal title={<b className='title-modal'>Agregar un personaje</b>}
            width={727}
            onCancel={(e) => { handleCancel(e) }}
            open={openModal}
            footer={[]}
            className='modal-custom'
            closeIcon={<img src='/images/icons/dell_light.png' />}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default FormAdd