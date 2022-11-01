# Fullstack Challenge 🏅 2021 - Space Flight News

## Introdução

Este é um desafio para que possamos ver as suas habilidades como Fullstack Developer.

Nesse desafio você deverá desenvolver uma REST API que utilizará os dados do projeto [Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation), uma API pública com informações relacionadas a voos espaciais. Também deverá desenvolver um projeto front-end para consumir as informações da sua API.

O projeto a ser desenvolvido por você tem como objetivo exibir os dados dos artigos, com o título, imagem, resumo e data de publicação. Para isso você deve seguir o wireframe que você encontrará logo abaixo. Atente-se, ao desenvolver a aplicação front-end, para conceitos de usabilidade e adeque o wireframe com elementos visuais para os usuários do seu sistema.

[SPOILER] As instruções de entrega e apresentação do challenge estão no final deste Readme (=

### Instruções iniciais obrigatórias

- Utilizar o seu github pessoal para publicar o desafio. Confirme que a visibilidade do projeto é pública (não esqueça de colocar no readme a referência a este challenge);
- Utilize as seguintes tecnologias:

#### Tecnologias (Front-End):
- Com ou sem framework (React, Angular, Vue.js, Javascript Vanilla, ou outro da sua escolha)
- Estilização (Material UI, Semantic UI, Styled Components, etc). Ou escrever o seu proprio sob medida 👌
- CSS Flexbox + CSS Grid
- Design Mobile First
- Gestão de dados (Redux, Context API, Localstorage, etc)
- Conceitos de Programação Funcional em JS (pelo menos .map, .filter e .reduce)

Atente-se, ao desenvolver a aplicação front-end, para conceitos de usabilidade e adeque a interface com elementos visuais para os usuários do seu sistema.

#### Tecnologias (Back-End):
- API (Node.js, PHP, Ruby, ou outra da sua escolha) com ou sem uso de frameworks
- Banco de dados (Postgres, MySQL, MongoDB, etc).

Como sugestões, pode criar um banco de dados grátis **MongoDB** usando Atlas: https://www.mongodb.com/cloud/atlas. Para conhecer outras plataformas de banco de dados, acesse https://coodesh.com/blog/candidates/heroku-acabou-e-agora-veja-alternativas/

### Modelo de Dados:

Para a definição do modelo consulte a rota [GET]/articles da API, nesta rota você pode ver a estrutura como o exemplo:

```json
{
    "id": 0,
    "featured": false,
    "title": "string",
    "url": "string",
    "imageUrl": "string",
    "newsSite": "string",
    "summary": "string",
    "publishedAt": "string",
    "launches": [
      {
        "id": "string",
        "provider": "string"
      }
    ],
    "events": [
      {
        "id": "string",
        "provider": "string"
      }
    ]
  }
```

### Back-End:

Nessa etapa você deverá construir uma API Restful com as melhores práticas de desenvolvimento, baseada na API [Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation). Para isso você deve executar os passos a seguir:

**Obrigatório 1** - Você deverá desenvolver as seguintes rotas:

- `[GET]/: ` Retornar um Status: 200 e uma Mensagem "Fullstack Challenge 2021 🏅 - Space Flight News"
- `[GET]/articles/:`   Listar todos os artigos da base de dados, utilizar o sistema de paginação na resposta do endpoint para não sobrecarregar a REQUEST
- `[GET]/articles/{id}:` Obter a informação somente de um artigo

**Obrigatório 2** - Para alimentar o seu banco de dados você deve criar um script para armazenar os dados de todos os artigos na Space Flight News API. 

**Obrigatório 3** - Além disso você precisa desenvolver um CRON para ser executado diariamente às 9h e armazenar em seu os novos artigos ao seu banco de dados. (Para essa tarefa você poderá alterar o seu modelo de dados) 

**Diferencial 1** Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

**Diferencial 2** Configurar um sistema de alerta se houver algum falha durante a sincronização dos artigos;

**Diferencial 3** Descrever a documentação da API utilizando o conceito de Open API 3.0;

**Diferencial 4** Escrever Unit Tests para os endpoints da API;

**Diferencial 5** Escrever rotas para criar, atualizar e deletar artigos;

- `[POST]/articles/:` Adicionar um novo artigo
- `[PUT]/articles/{id}:` Atualizar um artigo baseado no `id`
- `[DELETE]/articles/{id}:` Remover um artigo baseado no `id`

### Front-End:

Nessa etapa você deverá desenvolver uma aplicação web para consumir a API que você criou. Você deve limitar o `request` para exibir apenas 10 resultados.

Para o desenvolvimento você pode utilizar algum framework CSS ou criar seu proprio estilo, recomendamos:
- Tailwind CSS: https://tailwindcss.com/
- Material UI: https://material-ui.com/
- Angular Material: https://material.angular.io/
- Bootstrap: https://getbootstrap.com/
- Bulma: https://bulma.io/

#### Wireframe

![Wireframe](./img/wireframe.png) 

#### Cores, fontes e inspiração

![Cores, fontes e inspiração](./img/font-colors.png)

**Obrigatório 1** - Seguir o wireframe para a página de listagem de artigos;

**Obrigatório 2** - Seguir a paleta de cores e as fontes definidas na imagem acima;

**Obrigatório 3** - Desenvolver a funcionalidade do buscador para que seja possível listar artigos que contenham as palavras no título;

**Obrigatório 4** - Desenvolver a funcionalidade para ordenar os artigos por data, da mais antiga para a mais nova e da mais nova para a mais antiga;

**Obrigatório 5** - Ao clicar no botão "Carregar mais" deve fazer uma nova requisição para carregar mais 10 artigos na página.

**Diferencial 1** Desenvolver as funcionalidades para criar , atualizar e remover artigos.

**Diferencial 2** Escrever Unit Tests ou E2E Test. Escolher a melhor abordagem e biblioteca;

**Diferencial 3** Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Se está usando github pessoal, referencie que é um challenge by coodesh:  

>  This is a challenge by [Coodesh](https://coodesh.com/)

## Finalização e Instruções para a Apresentação

Avisar sobre a finalização e enviar para correção.

1. Confira se você respondeu o Scorecard da Vaga que chegou no seu email;
2. Confira se você respondeu o Mapeamento Comportamental que chegou no seu email;
3. Acesse: [https://coodesh.com/challenges/review](https://coodesh.com/challenges/review);
4. Adicione o repositório com a sua solução;
5. Grave um vídeo, utilizando o botão na tela de solicitar revisão da Coodesh, com no máximo 5 minutos, com a apresentação do seu projeto. Foque em pontos obrigatórios e diferenciais quando for apresentar.
6. Adicione o link da apresentação do seu projeto no README.md.
7. Verifique se o Readme está bom e faça o commit final em seu repositório;
8. Confira a vaga desejada;
9. Envie e aguarde as instruções para seguir no processo. Sucesso e boa sorte. =)

## Suporte

Use a [nossa comunidade](https://coodesh.com/desenvolvedores#community) para tirar dúvidas sobre o processo ou envie um e-mail para contato@coodesh.com.


