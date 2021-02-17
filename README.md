# bots-video-maker

Aplicação para selecionar textos sobre determinados temas e com isso criar um vídeo alternando com textos e imagens realizando o upload da mesmo para o youtube


Passos

Orquestrador:

    **Tema principal para a busca**

    - Criado a pasta main app com a função start(); que irá iniciar todos os componentes
    - Criado variável content que adicionamos um atributo searchTerm que terá seu valor igual ao retorno da função askAndReturnSearchTerm()
    -Criado a função askAndReturnSearchTerm() que retornará o resultado do método da readline (biblioteca para busca instalada com npm install readline-sync) que insere um input e retorna o resultado para o atributo searchTerm

    #Para testar e rodar basta ir em terminar, acessar a pasta e "node index.js"

    **Prefixo da busca**
    - Criado um atributo chamado prefix com valor igual ao retorno da function askAndReturnPrefix()
    - Criado function askAndReturnPrefix, que possui a variável prefixel que é um array com os prefixos para a busca. Outra variável selectedPrefixIndex que usa um método da readline que busca o valor selecionado para a opção do array desejada. Por ultimo uma variável selectedPrefixText que recebe o valor do prefixo com o index retornado pelo selectedPrefixIndex. Essa function retorna esse texto.

