import { binding, given, when, then } from 'cucumber-tsflow';
import DataPicker from '../pages/DataPicker';
import { expect } from 'chai';

@binding()
export default class DataPickerSteps {
  private pagina!: DataPicker;
  private dados?:any;

  constructor() {
    this.pagina = new DataPicker();
  }

  @given(/^que estou na pagina de Data$/)
  public async queEstouNaPaginaDeData() {
    await this.pagina.abrir();
  }

  @when(/^seleciono os seguintes dados:$/)
  public async selecionoOsSeguintesDados(table:any) {
    await this.pagina.preencherData();
  }

  @when(/^confirmo a selecao da data$/)
  public async confirmoASelecaoDaData() {
    await this.pagina.ClickOk();
  }

  @then(/^visualizo a data selecionada "([^"]*)"$/)
  public async visualizoADataSelecionadas(dataSelecionada:string) {
    //  const texto = await this.pagina.ExistText();
    //  console.log("===========================================");
    //  console.log(texto);

  }




}