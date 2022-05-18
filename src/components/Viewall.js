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
            <div className="row g-3">
                
                    {post.map((value,key)=>{
return <div className='col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3'>
    <ul class="list-group list-group-vertical">
        <center>
  <li class="list-group-item-primary">id:{value.id}</li>
  <li class="list-group-item-secondary">name:{value.name}</li>
  <li class="list-group-item-success">salary:{value.salary}</li>
  <li class="list-group-item-danger">designation:{value.designation}</li>
  </center>
</ul>


</div>
                    })}
                </div>
            </div>
        </div>
    </div>
        </div>
  )
}

export default Viewall