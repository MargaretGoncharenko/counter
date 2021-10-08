import React, {useState} from 'react';
import "./App.css";
import {Counter} from "./Counter";

export const App = () => {
    let [data, setData] = useState(0)
    const IncNum = (data: number) => {
        if (data < 5) {
            return setData(data + 1)
        } else if (data === 5) {
            return setData(data)
        } else {
            return
        }
    }
    const ResetNum = (data: number) => {
        setData(0)
    }

    return (
        <Counter
            data={data}
            IncNum={IncNum}
            ResetNum={ResetNum}
        />
    )
}




