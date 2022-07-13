import React, { useCounter } from '../../hooks/useCounter'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter()

    return (
        <div className="UseCustom">
            <PageTitle
                title="Your Hook"
                subtitle="How to create our own Hook!"
            />
            <SectionTitle title="Exercise #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => dec()}>-1</button>
                    <button className="btn" onClick={() => inc()}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseRef
