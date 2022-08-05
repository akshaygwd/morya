import { Link } from 'react-router-dom';
import './tasks.css';

const Tasks = (props) => {
    return(
        <div className='tasks'>
            <h2>Events</h2>
        <ul>
            <li>
                <div className='image-wrapper'>
                    <img src="https://via.placeholder.com/200" alt="image1"/>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to="/blog/1">More</Link>
            </li>
            <li>
                <div className='image-wrapper'>
                    <img src="https://via.placeholder.com/200" alt="image2"/>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to="/blog/2">More</Link>
            </li>
            <li>
                <div className='image-wrapper'>
                    <img src="https://via.placeholder.com/200" alt="image3"/>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to="/blog/3">More</Link>
            </li>
            <li>
                <div className='image-wrapper'>
                    <img src="https://via.placeholder.com/200" alt="image4"/>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to="/blog/4">More</Link>
            </li>
            <li>
                <div className='image-wrapper'>
                    <img src="https://via.placeholder.com/200" alt="image5"/>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to="/blog/5">More</Link>
            </li>
            <li>
                <div className='image-wrapper'>
                    <img src="https://via.placeholder.com/200" alt="image6"/>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to="/blog/6">More</Link>
            </li>
        </ul>
    </div>
    );
}

export default Tasks;