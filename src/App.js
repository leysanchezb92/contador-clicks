import { ButtonClick } from "./components/Button"
import { Counter } from "./components/Counter"
import "./styles/Button.css"
import { useState } from "react"

export default function App(){
    const [clicksCount, setClicksCount] = useState(0)
    const handleRestart = () => {
        setClicksCount(0);
    }
    const handleClick= () =>{
        setClicksCount(clicksCount+1);
    }
    return(
        <div className="App">
            <div className="title">
                title
            </div>
            <div className="main-container">
                <Counter
                    numClicks = {clicksCount}
                >
                </Counter>
                <ButtonClick
                    text= "Click"
                    isClickButton={true}
                    handleClick={handleClick}
                />
                <ButtonClick
                    text= "reiniciar"
                    isClickButton={false}
                    handleClick={handleRestart}
                />
            </div>

        </div>
    )
}
