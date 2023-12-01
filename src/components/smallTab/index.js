import './index.css'
import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const makeAciveLink =(activeListIndex) =>{
    const listItems = document.querySelectorAll("li");
    listItems.forEach((eachListItem,index) =>{
        eachListItem.classList.remove('active')
        if (index === activeListIndex){
            eachListItem.classList.add('active')
        }
    })
}

function SmallTab() {
    return (
        <div className='tab-div'>
            <ul>
                <li className='active' onClick={(e)=>makeAciveLink(0)}>
                    <span className='icon'><IoHome/></span>
                    <span className='text'>Home</span>
                </li>
                <li onClick={(e)=>makeAciveLink(1)}>
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
                </li>
                <div className='indicator'></div>
            </ul>
        </div>
    )
}

export default SmallTab;

