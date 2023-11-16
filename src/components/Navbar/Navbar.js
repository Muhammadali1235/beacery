import React from 'react'
import img1 from '../../images/Logo 1.png'
import Search from '../../Pages/Search/Search'
function Navbar() {
    return (
        <div className='w-[100%] flex justify-center text-black'>
            <div className="w-[85%] flex border-[2px] items-center justify-between m-auto fixed bg-white top-0">
                <div className="logo">
                    <h1 className='text-xl'>
                        <a href="/">
                            <img className='w-[100px]' src={img1} alt="" />
                        </a>
                    </h1>
                </div>
                <Search />
                <ul className='flex w-[700px] items-center justify-around text-xl d-none '>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="add">O'quvchi qo'shish</a>
                    </li>
                    <li>
                        <a href="istoria">O'quvchilar ro'yxati</a>
                    </li>
                    <li>
                        <a href="sign_in">Sign in</a>
                    </li>
                    <li>
                        <a href="sign_up">Sign up</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
