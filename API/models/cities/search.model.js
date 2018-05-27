var http = require("../../models/helpers/http.model");

/* GET City Search. */
function search(q = "", longitude = 200, latitude = 200, callback)
{

    var url = `/query-pipelines/COVEO-Countries-default/collections/COVEO-Countries/select?&q=${q}&latitude=${latitude}&longitude=${longitude}`;

    http.get(url, 
             function(err, body)
             {
                if (err != null) callback(err);
                 
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
