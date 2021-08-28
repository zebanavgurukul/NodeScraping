const express = require("express");
const Api = express();
const DatadbDB   = require("../model/Datadb")
var request = require('request');
var cheerio = require('cheerio');

Api.get('/scrape', function(req, res){
	scrape();
	res.send('See console for results.')
});

function scrape(){
	var url = 'https://www.ndtv.com/india?pfrom=home-mainnavgation';
	request(url, function(error, response, body){
		if(!error){
			var $ = cheerio.load(body);
			var result;
			$('.news_Itm-cont').filter(function(){
				var data = $(this);
				title = data.children().first().text();
				result = title;
                // console.log(result);
                let insertdata = {
                    Headline  : result
                }
                DatadbDB.post_data(insertdata)
                .then(() => {
                    // res.send('insert.....')
                }).catch((err) => {
                    res.send(err)
                })
			});
		}
	})
}

Api.get('/getdata/:ID', (req,res) => {
    var ID = req.params.ID
    DatadbDB.getid(ID)
    .then((Response) => {
        res.send(Response)
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = Api
