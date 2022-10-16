import Header from './header'
import Footer from './footer'
import Head from 'next/head'
import "antd/dist/antd.css";
const Layout = (props) => {
    let { children } = props;
    return (
        <>
            <Head>
                <title>Examen GoNet</title>
            </Head>
            <main className='container' >
                <Header />
                <div>{children}</div>
                <Footer />
            </main>
        </>
    )
}

export default Layout;