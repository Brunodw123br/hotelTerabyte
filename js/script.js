//variaveis utilizadas para funcionar hotel
var nome;
//variaveis utilizadas no exercicio quantos quartos são - 1
var quartos = [], nomeHospedes = "", dia = 0, valor = 0, valorTotal = 0, quarto = 0;
//variaveis utilizadas no exercicio como soletra- 2
var valor = 0, gratuidade = 0, meia = 0, somaPagantes = 0, hospede = "", hospedeContagem = 0, idade = 0;
//variaveis utilizadas no exercicio com s ou com z - 3
var hospedesSZ = [], escolha = "", hospede = "";
//variaveis utilizadas no exercicio Que horas Você pode - 4 - obs: dividida para melhor visão
var convidados = 0, cadeiras = 0, diaSemana = "", horario = 0, nomeEmpresa = "", garcom = 0;
var limiteEvento = 0, horaEvento = 0, valorGarcom = 0, cafe = 0, agua = 0; salgado = 0;
var valorCafe = 0, valorAgua = 0, valorsalgado = 0, valorBuffet = 0, limite = 0, confirmar, auditorio = "";
//variaveis utilizadas no exercicio álcool ou gasolina - 5
var postoWayneAlcool = 0, postoWayneGasolina = 0, postoStarkGasolina = 0, postoStarkAlcool = 0, diferenca = 0;
//variaveis utilizadas no exercicio ar puro finalmente
var empresas = "", empresa = "", valor = 0, valorFinal = 0, quantidade = 0, quantidadeMinima = 0;
var desconto = 0, confirmar, barato = Infinity;

function entradaHotel(){
    alert("Seja bem vinda(o) ao Habbo Hotel");
    nomeInicio();
    senha();
    funcoes();
}

function nomeInicio(){
    var nome = prompt("Informe seu nome:");
    if(nome === ""){
        alert("campo não pode ficar vazio");
        nomeInicio();
    }
}
    
function senha(){
    var senha = prompt("Olá, " + nome + " informe sua senha");
    if(isNaN(senha)){
        alert("a senha deve ser numérica");
        senha();
    }else if(senha.length > 4){
        alert("a senha possui somente 4 digítos");
        senha();
    }else if(senha != 2678){
        alert("Senha errada, a senha é: 2678");
        senha();
    }
}

function funcoes() {
    /*essa é uma estrutura de prompt unica, o /n serve para dar a quebra de linhas
    e não ficar em uma linha única, só tá escrita com concatenação para melhor visibilidade
    abaixo exemplo sem a concatenação.
    var escolha = prompt("Funções do Habbo Hotel\n1 - Quanto quartos são?\n2 - Como soletra?\n3 - com \"S\" ou com\"Z\"?\n4 - que horas voce pode?\n5 - Álcool ou gasolina?\n6 - Ar puro, finalmente\n 7 - Sair");
    */
    var escolha = prompt("Funções do Habbo Hotel"
        + "\n1 - Quanto quartos são?"
        + "\n2 - Como soletra?"
        + "\n3 - Com \"S\" ou com\"Z\"?"
        + "\n4 - Que horas voce pode?"
        + "\n5 - Álcool ou gasolina?"
        + "\n6 - Ar puro, finalmente"
        + "\n7 - Sair");
    switch (escolha) {//switch que possibilita a escolha de exercicio do usuario
        case "1"://o caso está entre aspas porque não estamos transformando a escolha em numeric por isso está checando a string mesmo
            quantosQuartos();
            break;//breake usado para o código não seguir para a linha de baixo e não executar nenhum outro código dentro do case
        case "2":
            pegarValor(); // pega o valor que a pessoa paga, fica aqui porque só é pego uma vezpor escolha
            comoSoletra();
            break;
        case "3":
            comSZ();
            break;
        case "4":
            queHorasPode();
            break;
        case "5":
            alcoolGasolina();
            break
        case "6":
            arPuro();
            break;
        case "7":
            sair();
            break;
        default://caso não caia em nenhum caso proposto vai cair aqui
            alert("Por Favor escolher uma das opções acima");
            funcoes();
            break;
    }
}

function sair() {
    alert(nome + ", foi um prazer ter você no nosso Hotel, esperamos que nos"
        + "utilize novamente em algum outro momento\n\natt: equipe do Habbo Hotel");
    alert("Muito obrigado e até logo, " + nome);
    window.close(); // fecha a pagina web
}

