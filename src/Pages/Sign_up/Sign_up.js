import React from 'react'

function Sign_up() {
    return (
        <div className='form text-black mt-[100px] w-[100%] h-[100vh] flex items-center justify-center mt-0 '>
            <div className=" w-[400px] h-[400px] border-[2px] flex items-center justify-center ">
                <form action="" className='flex flex-col w-[300px] h-[350px]  justify-around text-left '>
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" placeholder='Email' className='w-[300px] m-auto h-[30px] ' />
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Name' className='w-[300px] m-auto h-[30px] ' />
                    <label htmlFor="">Lastname</label>
                    <input type="text" placeholder='Lastname' className='w-[300px] m-auto h-[30px] ' />
                    <button className='bg-[#ccc] w-[300px] m-auto h-[30px] '>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Sign_up
