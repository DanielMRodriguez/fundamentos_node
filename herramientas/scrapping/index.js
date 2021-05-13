const puppeter = require('puppeteer');

(async () => {
  console.log('Lanzamos navegador');
  try {
    //   { headless: false }
    const browser = await puppeter.launch();

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    var titulo1 = await page.$$eval('h1', (e) => {
      return e[0].innerHTML;
    });

    console.log(titulo1);
    console.log('Cerramos navegador.....');
    browser.close();
    console.log('navegador cerrado');
  } catch (error) {
    console.error(error);
  }
})();
