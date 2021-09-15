const express = require("express");
const Api = express();
const dbQuery = require("../model/Scrapingdb")
var request = require('request');
var cheerio = require('cheerio');

Api.post('/scrape', (req,res) => {
	var url = 'https://www.ndtv.com/india?pfrom=home-mainnavgation';
	request(url, function(error, response, body){
		if(!error){
			var scrape = cheerio.load(body);
			var result;
			 scrape('.news_Itm-cont').filter(async function(){
				var scrapedata = scrape(this);
				title = scrapedata.children().first().text();
				result = title;
                let insertdata = {
                    Headline  : result
                }
                await dbQuery.insertData(insertdata)
			});
            res.send("inseted...")
		}
        else {
            res.send(error)
        }
	})
})

module.exports = Api