import React, { useState } from "react";
import './leftBar.css'
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
    },
  ]);
  
  return (
    <div>
        <ul className="bg-gray-200 box-content w-[300px] mt-0 h-screen py-5 relative">
            {
                menuList.map(eachSection =>{
                    return(
                        <li className="flex items-center py-2 px-6 my-3 relative">
                            <span className="w-[20px] text-[20px] mx-3 z-10"><IoHome/></span>
                            <span className="w-[200px]">{eachSection.name}</span>
                        </li>
                    )
                })
            }
            <div className="indicator"></div>
        </ul>
    </div>
  );
};

export default React.memo(Leftbar);