function quantosQuartos() {
    pegarValor(); //pega o valor
    quantosDias(); // pega o dia
    valorTotal = dia * valor; // faz o calculo do quanto será gasto
    alert("o valor de " + dia + " diarias é de " + "R$ " + valorTotal); //mostra ao usuario quanto sera gasto 
    nomeHospede(); // pega o nome do hospede
    checarQuarto(); // ocupa e cha os quarto
    novoQuarto(); // vê se quer adicionar novos quartos
}

//função para pegar o valor da diaria e validar se é um valor valido
function pegarValor() {
    valor = parseFloat(prompt("informe o valor da diaria: "));
    if (isNaN(valor)) {
        alert("por favor digite um numero");
        pegarValor();
    }
    else if (valor <= 0) {
        alert("valor informado é invalido!");
        pegarValor();
    }
}

//função para pegar os dia da diaria e validar se é um valor valido
function quantosDias() {
    dia = parseInt(prompt("por favor informe a quantidade de dias que ficara no quarto"));
    if (isNaN(dia)) {
        alert("por favor digite um numero");
        quantosDias();
    }
    else if (dia <= 0 || dia > 30) {
        alert("valor informado é invalido!");
        quantosDias();
    }
}

//função para pegar o nome do hospede e impedir de ser nulo
function nomeHospede() {
    nomeHospedes = prompt("adicione o nome do hospede");
    if (nomeHospedes === "") {
        alert("por favor não deixe o campo vazio");
        nomeHospede();
    }
}

//função para pegar o quarto fazer a validação e checar se está vago ou não
function checarQuarto() {
    quarto = parseInt(prompt("qual quarto voce deseja? (1-20)"));
    if (isNaN(quarto)) {
        alert("o valor deve ser um numero");
        checarQuarto();
    }
    else if (quarto <= 0 || quarto >= 21) {
        alert("quarto inexitente, por favor selecione outro");
        checarQuarto();
    } else if (quartos.includes(quarto)) { //verifica se o quarto já esta ocupado
        alert("quarto vago, por favor selecione outro");
        checarQuarto();
    } else {
        quartos.push(quarto); // coloca o numero no array
    }
}

//função para ver se quer cadastrar um novo hospede
function novoQuarto() {
    var confirmar = confirm(nome + ", a hospedagem da(o) " + nomeHospedes + " por " + dia
        + " dias no quarto " + quarto + " por R$" + valorTotal + " foi concluida.\n Deseja cadastrar um novo hospede?"); // cria um prompt de confirmação com sim ou não sem precisar escrever
    if (confirmar) { // se o usuario concordar ele volta pro ciclo e coloca um novo hospede
        if (quartos.length < 20) {//verificação para não cadastrar mais de 20 hospedes. é < 20 porque o array começa do 0 então o 20 seria na casa 19
            quantosQuartos();
        } else {
            alert("Todos os quartos estão lotados");
            novoQuarto();
        }
    }
    else {
        //resetar as variaveis para que a pessoa possa acessar a função de novo caso queira
        quartos = [], nomeHospedes = "", dia = 0, valor = 0, valorTotal = 0, quarto = 0;
        funcoes();
    }
}

function comoSoletra() {
    hospedes(); // quase igual a função nomeHospedes, apenas com algumas diferenças
    pegarIdade(); // função para pegar a idade da pessoa cadastrada
    hospedeContagem++; //contador de quantas pessoas foram cadastradas até o momento
    verificacaoIdades(); //verifica o beneficio do usuario
    comoSoletra(); //volta pra fazer o mesmo processo
}

//função para saber o nome do hospede, validar e sair da funcionalidade
function hospedes() {
    nomeHospedes = prompt("informe o nome do hospede:(digite PARE para sair da função)");
    if (nomeHospedes === "") {
        alert("por favor não deixe o campo vazio");
        nomeHospede();
    } else if (nomeHospedes === "PARE") {
        alert(nome + ", o valor total das hospedagens é de " + somaPagantes + "R$. possuindo " + hospedeContagem
            + " hospedes, onde " + meia + " pagam meia e " + gratuidade + " tem gratuidade");
        valor = 0, gratuidade = 0, meia = 0, somaPagantes = 0, hospede = "", hospedeContagem = 0, idade = 0;
        funcoes();
    }
}

