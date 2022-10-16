import Layout from "../layout/layout";
import Image from 'next/image'
import Button from "../../componentes/button";

const Index = () => {

    const getStudents = () => {
        alert('Get students');
    }

    const getStaff = () => {
        alert('Get staff');
    }

    return (
        <Layout >
            <div className="flex-container">
                <div className="item"><Image src="/images/logo.png" alt="Picture of the author" width={194} height={66} /></div>
            </div>
            <div className="flex-container">
                <div className="item">
                    <Button className='btn-active' label={'estudiantes'} action={getStudents} />
                </div>
                <div className="item">
                    <Button label={'staff'} action={getStaff} />
                </div>
            </div>
        </Layout>
    )
}

export default Index;