import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Utils from "../shared/Utils";
import "./App.css";

export default function Calculadora() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldnum] = useState(0);
  const [operator, setOperator] = useState();
  const [parcial, setParcial] = useState("");
  const [erro, setErro] = useState(false);

  function inputNum(e, tipoEvento = "tela") {
    let input = e.target.value;

    if (tipoEvento === "teclado") {
      input = e.key;
    }

    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear(e) {
    setNum(0);
    setOldnum(0);
    setOperator("");
    setParcial("");
    setErro(false);
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

  function operatorHadler(e, tipoEvento = "tela") {
    let operatorInput = e.target.value;

    if (tipoEvento === "teclado") {
      operatorInput = e.key;
    }

    setOperator(operatorInput);
    setOldnum(num);
    setNum(0);
  }

  function Calculadora() {
    setParcial("");
    var res = {};

    switch (operator) {
      case "/":
        res = Utils.divideDoisValores(oldnum, num);
        setNum(res.resultado);
        setParcial(res.operacao);
        if (res.resultado === "Erro") {
          setErro(true);
        }

        break;
      case "X":
      case "*":
        res = Utils.multiplicaDoisValores(oldnum, num);
        setNum(res.resultado);
        setParcial(res.operacao);
        break;
      case "-":
        res = Utils.subtraiDoisValores(oldnum, num);
        setNum(res.resultado);
        setParcial(res.operacao);
        break;
      case "+":
        res = Utils.somaDoisValores(oldnum, num);
        setNum(res.resultado);
        setParcial(res.operacao);
        break;
      default:
        break;
    }
  }

  function handleKeyPress(e) {
    let tecla = e.key;

    switch (tecla) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        inputNum(e, "teclado");
        break;
      case "+":
      case "-":
      case "*":
      case "X":
      case "/":
        operatorHadler(e, "teclado");
        break;
      case "Backspace":
      case "Delete":
      case "Escape":
        clear();
        break;
      case ".":
        inputNum(e, "teclado");
        break;
      case "%":
        porcetage();
        break;
      case "Enter":
        Calculadora();
        break;
      default:
        break;
    }
  }

  React.useEffect(() => {
    window.addEventListener("keyup", handleKeyPress);
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <h3 className={`parcialCss ${erro ? "error" : ""}`}>{parcial}</h3>
          <h1 className={`resultado ${erro ? "error" : ""}`}>
            {num.toString().replace(".", ",")}
          </h1>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcetage}>%</button>
          <button className="orange" onClick={operatorHadler} value="/">
            /
          </button>
          <button className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHadler} value="X">
            X
          </button>
          <button className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHadler} value="-">
            -
          </button>
          <button className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHadler} value="+">
            +
          </button>
          <button className="gray" onClick={inputNum} value={0}>
            0
          </button>
          <button className="gray" onClick={inputNum} value={"."}>
            ,
          </button>
          <button className="gray" style={{ visibility: "hidden" }}>
            ,
          </button>
          <button className="orange" onClick={Calculadora}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
