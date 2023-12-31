import React, { useEffect, useState } from "react";
import "./leftBar.css";
// import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ChannelsIcon,
  //   ChevronDownIcon,
  //   ChevronRightIcon,
} from "../../icons/";
// import { useLocation } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const Leftbar = (props) => {
  //   const location = useLocation()
  const { displaySideText, setDisplaySideText } = props;
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
    const childListItems = document.querySelectorAll(".leftbar__ul__list__child");
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

  const handleOpenCloseSideBar = () => {
    if (isSideBarOpened){
      setIsSideBarOpened(false);
      const listItems = document.querySelectorAll("li");
      listItems.forEach((eachListItem) => {
        eachListItem.children[1].style.display = "none";
      });
    }else{
      setIsSideBarOpened(true);
      const listItems = document.querySelectorAll("li");
      console.log('arrow state==>',listItems.length)
      listItems.forEach((eachListItem) => {
        eachListItem.children[1].style.display = "flex";
      });
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

  const renderEachSection = (section,liClassName="leftbar__ul__list",liIconClassName="leftbar__ul__list__icon",liTextClassName="leftbar__ul__list__text")=>{
    // console.log(section);
    const name = section.hasOwnProperty("name")? section.name : section.childName;
    console.log(name);
    return (
      <li className={liClassName} onClick={(e)=>makeAciveLink(name)}>
        <IoHome className={liIconClassName}/>
        <p className={liTextClassName}>{name}</p>
      </li>
    );
  }

  // renderEachSection({name: 'sarathi'})

  const mappingArray = (list,type='parent')=>{
    return(
      <>
      {
        list?.map((eachSection)=>{
          if (eachSection.hasOwnProperty("children")) {
              return(
                <>
                  {/* {renderEachSection(eachSection)} */}
                  <li className="leftbar__ul__list" onClick={handleOpenSubSections}>
                    <IoHome className="leftbar__ul__list__icon"/>
                    <p className="leftbar__ul__list__text">{eachSection.name}</p>
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
              return type === 'parent' ? renderEachSection(eachSection) : renderEachSection(eachSection,"leftbar__ul__list__child","leftbar__ul__list__icon__child","leftbar__ul__list__text__child")
          }
        })
      }
    </>
    )
  }

  return (
    <div className="leftbar">
      <ul className="leftbar__ul">
        {mappingArray(menuList)}

        {/* <========== Indicator container ============> */}
        <div className="lefbar__indicator">
          <div className="lefbar__indicator__roll"></div>
        </div>

        <button className="leftbar__Arrow" onClick={handleOpenCloseSideBar}>
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
      </ul>
    </div>
  );
};

export default React.memo(Leftbar);
