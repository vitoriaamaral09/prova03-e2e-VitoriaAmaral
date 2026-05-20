import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import NamesaContatoElements from '../elements/NamesaContatoElements';
import BasePage from './BasePage';

export default class NamesaContatoPage extends BasePage {
  readonly namesaContatoElements: NamesaContatoElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.namesaContatoElements = new NamesaContatoElements(page);
  }

  async preencherFormulario(): Promise<void> {

    await this.namesaContatoElements
      .getCampoNome()
      .fill(faker.person.fullName());

    await this.namesaContatoElements
      .getCampoTelefone()
      .fill('11995649049');

    await this.namesaContatoElements
      .getCampoEmail()
      .fill(faker.internet.email().toLowerCase());

    await this.namesaContatoElements
      .getCampoEmpresa()
      .fill('Restaurante Teste');

    await this.namesaContatoElements
      .getCampoCargo()
      .fill('Gerente');

    await this.namesaContatoElements
      .getCampoCidade()
      .fill('Sao Paulo');

    await this.namesaContatoElements
      .getCampoPerfil()
      .selectOption('Quero abrir um negócio no ramo da gastronomia');

    await this.namesaContatoElements
      .getCampoMensagem()
      .fill('Mensagem automatizada para demonstracao de preenchimento E2E.');
  }

  async validarFormularioPreenchido(): Promise<void> {

    await expect(
      this.namesaContatoElements.getCampoNome()
    ).not.toHaveValue('');

    await expect(
      this.namesaContatoElements.getCampoTelefone()
    ).toHaveValue('11995649049');

    await expect(
      this.namesaContatoElements.getCampoEmpresa()
    ).toHaveValue('Restaurante Teste');

    await expect(
      this.namesaContatoElements.getCampoMensagem()
    ).toHaveValue(
      'Mensagem automatizada para demonstracao de preenchimento E2E.'
    );

    await expect(
      this.namesaContatoElements.getBotaoEnviarMensagem()
    ).toBeVisible();
  }

  async enviarFormularioVazio(): Promise<void> {

    await this.namesaContatoElements
      .getBotaoEnviarMensagem()
      .click();
  }

  async preencherEmailInvalido(): Promise<void> {

    await this.namesaContatoElements
      .getCampoNome()
      .fill(faker.person.fullName());

    await this.namesaContatoElements
      .getCampoTelefone()
      .fill('11995649049');

    await this.namesaContatoElements
      .getCampoEmail()
      .fill('email-invalido');

    await this.namesaContatoElements
      .getCampoEmpresa()
      .fill('Restaurante Teste');

    await this.namesaContatoElements
      .getCampoCargo()
      .fill('Gerente');

    await this.namesaContatoElements
      .getCampoCidade()
      .fill('Sao Paulo');

    await this.namesaContatoElements
      .getCampoPerfil()
      .selectOption('Quero abrir um negócio no ramo da gastronomia');

    await this.namesaContatoElements
      .getCampoMensagem()
      .fill('Mensagem teste');

    await this.namesaContatoElements
      .getBotaoEnviarMensagem()
      .click();
  }

  async validarMensagemErro(): Promise<void> {

    await expect(
      this.namesaContatoElements.getMensagemErro()
    ).toBeVisible();
  }
}