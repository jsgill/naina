import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Services = () => {
  return (
    //class name de rkha hai
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                // javascript ka code  img and title ke liye
                Sdata.map((val, ind) => {
                  return (
                    <Card key={ind} imgsrc={val.title} title={val.title} />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
