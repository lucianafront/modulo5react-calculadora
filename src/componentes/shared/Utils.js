class Utils {
  static formatarOperacao(v1, v2, operador) {
    return v1 + " " + operador + " " + v2 + " = ";
  }

  static somaDoisValores(v1, v2) {
    var v = (parseFloat(v1) + parseFloat(v2))
      .toFixed(2)
      .toString()
      .replace(".", ",");
    var r = this.formatarOperacao(v1, v2, "+") + v;

    return { resultado: v, operacao: r };
  }

  static subtraiDoisValores(v1, v2) {
    var v = (parseFloat(v1) - parseFloat(v2))
      .toFixed(2)
      .toString()
      .replace(".", ",");
    var r = this.formatarOperacao(v1, v2, "-") + v;
    return { resultado: v, operacao: r };
  }

  static multiplicaDoisValores(v1, v2) {
    var v = (parseFloat(v1) * parseFloat(v2))
      .toFixed(2)
      .toString()
      .replace(".", ",");
    var r = this.formatarOperacao(v1, v2, "X") + v;
    return { resultado: v, operacao: r };
  }

  static divideDoisValores(v1, v2) {
    if (v2 === "0") {
      return { resultado: "Erro", operacao: "Divisão por zero" };
    }

    var v = (parseFloat(v1) / parseFloat(v2))
      .toFixed(2)
      .toString()
      .replace(".", ",");
    var r = this.formatarOperacao(v1, v2, "/") + v;

    return { resultado: v, operacao: r };
  }
}

export default Utils;
