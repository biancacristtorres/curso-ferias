// import { binding, given, when, then } from 'cucumber-tsflow';
// import CheckRadio from '../pages/CheckRadio';
// import { expect } from 'chai';


// @binding()
// export default class CheckRadioSteps {

//     private pagina!: CheckRadio;

//     constructor() {
//         this.pagina = new CheckRadio();
//     }

//     @given(/^que estou na pagina de radio e check$/)
//     public async queEstouNaPaginaDeRadioECheck() {
//         await this.pagina.abrir();
//     }

//     @when(/^realizo a selecao do tipo "([^"]*)"$/)
//     public async realizoASelecaoDoTipos(radio:string) {
//         await this.pagina.ClickRadio();
//     }

//     @then(/^visualizo o radio selecionado$/)
//     public async visualizoORadioSelecionado() {
//     const checked = await this.pagina.RadioChecked();
//     expect(checked).to.be.equal(true);
//     }


//     @when(/^realizo a marcacao do tipo "([^"]*)" e "([^"]*)"$/)
//     public async realizoAMarcacaoDoTiposEs(checkPuple:string, checkWhite:string) {
//         await this.pagina.clickCheckPuple();
//         await this.pagina.clickCheckWhite();
//     }

//     @then(/^visualizo os checkboxs marcados$/)
//     public async visualizoOsCheckboxsMarcados() {
//         const checkPuple = await this.pagina.ValidateCheckPuple();
//         expect(checkPuple).to.be.equal(true);
//         const checkWhite = await this.pagina.ValidateCheckWhite();
//         expect(checkWhite).to.be.equal(true);
//         // expect([checkPuple, checkWhite]).to.equal([true, true]);
//     }


// }