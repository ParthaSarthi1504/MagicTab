// import React, {  useEffect, useState } from "react";
// import {
//   HomeIcon,
//   ChannelsIcon,
// } from "../../icons/";
// import { IoHome } from "react-icons/io5";
// import { Link, useLocation } from "react-router-dom";

// const sectionList = [
//     {
//       name: "Dashboard",
//       imageType: "svg",
//       link: "/",
//       svg: HomeIcon,
//     },
//     {
//       name: "Listings",
//       imageType: "svg",
//       link: "/listings",
//       svg: HomeIcon,
//     },
//     {
//       name: "Listing Attributes",
//       imageType: "svg",
//       link: "/listing-attributes",
//       isActive: false,
//       children: [
//         {
//           childName: "Facilities",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/facilities",
//         },
//         {
//           childName: "Categories",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/categories",
//         },
//         {
//           childName: "Regions",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/regions",
//         },
//         {
//           childName: "Continent",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/continent",
//         },
//         {
//           childName: "House Rules",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/houserules",
//         },
//         {
//           childName: "Country",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/country",
//         },
//         {
//           childName: "Activities & Attractions",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/activities-attractions",
//         },
//         {
//           childName: "Offers",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/offers",
//         },
//         {
//           childName: "Addons",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/addons",
//         },
//         {
//           childName: "Property types",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/property-type",
//         },
//         {
//           childName: "Property facilities",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/property-facilities",
//         },
//         {
//           childName: "Tax",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/tax",
//         },
//         {
//           childName: "Destination",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/destination",
//         },
//         {
//           childName: "ListingTypes",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/listing-type",
//         },
//         {
//           childName: "GeoTags",
//           imageType: "svg",
//           icon: HomeIcon,
//           to: "/listing-attributes/geotag",
//         },
//       ],
//       svg: ChannelsIcon,
//     },
//     {
//       name: "Affiliate Earnings",
//       imageType: "svg",
//       link: "/affiliate-earnings",
//       svg: HomeIcon,
//     }
//   ]

// console.log('isActive===>',!sectionList[1].isActive)

// function TailwindLeftBar() {
//     const [isSideBarOpened, setIsSideBarOpened] = useState(false);
//     const [isOpenListingAttribute,setIsOpenListingAttribute] = useState(false)
//     const [menuList, setMenuList] = useState(sectionList);
//     const {pathname} = useLocation();
  
//     //   useEffect(()=>{
//     //     menuList[0].isActive = ! menuList[0].isActive;
//     //     setMenuList(menuList)
//     //   },[]);
    
//     //   const makeAciveLink = (index) => {
//     //     menuList[index].isActive = ! menuList[0].isActive;
//     //     setMenuList(menuList)
//     //   };
    
//       const handleOpenCloseSideBar = () => {
//         setIsSideBarOpened(prev => !prev);
//       };
    
//       const handleOpenSubSections = ()=>{
//         setIsOpenListingAttribute(prev=> !prev);
//       }

//     //   const parentList = ;
//     //   const parentIcon = ;
//     //   const parentText = ;
    
//       const renderEachSection = (
//         section,
//         browserLink,
//         liClassName="w-[100%] h-[50px] my-[20px] flex items-center duration-[400ms]",
//         liIconClassName="text-[20px] mx-[15px]",
//         liTextClassName="text-[17px]",
//         activeLink = "bg-[#ffffff] translate-x-[20px] text-[#000000] rounded-tl-xl rounded-bl-xl before:absolute before:top-[-20px] before:right-0 before:w-[20px] before:h-[20px] before:bg-[#ffffff] after:absolute after:top-[50px] after:right-0 after:w-[20px] after:h-[20px] after:bg-[#ffffff]",
//         block1ClassName="absolute top-[-20px] right-0 w-[20px] h-[20px] bg-[#4d5bF9] rounded-br-[100%] z-50 duration-400 origin-bottom-right",
//         block2ClassName="absolute top-[50px] right-0 w-[20px] h-[20px] bg-[#4d5bF9] rounded-tr-[100%] z-50 duration-400 origin-bottom-right",
//         )=>{
//         // console.log(section);
//         const name = section.hasOwnProperty("name")? section.name : section.childName;
//         console.log(name);
  
//         return (
//           <>
//             <Link to={browserLink}>
//                 <li className={`${liClassName} ${pathname === browserLink && activeLink}`} >
//                     <IoHome className={`${liIconClassName}`}/>
//                     {isSideBarOpened && <p className={`${liTextClassName}`}>{name}</p>}
//                     {
//                       pathname === browserLink && (
//                         <>
//                           <b className={`${block1ClassName}`}></b>
//                           <b className={`${block2ClassName}`}></b>
//                         </>
//                       )
//                     }
//                     <b className="absolute top-[15px] left-[-50px] bg-[#4d5bF9] h-[20px] w-[20px] rounded-full border-4 border-[#ffffff] duration-100"></b>
//                 </li>
//             </Link>
//           </>
//         );
//       }
    
