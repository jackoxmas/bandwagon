'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
    url = require('url'),
    SoundCloudStrategy = require('passport-soundcloud').Strategy,
    config = require('../config'),
    users = require('../../app/controllers/users');

module.exports = function(){
    //use soundcloud strategy
    passport.use(new SoundCloudStrategy({
            clientID: 'e4e0fdb81cf9639598a43f9071cd48c1',
            clientSecret: '73e1fe894b8b7981bc2f39fd94744a9b',
            callbackURL: 'http://localhost:3000/auth/soundcloud/callback',
            passReqToCallback: true

        },
        function(req, accessToken, refreshToken, profile, done) {
            console.log('SOUNDCLOUD BITCHES: ', profile._json);

            var providerData = profile._json;
            providerData.accessToken = accessToken;
            providerData.refreshToken = refreshToken;

            // Create the user OAuth profile
            var providerUserProfile = {
                id: profile.id,
                displayName: profile.full_name,
                followings: profile.followings_count,
                //email: profile.emails[0].value,
                username: profile.username,
                provider: 'soundcloud',
                providerIdentifierField: 'id',
                providerData: providerData
            };
            var requestData = {};
            requestData.access_token = accessToken;
            requestData.host_api = 'https://api.soundcloud.com';
            requestData.method = 'GET';
            requestData.path = '/users/' + profile.id + '/followings';
            //todo: scrub this, scrub.
            requestData.params = {clientID: 'e4e0fdb81cf9639598a43f9071cd48c1'};
            //console.log('req: ', req);
            //console.log('nice!');
            //console.log("setup providerUserProfile");
            //return done(null, profile, accessToken, refreshToken);
            users.apiRequest(requestData, done);
            //users.saveOAuthUserProfile(req, providerUserProfile, done);
            //console.log(users.me());
            //return done(null, profile);
            //var SC = require('integrations');
            //user.apiRequest('api.soundcloud.com', providerData.accessToken, )

            //var integrations = require('../../app/controllers/users')
            //users.apiRequest();
        }
    ));
};