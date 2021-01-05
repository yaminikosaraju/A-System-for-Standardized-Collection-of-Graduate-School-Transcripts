var express = require('express');
var router = express.Router();
var con = require('../Database/db');
/* GET users listing. */


router.get('/getStudentScores',function(req,res ){
    console.log("LL")
    var scoresSql = 'select * from scores';
    con.query(scoresSql, function(err,scoresList){
        if(err) throw err
        res.send({scoreData:scoresList})
    })
})

router.post('/addEPT',function(req,res){
  let user = req.user, body = req.body;
  console.log(body)
  let sql = 'insert into gradrequests(requestType, uid, userName, description, userEmail) values(?,?,?,?,?)'
  let values = ['EPT',user.id,user.fname+' '+user.lname,body.description,user.email]
  con.query(sql,values,function(err){
      if(err) throw err;
      res.send({ok:true})
  })
})
router.post('/addGradingScheme',function(req,res){
    let user = req.user, body = req.body;
    console.log(body)
    let sql = 'insert into gradrequests(requestType, uid, userName, description, userEmail) values(?,?,?,?,?)'
    let values = ['Grading scheme',user.id,user.fname+' '+user.lname,body.description,user.email]
    con.query(sql,values,function(err){
        if(err) throw err;
        res.send({ok:true})
    })
  })


router.get('/getAdminRequests',function(req,res){
    let sql = 'select * from gradrequests';
    con.query(sql,function(err,gradrequests ){
        if(err) throw err;
        res.send({'gradrequests':gradrequests})
    })
})
  

module.exports = router;
