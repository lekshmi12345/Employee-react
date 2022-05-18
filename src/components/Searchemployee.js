import React, { useState } from 'react'

const Searchemployee = () => {
    var [employeeid,setEmployeeid]=useState("") 
    const subData=()=>{
        const data={"employeeid":employeeid}
         console.log(data);
    }
  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                    <label for="" class="form label">Employee ID</label>
                    <input onChange={(e)=>{setEmployeeid(e.target.value)}} type="email" name="" id="" class="form-control"/>

                </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                    <button onClick={subData} class="btn btn-success">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchemployee