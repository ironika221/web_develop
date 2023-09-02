const port = 8000;

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

const URL="https://www.amazon.co.jp/s?k=%E3%82%B0%E3%83%A9%E3%83%9C&i=computers&crid=2JAQ2WV0D0XX8&sprefix=%E3%81%90%2Ccomputers%2C155&ref=nb_sb_ss_ts-doa-p_1_1";
const data = [];
axios(URL)
.then((response) => {
    const htmlParser = response.data;
    //console.log(htmlParser);

    const $ = cheerio.load(htmlParser);
    $('.sg-col-inner',htmlParser).each(function(){
        const title = $(this).find('.a-text-normal').text();
        const price =$(this).find('.a-price-whole').text();
        data.push({title,price});
        console.log(data);
    })
}).catch(error => console.log(error));
 app.listen(port, console.log('server running'));