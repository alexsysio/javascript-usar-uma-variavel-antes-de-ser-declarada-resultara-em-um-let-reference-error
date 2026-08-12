try {
  carName = 'Saab';
  let carName = 'Volvo';
} catch (err) {
  document.getElementById('demo').innerHTML = err;
}
// ReferenceError: Não é possível acessar 'carName' antes da inicialização
