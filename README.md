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

    **Iniciando robo de texto**
    -Criado um arquivo chamado text.js o qual incluimos os dados e funções do robô de texto.
    - Usamos o algorithmia para buscar o conteúdo na wikipédia, uma constante para pegar a APIKey em um arquivo .json incluido no gitignore e o sbd que é uma dependência especializada em separar textos em sentenças.
    -Como para processeguir precisamos inicialmente terminar o robô de textos, fizemos dele uma função assíncrona (com async) e utilizando await para esperar acabar as funções antes de prosseguir.
    - A primeira função do robo de texto é a de buscar o conteúdo na wikipédia usando o algorithmia para isso. Por ultimo, colocamos o conteúdo adquirido dentro prorpiedade sourceContentOriginal do content
    -Após isso vamos tratar esses dados vindos da wikipédia com a função sanitizeContent que vai tirar as linhas brancas e markdowns, remover as datas dos textos e por último, colocar o resultado na propriedade sourceContentSanitized.
    -Após isso só nos resta pegar o conteúdo sanitizado e quebrá-lo em sentenças, utlizando o sbd para isso. Quebramos em sentenças e jogamos em um array dentro de content, fazendo por fim vários objetos dentro da propriedade com um text, keywords e images. O qual cada sentense gera um novo objeto dentro da propriedade sentences.

    - Para iniciarmos no index.js esse robô, usamos a async e await para aguardar o término do processamento dele para prosseguir com as funções.

    -Criamos uma conta no IBM Cloud e colocamos as credential do Natural Language Understanding, para funcionar, cadastramos a APIKeyWaton, uma classe V1 e uma instância nlu. Após isso geramos uma function para ele buscar em cada sentence retornada pelo Algorithmia as palavras chaves.

    - fetchWatsonAndReturnKeyWords -> usaremos essa func para preencher a propriedades keywords de todos nossas sentenças
