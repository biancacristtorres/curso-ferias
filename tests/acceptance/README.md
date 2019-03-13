# Testes de aceitação
Os testes são executados no front-end utilizando Cucumber e Puppeteer e escritos 
utilizando TypeScript. O foco é testar o comportamento do sistema, dessa forma,
não fazemos nenhuma integração externa. Para isso, é utilizado stubs para simular
as respostas que os comportamentos receberiam das API's de Rematrícula e Compra Online.

## Depêndencias
As dependências são responsáveis para que os testes de aceitação rodem tanto local,
quanto no pipeline. São softwares, bibliotecas, ferramentas ou servidores que irão
auxiliar na orquestração dos testes e na sua execução.

|  Nome  |  Link  |
| ------ | ------ |
| NPM | https://www.npmjs.com/ |
| TypeScript for Node | https://github.com/TypeStrong/ts-node |
| YAML for JavaScript | https://github.com/nodeca/js-yaml |
| TypeScript | https://www.typescriptlang.org/ |
| Cucumber | https://github.com/cucumber/cucumber-js |
| Puppeteer | https://github.com/GoogleChrome/puppeteer |
| Stubby4Node | https://github.com/mrak/stubby4node |
| Docker | https://www.docker.com/ |
| Docker Compose | https://docs.docker.com/compose/ |
| Biblioteca Front-End | https://git.animaeducacao.com.br/ulife/componente-frontend-core |

## Estrutura/Arquitetura
### features
Responsável por todos os cenários levantados até então e escritos em Gherkin.
Estão agrupados pelas funcionalidades que o sistema possui hoje.

### pages
Responsável por ter as informações dos elementos das páginas que o sistema possui. Lá é 
onde encontramos praticamente todos os identificadores de elementos e onde executamos as
ações de mais baixo nível da automação.

### steps
Responsável por ter a execução dos passos dos cenários em Gherkin. É onde possui a amarração
das features com o código que será executado por trás. Possui a execução das ações de automação 
em alto nível.

### utils
Responsável por ter alguns elementos úteis para a execução dos testes.

### workspaces
Responsável por manter a criação de facilitadores que irão ser utilizados nos testes.
Até o momento está sendo utilizado uma para alunos, para que a troca de personas entre
os cenários seja mais fluída e uma para disciplinas, que é necessário para executar
diferentes cenários e podem ser alteradas a qualquer momento.

## Configuração de execução
Para a execução dos testes, é necessário estar rodando a aplicação front-end e os stubs. Depois
de ambos estarem funcionando que os testes de aceitação devem ser executados. Abaixo segue a
explicação para execução local e através do docker.

### Local
As configurações que são feitas para a execução dos cenários de teste começam pelo `node.d.ts`, que
criam variáveis globais que serão utilizadas durante todo o processo. No `global.ts` é onde acontece
a criação e estruturação do navegador e dos hooks.
Na pasta raiz do projeto, o arquivo `cucumber.js` que será responsável por executar o Cucumber
com seus parâmetros. 
Também na pasta raiz do projeto você encontra o `package.json`, onde é possível verificar o que cada
script da linha de comando irá executar.

É necessário executar cada um dos três comandos em terminais diferentes:
```sh
$ npm run serve:stub
```
```sh
$ node stubs
```
```sh
$ npm run test:at
```

### Docker
Primeiro, executar o docker-compose que irá compor os 3 containers necessários para os cenários
de teste.
```sh
$ docker-compose up --build --exit-code-from=run_at
```

Após a execução, é recomendável a utilização do comando abaixo para desligar os containers utilizados.
```sh
$ docker-compose down
```

## Informações Adicionais
Comandos para rodar local testes específicos.
```sh
$ npm run test:at -- --name "Nome do cenario"
```
```sh
$ npm run test:at -- --tags "@test"
```
```sh
$ npm run test:at -- --tags "@smoke and @fast"
```
```sh
$ npm run test:at -- --tags "not @ignore"
```