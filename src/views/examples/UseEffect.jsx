import React, { useState } from "react";
import { useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

// Exercise #01

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );


  //Exercise #02

  const [status, setStatus] = useState("odd number")

  useEffect(function(){
    setStatus(number % 2 === 0 ? "even number" : "odd number")
  }, [number])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Allow you run side effects on functional components."
      />
      
      <SectionTitle title="Exercise #01"/>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "does not exist" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercise #02"/>
      <div className="center">
        <div>
          <span className="text red">Status: </span>
          <span className="text black">{status}</span>
        </div> 
      </div>
    </div>
  );
};

export default UseEffect;
