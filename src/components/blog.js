import {useParams} from 'react-router-dom';

const Blog  = (props) => {
    const {id} = useParams();
    return (
        <div><h1>Tasks id: {id}</h1></div>
    );
}

export default Blog;