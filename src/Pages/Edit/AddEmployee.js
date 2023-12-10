import { Link, Navigate, useLocation } from "react-router-dom";
import Axios from "../../Api/Axios";
import { useEffect, useState } from 'react';
import "./Edit.css"
import { AiOutlineRollback } from 'react-icons/ai'
function EditEmployee() {
    const pro = useLocation().state
    console.log("pro:", pro)

    const [data, setdata] = useState([])
    const [id, setid] = useState(pro?._id)
    const [name, setname] = useState(pro?.name)
    const [lastname, srtlastname] = useState(pro?.lastname)
    const [subject, setsubject] = useState(pro?.subject)
    const [teacher, setteacher] = useState(pro?.teacher)
    const [time, settime] = useState(pro?.time)
    const [tolov, settolov] = useState(pro?.tolov)
    console.log(data)
    useEffect(() => {
        const getApi = async () => {
            await Axios.get(`/student/get`)
                .then(res => setdata(res.data))
                .catch(error => console.error("xato"))
        }
        getApi()
    }, [])
    console.log(pro?._id)
    const formSubmit = async (e) => {
        e.preventDefault()

        await Axios.put(`/student/update/${pro._id}`, { name: name, lastname, subject, teacher, time, tolov })
            .then(res => {
                res.map((pro) => {
                    <div>
                        <h1>{`Name change to ${pro.name}`}</h1>
                    </div>
                })
            })
            .catch(error => console.log(error))

    }

    return (
        <div className=" form w-[100%] h-[100vh] flex flex-col items-center justify-center text-black ">
            <form className="form1 m-auto w-[500px] border-[2px] h-[600px] flex flex-col items-ceneter justify-around " onSubmit={formSubmit}>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 w-[500px] h-[500px] flex flex-col items-ceneter justify-around">

                        <div className="m-auto w-[300px] flex flex-col">
                            <label>ID</label>
                            <input value={pro?._id} disabled className="border-[2px]" onChange={(e) => setid(e.target.value)} />
                        </div>
                        <div className="m-auto w-[300px] flex flex-col">
                            <label>Name</label>
                            <input value={pro[pro.name]?.name} className="border-[2px] w-[300px] " onChange={(e) => setname(e.target.value)} />
                            <label>Lastname</label>
                            <input value={pro[pro.lastname]?.lastname} className="border-[2px] w-[300px] " onChange={(e) => srtlastname(e.target.value)} />
                            <label>Subject</label>
                            <input value={pro[pro.subject]?.subject} className="border-[2px] w-[300px] " onChange={(e) => setsubject(e.target.value)} />
                            <label>Teacher Name</label>
                            <input value={pro[pro.teacher]?.teacher} className="border-[2px] w-[300px] " onChange={(e) => setteacher(e.target.value)} />
                            <label>TIme</label>
                            <input value={pro[pro.time]?.name} className="border-[2px] w-[300px] " onChange={(e) => settime(e.target.value)} />
                            <label>Tolov</label>
                            <input value={pro[pro.tolov]?.tolov} className="border-[2px] w-[300px] " onChange={(e) => settolov(e.target.value)} />

                        </div>

                        <div className="flex m-auto">
                            <br></br>
                            <button className="btn btn-success border-[2px] bg-white " type="submit">Submit</button>
                            <Link className="w-[55px] h-[30px] border-[2px] text-center ml-[10px] flex items-center justify-center bg-white " state={pro} to={`/istoria`}>
                                Back
                                <AiOutlineRollback />
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditEmployee; 