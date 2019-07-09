'use strict';
const async = require("async");
var logger = require('./logger');

var boxDto = require('./dto/BoxDto');
var tshirtDto = require('./dto/TshirtDto');
var mongoose = require('mongoose'),
    Task = mongoose.model('Tshirt'),
    TrackRfid = mongoose.model('TrackRfid'),
    Box = mongoose.model('Box');

exports.find_tshirt = function (req, res) {

    var query = { rfid: req.params.rfid };

    Task.find(query).exec(function (err, task) {
        logger.debug(task);
        if (err)
            res.send(err);
        res.json(task);
    });

}

//     var resources = {
//         color: "$color",
//         size: "$size",
//         label: "$label",
//         rfid: "$rfid"
//     };

//     Task.aggregate([{
//         $group: resources
//     }, {
//         $lookup: {
//             from: "TrackRfid", // collection to join
//             localField: "rfid",//field from the input documents
//             foreignField: "rfid",//field from the documents of the "from" collection
//             as: "pastLocations"// output array field
//         }
//         }], function (error, data) {
//             console.log(res)
//          res.json(data);
//         //handle error case also
//     });
// }

exports.register_a_tshirt = function (req, res) {
    var new_task = new Task(req.body);
    new_task.rfid = req.params.rfid;
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.find_box = function (req, res) {
    var query = { rfid: req.params.rfid };
    Box.find(query).exec(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
}

exports.register_a_box = function (req, res) {
    var new_task = new Box(req.body);
    new_task.rfid = req.params.rfid;
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.track_rfid = function (req, res) {
    var new_task = new TrackRfid(req.body);
    var query = { rfid: req.params.rfid };
    new_task.rfid = req.params.rfid;
    new_task.tshirt = Task.find(query).exec(function (err, task) {
        console.log(task);
        if (err)
            res.send(err);
        res.json(task);
    });
    new_task.save(function (err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    res.sendStatus(204);
};

exports.find_location = function (req, res) {
    var query = { rfid: req.params.rfid };
    TrackRfid.find(query).exec(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
}

// exports.list_all_tasks = function (req, res) {
//     Task.find({}, function (err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };

// exports.read_a_task = function (req, res) {
//     Task.findById(req.params.rfid, function (err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };


// exports.update_a_task = function (req, res) {
//     Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };


// exports.delete_a_task = function (req, res) {
//     Task.remove({
//         _id: req.params.taskId
//     }, function (err, task) {
//         if (err)
//             res.send(err);
//         res.json({ message: 'Task successfully deleted' });
//     });
// };
