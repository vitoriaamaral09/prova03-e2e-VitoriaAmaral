import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import NamesaContatoPage from '../support/pages/NamesaContatoPage';

test.use({
  headless: true
});

test.describe('Contato NaMesa', () => {

  const CONFIG = join(__dirname, '../support/fixtures/config.yml');

  let namesaContatoPage: NamesaContatoPage;

  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.namesaContato')
    .retrieveData();

  test.beforeEach(async ({ page }) => {

    namesaContatoPage = new NamesaContatoPage(page);

    await page.goto(BASE_URL);
  });

  test('Preencher formulario de contato', async ({ page }) => {

    await namesaContatoPage.preencherFormulario();

    await namesaContatoPage.validarFormularioPreenchido();
  });

  test('Validar campos obrigatorios vazios', async ({ page }) => {

    await namesaContatoPage.enviarFormularioVazio();

    await namesaContatoPage.validarMensagemErro();
  });

  test('Validar email invalido', async ({ page }) => {

    await namesaContatoPage.preencherEmailInvalido();

    await namesaContatoPage.validarMensagemErro();
  });

});