//       const mappingArray = (list,type='parent')=>{
//         return(
//           <ul>
//           {
//             list?.map((eachSection)=>{
//               if (eachSection.hasOwnProperty("children")) {
//                   return(
//                     <>
//                       {/* {renderEachSection(eachSection)} */}
//                       <li className="w-[100%] h-[50px] flex items-center cursor-pointer" onClick={handleOpenSubSections}>
//                         <div className={`text-[20px] ${isSideBarOpened ? "mx-[15px]" : "ml-[15px]"}`}><IoHome /></div>
//                         {isSideBarOpened && <p className="text-[17px]">{eachSection.name}</p>}
//                         <button className={`text-[15px] ${isSideBarOpened ? "mx-[10px]" : "ml-[5px]"}`}>
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//                           </svg>       
//                         </button>
//                       </li>
//                       {
//                         isOpenListingAttribute && mappingArray(eachSection.children,'childElements')
//                       }
//                     </>
//                   )
//                   {/* return mappingArray(eachSection.children) */}
//               }else{
//                   return type === 'parent' ? renderEachSection(eachSection,eachSection.link) : renderEachSection(eachSection,eachSection.to,"w-[100%] h-[50px] my-[20px] flex items-center ml-[10px] duration-[400ms]","text-[17px] mx-[15px]","text-[15px]",
//                   "bg-[#ffffff] translate-x-[10px] text-[#000000] rounded-tl-xl rounded-bl-xl before:absolute before:top-[-20px] before:right-0  before:w-[20px] before:h-[20px] before:bg-[#ffffff] after:absolute after:top-[50px] after:right-0 after:w-[20px] after:h-[20px] after:bg-[#ffffff]")
//               }
//             })
//           }
//         </ul>
//         )
//       }
//     return (
//         <div className={`min-h-screen bg-[#4d5bF9] py-[30px] m-3 rounded-md flex flex-col justify-between text-[#ffffff] duration-[600ms] ${!isSideBarOpened ? "w-[90px] px-[20px]" : "w-[280px] px-[20px]"}`}>
//             <ul>
//                 {mappingArray(menuList)}
//             </ul>
//             <button className='self-end mt-10' onClick={handleOpenCloseSideBar}>
//               {!isSideBarOpened ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
//                   />
//                 </svg>)
//               }
//             </button>
//         </div>
//     )
// }

// export default TailwindLeftBar;

import React, {  useEffect, useState } from "react";
import {
  HomeIcon,
  ChannelsIcon,
} from "../../icons/";
import { IoHome } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const sectionList = [
    {
      name: "Dashboard",
      imageType: "svg",
      link: "/",
      svg: HomeIcon,
    },
    {
      name: "Listings",
      imageType: "svg",
      link: "/listings",
      svg: HomeIcon,
    },
    {
      name: "Listing Attributes",
      imageType: "svg",
      link: "/listing-attributes",
      isActive: false,
      children: [
        {
          childName: "Facilities",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/facilities",
        },
        {
          childName: "Categories",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/categories",
        },
        {
          childName: "Regions",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/regions",
        },
        {
          childName: "Continent",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/continent",
        },
        {
          childName: "House Rules",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/houserules",
        },
        {
          childName: "Country",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/country",
        },
        {
          childName: "Activities & Attractions",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/activities-attractions",
        },
        {
          childName: "Offers",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/offers",
        },
        {
          childName: "Addons",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/addons",
        },
        {
          childName: "Property types",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/property-type",
        },
        {
          childName: "Property facilities",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/property-facilities",
        },
        {
          childName: "Tax",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/tax",
        },
        {
          childName: "Destination",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/destination",
        },
        {
          childName: "ListingTypes",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/listing-type",
        },
        {
          childName: "GeoTags",
          imageType: "svg",
          icon: HomeIcon,
          to: "/listing-attributes/geotag",
        },
      ],
      svg: ChannelsIcon,
    },
    {
      name: "Affiliate Earnings",
      imageType: "svg",
      link: "/affiliate-earnings",
      svg: HomeIcon,
    }
  ]

console.log('isActive===>',!sectionList[1].isActive)

