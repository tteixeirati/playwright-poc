import { test, expect } from '@playwright/test';

test('Get my messages', async ({ page }) => {

  await page.goto('https://web.whatsapp.com/');

  await expect(page).toHaveTitle(/WhatsApp/);

  await page.getByRole('button', { name: 'Archived' }).click();

  var prsn1MessageTemp = '';
  var prsn2MessageTemp = '';
  var prsn1Message2
  var prsn2Message2

  while (1 == 1) {
    try {
      prsn1Message2 = await page.locator("//span[@title='Me Algar Udia']/../../../../div[2]").textContent();
    } catch (error) {
      console.log(error)
    }
    if (prsn1Message2 != null && prsn1Message2 != prsn1MessageTemp) {
      console.log("Prsn1 Message: " + prsn1Message2)
      prsn1MessageTemp = prsn1Message2;
    }

    try {
      prsn2Message2 = await page.locator("//span[@title='Claro']/../../../../div[2]").textContent();
    } catch (error) {
      console.log(error)
    }
    if (prsn2Message2 != null && prsn2Message2 != prsn2MessageTemp) {
      console.log("Prsn2 Message: " + prsn2Message2)
      prsn2MessageTemp = prsn2Message2;
    }

    await page.waitForTimeout(1000);
  }

});
