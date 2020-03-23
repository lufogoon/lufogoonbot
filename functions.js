module.exports = {
    calculator: function (num1, operator, num2) {
        if (!num1) throw new TypeError("[ERROR] Il manque le numero 1")
        if (!operator) throw new TypeError("[ERROR] Il manque le signe operateur")
        if (!num2) throw new TypeError("[ERROR] Il manque le numero 2")
        if (operator == "*") return num1 * num2
        if (operator == "^") return num1 ^ num2
        if (operator == "+") return num1 + num2
        if (operator == "-") return num1 - num2
        if (operator == "/") return num1 / num2

    }
}