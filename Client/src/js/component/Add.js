var React=require('react');
var ReactDOM=require('react-dom');
var $=require('../vendors/jquery-1.8.2.min');
var batchnam="";
var batchtyp="";
var loc="";
var candidate="";
var strtdate="";
var enddate="";
var Batch_Data=[];
var Home=React.createClass({

batch_name:function(event){
batchnam=event.target.value;
},

batch_type:function(event){
batchtyp=event.target.value;
},

location:function(event){
loc=event.target.value;
},

participants:function(event){
candidate=event.target.value;
},

planed_startdate:function(event){
strtdate=event.target.value;
},

planed_enddate:function(event){
enddate=event.target.value;
},

CreateAjax:function(){
var myobj={};
myobj["Batch_Name"]=batchnam;
myobj["Batch_Type"]=batchtyp;
myobj["Location"]=loc;
myobj["Candidate"]=parseInt(candidate);
myobj["Start_Date"]=strtdate;
myobj["End_Date"]=enddate;
//console.log(myobj);
Batch_Data=myobj;
console.log("in CreateAjax");
console.log(Batch_Data);
$.ajax({
  type:'POST',
  cache:false,
  data:Batch_Data,
  url:'http://localhost:8080/wave/Add',
  success: function(data){
    console.log("success in CreateAjax func");
  }.bind(this),
  error:function(err){
    console.log("error in CreateAjax func");
    console.log(err);
  }.bind(this)
});
},
  render:function(){


    return(
      <div className="content">
    <div className="row" >
         <div className="col-sm-12">
         <h1>Add Wave Details</h1><br></br>
         <a href="#myModal"role="button"className="btn btn-warning" data-toggle="modal">Update</a>
             <div className="modal fade" id="myModal">
               <div className="modal-dialog">
                 <div className="modal-content">
                   <div className="modal-header">
                     <button className="close" data-dismiss="modal">x</button>
                     <h4 className="modal-title">ADD BATCH</h4>
                   </div>
                   <div className="modal-body">
                  <form className="form-horizontal">
                       <div className="form-group">
                         <label className="col-lg-2 control-label" id="inputName">Batch Name</label>
                         <div className="col-lg-10">
                           <input className="form-control" id="inputName" placeholder="Name" type="text" ref="query" onChange={this.batch_name}/>
                         </div>
                       </div>
                       <div className="form-group">
                         <label className="col-lg-2 control-label" id="inputName">Batch Type</label>
                         <div className="col-lg-10">
                           <input className="form-control" id="inputName" placeholder="Type" type="text" ref="query" onChange={this.batch_type}/>
                         </div>
                       </div>
                       <div className="form-group">
                         <label className="col-lg-2 control-label" id="inputName">Location</label>
                         <div className="col-lg-10">
                           <input className="form-control" id="inputName" placeholder="location" type="text" ref="query" onChange={this.location}/>
                         </div>
                       </div>
                       <div className="form-group">
                         <label className="col-lg-2 control-label" id="inputName">Number of Participants</label>
                         <div className="col-lg-10">
                           <input className="form-control" id="inputName" placeholder=" Number" type="text" ref="query" onChange={this.participants}/>
                         </div>
                       </div>
                       <div className="form-group">
                         <label className="col-lg-2 control-label" id="inputName">Planned Start Date</label>
                         <div className="col-lg-10">
                           <input className="form-control" id="inputName" placeholder="Start Date" type="date" ref="query" onChange={this.laned_startdate}/>
                         </div>
                       </div>
                       <div className="form-group">
                         <label className="col-lg-2 control-label" id="inputName">Planned End Date</label>
                         <div className="col-lg-10">
                           <input className="form-control" id="inputName" placeholder="End date" type="date" ref="query" onChange={this.planed_enddate}/>
                         </div>
                       </div>
                       <div className="form-group">
                         <div className="col-lg-12">
                        <button className="btn btn-success pull-right" type="submit" onClick={this.CreateAjax}>Submit</button>
                         </div>
                       </div>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
             </div>
             </div>
             </div>
           )
}
module.exports= Add;
