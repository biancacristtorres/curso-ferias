import { BasePage } from 'componente-frontend-core/tests/Page';

export default class Cadastro extends BasePage {
  get url() {
    return '/users/new';
  }

  public async Nome() {

    return await this.getElement('#user_name');

  }

  public async Sobrenome() {

    return await this.getElement('#user_lastname');

  }

  public async email() {

    return await this.getElement('#user_email');

  }

  public async endereco() {

    return await this.getElement('#user_address');

  }

  public async universidade() {

    return await this.getElement('#user_university');

  }
  public async profissao() {

    return await this.getElement('#user_profile');

  }

  public async genero() {

    return await this.getElement('#user_gender');

  }
  public async idade() {

    return await this.getElement('#user_age');

  }

  public async Criar() {

    return await this.getElement('input[name=commit]');
  }

  public async preencheFormulario(lista: any) {
    const elementoNome = await this.Nome();
    await elementoNome.type(lista[0][1]);

    const elementoSobrenome = await this.Sobrenome();
    await elementoSobrenome.type(lista[1][1]);

    const elementoemail = await this.email();
    await elementoemail.type(lista[2][1]);

    const elementoendereco = await this.endereco();
    await elementoendereco.type(lista[3][1]);

    const elementouniversidade = await this.universidade();
    await elementouniversidade.type(lista[4][1]);

    const elementoprofissao = await this.profissao();
    await elementoprofissao.type(lista[5][1]);

    const elementogenero= await this.genero();
    await elementogenero.type(lista[6][1]);

    const elementoidade= await this.idade();
    await elementoidade.type(lista[7][1]);
  }

  public async CLickCriar(){
    const elementoCriar = await this.Criar();
    await elementoCriar.click(); 
    await this.document.waitForNavigation();
  }

  public async RecuperarMensagemSucesso() {
    return await this.getElementText('#notice');
  }
}
