import { useState } from 'react'
import './Calculator.scss'

const Calculator = () => {
    const [inputNum, setInputNum] = useState(0)
    const [result, setResult] = useState(0)

    return(
        <div className="container">
            <div className="operationDisplay" id="display">
                <p>{inputNum}</p>
                <p>{result}</p>
            </div>
            <div className="row buttons">
                <div className="col-xs-9">
                    <div>
                        <div className="expertise">
                            <button id="clear">AC</button>
                            <button id="change-sign">+/-</button>
                            <button id="percentage">%</button>    
                        </div>    
                        <div className="numbers">
                            <button id="seven" className="number">7</button>
                            <button id="eight" className="number">8</button>
                            <button id="nine" className="number">9</button>
                            <button id="four" className="number">4</button>
                            <button id="five" className="number">5</button>
                            <button id="six" className="number">6</button>
                            <button id="one" className="number">1</button>
                            <button id="two" className="number">2</button>
                            <button id="three" className="number">3</button>
                        </div>
                        <div className="zero&point">
                            <button id="zero" className="number">0</button>
                            <button id="decimal" className="point">.</button>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3">
                    <div className="operators">
                        <button id="divide" className="operator">\</button>
                        <button id="multiply" className="operator">x</button>
                        <button id="subtract" className="operator">-</button>
                        <button id="add" className="operator">+</button>
                        <button id="equals">=</button>
                    </div>
                </div>
            </div>
            <div className='logo'><p>by Abdulmelik</p><img src='Abdulmelik-Logo.jpg' width="100px" /></div>
        </div>
    )
}

export default Calculator