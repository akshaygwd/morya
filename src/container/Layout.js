import Footer from 'components/footer';
import Header from '../components/header';

const Layout = (props) => {
    return(
        <div>
            <Header />
            <main>
                { props.children }
            </main>
            <Footer />
        </div>
    )
}

export default Layout;