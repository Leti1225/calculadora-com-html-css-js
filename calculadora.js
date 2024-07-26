const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
//chama os botoes com numeros
//chama todos os botoes que tenham como parte do id 'tecla'
const operadores = document.querySelectorAll('[id*=operador]');
let novoNumero = true;
//fornece um valor booleano para concatenar ou não o numero inserido no display
let operador;
let numeroAnterior;

const operacaoPendente = () => operador != undefined;

const calcular = () => {
    if (operacaoPendente() && numeroAnterior != undefined){
        const numeroAtual = parseFloat(display.textContent.replace(',','.'));
        //parseFloat = transforma a string em numero
        //replace = troca a virgula por ponto, para fazer operações com números decimais
        novoNumero = true; //declara que o resultado a ser inserido é um novoNumero, para não ocorrer concatenação
        const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`); //o eval funciona como o switch case, mas de forma mais simplificada
        atualizarDisplay(resultado);
        }
    }

//insere o numero no display de forma concatenada
const atualizarDisplay = (texto) => {

    //diminui o tamanho da letra conforme o tamanho da string
    display.textContent.length >= 10 ? display.style.font = "normal 3rem serif" : display.style.font = "normal 4rem serif";
    display.textContent.length >= 13 ? display.style.font = "normal 2rem serif" : display.textContent.length >=10;

    if(display.textContent.length <= 15){
            if(novoNumero){
                display.textContent = texto.toLocaleString('BR'); //toLocaleString = formata o texto para o padrão brasileira (transforma o . em ,)
                novoNumero = false;
            }else{
                display.textContent += texto.toLocaleString('BR');
            }
    } else{
        alert("Não é possível inserir mais de 15 digitos");
    }
}

//identifica o botao do numero que foi clicado
const inserirNumero = (evento) => {

    const numeroClicado = evento.target.textContent;

    //impede que mais de um zero seja adicionado quando apenas houver ele no display
    if(numeroClicado === '0' && display.textContent === '0' && display.textContent.length === 1){
        return;
    } else if(numeroClicado !== '0' && display.textContent === '0' && display.textContent.length === 1){
        //troca o zero por outro número diferente de zero
        display.textContent = parseFloat(display.textContent.replace('0', numeroClicado));
        novoNumero = true;
    }

    atualizarDisplay(numeroClicado);
};
    
numeros.forEach (numero => numero.addEventListener('click', inserirNumero));
//forEach = passa por todos os elementos de um array
//adicionar um evento a cada botao de numero

//essa função só vai acontecer se o numero não for novo
const selecionarOperador = (evento) => {
    if(!novoNumero){
        calcular();
        novoNumero = true; //faz com que o conteúdo do display seja "apagado" para inserir um numero
        operador = evento.target.textContent; //salva o operador na memória
        numeroAnterior = parseFloat(display.textContent.replace(',','.')); //salva os numeros que estavam no display na memória
    }
}

operadores.forEach (operador => operador.addEventListener('click', selecionarOperador));

const ativarIgual = () => {
    calcular();
    operador = undefined; //o operador é "reiniciado"
}

//limpa toda a memória da calculadora
const calculoLimpo = () => {
    displayLimpo();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}

const displayLimpo = () => display.textContent = '' ; //limpa o display, mas mantém a operação e o numeroAnterior

const existeVirgula = () => display.textContent.indexOf(',') != -1 ;//true
const existeValor = () => display.textContent.length > 0 ;

const permitirVirgula = () => {
    if(!existeVirgula()){
        if(existeValor()){
            atualizarDisplay(',');
        }else{
            atualizarDisplay('0,');
        }
    }
}

//limpa o display da direta pra esquerda
const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1);

const trocarSinal = () => {
    novoNumero = true;
    if(existeValor()){ 
        atualizarDisplay(display.textContent * -1);
    }
}

const mapaTeclado = {
    '0'         : 'tecla0', //quando a tecla do lado esquerdo for acionada, sera chamada o ID correspondente do lado direito
    '1'         : 'tecla1',
    '2'         : 'tecla2',
    '3'         : 'tecla3',
    '4'         : 'tecla4',
    '5'         : 'tecla5',
    '6'         : 'tecla6',
    '7'         : 'tecla7',
    '8'         : 'tecla8',
    '9'         : 'tecla9',
    '/'         : 'operadorDivisao',
    '*'         : 'operadorMultiplicacao',
    '-'         : 'operadorSubtracao',
    '+'         : 'operadorSoma',
    '='         : 'igual',
    'Enter'     : 'igual',
    'Backspace' : 'backspace',
    'c'         : 'limparDisplay',
    'Escape'    : 'limparCalculo',
    ','         : 'virgula',
    'F9'        : 'operadorInverter'
}

//Receber o evento de pressionamento de tecla e, a partir dele, encontrar a ação correspondente na calculadora
const mapearTeclado = (evento) => {
    const tecla = evento.key;
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) != -1;
    //vasculhar as chaves do objeto mapaTeclado e procurar a palavra tecla

    if(teclaPermitida()){
        document.getElementById(mapaTeclado[tecla]).click(); //simula um clique nesse botão para acionar a função inserirNumero()
    }
}

document.addEventListener('keydown',mapearTeclado);
//keydown = evento de pressionamento de tecla