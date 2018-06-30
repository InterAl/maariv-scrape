const cheerio = require('cheerio');
const axios = require('axios');

const url = process.argv[2];

async function start() {
    const response = await axios(url);
    const html = response.data;
    const $ = cheerio.load(html)
    const articleTitle = $('.article-title').text();
    const articleSubtitle = $('.article-he-teaser').text();
    const articleReporter = $('.article-he-reporter').text().trim();
    const articleDate = $('.article-he-date').text().trim();
    const articleText = $('.article-content > .article-text').text().trim();
    console.log(articleReporter + '\n');
    console.log(articleDate + '\n');
    console.log(articleTitle + '\n');
    console.log(articleSubtitle + '\n');
    console.log(articleText);
    process.exit();
}

start();

setTimeout(() => {}, 120000)
