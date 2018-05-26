const request = require('request');
const config = require('../../config/config.json');

/* GET City Search. */
function search(q = "", longitude = 200, latitude = 200, callback)
{
    const buffer = new Buffer(config.fusion.username + ":" + config.fusion.password);
    const pwd = buffer.toString('base64');

    return request(`${config.fusion.endpoint}/query-pipelines/COVEO-Countries-default/collections/COVEO-Countries/select?&q=${q}&latitude=${latitude}&longitude=${longitude}`, 
            { json: true, headers: { Authorization: `Basic ${pwd}` } }, 
            (err, res, body) => 
            {
                if (err) { 
                    callback(err);
                }

                var data = {
                    facets: (typeof body.facet_counts !== 'undefined') ? 
                                (typeof body.facet_counts.facet_fields !== 'undefined') ? 
                                    body.facet_counts.facet_fields :
                                    []: 
                            [],
                    results: (typeof body.response !== 'undefined') ? 
                                (typeof body.response.docs !== 'undefined') ? 
                                    body.response.docs :
                                    []: 
                                []
                };
                callback(data);
            }
    );
}

module.exports = { search: search };
