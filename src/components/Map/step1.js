import React from 'react'
import { currencyData } from './common'
import Map from './map'
import { INPUT_STYLE } from './InputStyle'

function Step1({handleInput, payload}) {
  return (
    <div>
        <center className='text-red-500 font-bold text-lg'>Create Listing</center>
        <div className='flex flex-col mt-2'>
            <label className='text-slate-500'>Permalink</label>
            <input value={payload?.permalink} onChange={(e) => handleInput(e, 'permalink')} className={`${INPUT_STYLE}`}/>
        </div>

        <div className='flex flex-col mt-2'>
            <label className='text-slate-500'>Title</label>
            <input value={payload?.title} onChange={(e) => handleInput(e, 'title')} className={`${INPUT_STYLE} mt-2`}/>
        </div>

        <div className='flex flex-col mt-2'>
            <label className='text-slate-500'>Description</label>
            <textarea value={payload?.description} onChange={(e) => handleInput(e, 'description')} className={`${INPUT_STYLE} h-[100px]`}/>
        </div>

        <div className='flex justify-between items-start '>
          <div className='w-1/2'>
            <div className='flex flex-col mt-2'>
               <label className='text-slate-500'>Country</label>
               <input onChange={(e) => handleInput(e, 'country')} className={`${INPUT_STYLE} w-[50%]`}/>
            </div>

            <div className='flex flex-col mt-2'>
              <label className='text-slate-500'>Region</label>
               <input onChange={(e) => handleInput(e, 'region')} className={`${INPUT_STYLE} w-[50%]`}/>
            </div>

            <div className='flex flex-col mt-2'>
               <label className='text-slate-500'>Destination</label>
               <input onChange={(e) => handleInput(e, 'destination')} className={`${INPUT_STYLE} w-[50%]`}/>
            </div>

            <div className='flex flex-col mt-2'>
             <label className='text-slate-500'>House</label>
             <input onChange={(e) => handleInput(e, 'house')} className={`${INPUT_STYLE} w-[50%]`}/>
            </div>

            <div className='flex flex-col mt-2'>
             <label className='text-slate-500'>Area</label>
             <input onChange={(e) => handleInput(e, 'area')} className={`${INPUT_STYLE} w-[50%]`}/>
            </div>

            <div className='flex flex-col mt-2'>
             <label className='text-slate-500'>Street</label>
             <input onChange={(e) => handleInput(e, 'street')} className={`${INPUT_STYLE} w-[50%]`}/>
            </div>

            <div className='flex flex-col mt-2'>
             <label className='text-slate-500'>Landmark</label>
             <input onChange={(e) => handleInput(e, 'landmark')} className={`${INPUT_STYLE} w-[50%]`}/>
            </div>

            <div className='flex flex-col mt-2'>
             <label className='text-slate-500'>City</label>
             <input onChange={(e) => handleInput(e, 'city')} className={`${INPUT_STYLE} w-[50%]`}/>
            </div>

            <div className='flex flex-col mt-2'>
             <label className='text-slate-500'>Pin</label>
             <input onChange={(e) => handleInput(e, 'pin')} className={`${INPUT_STYLE} w-[50%]`}/>
            </div>

            <div className='flex flex-col mt-2'>
              <label className='text-slate-500'>Latitude</label>
              <input onChange={(e) => handleInput(e, 'location_latitude')} className={`${INPUT_STYLE} w-[50%]`}/>
            </div>

            <div className='flex flex-col mt-2'>
              <label className='text-slate-500'>Longitude</label>
              <input onChange={(e) => handleInput(e, 'location_longitude')} className={`${INPUT_STYLE} w-[50%]`}/>
            </div>

            <div className='flex flex-col mt-2'>
          <label className='text-slate-500'>Currency</label>
          <select onChange={(e) => handleInput(e, 'currency')} className={`${INPUT_STYLE} w-[50%]`}>
            <option value="">Choose Currency</option>
            {Object.keys(currencyData).map((currency, index) => (
                <option value={currency}>{currencyData[currency]?.symbol} - {currency}</option>
            ))}
          </select>
            </div>
          </div>

         {/* Map */}
          <div>
             <Map />
          </div>

        </div>
    </div>
  )
}

export default Step1