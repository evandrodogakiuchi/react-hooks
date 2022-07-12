import React, { useContext, AppContext } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";

const UseContext = (props) => {
  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta,
    });
  }

  const { number, text, setNumber } = useContext(AppContext);


  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Accepts a context object and returns the current value of the context!"
      />
      <SectionTitle title="Exercise #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>

        <div>
          <button className="btn" onClick={() => addNumber(-1)}>
            -1
          </button>
          <button className="btn" onClick={() => addNumber(+1)}>
            +1
          </button>
        </div>
        <SectionTitle title="Exercise #02" />
        <div className="center">
          <span className="text">{text}</span>  
          <span className="text">{number}</span>
          <div>
            <button className="btn" onClick={() => setNumber(number - 1)}>
              -1
            </button>
            <button className="btn" onClick={() => setNumber(number + 1)}>
              +1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
