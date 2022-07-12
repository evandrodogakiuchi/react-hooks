import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useCallback, useState } from "react";
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  const inc = useCallback(
    function (delta) {
      setCount(curr => curr + delta);
    },
    [count]
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Returns a memoized function!"
      />

      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
