var express = require('express');
var app = express.Router();
var wave=require('../model/admin');
app.post('/Add',function(req,res)
{
console.log(req.body);
var wave2=new wave();
wave2.waveName=req.body.Batch_Name;
wave2.waveType=req.body.Batch_Type;
wave2.Locationr=req.body.Location;
wave2.NumberOfParticipants=req.body.Candidate;
wave2.plannedStartDate=req.body.Start_Date;
wave2.plannedEndDate=req.body.End_Date;
wave2.save(function(err){
 if(err){
   res.send(err);
 }
 else
   {
     res.send('batch created');
}
});
});
module.exports = app;
