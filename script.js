document.getElementById('calcForm').addEventListener('submit', function(evento) {
  evento.preventDefault(); // Evita o envio do formulário

  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operador = document.getElementById('operador').value;
  let resultado;

  console.log(`${num1} ${operador} ${num2}`);

  if (isNaN(num1) || isNaN(num2)) {
    resultado = 'Por favor, digite um número válido.';
  } else {
    switch (operador) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        resultado = num2 !== 0 ? num1 / num2 : 'Não é possível dividir por zero.';
        break;
      default:
        resultado = 'Operador inválido.';
    }
  }

  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});