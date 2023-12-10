import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./User.css"
import Axios from '../../Api/Axios'
import { AiOutlineDelete } from 'react-icons/ai'
import { AiOutlineRollback } from 'react-icons/ai'
function User() {
    const pro = useLocation().state
    console.log("pro:", pro)
    const formSubmit = async (id) => {
        await Axios.delete(`/student/delete/${id}`)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }
    return (
        <div className=' container m-auto w-[100%] flex items-center justify-center max-w-5xl w-[100%] h-auto mt-[100px]  '>
            <div className='container1  m-auto w-[100%] max-w-3xl text-sm w-[100%]   ' >
                <div className='container2 flex border-[2px] w-[90%] h-[30px] m-auto items-center justify-around h-auto mt-[10px] text-black max-w-[700px] flex-col text-[18px]  '>
                    <div className=" m-auto w-[100%] flex items-center justify-left ">
                        <h1 className='incon border-l-black border-[2px] p-[6px] mt-[-1px] max-w-[700px] flex'>
                            <span className='span'>Name: </span>
                            <span>
                                {pro.name}
                            </span>
                        </h1>
                    </div>
                    <div className=" m-auto w-[100%] flex items-center justify-left ">
                        <h1 className='incon border-l-black border-[2px] p-[6px] mt-[-1px]'>
                            <span className='span'>lastname: </span>
                            <span>
                                {pro.lastname}
                            </span>
                        </h1>
                    </div>
                    <div className=" m-auto w-[100%] flex items-center justify-left ">

                        <h1 className='incon border-l-black border-[2px] p-[6px] mt-[-1px]'>
                            <span className='span'>Subject: </span>
                            <span>
                                {pro.subject}
                            </span>
                        </h1>
                    </div>
                    <div className=" m-auto w-[100%] flex items-center justify-left ">

                        <h1 className='incon border-l-black border-[2px] p-[6px] mt-[-1px]'>
                            <span className='span'>Teacher: </span>
                            <span>
                                {pro.teacher}
                            </span>
                        </h1>
                    </div>
                    <div className=" m-auto w-[100%] flex items-center justify-left ">
                        <h1 className='incon border-l-black border-[2px] p-[6px] mt-[-1px]'>
                            <span className='span'>Time: </span>
                            <span>
                                {pro.time}
                            </span>
                        </h1>
                    </div>
                    <div className=" m-auto w-[100%] flex items-center justify-left ">
                        <h1 className='incon border-l-black border-[2px] p-[6px] mt-[-1px]'>
                            <span className='span'>Payment: </span>
                            <span>
                                {pro.tolov}
                            </span>
                        </h1>
                    </div>
                    <div className=" border-[2px] flex items-center p-[5px] mt-[-3px] justify-between max-w-4xl flex-col  ">
                        <Link className=' text-black bg-blue-400 w-[40px] text-center  ' state={pro} to={`/editemployee/${pro._id}`}>
                            Edit
                        </Link>

                    </div>
                    <Link to={'/istoria'} className='flex items-center justify-center'>Back <AiOutlineRollback /></Link>

                </div>
            </div>
        </div >
    )
}

export default User
