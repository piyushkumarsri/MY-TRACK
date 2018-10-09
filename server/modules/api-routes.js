var db = require('../dao');
var api = require('express').Router();
module.exports =
 function mountApiRoutes(app){
    app.use("/api",api);
}

function handleError(res,err,msg){
    console.log(err);
    res.json({status:false,msg:msg});
}

function handleOk(res,data){
    res.json({status:true,data:data});
}

api.get("/",(req,res)=>{
    res.json({status:200,data:'Api'});
});


api.get('/add-admin',(req,res)=>{
    db.users.insert({
        name:"admin",
        role:"admin",
        password:"admin",
        username:"admin",
        email:"admin@email.com"
    },(err,usr)=>{
        if(err) handleError(res,err,"Failed to save client");
        handleOk(res,usr);
    })
});

api.get('/add-user',(req,res)=>{
    var name = req.query.name;
    var password = req.query.password;
    var username = req.query.username;
    db.users.insert({
        name:name,
        role:"user",
        password:password,
        username:username,
        email:username+"@email.com"
    },(err,usr)=>{
        if(err) handleError(res,err,"Failed to save client");
        handleOk(res,usr);
    })
});

api.post('/dologin',(req,res)=>{
    var body = req.body;
    db.users.findOne({username:body.username,password:body.password},
        (err,user)=>{
            if(err) handleError(res,err,"Failed to login");
            else if(!user){
                handleError(res,null,"Username or password is incorrect!");
            }else {
                var u = {name:user.name,role:user.role};
            handleOk(res,u);
            }
    });
});


api.get("/admin/fetch-client",(req,res)=>{
    db.client.find({},(err,docs)=> {
        if(err) handleError(res,err,"Failed to fetch client");
      console.log(docs);
        handleOk(res,docs);
    });
});
api.post("/admin/save-client",(req,res)=>{
    var body = req.body;
    console.log(body);

    body.active = true;
    body.createdDate = new Date();

    db.client.insert(body,(err,doc)=>{
        if(err) handleError(res,err,"Failed to save client");
        console.log('saved client');
        handleOk(res,doc);
    });
});



api.post("/admin/save-project",(req,res)=>{
    var body = req.body;
    console.log(body);

    body.active = true;
    body.createdDate = new Date();

    db.project.insert(body,(err,doc)=>{
        if(err) handleError(res,err,"Failed to save client");
        console.log('saved project');
        handleOk(res,doc);
    });
});

api.get("/admin/fetch-project",(req,res)=>{
    db.project.find({},(err,docs)=> {
        if(err) handleError(res,err,"Failed to fetch client");
      console.log(docs);
        handleOk(res,docs);
    });
});
api.post("/admin/save-task",(req,res)=>{
    var body = req.body;
    console.log(body);

    body.active = true;
    body.createdDate = new Date();

    db.task.insert(body,(err,doc)=>{
        if(err) handleError(res,err,"Failed to save client");
        console.log('saved project');
        handleOk(res,doc);
    });
});

