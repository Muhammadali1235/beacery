import Axios from '../../Api/Axios';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
function App() {
    const [data, setdata] = useState([])
    const [name, setName] = useState([])
    const [lastname, setLastname] = useState([])
    const [subject, setSubject] = useState([])
    const [teacher, setTeacher] = useState([])
    const [time, setTime] = useState([])
    const [tolov, setTolov] = useState([])
    console.log(data)
    useEffect(() => {
        const getApi = async () => {
            await Axios.get("/student/get")
                .then(res => setdata(res.data))
                .catch(error => console.error(error))
        }
        getApi()
    }, [])

    const formSubmit = async (e) => {
        e.preventDefault()
        let newuser = {
            name,
            lastname,
            subject,
            teacher,
            time,
            tolov
        }
        await Axios.post("/student/create", newuser)
            .then(res => console.log(res))
            .catch(error => console.log(error))

        setName("")
        setLastname("")
        setSubject("")
        setTeacher("")
        setTime("")
        setTolov("")
    }

    return (
        <div>
            <Navbar />
            <div className="w-[100%] h-[96vh] flex items-center justify-around  text-black text-left ">
                <form action="" onSubmit={formSubmit} className='form1 w-[400px] h-[500px] flex items-center justify-around flex-col mt-[-50px] '>
                    <label htmlFor="" className='label1'>Name</label>
                    <input className=' w-[250px] h-[35px] border-[2px] bg-white ' type="text" value={name} placeholder='Name...' onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="" className='label2'>Lastname</label>
                    <input className=' w-[250px] h-[35px] border-[2px] bg-white ' type="text" value={lastname} placeholder='Lastname...' onChange={(e) => setLastname(e.target.value)} />
                    <label htmlFor="" className='label3'>Subject</label>
                    <input className=' w-[250px] h-[35px] border-[2px] bg-white ' type="text" value={subject} placeholder='Subject...' onChange={(e) => setSubject(e.target.value)} />
                    <label htmlFor="" className='label4'>Teacher Name</label>
                    <input className=' w-[250px] h-[35px] border-[2px] bg-white ' type="text" value={teacher} placeholder='Teacher name...' onChange={(e) => setTeacher(e.target.value)} />
                    <label htmlFor="" className='label5'>Time</label>
                    <input className=' w-[250px] h-[35px] border-[2px] bg-white ' type="text" value={time} placeholder='Time...' onChange={(e) => setTime(e.target.value)} />
                    <label htmlFor="" className='label6'>To'lov</label>
                    <input className=' w-[250px] h-[35px] border-[2px] bg-white ' type="text" value={tolov} placeholder='Tolov...' onChange={(e) => setTolov(e.target.value)} />
                    <button className=' w-[250px] h-[35px] bg-[#ccc] '>Add  </button>
                </form>
            </div>
        </div>
    );
}

export default App;

