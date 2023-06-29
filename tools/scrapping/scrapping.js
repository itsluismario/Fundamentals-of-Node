const puppeteer = require('puppeteer');

// Funcion autoejecutada asíncrona
(async () => {
    console.log('Launch browser');
    const browser = await puppeteer.launch({ headless: false });
    
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');    
    
    var titleOne = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerText);
        return h1.innerText;
    })

    console.log(titleOne);
    
    console.log('Closing browser');
    browser.close();
    console.log('Browser closed');



})();