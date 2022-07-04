import './index.scss';
import LogoTitle from '../../asset/src/assets/images/name.png';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1> Hi , <br />
                    <img src={LogoTitle} alt="developer"></img>
                    Jha
                    <br />
                    Web developer
                </h1>
                <h2>FrontEnd Developer / Software Engineer</h2>
                <Link to='/contact' className='flat-button'> Contact Me </Link>

            </div>
         <Logo></Logo>
        </div>
    )
}

export default Home;