function TailwindLeftBar() {
    const [isSideBarOpened, setIsSideBarOpened] = useState(false);
    const [isOpenListingAttribute,setIsOpenListingAttribute] = useState(false)
    const [menuList, setMenuList] = useState(sectionList);
    const {pathname} = useLocation();
  
    //   useEffect(()=>{
    //     menuList[0].isActive = ! menuList[0].isActive;
    //     setMenuList(menuList)
    //   },[]);
    
    //   const makeAciveLink = (index) => {
    //     menuList[index].isActive = ! menuList[0].isActive;
    //     setMenuList(menuList)
    //   };
    
      const handleOpenCloseSideBar = () => {
        setIsSideBarOpened(prev => !prev);
      };
    
      const handleOpenSubSections = ()=>{
        setIsOpenListingAttribute(prev=> !prev);
      }

    //   const parentList = ;
    //   const parentIcon = ;
    //   const parentText = ;
    
      const renderEachSection = (
        section,
        browserLink,
        liClassName="w-[100%] h-[50px] my-[20px] flex items-center duration-[400ms]",
        liIconClassName="text-[20px] mx-[15px]",
        liTextClassName="text-[17px]",
        activeLink = "bg-[#ffffff] translate-x-[20px] text-[#000000] rounded-tl-xl rounded-bl-xl before:absolute before:top-[-20px] before:right-0 before:w-[20px] before:h-[20px] before:bg-[#ffffff] after:absolute after:top-[50px] after:right-0 after:w-[20px] after:h-[20px] after:bg-[#ffffff]",
        block1ClassName="absolute top-[-20px] right-0 w-[20px] h-[20px] bg-slate-500 rounded-br-[100%] z-50 duration-400 origin-bottom-right",
        block2ClassName="absolute top-[50px] right-0 w-[20px] h-[20px] bg-slate-500 rounded-tr-[100%] z-50 duration-400 origin-bottom-right",
        )=>{
        // console.log(section);
        const name = section.hasOwnProperty("name")? section.name : section.childName;
        console.log(name);
  
        return (
          <>
            <Link to={browserLink}>
                <li className={`${liClassName} ${pathname === browserLink && activeLink}`} >
                    <IoHome className={`${liIconClassName}`}/>
                    {isSideBarOpened && <p className={`${liTextClassName}`}>{name}</p>}
                    {
                      pathname === browserLink && (
                        <>
                          <b className={`${block1ClassName}`}></b>
                          <b className={`${block2ClassName}`}></b>
                        </>
                      )
                    }
                    <b className="absolute top-[15px] left-[-50px] bg-slate-500 h-[20px] w-[20px] rounded-full border-4 border-[#ffffff] duration-100"></b>
                </li>
            </Link>
          </>
        );
      }
    
      const mappingArray = (list,type='parent')=>{
        return(
          <ul>
          {
            list?.map((eachSection)=>{
              if (eachSection.hasOwnProperty("children")) {
                  return(
                    <>
                      {/* {renderEachSection(eachSection)} */}
                      <li className="w-[100%] h-[50px] flex items-center cursor-pointer" onClick={handleOpenSubSections}>
                        <div className={`text-[20px] ${isSideBarOpened ? "mx-[15px]" : "ml-[15px]"}`}><IoHome /></div>
                        {isSideBarOpened && <p className="text-[17px]">{eachSection.name}</p>}
                        <button className={`text-[15px] ${isSideBarOpened ? "mx-[10px]" : "ml-[5px]"}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>       
                        </button>
                      </li>
                      {
                        isOpenListingAttribute && mappingArray(eachSection.children,'childElements')
                      }
                    </>
                  )
                  {/* return mappingArray(eachSection.children) */}
              }else{
                  return type === 'parent' ? renderEachSection(eachSection,eachSection.link) : renderEachSection(eachSection,eachSection.to,"w-[100%] h-[50px] my-[20px] flex items-center ml-[10px] duration-[400ms]","text-[17px] mx-[15px]","text-[15px]",
                  "bg-[#ffffff] translate-x-[10px] text-[#000000] rounded-tl-xl rounded-bl-xl before:absolute before:top-[-20px] before:right-0  before:w-[20px] before:h-[20px] before:bg-[#ffffff] after:absolute after:top-[50px] after:right-0 after:w-[20px] after:h-[20px] after:bg-[#ffffff]")
              }
            })
          }
        </ul>
        )
      }
    return (
        <div className={`min-h-screen bg-slate-500  py-[30px] m-3 rounded-md flex flex-col justify-between text-[#ffffff] duration-[600ms] ${!isSideBarOpened ? "w-[90px] px-[20px]" : "w-[280px] px-[20px]"}`}>
            <ul>
                {mappingArray(menuList)}
            </ul>
            <button className='self-end mt-10' onClick={handleOpenCloseSideBar}>
              {!isSideBarOpened ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>)
              }
            </button>
        </div>
    )
}

export default TailwindLeftBar;

