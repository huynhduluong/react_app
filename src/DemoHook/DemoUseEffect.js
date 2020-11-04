import React, { useState, useEffect } from "react";

export default function DemoUseEffect(props) {
  let [number, setNumber] = useState(1);

  //cách viết thay thể cho didmount
  useEffect(() => {
    console.log("didmount");
  }, []);

  //cách viết thay thế cho componentDidUpdate
  useEffect(() => {
    console.log("didupdate");
  }, [number]); //number là giá trị nếu thay đổi sau khi render thì useEffect này sẽ chạy


  const handleIncrease = () => {
    let newNumber = number + 1;
    setNumber(newNumber);
  };

  return (
    <div className="m-5">
      <div
        className="card text-left"
        style={{ width: "200px", height: "300px" }}
      >
        <img
          style={{ width: "200px", height: "200px" }}
          className="card-img-top"
          src="https://storage.oxii.vn/Cache/Sites/OXII/Storage/Images/2019/2/26/1920/ke-ni-nang-hotgirl-lanh-lung-khong-bao-gio-nhoen-mieng-cuoi-anh-2_957_651_82.jpg"
          alt="hotgirl"
        />
        <div className="card-body">
          <h4 className="card-title text-danger">
            {number} <i className="fa fa-heart"></i>{" "}
          </h4>
        </div>
      </div>

      <button className="btn btn-success" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
