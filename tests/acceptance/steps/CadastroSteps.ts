import { binding, given, when, then } from 'cucumber-tsflow';
import Cadastro from '../pages/Cadastro';
import { expect } from 'chai';

@binding()
export default class CadastroSteps {
  private pagina!: Cadastro;
  private dados?:any;

  constructor() {
    this.pagina = new Cadastro();
  }

  @given(/^que estou na pagina de cadastro$/)
  public async queEstouNaPaginaDeCadastro() {
    await this.pagina.abrir();
  }
  @given(/^possuo os seguintes dados$/)
  public possuoOsSeguintesDados(table: any) {
    this.dados = table.rawTable;
    console.log({ table: table.rawTable });
  }

  @when(/^realizo o cadastro do usuario$/)
  public async realizoOCadastroDoUsuario() {
    await this.pagina.preencheFormulario(this.dados);
    await this.pagina.CLickCriar();
  }

  @then(/^visualizo a mensagem de sucesso "([^"]*)"$/)
  public async visualizoAMensagemDeSucessos(mensagem:string) {
    const mensagemRetorno = await this.pagina.RecuperarMensagemSucesso();
    expect(mensagemRetorno).to.be.equal(mensagem);
  }
}
