var mongoose =require("mongoose");
var Schema=mongoose.Schema;


var admin=new Schema({
  waveName: String,
  waveType: String,
  Location: String,
  NumberOfParticipants: Number,
  plannedStartDate: String,
  plannedEndDate: String,
});
module.exports=mongoose.model('wave',admin);
