/**
 * Componente que contiene el formulario y la logica para la creacion de un nuevo personaje
 */

import { Modal, Form, Input, Radio } from 'antd';
import { useState, useEffect } from 'react';
import Button from '../../../componentes/button';
import CharactersServices from '../../../services/characters.services';
import Helpers from '../../../utils/helpers';

const FormAdd = (props) => {
    const { openModal, closeModal } = props;
    const [form] = Form.useForm();
    const [savingData, setSavingData] = useState(false)

    useEffect(() => {
        initialData();
        return () => {
            // clean up
        };
    }, []);

    /**
     * Inicializo el formulario
     */
    const initialData = () => {
        form.setFieldsValue({
            name: '',
            birthdate: '',
            eyesColor: '',
            hairColor: '',
            gender: 'female',
            position: 'student'
        });
    }

    /**
     * Funcion que hace la peticion al endpoint para guardar el personaje
     */
    const saveData = () => {
        form
            .validateFields()
            .then(async (values) => {
                let data = generateData(values);
                setSavingData(true);
                await CharactersServices
                    .save(data)
                    .then(() => {
                        Helpers.showNotification('success', 'Accion exitosa', 'El personaje se guardo correctamente', 5);
                        initialData();
                        closeModal();
                    }).catch(error => {
                        console.log(error);
                        Helpers.showNotification('error', 'Ha ocurrido un error', 'Vuelve a intentarlo', 5);
                    })
                setSavingData(false);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }

    /**
     * Genero el obtejo a enviar para guardar
     * @param {*} values 
     * @returns 
     */
    const generateData = (values) => {
        let data = {
            name: values.name,
            dateOfBirth: values.birthdate,
            eyeColour: values.eyesColor,
            hairColour: values.hairColor,
            gender: values.gender,
            hogwartsStudent: true,
            hogwartsStaff: false
        }
        //Por defalut va a ser estudiante
        if (values.position === 'staff') {
            data.hogwartsStudent = false;
            data.hogwartsStaff = true;
        }

        return data;
    }

    /**
     * Funcion para cerrar el modal
     * @param {*} e 
     */
    const handleCancel = (e) => {
        e.preventDefault;
        closeModal();
    };

    return (
        <Modal getContainer={false} title={<b className='title-modal'>Agregar un personaje</b>}
            width={727}
            onCancel={(e) => { handleCancel(e) }}
            open={openModal}
            footer={[<Button disabled={savingData} key={1} label={savingData === false ? 'Guardar' : 'Guardando, Espere'} onClick={() => { saveData() }} />]}
            className='modal-custom'
            closeIcon={<img src='/images/icons/dell_light.png' />}
        >
            <Form
                form={form}
                name="register"
                scrollToFirstError
                layout="vertical"
                style={{ width: '100%' }}
            >
                <div className='form-container'>
                    <div className='form-item'>
                        <Form.Item
                            label="nombre"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'El nombre es requerido',
                                },
                            ]}
                        >
                            <Input placeholder="" />
                        </Form.Item>
                    </div>
                    <div className='form-item'>
                        <Form.Item
                            label="cumpleaños"
                            name="birthdate"
                        >
                            <Input placeholder="dd-mm-yyyy" />
                        </Form.Item>
                    </div>
                </div>
                <div className='form-container'>
                    <div className='form-item'>
                        <Form.Item
                            label="color de ojos"
                            name="eyesColor"
                        >
                            <Input placeholder="" />
                        </Form.Item>
                    </div>
                    <div className='form-item'>
                        <Form.Item
                            label="color de pelo"
                            name="hairColor"
                        >
                            <Input />
                        </Form.Item>
                    </div>
                </div>
                <div className='form-container'>
                    <div className='form-item'>
                        <Form.Item
                            label="Género"
                            name="gender"
                        >
                            <Radio.Group name="gender">
                                <Radio value={'female'}>Mujer</Radio>
                                <Radio value={'male'}>Hombre</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                    <div className='form-item'>
                        <Form.Item
                            label="Posición"
                            name="position"
                        >
                            <Radio.Group name="position">
                                <Radio value={'student'}>Estudiante</Radio>
                                <Radio value={'staff'}>Staff</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                </div>
                <div className='form-container'>
                    <div className='form-item'>
                        <div className="ant-col ant-form-item-label"><label>Fotografía</label></div>
                        <input type={'file'} accept="image/png, image/gif, image/jpeg" name='picture' />
                    </div>
                </div>
            </Form>
        </Modal>
    )
}

export default FormAdd