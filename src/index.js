import express from 'express'
import {Telegraf} from 'telegraf'
import {PORT, TOKEN} from './config.js'
import { getByCountry } from './services/api.js'

const app = express()
const BOT_TOKEN = process.env.BOT_TOKEN || TOKEN

const bot = new Telegraf(BOT_TOKEN)

bot.start(ctx => {
    ctx.reply(`Welcome to COVID_BOT!\nНапишите по-английски название страны`)
})

bot.help(ctx => {
    ctx.reply(
        `Example:
        Russia,
        China,
        Spain`
    )
})

bot.hears(/.*/, async ctx => {
    const apiResponse = await getByCountry(ctx.message.text)
    if (apiResponse && apiResponse.data) {
        console.log(apiResponse.data)
    }
    return ctx.reply(`You said ${ctx.message.text}`)
})


//Стартуем работу Бота
bot.launch()
    .then(res => {
        const date = new Date()
        console.log(`Bot launched at ${date}`)
    })
    .catch(err => {
        console.log(err)
    })

app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))