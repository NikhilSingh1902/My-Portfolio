import React from 'react'
import experience from './data/experience.json'

const Experience = () => {
  return (
    <>
    <div className="container ex">
        <h1>
            EXPERIENCE
        </h1>
    
    {
       experience.map((data)=>{
        return(
            <>
            <div key={data.id} className='ex-items text-center my-5'>
             <div className="left">
                <img src={`/assets/${data.imageSrc}`} alt="" />
             </div>
             <div className="right">
                <h2>{data.role}</h2>
                <h4><span style={{Color:"yellowgreen"}}>{data.startDate}{" to "}{data.endDate}</span>
                {"  "}{data.location}{"  "}{data.Mode}</h4>
                <h6>{data.experiences}</h6>
             </div>
            </div>
            </>
        )
       })
    }
    </div>
    </>
  )
}

export default Experience
