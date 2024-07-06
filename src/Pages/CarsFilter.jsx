import React from 'react'
import Cars from '../Components/CarsPageComponents/Cars'
import SideBarFilter from '../Components/CarsPageComponents/SideBarFilter'

const CarsFilter = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"start", marginTop:"20px"}}>
        <Cars />
        <SideBarFilter />
    </div>
  )
}

export default CarsFilter