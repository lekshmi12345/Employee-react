import React, { useState } from 'react'

const Addemployee = () => {
    var [employeeid,setEmployeeid]=useState("")
    var [employeename,setEmployeename]=useState("")
    var [designation,setDesignation]=useState("")
    var [salary,setSalary]=useState("")
    var [company,setCompany]=useState("")
    var [dob,setDob]=useState("")
    var [email,setEmail]=useState("")
    const subData=()=>{
        const data={"employeeid":employeeid,"employeename":employeename,"designation":designation,"salary":salary,
        "company":company,"dob":dob,"email":email}
         console.log(data);
        
    } 
  return (
    <div>
        
    

        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Employee ID</label>
                    <input onChange={(e)=>{setEmployeeid(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Employee Name</label>
                    <input onChange={(e)=>{setEmployeename(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Designation</label>
                    <input onChange={(e)=>{setDesignation(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Salary</label>
                    <input onChange={(e)=>{setSalary(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Company Name</label>
                    <input onChange={(e)=>{setCompany(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">DOB</label>
                    <input onChange={(e)=>{setDob(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Email</label>
                  <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="" id="" class="form-control"></input>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-danger">CLEAR</button>
                    
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} className="btn btn-success">REGISTER</button>
                </div>

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addemployee