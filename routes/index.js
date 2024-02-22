var express = require('express');
var router  = express.Router();
const userModel = require('./users');


// router.get('/', function(req, res){
//     req.session.ban = true; //thumare browser ke liye server pe 
//     //save ho gya true kisi aur ke browserse kr skte ho pr thumare browser ke liye ban ho gya
//     res.render("index");
// });

//Agar tum ek baar session bana diye to baad me kisi bhi route ke liye check kr skte ho 

// router.get("/checkban", function(req, res) {
//     if(req.session.ban===true){
//         res.send("OOPs! you are banned"); 
//         // Agar server restart hua to session automatic delete hojayega
//     }
//     else{
//         res.send("You are not banned");
//     }
// });

/* create
    req.session.koibhinaam = koibhivalue
    
    read
    req.session.koibhinaam
    
    delete
    req.session.destroy
*/

// router.get("/removeban" , function(req, res) {
//     req.session.destroy(function(err){
//         if(err){
//             throw err;
//         }else{
//             console.log("Session Destroyed");
//         }
//     });
//     res.send("Session Destroyed");
// });

// router.get('/create', async function(req, res){
//     const createdUser = await userModel.create({
//         username:"Harsh", 
//         age:25,
//         name:"Harsh"
//     });
//     res.send(createdUser);
// });

// TO find the user
// router.get("/alluser" , async function(req, res){
//     let user = await userModel.findOne({username:"Harsh"});
//     res.send(user);
// });

//TO delete the user from the database

// router.get("/delete", async function(req, res){
//     let deletedUser = await userModel.findOneAndDelete({
//     username:"Harsh"
//     });
//     res.send(deletedUser);
// });

// For understanding the cookies

// router.get('/' , function(req, res){
//     res.cookie("age", 25);
//     res.render('index')
// })

// router.get('/read', function(req, res){
//     console.log(req.cookies)
//     res.send(check)
// });

// router.get('/delete' , function(req, res){
//     res.clearCookie("age")
//     res.send(" clear Hogya");
// });

// For understanding the Flash
router.get('/' , function(req , res){
    res.render("index")
});

// abhi tk koi tarika nhi h jisse tum ek route me koi cheez bana kr use kisi  aur route me chala sko 
router.get('/failed' , function(req , res){
    //agar login hojaye to login page ke baad profile page dikhado
    //agar na ho to fir, mujhe is route se kisi aur route le jao jaise ki /error and wha pr dikhao failed
    //Aur yhi pe flash kaam me aate h kyoki flash appko allow krte h ek route ke data ko dusre route me use krne ke liye
    req.flash("age" , 12);
    req.flash("name" , "Harsh")
    res.send("bangya");
});

router.get('/checkkaro' , function(req, res){
    console.log(req.flash("age"));
    console.log(req.flash("name"));
    res.send("Check krlo backened ke terminal par")
})

module.exports = router;