//função para para fazer a validação da idade
function pegarIdade() {
    idade = parseInt(prompt("adicione a idade do hospede"));
    if (isNaN(idade)) {
        alert("idade invalida");
        pegarIdade();
    } else if (idade <= 0) {
        alert("idade invalida");
        pegarIdade();
    }
}

//função de enquadramento da idade
function verificacaoIdades() {
    if (idade <= 6) {
        gratuidade++; //contador de gratuidades
        alert(hospede + " cadastrada(o) com sucesso. " + hospede + " possui gratuidade");
    }
    else if (idade >= 60) {
        meia++; //contador de meia
        somaPagantes += (valor / 2); // += atribui o valor que já tem guardado mais a soma que foi feita
        alert(hospede + " cadastrada(o) com sucesso. " + hospede + " pagará meia");
    }
    else {
        somaPagantes += valor;
        alert(hospede + " cadastrada(o) com sucesso.");
    }
}

function comSZ() {
    escolha = prompt("Faça sua escolha"
        + "\n1 - cadastrar hospedes"
        + "\n2 - pesquisar hospede"
        + "\n3 - listar hospedes"
        + "\n4 - sair");
    switch (escolha) {
        case "1":
            cadastrarHospede();
            break;
        case "2":
            procurarHospedes();
            break;
        case "3":
            listarHospedes();
            break;
        case "4":
            hospedesSZ = [], escolha = "", hospede = "";
            funcoes();
            break;
        default:
            alert("por favor selecione uma das opções");
            comSZ();
            break;
    }
}

//essa função cadastra e limita os hospedes no sistema
function cadastrarHospede() {
    if (hospedesSZ.length < 15) {//essa validação garante que não passe de 15 
        nomeHospede();
        hospedesSZ.push(nomeHospedes);
        alert("hospede cadastrado com sucesso");
        var confirmar = confirm("deseja cadastrar um novo hospede?");
        if (confirmar) {
            cadastrarHospede();
        }
        else {
            comSZ();
        }
    } else {
        alert("o limite de hospedes foi atingido");
        comSZ();
    }
}

// essa função checa se os hospedes estão cadastrados no sistema
function procurarHospedes() {
    nomeHospede();
    if (hospedesSZ.includes(nomeHospedes)) {
        alert(hospede + " foi encontrada(o) no sistema");
        comSZ();
    }
    else {
        alert("hospede não cadastrado no sistema");
        comSZ();
    }
}

// essa função vai puxar a lista com todos os hospedes já cadastrados
function listarHospedes() {
    alert("HOSPEDES CADASTRADOS \n" + hospedesSZ);
    comSZ();
}

function queHorasPode() {
    convidadosAuditorio(); //pega a quantidade de convidados e vê o auditório que vai utilizar
    diadaSemana(); //pega o dia da semana em que ocorrerá o evento
    duracaoEvento(); //aqui pega o tempo de duração do evento
    calcularGarcom(); //aqui calcula quantos garçons serão necessario no evento e o valor do serviço deles
    alert("agora vamos calcular o buffet");
    calcularBuffet(); // aqui tem os calculos das coisas do buffet, além do valor que será gasto
    confirmarDados();//um recibo com todas as informações e se quer continuar nessa função 
}

//função que pega os convidados e atribui qual o autitório que vai
function convidadosAuditorio() {
    convidados = parseInt(prompt("adicione a quantidade de convidados"));
    if (isNaN(convidados)) {
        alert("por favor aidicione numeros");
        convidadosAuditorio();
    } else if (convidados <= 0) {
        alert("quantidade de convidados invalida");
        convidadosAuditorio();
    } else if (convidados > 350) {
        alert("quantidade de convidade superior a quantidade permitida")
        convidadosAuditorio();
    } else if (convidados <= 150) {
        auditorio = "laranja";
        alert("use o auditório " + auditorio);
        alert("agora vamos agendar o evento");
    } else if (convidados > 150 && convidados <= 220) {
        cadeiras = convidados - 150;
        auditorio = "laranja";
        alert("use o auditório " + auditorio + ".(adicione " + cadeiras + " cadeiras)");
        alert("agora vamos agendar o evento");
    }
    else {
        auditorio = "colorado";
        alert("use o auditório " + auditorio);
        alert("agora vamos agendar o evento");
    }
}

