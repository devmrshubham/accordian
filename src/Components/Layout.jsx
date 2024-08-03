import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";




const Layout = ({ d }) => {
    const [data, setData] = useState(false)
    const showHide = () => {
        setData(!data)
    }
    return (
        <div className='accordian'>

            <div className="qns">
                <button onClick={showHide}>
                    {
                        data ? <AiOutlineMinus className='i' /> : <IoMdAdd className='i' />
                    }
                </button>
                <h3>{d.q}</h3>
            </div>
            <p>{data ? d.ans : ""}</p>
        </div>
    )
}

export default Layout
