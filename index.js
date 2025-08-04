const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


let posts=[{
    id:"1a",
    username:"ApnaCollege",
    content:"I love Coding"
},
{
    id:"2b",
    username:"SandeshAnna",
    content:"Eka Gucchi pai Khachhi Hoych nahi"
},
{
    id:"3c",
    username:"Marvel",
    content:"With Grest Power Comes Great Responsibilities"
}
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})


app.post("/posts",(req,res)=>{
  let {username,content}=req.body;

  posts.push({username,content});
  res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
  let {id} =req.params;
  let post=posts.find((p)=>id===p.id);
  console.log(post);
  res.render("show.ejs",{post});
})


app.listen(port,()=>{
    console.log(`App is listening  to ${port}`);
})