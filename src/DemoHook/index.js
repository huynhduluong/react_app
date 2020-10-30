import React, { useState, useEffect, useCallback } from "react";
import DemoHookChildren from "./child";

const DemoHook = () => {
  const [count, setCount] = useState(0); //Dùng state
  const [isAgree, setIsAgree] = useState(false);

  //đại diện cho 3 lifecycle: didmount, didupdate, willunmount
  //useEffect thay cho didmount
  useEffect(() => {
    console.log("useEffect just run only the first time");
  }, []);

  //useeffect thay cho didupdate
  useEffect(() => {
    console.log("useEffect run");
  });

  //useEffect thay cho didmount
  useEffect(() => {
    console.log("useEffect just run when isAgree change");
  }, [isAgree]);

  const agreeToChangeCount = () => {
    setIsAgree(true);
  };

  const increaseCount = () => {
    if (isAgree) {
      setCount(count + 1);
    }
  };

  //hàm increaseCountCallback là bản sao của hàm increaseCount, [] chỉ cho chạy 1 lần, [num1,num2] truyền vào các tham số để khi tham số thay đổi thì useCallback sao lại lần nữa
  
  const increaseCountCallback = useCallback(() => {
    increaseCount();
  }, []);

  return (
    <div>
      <h1>Demo hook</h1>
      <button className="btn btn-success" onClick={increaseCount}>
        Increment
      </button>
      <button className="btn btn-success" onClick={agreeToChangeCount}>
        Change Agree
      </button>
      <h1 className="display-4">Count: {count}</h1>
      <DemoHookChildren count={count} increaseCount={increaseCountCallback} />
    </div>
  );
};

export default DemoHook;