//função que pega o dia da semana que ocorrerá o evento
function diadaSemana() {
    diaSemana = prompt("em qual dia da semana ocorrera o evento?(não informe o -feira. exemplo: \" terca\")");
    switch (diaSemana) {
        case "segunda": //esse case está desse jeito para que não precise ficar colocando o mesmo código em cada caso
        case "terca":
        case "terça":
        case "quarta":
        case "quinta":
        case "sexta":
            segundaSexta();
            break;
        case "sabado":
        case "sábado":
        case "domingo":
            fimSemana();
            break;
        default:
            alert("dia da semana informado não existe");
            diaSemana()
            break;
    }
}


//função para caso o evento ocorra em dia de semana
function segundaSexta() {
    limiteEvento = 23;
    horario = parseInt(prompt("informe o horário do evento"))
    if (isNaN(horario)) {
        alert("informe o horario em numeros");
        segundaSexta();
    } else if (horario < 0 || horario > 24) {
        alert("horario inexistente")
        segundaSexta();
    } else if (horario < 7 || horario > 23) {
        alert("não funcionamos nesse horario");
        segundaSexta();
    }
    pegarEmpresa();
    alert("auditório reservado para " + nomeEmpresa + ". " + diaSemana + " às " + horario + "h")
}

//essa função pega o nome da empresa que fará a reserva do evento
function pegarEmpresa() {
    nomeEmpresa = prompt("qual o nome da empresa?");
    if (nomeEmpresa === "") {
        alert(("o campo não pode estar vazio"));
        pegarEmpresa();
    }
}

//função para caso o evento ocorra em um final de semana
function fimSemana() {
    limiteEvento = 15;
    horario = parseInt(prompt("informe o horário do evento"))
    if (isNaN(horario)) {
        alert("informe o horario em numeros");
        fimSemana();
    } else if (horario < 0 || horario > 24) {
        alert("horario inexistente");
        fimSemana();
    } else if (horario < 7 || horario > 15) {
        alert("não funcionamos nesse horario");
        fimSemana()
    }
    pegarEmpresa();
    alert("auditório reservado para " + nomeEmpresa + ". " + diaSemana + " às " + horario + "h")
}

//essa função serve para saber o quanto de tempo o evento estará rolando tendo o limite de funcionamento do dia como parametro
function duracaoEvento() {
    horaEvento = parseInt(prompt("qual será a duração do evento em horas?"));
    limite = horario + horaEvento;
    if (isNaN(horaEvento)) {
        alert("adicione a hora em numero");
        duracaoEvento();
    } else if (horaEvento <= 0) {
        alert("quantidade de horas invalidas");
        duracaoEvento();
    } else if (limite > limiteEvento) {
        alert("não trabalhamos mais que o nosso horário");
        duracaoEvento();
    }
}

//essa função serve para calcular quantos garçons serão necessarios e o quanto a empresa pagará pelos seus serviços
function calcularGarcom() {
    garcom = Math.ceil(convidados / 12); /* a cada 12 convidados serão necessarios 1 garçom.
    o math.ceil é para sempre arredondar pra cima caso necessario*/
    garcom += Math.ceil(horaEvento / 2);//a cada 2 horas de evento é necessario mais um garçom
    valorGarcom = horaEvento * 10.50 * garcom; // calculo de quanto sera pago pelos serviços dos garçons
    alert("serão necessarios " + garcom + " garçons, o custo será de R$" + valorGarcom);
}

//esta função serve para ver o quanto de coisas serão necessarios para os convidados e o valor dessas coisas
function calcularBuffet() {
    cafe = Math.ceil(0.2 * convidados); /* cada convidado recebera 200ml de café , mas como está sendo pedido por L
    é necessario o arredondamento pra cima*/
    agua = Math.ceil(0.5 * convidados);/* cada convidado recebera 500ml de água , mas como está sendo pedido por L
    é necessario o arredondamento pra cima*/
    salgado = Math.ceil(7 * convidados / 100) * 100;/* cada convidado recebera 7 unidades de salgado , mas como está sendo pedido por centro
    é necessario o arredondamento pra cima. exemplo: deu 534 salgados no total, a divisão por 100 formara o numero 5.34
    que dentro do math.ceil se tornará 6 e depois será multiplicado por 100 para formar o cento 600 que será pedido*/
    valorCafe = cafe * 0.8; //cada 1L de café é R$ 0,80
    valorAgua = agua * 0.4; //cada 1l de água é R$ 0,40
    valorsalgado = salgado / 100 * 34; //cada centro é R$ 34
    valorBuffet = valorAgua + valorCafe + valorsalgado; //aqui pega todos os valores que serão gasto com produtos no buffet
    valorTotal = valorGarcom + valorBuffet; //aqui fala o valor geral que será gasto com o evento
    alert("o evento precisará de " + cafe + "L de café, " + agua + "L de água e " + salgado + " unidades de salgados");
}

