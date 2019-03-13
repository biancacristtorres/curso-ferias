# #language: pt

# Funcionalidade: Cadastro de Usuário
#     Sendo um usuário do site
#     Posso acessar o site de Automação
#     Para realizar cadastros de um novo usuário
    
# Cenário: Cadastro com sucesso
#   Dado que estou na pagina de cadastro
#   E possuo os seguintes dados
#     | Nome         | Isabela             |
#     | UltimoNome   | Oliveira            |
#     | Email        | isabela@mail.com.br |
#     | Endereco     | Rua X, 1458         |
#     | Universidade | Unibh               |
#     | Profissao    | Analista            |
#     | Genero       | Feminino            |
#     | Idade        | 17                  |
#   Quando realizo o cadastro do usuario
#   Então visualizo a mensagem de sucesso "Usuário Criado com sucesso"
