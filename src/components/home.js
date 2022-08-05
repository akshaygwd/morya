import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './home.css';
import { Container } from 'reactstrap';
import Tasks from './tasks';
import Mission from './mission';

const Home = () => {
    return(
        <main>
            <Carousel showArrows={true} autoPlay={true} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src="images/banner1.jpg" height="500px" alt="leg1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="images/banner2.jpg" height="500px" alt="leg2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="images/banner3.jpg" height="500px" alt="leg3" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <div className='gallary'>
                <Container>
                    <div className='logo'>
                        <img src="images/morya-logo.jpeg" width="200" alt="leg4" />
                    </div>
                    <Tasks />
                </Container>
            </div>
            <div className='mission'>
                <Container>
                    <Mission />
                </Container>
            </div>
        </main>
    )
}

export default Home;