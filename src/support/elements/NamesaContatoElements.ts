import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class NamesaContatoElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoNome(): Locator {
    return this.page.locator('input[name="fullname"]');
  }

  getCampoTelefone(): Locator {
    return this.page.locator('input[name="field[1]"]');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[name="email"]');
  }

  getCampoEmpresa(): Locator {
    return this.page.locator('input[name="field[13]"]');
  }

  getCampoCargo(): Locator {
    return this.page.locator('input[name="field[8]"]');
  }

  getCampoCidade(): Locator {
    return this.page.locator('input[name="field[9]"]');
  }

  getCampoPerfil(): Locator {
    return this.page.locator('select[name="field[10]"]');
  }

  getCampoMensagem(): Locator {
    return this.page.locator('textarea[name="field[12]"]');
  }

  getBotaoEnviarMensagem(): Locator {
    return this.page.locator('button[type="submit"]', {
      hasText: 'Enviar mensagem'
    });
  }
}
