export default function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
  
    if (cpf.length !== 11) {
      return false;
    }
  
    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);
  
    var soma = 0;
    for (var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }
  
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  
    if (resultado.toString() !== digitos.charAt(0)) {
      return false;
    }
  
    soma = 0;
    numeros = cpf.substring(0, 10);
  
    for (var j = 11; j > 1; j--) {
      soma += numeros.charAt(11 - j) * j;
    }
  
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  
    if (resultado.toString() !== digitos.charAt(1)) {
      return false;
    }
  
    return true;
  }
  