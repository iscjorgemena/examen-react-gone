import Header from './header'
import Footer from './footer'
import Head from 'next/head'
const Layout = (props) => {
    let { children } = props;
    return (
        <>
            <Head>
                <title>Examen GoNet</title>
            </Head>
            <main >
                <Header />
                <div>{children}</div>
                <Footer />
            </main>
        </>
    )
}

export default Layout;