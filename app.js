const alfabetoMorse = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 
  'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 
  'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 
  'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....', '6': '-....', 
  '7': '--...', '8': '---..', '9': '----.', '0': '-----'
}

const btnTraducir = document.getElementById('traducir');
btnTraducir.addEventListener('click', () => {
  let input = document.getElementById('input1').value;
  let output = convertir(input);
  document.getElementById('input2').value = output;

});

function textoToMorse(texto){
  texto = texto.toUpperCase()
  const palabrasTexto = texto.split(' ');
  let morse = '';
  for(const palabraTexto of palabrasTexto){
    const caracteresTexto = palabraTexto.split('');
    for(const caracterTexto of caracteresTexto) {
      if (alfabetoMorse[caracterTexto])
        morse += alfabetoMorse[caracterTexto] + ' ';
    }
    morse += '  ';
  }
  return morse.trim();
}

function morseToTexto(codigoMorse) {
  const morseToCaracter = Object.fromEntries(Object.entries(alfabetoMorse).map(([char, morse]) => [morse, char]));
  const palabrasMorse = codigoMorse.split('  ');
  let texto = '';
  for (const palabraMorse of palabrasMorse){
    const caracteresMorse = palabraMorse.split(' ');
    for (const caracterMorse of caracteresMorse){
      if (morseToCaracter[caracterMorse])
        texto += morseToCaracter[caracterMorse];
    }
    texto += ' ';
  }
  return texto.trim();
}

function convertir(input) {
  if (/^[.-\s]*$/.test(input))
    return morseToTexto(input);
  else 
    return textoToMorse(input);
}