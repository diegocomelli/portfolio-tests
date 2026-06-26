import { test, expect } from '@playwright/test';

test('Login no portfólio Diego Comelli', async ({ page }) => {

  await page.goto('https://diegocomelli.com.br');

  // Abre o formulário de login
  await page.getByRole('button', { name: 'Já tenho cadastro' }).click();

  // Preenche usuário
  await page.getByRole('textbox', { name: 'E-mail' }).fill('teste@gmail.com.br');

  // Preenche senha
  await page.getByRole('textbox', { name: 'Senha' }).fill('123456');

  // Faz login
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();

  // Aguarda carregar
  await page.waitForTimeout(3000);

  // Salva screenshot
  await page.screenshot({
    path: 'login-sucesso.png',
    fullPage: true
  });

  // Valida que o site carregou corretamente
  await expect(page).toHaveTitle(/Diego Comelli/i);

});