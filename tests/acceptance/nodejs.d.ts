declare const browser: import ('puppeteer').Browser;
declare const page: import ('puppeteer').Page;
declare const urlBase: string;
// declare const alunos: { [nome: string]: import ('./workspaces/model/Aluno').Aluno };
// declare const disciplinas: { [nome: string]: import ('./workspaces/model/Disciplina').Disciplina };

declare namespace NodeJS {
  interface Global {
    browser: import ('puppeteer').Browser;
    page: import ('puppeteer').Page;
    urlBase: string;
    // alunos: { [nome: string]: import ('./workspaces/model/Aluno').Aluno };
    // disciplinas: { [nome: string]: import ('./workspaces/model/Disciplina').Disciplina };
  }
}

declare interface Window {
  $features: any;
}
