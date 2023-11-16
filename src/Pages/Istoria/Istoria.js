import React from 'react'
import Axios from '../../Api/Axios';
import './Istoria.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai'

const SearchResult = ({ result }) => {
    return (
        <div className="search-result" onClick={(e) => alert(`You selected ${result}!`)}>{result}</div>
    );
};
function Istoria() {
    const [data, setdata] = useState([])
    console.log(data)
    useEffect(() => {
        const getApi = async () => {
            await Axios.get("/student/get")
                .then(res => setdata(res.data))
                .catch(error => console.error("xato"))
        }
        getApi()
    }, [])
    const formSubmit = async (id) => {
        await Axios.delete(`/student/delete/${id}`)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className='container m-auto w-[100%] mt-[100px] flex items-center justify-center   '>
                <div className='container1 m-auto w-[100%]  ' >
                    <div className=' flex border-[2px] w-[89.9%] h-[30px] m-auto items-center justify-around h-auto mt-[10px] text-black '>
                        <div className=" m-auto w-[100%] flex items-center justify-left ">
                            <h1 className='border-l-black border-[2px] p-[6px] mt-[-1px]'>
                                Name
                            </h1>
                        </div>
                        <div className=" m-auto w-[100%] flex items-center justify-left ">
                            <h1 className='border-l-black border-[2px] p-[6px] mt-[-1px]'>
                                Lastname
                            </h1>
                        </div>
                        <div className=" m-auto w-[100%] flex items-center justify-left ">

                            <h1 className='border-l-black border-[2px] p-[6px] mt-[-1px]'>
                                Subject
                            </h1>
                        </div>
                        <div className=" m-auto w-[100%] flex items-center justify-left ">

                            <h1 className='border-l-black border-[2px] p-[6px] mt-[-1px]'>
                                Teacher Name
                            </h1>
                        </div>
                        <div className=" m-auto w-[100%] flex items-center justify-left ">
                            <h1 className='border-l-black border-[2px] p-[6px] mt-[-1px]'>
                                Time
                            </h1>
                        </div>
                        <div className=" m-auto w-[100%] flex items-center justify-left ">
                            <h1 className='border-l-black border-[2px] p-[6px] mt-[-1px]'>
                                payment
                            </h1>
                        </div>
                        <div className="w-[880px] flex items-center p-[5px] justify-between ">

                        </div>
                    </div>
                </div>
            </div >
            <div className='container m-auto w-[100%] flex items-center justify-center   '>
                <div className='container1 m-auto w-[100%]  ' >
                    {data.map((pro) => (
                        <div className=' flex border-[2px] w-[90%] h-[30px] m-auto items-center justify-around h-auto mt-[10px] text-black '>
                            <div className=" m-auto w-[100%] flex items-center justify-left ">
                                <h1 className='border-l-black border-[2px] p-[6px] mt-[-1px]'>
                                    {pro.name}
                                </h1>
                            </div>
                            <div className=" m-auto w-[100%] flex items-center justify-left ">
                                <h1 className='border-l-black border-[2px] p-[6px] mt-[-1px]'>
                                    {pro.lastname}
                                </h1>
                            </div>
                            <div className=" m-auto w-[100%] flex items-center justify-left ">

                                <h1 className='border-l-black border-[2px] p-[6px] mt-[-1px]'>
                                    {pro.subject}
                                </h1>
                            </div>
                            <div className=" m-auto w-[100%] flex items-center justify-left ">

                                <h1 className='border-l-black border-[2px] p-[6px] mt-[-1px]'>
                                    {pro.teacher}
                                </h1>
                            </div>
                            <div className=" m-auto w-[100%] flex items-center justify-left ">
                                <h1 className='border-l-black border-[2px] p-[6px] mt-[-1px]'>
                                    {pro.time}
                                </h1>
                            </div>
                            <div className=" m-auto w-[100%] flex items-center justify-left ">
                                <h1 className='border-l-black border-[2px] p-[6px] mt-[-1px]'>
                                    {pro.tolov}
                                </h1>
                            </div>
                            <div className="w-[200px] border-[2px] flex items-center p-[5px] justify-between ">
                                <Link className=' text-black bg-blue-400 w-[40px] text-center ' state={pro} to={`/editemployee/${pro._id}`}>
                                    Edit
                                </Link>
                                <div className="bg-red-500 flex items-center justify-center ml-[10px] w-[80px] text-center " >
                                    <button className='ml-[20px]  bg-red-500 ' onClick={() => formSubmit(pro._id)} id="deleteButton" data-item-id="123">delete</button>
                                    <AiOutlineDelete />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div >
        </div>
    )
}

export default Istoria
