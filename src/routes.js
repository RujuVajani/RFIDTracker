'use strict';
var logger = require('./logger');
module.exports = function (app) {
    var trackRfid = require('./controller');

    //  Routes
    app.get('/', function (req, res) {
        res.send('hello world')
    })
    app.route('/tshirt/:rfid')
        .get(trackRfid.find_tshirt)
        .post(trackRfid.register_a_tshirt);

    app.route('/tshirt/:rfid/history')
        .get(trackRfid.find_tshirt);
    
    app.route('/box/:rfid')
        .get(trackRfid.find_box)
        .put(trackRfid.register_a_box);
    
    app.route('/rfid/:rfid')
        .post(trackRfid.track_rfid)
        .get(trackRfid.find_location);
    
};
