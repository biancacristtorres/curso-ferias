import { BasePage } from 'componente-frontend-core/tests/Page';

export default class CheckRadio extends BasePage {
    get url() {
        return '/buscaelementos/radioecheckbox';
    }

    public async Radio() {
        return await this.getElement('#blue');
    }

    public async ClickRadio() {
        const elemento = await this.Radio();
        await elemento.click();
        //await this.delay(3000);
        // await this.isChecked(radio,'#blue');
    }
    private async delay(ms: number)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    public async RadioChecked() {
        const elemento = await this.Radio();
        return await (await elemento.getProperty('checked')).jsonValue();
    }

    public async CheckPuple() {
        return await this.getElement('#purple');
    }

    public async CheckWhite() {
        return await this.getElement('#white');
    }

    public async clickCheckPuple() {
        const CheckPuple = await this.CheckPuple();
        await CheckPuple.click();
        // await this.delay(3000);
    }

    public async clickCheckWhite() {
        const CheckWhite = await this.CheckWhite();
        await CheckWhite.click();
    }

    public async ValidateCheckPuple() {
        const elemento = await this.CheckPuple();
        return await (await elemento.getProperty('checked')).jsonValue();
    }

    public async ValidateCheckWhite() {
        const elemento = await this.CheckWhite();
        return await (await elemento.getProperty('checked')).jsonValue();
    }


}