import React from "react";

export type CounterType = {
    data: number
    IncNum: (data: number) => void
    ResetNum: (data: number) => void
}
export const Counter = (props: CounterType) => {
    const isIncBtnDis = props.data === 5
    const isResBtnDis = props.data === 0
    return (
        <div className={"container"}>
            <div className={props.data !== 5 ? "counter" : "redStyle"}>{props.data}</div>
            <div className={"buttons"}>
                <button
                    className={`inc ${isIncBtnDis && "disClass"}` }
                    onClick={d => props.IncNum(props.data)}
                    disabled={isIncBtnDis}>inc
                </button>
                <button
                    className={`reset ${isResBtnDis && "disClass"}`}
                    onClick={d => props.ResetNum(props.data)}
                    disabled={isResBtnDis}
                >reset

                </button>
            </div>
        </div>
    )
}