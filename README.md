# Testes de aceitação
Os testes são executados utilizando Cucumber e Puppeteer e escritos 
utilizando TypeScript. O foco é testar o comportamento do sistema.

## Depêndencias

|  Nome  |  Link  |
| ------ | ------ |
| NPM | https://www.npmjs.com/ |
| TypeScript for Node | https://github.com/TypeStrong/ts-node |
| YAML for JavaScript | https://github.com/nodeca/js-yaml |
| TypeScript | https://www.typescriptlang.org/ |
| Cucumber | https://github.com/cucumber/cucumber-js |
| Puppeteer | https://github.com/GoogleChrome/puppeteer |


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

### Local
As configurações que são feitas para a execução dos cenários de teste começam pelo `node.d.ts`, que
criam variáveis globais que serão utilizadas durante todo o processo. No `global.ts` é onde acontece
a criação e estruturação do navegador e dos hooks.
Na pasta raiz do projeto, o arquivo `cucumber.js` que será responsável por executar o Cucumber
com seus parâmetros. 
Também na pasta raiz do projeto você encontra o `package.json`, onde é possível verificar o que cada
script da linha de comando irá executar.

**É necessário executar este comando para executar os teste:**

```sh
$ npm run test
```