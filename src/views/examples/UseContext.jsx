import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'

const UseContext = props => {

    const context = useContext(DataContext)

    function addNumber(delta) {
        context.setState({
           ...context.state,
           number: context.state.number + delta
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Accepts a context object and returns the current value of the context!"
            />

            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>

                <div>
                    <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => addNumber(+1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
