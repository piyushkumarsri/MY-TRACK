var Datastore = require('nedb');
var path = require('path');
var db = {
    client: new Datastore({ filename: path.join(__dirname,'/db/client.db'), autoload: true }),
    project: new Datastore({ filename: path.join(__dirname,'db/project.db'), autoload: true }),
    users: new Datastore({ filename: path.join(__dirname,'db/users.db'), autoload: true }),
    task: new Datastore({ filename: path.join(__dirname,'db/task.db'), autoload: true }),

};

module.exports = db;