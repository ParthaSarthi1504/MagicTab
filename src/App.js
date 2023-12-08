import { Route, Routes } from 'react-router-dom';
import './App.css';
// import SmallTab from './components/smallTab/index.js';
// import LeftBar from './components/leftBar/leftBar';
// import MagicLeftBar from './components/magicLeftBar.js/magicLeftBar';
// import Tab from './components/tab/index.js';
import TailwindLeftBar from './components/tailwindLeftBar.js';

function App() {
  return (
    <div className='h-screen'>
      {/* <MagicLeftBar/> */}
      {/* <Step1 /> */}
      {/* <LeftBar/> */}
      <TailwindLeftBar/>
      {/* <Tab/> */}
      {/* <SmallTab/> */}
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route
            path="/listing-attributes/categories"
            element={<Categories />}
          />
          <Route path="/listing-attributes/regions" element={<Regions />} />
          <Route path="/listing-attributes/continent" element={<Continent />} />
          <Route path="/listing-attributes/country" element={<Country />} />
          <Route path="/listing-attributes/tax" element={<Tax />} />
          <Route path="/listing-attributes/addons" element={<Addons />} />
          <Route
            path="/listing-attributes/activities-attractions"
            element={<ActivitiesAndAttractions />}
          />
          <Route path="/listing-attributes/destination" element={<Addons />} />
          <Route path="/listing-attributes/listing-type" element={<Types />} />
          <Route path="/listing-attributes/geotag" element={<Geotags />} />
          <Route
            path="/listing-attributes/facilities"
            element={<Facilities />}
          />
          <Route
            path="/listing-attributes/facilities"
            element={<Facilities />}
          />
          <Route
            path="/listing-attributes/houserules"
            element={<HouseRules />}
          />
          <Route path="/listing-attributes/offers" element={<Offers />} />
          <Route
            path="/listing-attributes/property-type"
            element={<PropertyType />}
          />
           <Route
            path="/listing-attributes/deletepopup"
            element={<DeletePopUp/>}
          />
           <Route
            path="/affiliate-earnings"
            element={<AffiliateEarnings/>}
          />
        </Routes> */}
    </div>
  );
}

export default App;
