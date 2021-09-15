const { Telegraf } = require('telegraf')

const bot = new Telegraf("1914945187:AAHJ8iW-0v4PaaAqllJ89owdKIR1dva0l2M");

const mysql = require("mysql")

const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "zeba@123",
    database : "india_news_scraping"
})

conn.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("connected !");
    conn.query("SELECT * FROM Headlinedata", (err, result, fields) => {
        if(err) {
            throw err;
        }
        dataStore = [];
        result.forEach(item => {
            dataStore.push({
                ID : item.ID,
                Headline : item.Headline
            })
        })
    })
})

const helpMessage = `
    untuk menggunakan bot ini ado beberapa perintah:
    /news - nutuk melihat list buah
`;

bot.help(ctx => {
    ctx.reply(helpMessage)
});

bot.command("news", ctx => {
    let newsMessage = `list Buah : \n`;

    dataStore.forEach(item => {
        newsMessage += `${item.ID}. ${item.Headline}\n`;
    })
    ctx.reply(newsMessage)
})

bot.launch();