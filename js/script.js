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
    var escolha = prompt("Funções do Habbo Hotel\n1 - Quanto quartos são?\n2 - Como soletra?\n3 - com \"S\" ou com\"Z\"?\n4 - que horas voce pode?\n5 - Álcool ou gasolina?\n6 - Ar puro, finalmente\n 7 - Sair");
    switch(escolha){
        case "1":
            var quartos = [], nomeHospede = [], count = 0, valorTotal = [], dias = [], valor;
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
                    if(nomeHospede[count] === "")
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
                escolha = prompt("Faça sua escolha \n1 - cadastrar hospedes\n2 - pesquisar hospede\n3 - listar hospedes\n4 - sair\n5 - Álcool ou gasolina?\n6 - Ar puro, finalmente\n7 - sair");
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
            var convidados = 0, cadeiras = 0, diaSemana = "", horario = 0, nomeEmpresa = "", garcom = 0, limiteEvento = 0, horaEvento = 0, valorGarcom = 0, cafe = 0, agua = 0, salgado = 0, valorCafe = 0, valorAgua = 0, valorsalgado = 0, valorBuffet, count = 0, confirmar = null, somaGastos = 0, auditorio = "";
            do{
                convidados = parseInt(prompt("adicione a quantidade de convidados"));
                if(isNaN(convidados))
                    alert("por favor aidicione numeros");
                else if(convidados <=0)
                    alert("quantidade de convidados invalida");
                else if(convidados > 350)
                    alert("quantidade de convidade superior a quantidade permitida")
                else if(convidados <= 150){
                    auditorio = "laranja";
                    alert("use o auditório " + auditorio);
                    alert("agora vamos agendar o evento");
                }else if(convidados > 150 && convidados <= 220){
                    cadeiras = convidados - 150;
                    auditorio = "laranja";
                    alert("use o auditório " + auditorio + ".(adicione " + cadeiras + " cadeiras)");
                    alert("agora vamos agendar o evento");
                }
                else{
                    auditorio = "colorado";
                    alert("use o auditório " + auditorio);
                    alert("agora vamos agendar o evento");
                }
            }while(isNaN(convidados) || convidados <= 0 || convidados > 350);
            do{
                diaSemana = transformarMaiuscula(prompt("em qual dia da semana ocorrera o evento?(não informe o -feira. exemplo: \" terca\")"));
                switch(diaSemana){
                    case "Segunda":
                    case "Terca":
                    case "Terça":
                    case "Quarta":
                    case "Quinta":
                    case "Sexta":
                        limiteEvento = 23;
                        do{
                            horario = parseInt(prompt("informe o horário do evento"))
                            if(isNaN(horario))
                                alert("informe o horario em numeros");
                            else if(horario < 0 || horario > 24)
                                alert("horario inexistente")
                            else if(horario < 7 || horario > 23)
                                alert("não funcionamos nesse horario");
                        }while(horario < 7 || horario > 23 || isNaN(horario));
                        do{
                            nomeEmpresa = prompt("qual o nome da empresa?");
                        }while(nomeEmpresa === "");
                        count = 1;
                        alert("auditório reservado para " + nomeEmpresa + ". " + diaSemana + " às " + horario + "h")
                        break;
                    case "Sabado":
                    case "Sábado":
                    case "Domingo":
                        limiteEvento = 15;
                        do{
                            horario = parseInt(prompt("informe o horário do evento"))
                            if(isNaN(horario))
                                alert("informe o horario em numeros");
                            else if(horario < 0 || horario > 24)
                                alert("horario inexistente")
                            else if(horario < 7 || horario > 15)
                                alert("não funcionamos nesse horario");
                        }while(horario < 7 || horario > 15 || isNaN(horario));
                        do{
                            nomeEmpresa = prompt("qual o nome da empresa?");
                        }while(nomeEmpresa === "");
                        alert("auditório reservado para " + nomeEmpresa + ". " + diaSemana + " às " + horario + "h")
                        count = 1;
                        break;
                    default:
                        alert("dia da semana informado não existe");                
                }
            }while(count == 0)
            do{
                horaEvento = parseInt(prompt("qual será a duração do evento em horas?"));
                var limite = horario + horaEvento;
                if(isNaN(horaEvento))
                    alert("adicione a hora em numero");
                else if(horaEvento <= 0)
                    alert("quantidade de horas invalidas");
                else if(limite > limiteEvento)
                    alert("não trabalhamos mais que o nosso horário");
            }while(isNaN(horaEvento) || horaEvento <= 0 || limite > limiteEvento);
            garcom = Math.ceil(convidados / 12);
            garcom += Math.ceil(horaEvento / 2);
            valorGarcom = horaEvento * 10.50 * garcom;
            alert("serão necessarios " + garcom + " garçons, o custo será de " + valorGarcom + "R$");
            alert("agora vamos calcular o buffet");
            cafe = Math.ceil(0.2 * convidados);
            agua = Math.ceil(0.5 * convidados);
            salgado = Math.ceil(7 * convidados / 100) * 100;
            valorCafe = cafe * 0.8;
            valorAgua = agua * 0.4;
            valorsalgado = salgado / 100 * 34;
            valorBuffet = valorAgua + valorCafe + valorsalgado;
            valorTotal = valorGarcom + valorBuffet;
            alert("o evento precisará de " + cafe + "L de café, " + agua + "L de água e " + salgado + " unidades de salgados");
            confirmar = confirm("DADOS PARA FINALIZAR RESERVA\n Evento no Auditório: " + auditorio + "\nNome da Empresa: " + nomeEmpresa + "\nData: " + diaSemana + ", " + horario + "h às " + limite + "\nDuração do Evento: " + horaEvento + "h\nQuantidade de Garçom: " + garcom + "\nQuantidade de Convidados" + convidados + "\n\n Custo dos garçons: R$ " + valorGarcom + "\nCusto do buffet: R$ " + valorBuffet + "\n\nValor total do Evento: " + valorTotal);
            if(confirmar)
                alert(nome + ", reserva efetuada com sucesso");
            else
                alert("reserva não efetuada, voltando ao menu do sistema")
            break;
        case "5":
            var postoWayneAlcool = 0, postoWayneGasolina = 0, postoStarkGasolina = 0, postoStarkAlcool = 0, diferenca = 0;
            do{
                postoWayneAlcool = parseFloat(prompt("adicione o valor do álcool no posto Wayne Oil"));
                if(isNaN(postoWayneAlcool))
                    alert("porfavor informe em numero");
                else if(postoWayneAlcool <= 0)
                    alert("valor informado não poder igual ou menor a 0");
            }while(isNaN(postoWayneAlcool) || postoWayneAlcool <= 0);
            do{
                postoWayneGasolina = parseFloat(prompt("adicione o valor da gasolina no posto Wayne Oil"));
                if(isNaN(postoWayneGasolina))
                    alert("porfavor informe em numero");
                else if(postoWayneGasolina <= 0)
                    alert("valor informado não poder igual ou menor a 0");
            }while(isNaN(postoWayneGasolina) || postoWayneGasolina <= 0);
            do{
                postoStarkAlcool = parseFloat(prompt("adicione o valor do álcool no posto Stark Petrol"));
                if(isNaN(postoStarkAlcool))
                    alert("porfavor informe em numero");
                else if(postoStarkAlcool <= 0)
                    alert("valor informado não poder igual ou menor a 0");
            }while(isNaN(postoStarkAlcool) || postoStarkAlcool <= 0);
            do{
                postoStarkGasolina = parseFloat(prompt("adicione o valor do gasolina no posto Stark Petrol"));
                if(isNaN(postoStarkGasolina))
                    alert("porfavor informe em numero");
                else if(postoStarkGasolina <= 0)
                    alert("valor informado não poder igual ou menor a 0");
            }while(isNaN(postoStarkGasolina) || postoStarkGasolina <= 0);
            if(postoWayneGasolina <= postoStarkGasolina){
                diferenca = postoWayneGasolina - postoWayneGasolina * 0.3;
                if(postoWayneAlcool <= diferenca)
                    alert(nome + ", é mais barato abastecer com álcool no posto Wayne Oil");
                else
                    alert(nome + ", é mais barato abastecer com gasolina no posto Wayne Oil");
            }else{
                diferenca = postoStarkGasolina - postoStarkGasolina * 0.3;
                if(postoStarkAlcool < diferenca)
                    alert(nome + ", é mais barato abastecer com álcool no posto Stark Petrol");
                else
                    alert(nome + ", é mais barato abastecer com gasolina no posto Stark Petrol");
            }
            break;
        case "6":
            break;
        case "7":
            alert(nome + ", foi um prazer ter você no nosso Hotel, esperamos que nos utilize novamente em algum outro momento\n\natt: equipe do Habbo Hotel")
            window.close();
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




