const request = require('request');
const config = require('../../config/config.json');

/* Http GET Fusion. */
function get(url, callback)
{
    const buffer = new Buffer(config.fusion.username + ":" + config.fusion.password);
    const pwd = buffer.toString('base64');

    return request(`${config.fusion.endpoint}${url}`, 
            { json: true, headers: { Authorization: `Basic ${pwd}` } }, 
            (err, res, body) => 
            {
                if (err) { 
                    callback(err, null);
                }
                callback(null, body);
            }
    );
}

module.exports = { get: get };
