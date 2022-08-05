import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Layout from './container/Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from 'components/home';
import About from 'components/about';
import Contact from 'components/contact';
import Blog from 'components/blog';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='/blog/:id' element={<Blog />}></Route>
          <Route exact path='/' element={< Home />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
