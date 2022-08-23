import countryEmoji from 'country-emoji'

export function formatCountryMsg(data) {
    return `
Country: *${data.country}* ${countryEmoji.flag(data.country) || ''}
New: *${data.cases.new}*
Active: *${data.cases.active}*
Recovered: *${data.cases.recovered}*
Deaths: *${data.deaths.total}*
--------
Total: *${data.cases.total}*
`
}