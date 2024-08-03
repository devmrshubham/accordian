import React from "react";
import { data } from "./Datas";
import Layout from "./Layout";

const Accord = () => {

    return (
        <>

    <h3 style={{ textAlign:"center"}}>Accordian</h3>

            {data.map((d, i) => {
                return <>
                
                    <Layout d={d} />
                </>;
            })}
        </>
    );
};

export default Accord;
