var express=require("express");
var app=express(),
    path = require("path");
    
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index");
});

app.get("/login",function(req,res){
    res.render("login");
})
app.post("/login",function(req,res){
    res.redirect("/");
})

app.get("/register",function(req,res){
    res.render("register");
})
app.post("/register",function(req,res){
    res.redirect("/");
})

app.get("/add-hospital",function(req,res){
    res.render("add-hospital");
})
app.post("/add-hospital",function(req,res){
    res.redirect("/");
})
app.get("/edit-hospital",function(req,res){
    res.render("edit-hospital");
})
app.post("/edit-hospital",function(req,res){
    res.redirect("/");
})
app.get("/user-request-data",function(req,res){
    res.render("user-request-data");
})
app.get("/add-patient-data",function(req,res){
    res.render("add-patient-data");
})

app.get("/user-dashboardFirst",function(req,res){
    res.render("user-dashboardFirst");
})
app.get("/user-dashboardNext",function(req,res){
    res.render("user-dashboardNext");
})
app.get("/hospital-dashboard",function(req,res){
    res.render("hospital-dashboard");
})
app.get("/hospital-dashboardNext",function(req,res){
    res.render("hospital-dashboardNext");
})
app.get("/admin-dashboard",function(req,res){
    res.render("admin-dashboard");
})

app.get("/forget",function(req,res){
    res.render("forget");
})
app.get("/user-request-data",function(req,res){
    res.render("user-request-data");
})

app.listen(3000,function(){
    console.log("App server started!!!");
});