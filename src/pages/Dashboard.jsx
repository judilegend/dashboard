import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom'
import { Button } from "@nextui-org/react";
import React, { Suspense } from 'react';
import { useEffect, useRef } from "react";
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import Sidebar from "../components/Sidebar";

const Hero = () => {
    return (
        <Suspense fallback={<div className="text-[50px] absolute text-center ">Loading...</div>}>
            <div className="grid grid-rows-8 h-screen grid-flow-col">
                <section className="row-span-8  h-full col-span-1 ">
                    <Sidebar />
                </section>
                <section className="col-span-7 w-full h-[200px] bg-red-500">
                    {/* <Navbar /> */}
                </section>
                <section className="w-full  bg-slate-900 col-span-7 row-span-7 ">

                </section>
            </div >
        </Suspense >
    );
}

export default Hero;