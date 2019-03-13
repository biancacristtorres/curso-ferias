## Boas práticas no Front:



Microcommits, mas **- antes fazer um push -,** lembre-se de:


**1** - Rodar os testes unitários:

> npm run test:unit


**2** - Rodar os testes de aceitação:

> **Pelo docker compose:**
>
> docker-compose up --build --exit-code-from=run_at
> 
> **Na mão =):**
>
> npm run build:at
>
> node .\stubs\
>
> npm run serve:stub
>
> npm run test:at


**3** - Rodar a SPA, verificando se algum erro de LINT impedirá a subida
	
> **Para rodar a aplicação preparada para o servidor de stubs:**
>
> npm run serve:stub
>
> **Para rodar a aplicação:**
>
> npm run serve

_____________

Se tudo correu bem: git push. Depois disso, lembre-se de:


**1** - Acompanhar o build no pipeline

>  http://bit.ly/pipeFront


**2** - Fazer um teste exploratório no ambiente publicado com o inspecionador aberto, para verificar possíveis erros de console/network

> **Homologação:**
>
> https://cloud-hml.animaeducacao.com.br/rematricula/login
>
> **DEV:**
>
> https://cloud-dev.animaeducacao.com.br/rematricula/login


## Atualização e publicação da imagem base para acceptance tests

**1** - Instalar o azure-cli. Referência: https://chocolatey.org/packages/azure-cli

**2** - Realizar o login no registry
> az acr login -n azure.anima.io -u <usuario> -p <password>


**2** - Executar os comandos abaixo para buil e push da imagem
> docker build -t servico-rematricula-frontend-at:{versao} -f build/acceptance-tests/Dockerfile .
> 
> npm run build:at
>
> node .\stubs\
>
> npm run serve:stub
>
> npm run test:at
