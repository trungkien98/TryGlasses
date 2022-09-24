import React, { Component }  from 'react'
import dataGlass from './dataGlasses.json'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Glasses extends Component {
  state={
   glassDetail:{  
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "}
    
  }
  render() {
    let{glassDetail} = this.state
    return (
   
      <div className='app container' style={{backgroundImg:glassesImage}}>
       <style>
      
       </style>
        <div className='d-flex justify-content-center'>
          <h3>TRY GLASSES APP ONLINE</h3>
        </div>
        <div className='row my-5 '>
          <div className='col-6 position-relative'>
            <img src="./glassesImage/model.jpg" className='img-fluid ' alt="" />
            <img src={glassDetail.url} className="img-absolute" alt="" />
            <div className='desc'>
              <h4>{glassDetail.name}</h4>
              <p>{glassDetail.desc}</p>
            </div>
          </div>
          <div className='col-6 position-relative'>
            <img src="./glassesImage/model.jpg" className='img-fluid ' alt="" />
            <img src={glassDetail.url} className="img-absolute" alt="" />
          </div>
        </div>
        <div className='row'>
       {
        dataGlass.map(item=>{
          return <div className='col-2'>
            
              <img onClick={()=>{this.setState({glassDetail:item})}} src={item.url} alt="" className='img-fluid w-75'/>
          </div>
        })
       } 
       </div>
      </div>
    )
  }
}
