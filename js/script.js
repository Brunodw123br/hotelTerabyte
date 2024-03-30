alert("Seja bem vinda(o) ao Habbo Hotel");
var nome = transformarMaiuscula(prompt("Informe seu nome:"));
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
    var escolha = prompt("Funções do Habbo Hotel\n1 - Quanto quartos são?\n2 - Como soletra?\n3 - com \"S\" ou com\"Z\"?");
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
            var valor = 0, gratuidade = 0, meia = 0, somaPagantes = 0, hospede = "", hospedeContagem = 0;
            do{
                valor = parseFloat(prompt("Adicione o valor da reserva: "));
                if(isNaN(valor))
                    alert("adicione um numero");
                else if(valor <= 0)
                    alert("o valor informado não pode ser negativo ou zerado");
            }while(isNaN(valor) || valor <= 0);
            do{
                hospede = transformarMaiuscula(prompt("informe o nome do hospede:(digite PARE para sair da função)"));
                if(hospede === "")
                    alert("não é permitido deixar o campo vazio");
                else if(hospede == "PARE")
                    break;
                else{
                    do{
                        idade = parseInt(prompt("adicione a idade do hospede"));
                        if(isNaN(idade))
                            alert("idade invalida")
                    }while(idade <= 0 || isNaN(idade))
                    hospedeContagem += 1;
                    if(idade <= 6){
                        gratuidade += 1;
                        alert(hospede + " cadastrada(o) com sucesso. " + hospede + " possui gratuidade");
                    }
                    else if(idade >= 60){
                        meia += 1;
                        somaPagantes += (valor/2);
                        alert(hospede + " cadastrada(o) com sucesso. " + hospede + " pagará meia");
                    }
                    else{
                        somaPagantes += valor;
                        alert(hospede + " cadastrada(o) com sucesso.");
                    }
                }
            }while(hospede !== "PARE" || hospede === "");
            alert(nome + ", o valor total das hospedagens é de " + somaPagantes + "R$. possuindo " + hospedeContagem + " hospedes, onde " + meia + " pagam meia e " + gratuidade + " tem gratuidade");
            break;
        case "3":
            var hospedes = [], escolha = "", hospede = "";
            do{
                escolha = prompt("Faça sua escolha \n1 - cadastrar hospedes\n2 - pesquisar hospede\n3 - listar hospedes\n4 - sair");
                switch(escolha){
                    case "1":
                        if(hospedes.length < 15){
                            hospede = "\n";
                            do{
                                hospede += transformarMaiuscula(prompt("adicione o nome do hospede"));
                                if(hospede === "")
                                    alert("por favor preencha o campo")
                            }while(hospede === "");
                            hospedes.push(hospede);
                            alert("hospede cadastrado com sucesso")
                        }else
                            alert("o limite de hospedes foi atingido")
                        break;
                    case "2":
                        hospede = "\n";
                        hospede += transformarMaiuscula(prompt("informe o hospede para busca"));
                        if(hospedes.includes(hospede))
                            alert(hospede + " foi encontrada(o) no sistema");
                        else
                            alert("hospede não cadastrado no sistema")
                        break;
                    case "3":
                        alert("HOSPEDES CADASTRADOS" + hospedes);
                        break;
                    case "4":
                        break;
                    default:
                        alert("por favor selecione uma das opções");
                        break;
                }
            }while(escolha !== "4")
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




