/* eslint-disable no-unused-vars */
import cooker from '../../assets/banner.jpg'
import banner from '../../assets/background.jpg'
import { FaPhone } from "react-icons/fa";
import ServerSite from '../ServerSite/ServerSite';

const Header = () => {


    return (
        <div>
            <div
                className="relative bg-cover bg-center h-screen flex items-center justify-center container"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
            >
                <div className='md:flex justify-between pr-20 items-center py-10 px-12 bg-slate-100 md:px-40'>
                    <div>
                        <h1 className='text-5xl font-bold mb-6'>Baked Chicken <span className='text-sky-500'>Breast</span></h1>
                        <p className='text-slate-500'>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                        <button className="bg-blue-500 flex items-center hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline mt-4 md:mt-0">
                            <FaPhone></FaPhone>
                            <span className='ms-2'>Contact</span>
                        </button>
                    </div>
                    <div className='mt-16'>
                        <img src={cooker} alt="" />
                    </div>
                </div>
            </div>
            <ServerSite></ServerSite>
        </div>
    )
}

export default Header;