import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';

const Root = () => {
    return (
        <div className='max-w-screen-7xl bg-[#dad0e8]'> 
            <Navber />
            <Outlet />
        </div>
    );
};

export default Root;
