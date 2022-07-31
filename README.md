![](https://portal.alphaedtech.org.br/images/edtech/logo-edtech.webp)

# Back-End

## Módulo 7 - JavaScript - Part 19

### Exercícios de classe 🏫

#### Questão 1
Crie uma página web que simule um sorteio, considerando os seguintes pontos: 
* Utilizando o conceito de closures, crie uma função que instancie cartelas para o sorteio, cada uma com 10 números, selecionados de 1 a 75;
* A cartela deve conter closures que realizem as seguintes ações:
  - listar os números da cartela;
  - marcar um número como sorteado;
  - verificar se todos os números da cartela foram marcados;
* Da mesma forma, crie uma função que instancie um “sorteador” (tal como um globo de bingo), responsável por armazenar e sortear os números do sorteio, considerando que:
  - a função do sorteador deverá receber dois parâmetros, max e min, a serem utilizados para construir um array de números que podem ser sorteados pelo sorteador;
* O sorteador deve conter closures que realizem as seguintes ações:
  - sortear um número que ainda não foi sorteado;
  - verificar se um número já foi sorteado;
* A página deve mostrar, além de um sorteador, duas ou mais cartelas de sorteio, ambos instanciados com as funções criadas nos itens anteriores;
* Um botão “INICIAR” deve ser utilizado para iniciar o sorteio, sendo que, após o início, um número seja sorteado a cada 5 segundos, até que não sobrem mais números no sorteador;
* Os números das cartelas devem ser clicáveis, sendo marcados caso o número já tenha sido sorteado;
* Quando uma cartela tiver sido totalmente marcada, uma mensagem deve indicar o ganhador do sorteio, e o sorteio de novos números deve ser interrompido;

###### tags: `módulo 7` `back-end` `JavaScript`

