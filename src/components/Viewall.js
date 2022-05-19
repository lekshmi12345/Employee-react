import React from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    var post=[
        {
          "id": 1,
          "name": "vasu",
          "salary": "12000",
          "designation": "HR"
        },
        {
            "id": 2,
          "name": "anil",
          "salary": "150000",
          "designation": "manager"
          },
          {
            "id": 3,
          "name": "abu",
          "salary": "12000",
          "designation": "HR"
          },
          {
            "id": 4,
          "name": "shaji",
          "salary": "120000",
          "designation": "PA"
          },
          {
            "id": 5,
          "name":"sukumaran",
          "salary": "1200000",
          "designation": "Manager"
          }
    ]
  return (
    <div>
        <Navbar/><br></br>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
       <table class="table table-success table-striped">
  <thead>
    <tr>
      
      <th scope="col">Empid</th>
      <th scope="col">Empname</th>
      <th scope="col">Salary</th>
      
      <th scope="col">Designation</th>
    </tr>
  </thead>
  <tbody>
                
                    {post.map((value,key)=>{
return <tr>
      
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.salary}</td>
      <td>{value.designation}</td>
    </tr>
    
  

                    })}
               
  </tbody>
</table>
            </div>
        </div>
    </div>
        </div>
  )
}

export default Viewall