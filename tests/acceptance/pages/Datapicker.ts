import { BasePage } from 'componente-frontend-core/tests/Page';

export default class DataPicker extends BasePage {
    get url() {
        return '/widgets/datapicker';
    }

    public async Dt() {
        return await this.getElement('#datepicker');
    }

    public async TodosAnos() {   
        return await this.getElement('.select-year >.select-dropdown.dropdown-trigger');
    }

    public async SelecionarAno() {
        return await this.getElement('body[style="overflow: hidden;"] > .dropdown-content.select-dropdown:first-of-type > li:nth-child(10)');
    }

    public async TodosMeses() {
        return await this.getElement('.select-month > .select-dropdown.dropdown-trigger');
    }

    public async SelecionarMes() {
        return await this.getElement('body[style="overflow: hidden;"] > .dropdown-content.select-dropdown:last-of-type > li:nth-child(4)');
    }

    public async Dia() {
        return await this.getElement('td[data-day="28"] > button');
    }

    public async BtnOk() {
        return await this.getElement('.confirmation-btns > .btn-flat.datepicker-done.waves-effect');
    }

    public async ExisteText() {
        // const elem =  await document.querySelector('body').includes();
        // elem.includes('Apr');
    }

    public async preencherData() {
        const dt = await this.Dt();
        await dt.click();

        const todosAnos = await this.TodosAnos();
        await todosAnos.click();

        const selecionarAno = await this.SelecionarAno();
        await selecionarAno.click();

        const todosMeses = await this.TodosMeses();
        await todosMeses.click();

        const mes = await this.SelecionarMes();
        await mes.click();

        const dia = await this.Dia();
        await dia.click();
    }

    public async ClickOk() {
        const btnOk = await this.BtnOk();
        await btnOk.click();
    }

    private async Delay(ms: number)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
}