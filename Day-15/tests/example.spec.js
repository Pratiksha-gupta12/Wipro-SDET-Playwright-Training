// @ts-check
import { test, expect } from '@playwright/test';

// test('amazon headphones', async ({page})=>{
//   await page.goto('https://www.amazon.com/');

//   const txtBox = page.locator('#twotabsearchtextbox');
//   await txtBox.fill('headphones');

//   const subBtn = page.locator("#nav-search-submit-text");
//   await subBtn.click();


//   await expect(page).toHaveURL(/.*headphones.*/);

// })





// test.skip('ok', ({ page })=>{
//     // fhfvhg
//     })




// test('test1', async ({ page }) => {
//   test.setTimeout(10);
//   test.step('check if 2 is 3', ()=>{
//     test.fail();
//     expect(2).toBe(3); // false ---> fail
//   })

//   test.step('check if 10 is equal to 10',()=>{
//     expect(5).toBe(5);
//   })
// })







//This will be failed because it is expected to fail but it is passed


// test('demo', async ({ page }) => {
//   test.fail();
//   await test.step('check values', async () => {
//     expect(5).toBe(5);
//   });

// });





//This will be passed

// test('demo', async ({ page }) => {
//   await test.step('check values', async () => {
//     expect(5).toBe(5);
//   });
// });



// test('test', async ({ page }) =>{

//   await page.goto('https://www.amazon.com');
//   await page.getByRole('searchbox', {name: Search})

  
// })




test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('home decor');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  // await page.locator('.s-widget-container.s-spacing-small.s-widget-container-height-small.celwidget.slot\\=MAIN.template\\=SEARCH_RESULTS.widgetId\\=search-results_2 > span > .puis-card-container > .a-section.a-spacing-base.desktop-grid-content-view > .s-product-image-container > .rush-component > .a-link-normal').click();
  // await page.getByRole('heading', { name: 'GODONLIF Candle Warmer Lamp with Timer Dimmable, Birthday Gifts for Women Mom,' }).locator('#productTitle').click();
});
