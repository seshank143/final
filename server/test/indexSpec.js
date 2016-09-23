var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing the display route", function(err){
it("should display values", function(done){
  url
      .get("/movie/Fav")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err,res){
        var myObj = JSON.parse(res.text);
        myObj[0].Title.should.be.equal("Inside Out");
        done();
      });
});
});
describe("Testing the add route", function(err){
it("should insert data", function(done){
  url
      .post("/movie/favmovie")
      .send({
        "Ttitle":"abcd",
        "Year"":"1994",
        "Poster":"Abcd",
        "imdbID":"123456"
      })
      .expect(200)
      .end(function(err,res){
        if (err) {
                       throw err;
               }
        //expect(res.text).to.be.equal("Hello!");
        res.text.should.be.equal("movie created");
        //assert(res.text == "Hello!","Test has failed");
        done();
      });
});
});

describe("Testing the delete route", function(err){
it("should delete", function(done){
  url
      .delete("/movie/unfav")
      .expect(200)
      .end(function(err,res){
        if (err) {
              throw err;
        }
        //expect(res.text).to.be.equal("Hello!");
        res.text.should.be.equal("User deleted!");
        //assert(res.text == "Hello!","Test has failed");
        done();
      });
});
});

describe("Testing the update route", function(err){
it("should update", function(done){
  url
      .put("/movie/update")
      .expect(200)
      .end(function(err,res){
        if (err) {
                       throw err;
               }
        //expect(res.text).to.be.equal("Hello!");
        res.text.should.be.equal("update");
        //assert(res.text == "Hello!","Test has failed");
        done();
      });
});
});
