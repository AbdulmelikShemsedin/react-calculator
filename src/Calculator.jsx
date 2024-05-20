import { useState } from 'react'
import './Calculator.scss'

const Calculator = () => {
    const [inputNum, setInputNum] = useState('')
    const [result, setResult] = useState(0)

    const removeLeadingZeros = (num) => {
        if (num.includes('.')) {
            num = num.replace(/^0+(?=\d)/, '');
        } else {
            num = num.replace(/^0+(?!$)/, '');
        }
        return num;
    };

    const handleInputChange = (num) => {
        setInputNum((c) => c + num)
    }

    const handleOperatorChange = (op) => {
        setResult(eval(removeLeadingZeros(inputNum)))
    }

    const calculateResult = () => {
        setResult(eval(removeLeadingZeros(inputNum)).toFixed(2).length <= 8 
            ? String((eval(removeLeadingZeros(inputNum)))).includes('.') ?
                eval(removeLeadingZeros(inputNum)).toFixed(2)
                : eval(removeLeadingZeros(inputNum))
            : 'to long')
    }

    const handleClear = () => {
        setInputNum('')
        setResult(0)
    }

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
                            <button id="clear" onClick={() => handleClear()}>AC</button>
                            <button id="change-sign">+/-</button>
                            <button id="percentage">%</button>    
                        </div>    
                        <div className="numbers">
                            <button id="seven" className="number" onClick={() => handleInputChange('7')}>7</button>
                            <button id="eight" className="number" onClick={() => handleInputChange('8')}>8</button>
                            <button id="nine" className="number" onClick={() => handleInputChange('9')}>9</button>
                            <button id="four" className="number" onClick={() => handleInputChange('4')}>4</button>
                            <button id="five" className="number" onClick={() => handleInputChange('5')}>5</button>
                            <button id="six" className="number" onClick={() => handleInputChange('6')}>6</button>
                            <button id="one" className="number" onClick={() => handleInputChange('1')}>1</button>
                            <button id="two" className="number" onClick={() => handleInputChange('2')}>2</button>
                            <button id="three" className="number" onClick={() => handleInputChange('3')}>3</button>
                        </div>
                        <div className="zero&point">
                            <button id="zero" className="number" onClick={()=> handleInputChange('0')}>0</button>
                            <button id="decimal" className="point" onClick={() => handleInputChange('.')}>.</button>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3">
                    <div className="operators">
                        <button id="divide" className="operator" onClick={() => {handleOperatorChange('/'), handleInputChange('/')}}>/</button>
                        <button id="multiply" className="operator" onClick={() => {handleOperatorChange('*'), handleInputChange('*')}}>x</button>
                        <button id="subtract" className="operator" onClick={() => {handleOperatorChange('-'), handleInputChange('-')}}>-</button>
                        <button id="add" className="operator" onClick={() => {handleOperatorChange('+'), handleInputChange('+')}}>+</button>
                        <button id="equals" onClick={() => calculateResult()}>=</button>
                    </div>
                </div>
            </div>
            <div className='logo'><p>by Abdulmelik</p><img src='Abdulmelik-Logo.jpg' width="100px" /></div>
        </div>
    )
}

export default Calculator