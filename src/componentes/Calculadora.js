import React, {useState} from 'react';

import './Calculadora.css';
import Container from '@mui/material/Container';
import {Box} from "@mui/system";


export default function Calculadora() {
    const [num, setNum] = useState(0);
    const [oldnum, oldNum] = useState(0);
    const [operator, setOperator] = useState();
    const [parcial, setParcial] = useState('');


    React.useEffect(() => {
        window.addEventListener("keyup", handleKeyPress);
        return () => {
            window.removeEventListener("keyup", handleKeyPress);
        };
    }, [handleKeyPress]); 

    function inputNum(e, tipoEvento = 'tela') {
        let input = e.target.value

        if(tipoEvento === 'teclado'){
            input = e.key
        }

        if (num === 0) {
            setNum(input);
        } else {
            setNum(num + input);
        }
    }

    function clear(e) {
        setNum(0)
        oldNum(0)
        setOperator('')
        setParcial('')
    }

    function porcetage() {
        setNum(num / 100);
    }

    function changeSign() {
        if (num > 0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    }

    function operatorHadler(e, tipoEvento = 'tela') {

        let operatorInput = e.target.value;

        if(tipoEvento === 'teclado'){
            operatorInput = e.key;
        }

        setOperator(operatorInput)
        oldNum(num)
        setNum(0);
    }

    function Calculadora() {
        setParcial('');


        switch (operator) {
            case "/":
                setNum( parseFloat (oldnum / num).toFixed(3))    ;
                setParcial(oldnum + ' / ' + num + " = " + (oldnum / num).toFixed(3).toString().replace('.', ','));
                break;
            case "X":
            case "*":
                setNum(oldnum * num);
                setParcial(oldnum + ' * ' + num + " = " + ( oldnum * num).toFixed(3) .toString().replace('.', ','));
                break;
            case "-":
                setNum(oldnum - num);
                setParcial(oldnum + ' - ' + num + " = " + (parseFloat(oldnum) - parseFloat(num)).toFixed(3) .toString().replace('.', ','));
                break;
            case "+":
                setNum(parseFloat(oldnum) + parseFloat(num));
                setParcial(oldnum + ' + ' + num + " = " + (parseFloat(oldnum) + parseFloat(num)).toFixed(3) .toString().replace('.', ','));
                //foi usado esse codigo(parseFloat) porque o java script não entende como soma dando erro no resutado
                break;
            default:
                break;
        }


    }

    function handleKeyPress(e) {


        let tecla = e.key;
        let numeros = ['0','1','2','3','4','5','6','7','8','9'];
        let operadores = ['+','-','*', 'X', '/'];
        let limpar = ['Backspace','Delete','Escape'];



        if(numeros.includes(tecla)){
            inputNum(e, 'teclado');
        }
        if(operadores.includes(tecla)){
            operatorHadler(e, 'teclado');
        }
        if(limpar.includes(tecla)){
            console.log('limpando', tecla);
            clear();
        }
        if (tecla === "Enter") {
            Calculadora();
        }
    }

    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="wrapper" >
                    <h3 className='parcialCss'>{parcial}</h3>
                    <h1 className='resultado'>{num.toString().replace('.', ',')}</h1>
                    <button  onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={porcetage}>%</button>
                    <button className="orange" onClick={operatorHadler} value="/">/</button>
                    <button className="gray" onClick={inputNum} value={7}>7</button>
                    <button className="gray" onClick={inputNum} value={8}>8</button>
                    <button className="gray" onClick={inputNum} value={9}>9</button>
                    <button className="orange" onClick={operatorHadler} value="X">X</button>
                    <button className="gray" onClick={inputNum} value={4}>4</button>
                    <button className="gray" onClick={inputNum} value={5}>5</button>
                    <button className="gray" onClick={inputNum} value={6}>6</button>
                    <button className="orange" onClick={operatorHadler} value="-">-</button>
                    <button className="gray" onClick={inputNum} value={1}>1</button>
                    <button className="gray" onClick={inputNum} value={2}>2</button>
                    <button className="gray" onClick={inputNum} value={3}>3</button>
                    <button className="orange" onClick={operatorHadler} value="+">+</button>
                    <button className="gray" onClick={inputNum} value={0}>0</button>
                    <button className="gray" onClick={inputNum} value={"."}>,</button>
                    <button className="gray" style={{visibility: "hidden"}}>,</button>
                    <button className="orange" onClick={Calculadora}>=</button>
                </div>
            </Container>
        </div>

    );
}