//essa função é só para informar todas as informações para o contratante e ver se ele quer reservar outro horário
function confirmarDados() {
    confirmar = confirm("DADOS PARA FINALIZAR RESERVA\n Evento no Auditório: " + auditorio + "\nNome da Empresa: "
        + nomeEmpresa + "\nData: " + diaSemana + ", " + horario + "h às " + limite + "\nDuração do Evento: " + horaEvento
        + "h\nQuantidade de Garçons: " + garcom + "\nQuantidade de Convidados: " + convidados + "\n\n Custo dos garçons: R$ "
        + valorGarcom + "\nCusto do buffet: R$ " + valorBuffet + "\n\nValor total do Evento: R$" + valorTotal
        + "\n\nOBS: aceitando voce també faz outra reserva");
    if (confirmar) {
        alert(nome + ", reserva efetuada com sucesso");
        queHorasPode();
    } else {
        convidados = 0, cadeiras = 0, diaSemana = "", horario = 0, nomeEmpresa = "", garcom = 0;
        limiteEvento = 0, horaEvento = 0, valorGarcom = 0, cafe = 0, agua = 0; salgado = 0;
        valorCafe = 0, valorAgua = 0, valorsalgado = 0, valorBuffet = 0, limite = 0, confirmar, auditorio = "";
        alert("reserva não efetuada, voltando ao menu do sistema");
        funcoes();
    }
}

function alcoolGasolina() {
    postoWAlcool(); //vai pegar o valor do álcool no posto wayne
    postoWGasolina(); //vai pegar o valor da gasolina no posto wayne
    postoSAlcool(); //vai pegar o valor do álcool no posto stark
    postoSGasolina(); //vai pegar o valor da gasolina no posto stark
    checarBarato(); //vai ver qual tem o melhor valor para abastecer
}

//esssa função vai pegar o valor do álcool no posto wayne
function postoWAlcool() {
    postoWayneAlcool = parseFloat(prompt("adicione o valor do álcool no posto Wayne Oil"));
    if (isNaN(postoWayneAlcool)) {
        alert("porfavor informe em numero");
        postoWAlcool();
    } else if (postoWayneAlcool <= 0) {
        alert("valor informado não poder igual ou menor a 0");
        postoWAlcool();
    }
}

//essa função vai pegar o valor da gasolina no posto wayne
function postoWGasolina() {
    postoWayneGasolina = parseFloat(prompt("adicione o valor da gasolina no posto Wayne Oil"));
    if (isNaN(postoWayneGasolina)) {
        alert("porfavor informe em numero");
        postoWGasolina();
    } else if (postoWayneGasolina <= 0) {
        alert("valor informado não poder igual ou menor a 0");
        postoWGasolina();
    }
}

//essa função vai pegar o valor do álcool no posto stark
function postoSAlcool() {
    postoStarkAlcool = parseFloat(prompt("adicione o valor do álcool no posto Stark Petrol"));
    if (isNaN(postoStarkAlcool)) {
        alert("porfavor informe em numero");
        postoSAlcool();
    } else if (postoStarkAlcool <= 0) {
        alert("valor informado não poder igual ou menor a 0");
        postoSAlcool();
    }
}

//essa função vai pegar o valor da gasolina no posto stark
function postoSGasolina() {
    postoStarkGasolina = parseFloat(prompt("adicione o valor do gasolina no posto Stark Petrol"));
    if (isNaN(postoStarkGasolina)) {
        alert("porfavor informe em numero");
        postoSGasolina();
    } else if (postoStarkGasolina <= 0) {
        alert("valor informado não poder igual ou menor a 0");
        postoSGasolina();
    }

}

