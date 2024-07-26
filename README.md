# Calculadora com JavaScript

## Descrição
O projeto foi desenvolvido com base <a href="https://youtu.be/oRZQ5EZOrQk?si=VEA60MzjpRzzYCpe">no video do canal Fernando Leonid</a> utilizando HTML e CSS para estruturar e as funcionalidades do JavaScript para criar uma calculadora que realiza as operações básicas de soma, subtração, multiplicação e divisão.

## Instruções de uso
A interação com a calculadora pode ser feita por meio de cliques diretos na interface ou pelas teclas do teclado. 

Breve descrição de alguns dos botões da calculadora:
- **CE** : Limpa o display, mas mantém a operação e o número que foi acionado inicialmente
- **C** : Limpa todo o conteúdo da memória, sem a necessidade de  recarregar a página
- **≪** : Limpa o conteúdo do display em um caractere da direita para a esquerda
- **±** : Torna o número negativo (caso queira desfazer essa ação, basta clicar sobre o botão novamente)

Atalhos no teclado:
- **F9** : torna o número negativo (±)
- **Enter** : mostrar o resultado da operação
- **C** : Limpa somente o display (CE)
- **Esc**: Limpa todo o conteúdo da memória (C)

## Implementações feitas na calculadora
Além de seguir os passos aplicados no video para criar a calculadora, resolvi aprimorá-la com algumas funcionalidades:

- Diminuir o tamanho da fonte do número conforme sua adição para a visualização total dos números inseridos pelo usuário
- Impedir que mais de um zero seja adicionado quando apenas houver ele no display
- Caso o número 0 for adicionado primeiro no display e outro número diferente de zero for clicado, esse número será posto no lugar do zero
- Impedir que mais de 15 digitos sejam adicionados no display
- Colocar a tecla F9 como opção de inverter o número para negativo ou positivo


## Contribuição
Contribuições para ampliar as funcionalidades da calculadora são muito bem-vindas. Fiquem a vontade para abrir issues se acharem algum problema ou pull requests para melhorar a calculadora :)
