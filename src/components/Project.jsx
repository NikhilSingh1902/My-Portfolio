import React from "react";
import project from "./data/project.json";
const Project = () => {
  return (
    <>
      <div className="container projects my-3">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <>
              <div key={data.id} className="my-4 col-md-5 col-lg-4 col-sm-4 mx-4">
                <div
                  className="card bg-dark text-light"
                  style={{ width: "18rem", border:'1px solid yellow'
                    ,boxShadow:"5px 5px 10px 10px rgba(101, 175, 10, 0.5)"
                   }}
                >
                    <div>
                        <div className="img d-flex justify-content-center align-content-center p-3 ">
                        <img
                    src={`/assets/${data.imageSrc}`}
                    className="card-img-top"
                    alt="..."
                    style={{
                        width:'250px',
                        height:'200px',
                        border:'2px solid yellow',
                        
                    }}
                  />
                        </div>
                    </div>
                 
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">
                      {data.description}
                      
                    </p>
                    <a href={data.source} className="btn btn-primary">
                      Github 
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
