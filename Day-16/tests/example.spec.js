// @ts-check
// import { test, expect } from '@playwright/test';


// test.beforeAll(async()=>{
//   console.log('Before all the  test case, this will run')
// })


// test.beforeEach(async()=>{
//   console.log('Before each test case, this will run')
// })

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();


// });


// test.afterAll(()=>{
//   console.log('After all test case, this will run')
// })


// test.afterEach(async()=>{
//   console.log('After each test case, this will run')
// })









// @ts-check
import { test, expect } from '@playwright/test';

test.describe('testing index.html', async()=>{


  test.beforeEach(async({page})=>{
    await page.goto('http://127.0.0.1:5500/Day-13/webapp/public/index.html')

  });


  test('handle alert', async({ page }) =>{
    const btn = page.locator('#alertbtn');
    await btn.click();

    //handle dialog box

    page.on('dialog', dialog =>{
      expect(dialog.message()).toBe('Hello');
      dialog.accept() //ok
    })
  });


  test('check home title', async ({ page })=>{
    const heading  = page.getByRole('heading', {name: 'Home'});

    await expect(heading).toBeVisible();
  });


})



test.describe('testing login form', ()=>{


  test.beforeEach(async ({ page })=>
  await page.goto('http://localhost:3000/login.html'));



  const loginData = [
    {
      username : 'tom',
      password : 'tom',
      expected : "Username length must be greater than 3 & Password 5"
    },{
      username: "tom123",
      password: "tom",
      expected: "Username length must be greater than 3 & Password 5"

    },{
username: "admin123",
      password: "admin123",
      expected: "Login successful"
    },{
      username: "admin123",
      password: "admin12345",
      expected: "Invalid credentials"

    }
  ]

  loginData.forEach(async data =>{
    test(`Checking login form with ${data.username}, ${data.password}`, async({ page })=>{
      const username = page.locator('#username');

      const password = page.locator('#password');

      const btn = page.locator('#loginBtn');

      const msg = page.locator('#msg');


      await username.fill(data.username);
      await password.fill(data.password);

      await btn.click();
      await expect(msg).toHaveText(data.expected);
    });
  });



});