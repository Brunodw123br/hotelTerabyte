alert("Seja bem vinda(o) ao Habbo Hotel");
var nome = transformarMaiuscula(prompt("Informe seu nome:"));
var quartos = [];
var nomeHospede = [];
var count = 0;
var valorTotal = [];
var dias = [];
var valor;
var confirmar;
var sair = false;
do{
    var senha = prompt("Olá, " + nome + " informe sua senha");
    if(isNaN(senha))
        alert("a senha deve ser numérica");
    else if(senha.length > 4)
        alert("a senha possui somente 4 digítos");
    else if(senha != 2678)
        alert("Senha errada, a senha é: 2678");
}while(senha != 2678);

do{
    var escolha = prompt("Funções do Habbo Hotel\n1 - Quanto quartos são?\n2 - ");
    switch(escolha){
        case "1":
            var quartos = [];
            var nomeHospede = [];
            var count = 0;
            var valorTotal = [];
            var dias = [];
            var valor;
            do{
                do{
                    valor = parseFloat(prompt("informe o valor da diaria: "));
                    if(isNaN(valor))
                        alert("por favor digite um numero");
                    else if(valor <= 0)
                        alert("valor informado é invalido!");
                }while(valor <= 0 || isNaN(valor))
                do{
                    dias[count] = parseInt(prompt("por favor informe a quantidade de dias que ficara no quarto"));
                    if(isNaN(dias[count]))
                        alert("por favor digite um numero");
                    else if(dias[count] <= 0 || dias[count] > 30)
                        alert("valor informado é invalido!");
                }while(dias[count] <= 0 || dias[count] > 30 || isNaN(dias[count]));
                valorTotal[count] = valor * dias[count];
                alert("o valor de " + dias[count] + " diarias é de " + valorTotal[count] + "R$")
                do{
                    nomeHospede[count] = transformarMaiuscula(prompt("qual o nome do hospede?"));
                    if(nomeHospede[count] === "");
                        alert("por favor não deixe o campo vazio");
                }while(nomeHospede[count] === "");  
                do{
                    var quarto = parseInt(prompt("qual quarto voce deseja? (1-20)"));
                    if(isNaN(quarto))
                        alert("o valor deve ser um numero");
                    else if(quarto <= 0 || quarto >= 21 )
                        alert("quarto inexitente, por favor selecione outro");
                    else if(quartos.includes(quarto))
                        alert("quarto vago, por favor selecione outro");
                    else{
                        quartos[count] = quarto;
                        break;
                    }
                }while(isNaN(quarto) || quarto <= 0 || quarto >= 21 || quartos.includes(quarto));
                confirmar = confirm( nome + ", deseja confirmar a hospedagem da(o) " + nomeHospede[count] + " por " + dias[count] + " dias no quarto " + quartos[count] + " por R$" + valorTotal[count] + "?");
                count++;
                if(!confirmar)
                    count--;
            }while(confirmar);
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        case "6":
            break;
        default:
            alert("ecolha invalida, por favor selecione um dos valore informados")
            break;
    }
}while(sair === false)

alert("Muito obrigado e até logo, " + nome);











function transformarMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};