//essa função vai ver qual tem o melhor valor para abastecer
function checarBarato() {
    if (postoWayneGasolina <= postoStarkGasolina) {  // aqui vai checar se a gasolina do posto wayne é mais barata que a do posto stark
        diferenca = postoWayneGasolina - (postoWayneGasolina * 0.3); /* aqui fara uma regra de tres para saber o quanto o
        alcool precisa ser barato*/
        if (postoWayneAlcool < diferenca) { //aqui faz a validção se o álcool ou a gasolina é mais barata
            alert(nome + ", é mais barato abastecer com álcool no posto Wayne Oil");
        } else {
            alert(nome + ", é mais barato abastecer com gasolina no posto Wayne Oil");
        }
    } else {
        diferenca = postoStarkGasolina - (postoStarkGasolina * 0.3);
        if (postoStarkAlcool < diferenca) {
            alert(nome + ", é mais barato abastecer com álcool no posto Stark Petrol");
        } else {
            alert(nome + ", é mais barato abastecer com gasolina no posto Stark Petrol");
        }
    }
    confirmar = confirm("deseja calcular novamente?");
    if (confirmar) {
        alcoolGasolina();
    } else {
        postoWayneAlcool = 0, postoWayneGasolina = 0, postoStarkGasolina = 0, postoStarkAlcool = 0, diferenca = 0;
        funcoes();
    }
}

function arPuro() {
    nomeEmpresas(); //pega o nome da empres
    valorAr(); //pega o valor do serviço
    quantidadeAparelho(); //pega a quantidade de dispositivos que serão mexidos
    desconta(); // qual a quantidade de desconto
    qtdMinima(); // pega a quantidade de peças que precisa para ganhar o desconto
    calcularValor(); // faz o calculo caso haja desconto ou não
    confirmar = confirm("deseja checar novas empresas?");
    if(confirmar){
        arPuro();
    }else{
        empresas = "", empresa = "", valor = 0, valorFinal = 0, quantidade = 0, quantidadeMinima = 0;
        desconto = 0, confirmar, barato = Infinity;
        alert("o orçamento mais barato é o da " + empresa + " que saiu por R$ " + barato);
        funcoes();
    }
    
}

//função para pegar o nome da empres
function nomeEmpresas() {
    empresas = prompt("adicione o nome da empresa");
    if (empresas === "") {
        alert("não deixe o espaço em branco");
        nomeEmpresas();
    }
}

//função para pegar o valor do serviço
function valorAr() {
    valor = parseFloat(prompt("qual o valor por aparelhos?"));
    if (isNaN(valor)){
        alert("por favor informe numeros");
        valorAr();
    }else if (valor <= 0){
        alert("o valor não pode ser 0 ou abaixo dele");
        valorAr();
    }
}

//função para saber quantos aparelhos tem
function quantidadeAparelho(){
    quantidade = parseInt(prompt("qual a quantidade de aparelhos?"));
    if (isNaN(quantidade)){
        alert("por favor informe numeros");
        quantidadeAparelho();
    }else if (quantidade <= 0){
        alert("a quantidade não pode ser 0 ou abaixo dele");
        quantidadeAparelho();
    }
}

//função para saber o quanto vai ter de desconto
function desconta(){
    desconto = parseInt(prompt("qual a porcentagem de desconto?"));
        if (isNaN(desconto)){
            alert("por favor informe numeros");
            desconta()
        }else if (desconto < 0){
            alert("o desconto não pode ser abaixo de 0");
            desconta();
        }else if (desconto > 100){
            alert("o desconto não pode ser maior do que 100%");
            desconta();
        }
}

//função para saber o mini de aparelhos necessario para ganhar o desconto
function qtdMinima(){
    quantidadeMinima = parseInt(prompt("qual a quantidade minima de aparelhos para o desconto?"));
        if (isNaN(quantidadeMinima)){
            alert("por favor informe numeros");
            qtdMinima();
        }else if (quantidadeMinima < 0){
            alert("a quantidade miníma exigida não pode ser negativa");
            qtdMinima();
        }
}

//função para calcular o valor do serviço
function calcularValor(){
    if (quantidade >= quantidadeMinima) //aqui checa se está apto para ganhar o desconto
        valorFinal = valor * quantidade - desconto / 100 * valor * quantidade; //aqui calcula o valor com o desconto aplicado
    else
        valorFinal = quantidade * valor; // aqui calcula sem desconto
    alert("O serviço da " + empresas + " custará R$ " + valorFinal);
    if (barato > valorFinal) { //aqui checa para armazena a empresa com o serviço mais barato
        barato = valorFinal;
        empresa = empresas;
    }
}