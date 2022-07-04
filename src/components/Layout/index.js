import Sidebar from '../Sidebar';
import './index.scss';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <div>
            <div className ="App">
            <Sidebar/>
            <div className='page'>
                <span className='tags top-tags' >&lt;body&gt;</span>
               

               <Outlet/>

               <span className='tags bottom-tags'>&lt;body&gt;
               <br/>
               <span className='bottom-tag-html'>&lt;/html&lt;</span>
               </span>
            </div>
            </div>
          
        </div>
       
    )
}

export default Layout;