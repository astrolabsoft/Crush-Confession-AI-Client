import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';

const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto bg-[#d9d0e8] min-h-screen'>
            <Navber />
            <Outlet />
        </div>
    );
};

export default Root;
