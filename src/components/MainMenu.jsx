import React from 'react'

const MainMenu = (props) => {
    return (
        <div className='w-full hover:bg-[#D0B8FC] mt-3 h-[45px] flex items-center gap-2 text-[#BCBCBC] hover:text-[#6D1EFF] hover:font-bold'>
            {/* BCBCBC */}
            <div className='w-2 h-full'></div>
            <div className='w-[25px] h-[21px]'>
                <img src={props.image} alt="dashboard" className='w-full text-blue-500'/>
            </div>
            <h3 className=''>{props.name}</h3>
        </div>
    )
}

export default MainMenu
