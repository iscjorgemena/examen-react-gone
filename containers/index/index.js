import { useEffect, useState } from "react";
import Layout from "../layout/layout";
import Image from 'next/image'
import Button from "../../componentes/button";
import CharactersServices from "../../services/characters.services";
import Helpers from "../../utils/helpers";

const Index = () => {

    const [List, setList] = useState([]);
    const [typeList, setTypeList] = useState('students')

    useEffect(() => {
        getList(typeList)
        return () => {
            // clean up
        };
    }, [typeList]);

    /**
     * Pido el listado pero antes genero los parametros
     * @param {*} type_list 
     */
    const getList = (type_list) => {
        let params = generateParams(type_list);
        CharactersServices.get(params)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
                Helpers.showNotification('error', 'Ha ocurrido un error', 'Vuelve a intentarlo', 5000);
            })
    }

    /**
     * Selecciono los parametros a enviar segun la lista a pedir
     * @param {*} type_list 
     * @returns 
     */
    const generateParams = (type_list) => {
        let params = {}
        switch (type_list) {
            case 'students':
                params = {
                    hogwartsStudent: true
                }
                break;
            case 'staff':
                params = {
                    hogwartsStaff: true
                }
                break;
        }
        return params
    }

    return (
        <Layout >
            <div className="flex-container">
                <div className="item"><Image src="/images/logo.png" alt="Picture of the author" width={194} height={66} /></div>
            </div>
            <div className="flex-container">
                <div className="item">
                    <Button className='btn-active' label={'estudiantes'} onClick={() => { setTypeList('students') }} />
                </div>
                <div className="item">
                    <Button label={'staff'} onClick={() => { setTypeList('staff') }} />
                </div>
            </div>
        </Layout >
    )
}

export default Index;