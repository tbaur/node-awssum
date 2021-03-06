// --------------------------------------------------------------------------------------------------------------------
//
// twitter-config.js - config for Twitter
//
// Copyright (c) 2012 AppsAttic Ltd - http://www.appsattic.com/
// Written by Andrew Chilton <chilts@appsattic.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------

// requires
// none

// --------------------------------------------------------------------------------------------------------------------

module.exports = {

    ListsAll : {
        // request
        path : '/1/lists/all.json',
        args : {
            UserId : {
                required : false,
                type     : 'param',
            },
            ScreenName : {
                required : false,
                type     : 'param',
            },
        },
        auth : true,
        // response
        extractBody : 'json',
    },

};

// --------------------------------------------------------------------------------------------------------------------
