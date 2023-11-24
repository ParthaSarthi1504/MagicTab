import './style.css'
import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const makeAciveLink =(activeListIndex) =>{
    console.log('triggered')
    const listItems = document.querySelectorAll("li");
    listItems.forEach((eachListItem,index) =>{
        console.log('listItem forEach triggered')
        eachListItem.classList.remove('active')
        if (index === activeListIndex){
            console.log('activelistIndex==>',activeListIndex)
            eachListItem.classList.add('active')
        }
    })
    console.log(document.querySelectorAll("li"))
}

const tabDetails = [
    {
        id: 1,
        name: "Home",
        logo: <IoHome/>,
        isActive: true
    },
    {
        id: 2,
        name: "Profile",
        logo: <FaRegUser/>,
        isActive: false
    },
    {
        id: 3,
        name: "Message",
        logo: <FaRegMessage/>,
        isActive: false
    },
    {
        id: 4,
        name: "Photos",
        logo: <MdPhotoCamera/>,
        isActive: false
    },
    {
        id: 5,
        name: "Setting",
        logo: <IoMdSettings/>,
        isActive: false
    },
]

function Tab() {
    const [tabList, setTabList] = useState(tabDetails)

    const onChangeActiveButton = (tabId)=>{
        const updatedTabList = tabList.map(each =>{
            if (each.id === tabId){
                return {...each,isActive: true}
            }
            return {...each,isActive: false}
        })
        setTabList(updatedTabList)
    }
    return (
        <div className='w-[500px] h-[70px] flex justify-center items-center bg-[#ffffff] rounded-[7px]'>
            <ul className='relative flex justify-between items-center w-[90%] h-[100%] list-none pl-0 '>
                {
                   tabList.map(eachTab=>{
                    {/* if (eachTab.isActive){
                        console.log(`${95 * (eachTab.id-1)}`)
                    } */}
                    return(
                    <>
                    <li  key={eachTab.id} className={`active list-none pl-0 relative flex flex-col justify-center items-center w-[70px] h-[100%] z-10 cursor-pointer
                        ${eachTab.isActive && "translate-y-[-50%]"}`} onClick={()=>onChangeActiveButton(eachTab.id)}>
                        <span className='icon relative block text-[30px] text-black duration-300 '>
                           {eachTab.logo}
                        </span>
                        <span className={`absolute top-[70px]  text-[#000000] text-[16px] font-[500] duration-[0.3s] ${eachTab.isActive ? "opacity-100 translate-y-[5px]" : "translate-y-[20px] opacity-0"}`}>
                            {eachTab.name}
                        </span>
                    </li>

                    {
                        eachTab.isActive && (
                            <div className={`absolute top-[-35px] rounded-full w-[70px] h-[70px] border-[6px] border-black bg-[#00D100] duration-300  translate-x-[${95 * (eachTab.id-1)}px] 
                            before:absolute before:top-[25px] before:left-[-19px] before:box-content  before:border-t-[4px] before:border-r-[2px] before:border-black  before:w-[15px] before:h-[15px] before:bg-[#ffffff]  before:rounded-tr-[15px] 
                            after:absolute after:top-[25px] after:right-[-19.5px] after:box-content  after:border-t-[4px] after:border-l-[2px] after:border-black after:shadow-class after:w-[15px] after:h-[15px] after:bg-[#ffffff]  after:rounded-tl-[15px]`}>
                            </div>
                        )
                    }
                    </>
                   )}) 
                }
                
                {/* <li onClick={(e)=>makeAciveLink(1)}>
                    <span className='icon'><FaRegUser/></span>
                    <span className='text'>Profile</span>
                </li>
                <li onClick={(e)=>makeAciveLink(2)}>
                    <span className='icon'><FaRegMessage/></span>
                    <span className='text'>Message</span>
                </li>
                <li onClick={(e)=>makeAciveLink(3)}>
                    <span className='icon'><MdPhotoCamera/></span>
                    <span className='text'>Photos</span>
                </li>
                <li onClick={(e)=>makeAciveLink(4)}>
                    <span className='icon'><IoMdSettings/></span>
                    <span className='text'>Setting</span>
                </li>*/}
                
                    {/* {
                    document.querySelectorAll(li).forEach((eachListItem)=>{
                        eachListItem.oncli
                    })
                    }   */}
            </ul>
        </div>
    )
}

export default Tab;

