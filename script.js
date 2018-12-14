//var primeiroNome = 'Élenfe';
//var segundoNome = 'Gomes da Silva';
//var idade = 40;



/*
  var primeiroNome;
var segundoNome;
var idade;
var apelido;

function perguta(){
  
  
  primeiroNome = prompt('Qual é o seu nome?');
  console.log(primeiroNome);

  segundoNome = prompt('Qual é o seu sobrenome?');

  idade = prompt('Qual é asua idade?');

  apelido = prompt('Qual é o seu apelido?');


  console.log('Meu nome é'
              + ' ' + 
              primeiroNome 
              + ' ' + 
              'meu apelido é' 
              + ' ' + 
              apelido 
              + ' ' + 
              'tenho' 
              + ' ' + 
              idade 
              + ' ' +
              'anos.');

  alert('minha idade é' + ' ' + idade);
  
}

perguta();
*/

//var massa = prompt('Qual é o seu peso?'); 
//var altura = prompt('Qual é a sua altura em metro?');
//var imc = massa / (altura * altura);
//
////if(imc > )
//
//console.log(massa, altura);
//console.log(imc);
//
//alert('olá'
//            + ' ' +
//            nome
//             + ' ' +
//            'seu IMC é'
//             + ' ' +
//            imc);



//var nome = prompt('Qual é o seu nome?');
//var profissao = prompt('Qual sua profissão?');
//
//switch (profissao) {
//  case 'professor':
//    console.log(nome +',' + ' ' + 'sou professor');
//    break;
//  case 'motorista':
//    console.log(nome +',' + ' ' + 'sou motorista');
//    break;
//  case 'designer':
//    console.log(nome +',' + ' ' + 'sou designer');
//    break;
//  default:
//    console.log(nome + ',' + ' ' + 'sou' + ' ' + profissao);
//}
//
//
//var idade = prompt('Qual é a sua idade?');
//
//switch (true){
//  case idade < 13:
//    console.log(nome + ' é um menino.');
//    break;
//  case idade >= 13 && idade < 20:
//    console.log(nome + ' é um adolecente.');
//    break;
//  case idade >= 20 && idade < 30:
//    console.log(nome + ' é um homem jovem.');
//    break;
//  default:
//    console.log(nome + ' é um homem.')
//}

//function promptInt(mensagem, tenteNovamente) {
//  var msg = mensagem;
//  
//  while (true) {
//    var ret = parseInt(prompt(msg));
//    if (!isNaN(ret)) return ret;
//    msg = tenteNovamente;
//  }
//}
//
//var count = promptInt("Teste", "Por favor, digite um número. \nTente novamente.");
//alert("Você digitou o número " + count + ".");


//var timeJohn = (116 + 94 + 123) / 3;
//var timeMike = (116 + 94 + 123) / 3;
//var timeMaria = (116 + 94 + 123) / 3;
//
//var mediaTimeJohn = timeJohn;
//var mediaTimeMike = timeMike;
//var mediaTimeMaria = timeMaria;
//
//var empate = (mediaTimeJohn + mediaTimeMike) / 2;
//var empate1 = (mediaTimeMike + mediaTimeMaria) / 2;
//var empate2 = (mediaTimeJohn + mediaTimeMaria) / 2;
//var empate3 = (mediaTimeJohn + mediaTimeMike + mediaTimeMaria) / 3;
//  
//  if(mediaTimeJohn > mediaTimeMike && mediaTimeJohn > mediaTimeMaria) {
//    console.log('O time do John venceu com ' + mediaTimeJohn);
//  }else if (mediaTimeJohn === mediaTimeMike && mediaTimeJohn === mediaTimeMaria) {
//    console.log('Jogo empatado com ' + empate3);
//  }else if(mediaTimeMaria > mediaTimeJohn && mediaTimeMaria > mediaTimeMike) {
//    console.log('O time da maria venceu com ' + mediaTimeMaria);
//  }else if(mediaTimeMaria === mediaTimeJohn) {
//    console.log('Empate time da maria e time do John ' + empate2);
//  }else if(mediaTimeJohn === mediaTimeMike) {
//    console.log('Empate time do John e time do Mike ' + empate);
//  }else if(mediaTimeMaria === mediaTimeMike) {
//    console.log('Empate time da maria e time do Mike ' + empate1);
//  }else {
//    console.log('o time do Mike venceu com ' + mediaTimeMike);  
//  }


//function calculaIdade(idade) {
//  return 2018 - idade;
//}
//
//var minhaidade = calculaIdade(1979);
//
//console.log(minhaidade);
//
//function anosParaAposentadoria(ano, primeiroNome) {
//  var idade = calculaIdade(ano);
//  var aposentadoria = 85 - idade;
//  console.log(primeiroNome + ' ' + aposentadoria + ' anos' + ' para aposentadoria');
//}
//
//anosParaAposentadoria(1979, 'Élenfe');


var john = ['John', 'Smith', 1979, 'front', false];

john.push('blue'); //add no final do array.
john.unshift('Mr.'); //add no icicio do array.
john.shift(); //remove o primeiro elemento do array.
john.pop(); //remove o ultimo elemento do array.
console.log(john);

var isDesigner = john.indexOf('front') === -1 ? 'John não é front' : 'John é front'; // Quando indexOf retorna -1 é porque não existe esse elemento.

console.log(isDesigner);
















