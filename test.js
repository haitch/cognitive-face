var assert = require('assert');
var config=require("config");
var cognitiveFace = require("./index.js")
var myCognitive=new cognitiveFace.DefaultApi();

var apiKey = config.get("cognitiveApiKey");
describe('cognitive-face', function() {
  it('faceDetect', function(done) {
    var response = myCognitive.faceDetect({url:"http://dreamatico.com/data_images/face/face-1.jpg"}, apiKey, true, true);
    response.then(function(result){
      if(result.response.statusCode!=200){
        console.log(result.response.statusCode);
        console.log(result.response.body);
      }
      assert.notEqual(result, null);
      assert.notEqual(result.body, null);
      done();
    }, function(error){
      console.log(error);
      assert.equal(false, true);
    });
  });
  it('personGroup-PUT', function(done) {
    this.timeout(60 * 1000);
    var response = myCognitive.createPersonGroup("haitaofamily", {name:"Haitao's family", data:{location:"2nd floor"}}, apiKey);
    response.then(function(result){
      assert.equal(200, result.statusCode);
      console.log("created, and issuing delete request");
      return myCognitive.deletePersonGroup("haitaofamily", apiKey);
      // faceId: 9694693c-acc7-4dcb-88b9-3ac3f6efc993
    }, function(error){
      if(error.response.statusCode === 409){
        console.log("issuing delete request")
        return myCognitive.deletePersonGroup("haitaofamily", apiKey);
      }else{
        console.log(error.response.statusCode)
        console.log(error.response.body)
        assert.equal(false, true);
      }
    }).then(function(result){
      assert.equal(200, result.statusCode);
      done();
    })
    .catch(function(error){
      done();
    });
  });
});