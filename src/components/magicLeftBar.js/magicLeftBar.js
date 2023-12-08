import React, {  useEffect, useState } from "react";
import "./magicLeftBar.css";
import {
  HomeIcon,
  ChannelsIcon,
} from "../../icons/";
import { IoHome } from "react-icons/io5";

function MagicLeftBar() {
    const [isSideBarOpened, setIsSideBarOpened] = useState(false);
    const [isOpenListingAttribute,setIsOpenListingAttribute] = useState(false)
    const [menuList, setMenuList] = useState([
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
  ]);

  useEffect(() => {
    const listItems = document.querySelectorAll("li");
    listItems.forEach((eachListItem) => {
      const childName = eachListItem.children[1].innerHTML;
      eachListItem.classList.remove("active");
      // eachListItem.children[1].style.display = "none";
      if (childName === "Dashboard") {
        eachListItem.classList.add("active");
      }
    });
    const childListItems = document.querySelectorAll(".leftbar__ul__list__child");
    childListItems.forEach((eachListItem) => {
       eachListItem.style.display = "none";
    });
  }, []);

  useEffect(()=>{
    const childListItems = document.querySelectorAll("  .leftbar__ul__list__child");
    if (isOpenListingAttribute){
      childListItems.forEach((eachListItem) => {
       eachListItem.style.display = "flex";
      });
    }else{
      childListItems.forEach((eachListItem) => {
        eachListItem.style.display = "none";
     });
    }
  },[isOpenListingAttribute]);

  const makeAciveLink = (sectionName) => {
    const listItems = document.querySelectorAll("li");
    listItems.forEach((eachListItem) => {
      console.log(eachListItem.children[1].innerHTML);
      const childName = eachListItem.children[1].innerHTML;
      eachListItem.classList.remove("active");
      if (childName === sectionName) {
        eachListItem.classList.add("active");
      }
    });
    console.log('activelist==>',listItems);
  };

  const handleOpenCloseSideBar = () => {
    if (isSideBarOpened){
      setIsSideBarOpened(false);
      const listItems = document.querySelectorAll("li");
      listItems.forEach((eachListItem) => {
        eachListItem.children[1].style.display = "none";
      });
      document.querySelector('.leftbar_container').style.width = '60px';
    }else{
      setIsSideBarOpened(true);
      const listItems = document.querySelectorAll("li");
      console.log('arrow state==>',listItems.length)
      listItems.forEach((eachListItem) => {
        eachListItem.children[1].style.display = "flex";
      });
      document.querySelector('.leftbar_container').style.width = '280px';
    }
  };

  const handleOpenSubSections = ()=>{
    setIsOpenListingAttribute(prev=> !prev);
    if (isSideBarOpened){
      const listItems = document.querySelectorAll(".leftbar__ul__list__child");
      console.log(listItems)
      listItems.forEach((eachListItem) => {
        eachListItem.children[1].style.display = "flex";
      });
    }else{
      const listItems = document.querySelectorAll(".leftbar__ul__list__child");
      console.log(listItems)
      listItems.forEach((eachListItem) => {
        eachListItem.children[1].style.display = "none";
      });
    }
  }

  const renderEachSection = (section,liClassName="leftbar_container__ul__list",liIconClassName="leftbar_container__ul__list__icon",liTextClassName="leftbar_container__ul__list__text",blockClassName="block1")=>{
    // console.log(section);
    const name = section.hasOwnProperty("name")? section.name : section.childName;
    console.log(name);
    return (
        <>
        <li className={liClassName} onClick={(e)=>makeAciveLink(name)}>
            <IoHome className={liIconClassName}/>
            <p className={liTextClassName}>{name}</p>
            <b className={blockClassName}></b>
        </li>
      </>
    );
  }

  const mappingArray = (list,type='parent')=>{
    return(
      <ul className="leftbar_container__ul">
      {
        list?.map((eachSection)=>{
          if (eachSection.hasOwnProperty("children")) {
              return(
                <>
                  {/* {renderEachSection(eachSection)} */}
                  <li className="leftbar_container__ul__list" onClick={handleOpenSubSections}>
                    <div className="leftbar_container__ul__list__icon"><IoHome /></div>
                    <p className="leftbar_container__ul__list__text">{eachSection.name}</p>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>       
                    </button>
                  </li>
                  {
                     mappingArray(eachSection.children,'childElements')
                  }
                </>
              )
              {/* return mappingArray(eachSection.children) */}
          }else{
              return type === 'parent' ? renderEachSection(eachSection) : renderEachSection(eachSection,"leftbar_container__ul__list__child","leftbar_container__ul__list__icon__child","leftbar_container__ul__list__text__child","child_block")
          }
        })
      }
    </ul>
    )
  }

    return (
        <div className="leftbar_container">
          {mappingArray(menuList)}
  
          <button  onClick={handleOpenCloseSideBar}>
              {!isSideBarOpened ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 leftbar_container__leftbar__Arrow"
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
                  className="w-6 h-6 leftbar_container__leftbar__Arrow"
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

export default MagicLeftBar;
