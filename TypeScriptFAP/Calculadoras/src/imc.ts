interface ImcData {
    peso: number;
    altura: number;
  }
  
  function calcularImc(data: ImcData): number {
    if (data.altura <= 0) {
      throw new Error("Altura precisa ser maior que zero.");
    }
    return data.peso / Math.pow(data.altura, 2);
  }
  
  function obterResultadoImc(imc: number): string {
    const resultado = document.querySelector('.resultado') as HTMLDivElement;
    if (!resultado) {
      throw new Error("Elemento 'resultado' não encontrado no HTML.");
    }
  
    let interpretacao: string;
    if (imc < 18.5) interpretacao = "Abaixo do peso";
    else if (imc < 25) interpretacao = "Peso normal";
    else if (imc < 30) interpretacao = "Sobrepeso";
    else if   
   (imc < 35) interpretacao = "Obesidade Grau I";
    else if (imc < 40) interpretacao = "Obesidade Grau II";
    else interpretacao = "Obesidade Grau III";
  
    resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} - ${interpretacao}`;
    return interpretacao;
  }
  
  const pesoInput = document.getElementById('peso') as HTMLInputElement;
  const alturaInput = document.getElementById('altura') as HTMLInputElement;
  const calcularButton = document.querySelector('.calImc') as HTMLButtonElement;
  
  calcularButton.addEventListener('click', () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);
  
    if (isNaN(peso) || isNaN(altura))   
   {
      alert('Preencha corretamente os campos Peso e Altura.');
      return;
    }
  
    try {
      const imc = calcularImc({ peso, altura });
      obterResultadoImc(imc);
    } catch (error) {
      alert("ERRO");
    }
  });