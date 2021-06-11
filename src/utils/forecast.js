const request = require('request')

const forecast = (latitude, logitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=30745ff60ecf0331ba5477aefdfbfdc7&query=' + latitude + ',' + logitude + '&units=f'
    
    request({ url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ '. It is currently '+ body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike+ ' degrees out')
        }
    })
}

module.exports = forecast