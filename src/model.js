'use strict';
var mongoose = require('mongoose');
var logger = require('./logger');
var Schema = mongoose.Schema;


var TshirtSchema = new Schema({
    color: {
        type: String,
        required: 'Kindly enter the color of the tshirt'
    },
    size: {
        type: String,
        required: 'Kindly enter the size of the tshirt'
    },
    label: {
        type: String,
        required: 'Kindly enter the label of the tshirt'
    },
    rfid: {
        type: String,
        required: 'Kindly enter the rfid of the tshirt'
    },
    pastLocations: [{
        type: Schema.Types.ObjectId,
        ref: 'TrackRfid'
    }]
});

module.exports = mongoose.model('Tshirt', TshirtSchema);

var TrackRfidSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    rfid: {
        type: String,
        required: 'Kindly enter the rfid of the tshirt'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('TrackRfid', TrackRfidSchema,);

var BoxSchema = new Schema({
    tshirtRfids: {
        type: Array,
        required: 'Kindly list of tshirt rfids'
    },
    rfid: {
        type: String,
        required: 'Kindly enter the rfid of the tshirt'
    }
});

module.exports = mongoose.model('Box', BoxSchema);
// module.exports = {
//     Tshirt: Tshirt,
//     TrackRfid: TrackRfid,
//     Box: Box
// }
