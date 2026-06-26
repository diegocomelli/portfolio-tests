import { test, expect } from '@playwright/test';

test('Login no portfólio Diego Comelli', async ({ page }) => {

  await page.goto('https://diegocomelli.com.br');

  await page.getByRole('button', { name: 'Já tenho cadastro' }).click();

  await page.getByRole('textbox', { name: 'E-mail' }).fill('teste@gmail.com.br');

  await page.getByRole('textbox', { name: 'Senha' }).fill('123456');

  await page.getByRole('button', { name: 'Entrar', exact: true }).click();

  // Aguarda o carregamento da área logada
  await page.waitForTimeout(3000);

  // Salva um print
  await page.screenshot({
    path: 'login-sucesso.png',
    fullPage: true
  });

  // Verifica se o login foi realizado
  await expect(page).not.toHaveURL('https://diegocomelli.com.br/');
});