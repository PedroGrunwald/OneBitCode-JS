let velocidade = 80;

while (velocidade > 0) {
  alert("o carro está a" + velocidade + "km/h");
  velocidade -= 20;
  alert("diminuindo 20km/h");
  if (velocidade === 40) {
    break;
  }
}

alert("o carro parou");
