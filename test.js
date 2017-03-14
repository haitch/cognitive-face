var assert = require('assert');
var config=require("./local.testConfig.json");
var cognitiveFace = require("./index.js")
var myCognitive=new cognitiveFace.DefaultApi();

describe('cognitive-face', function() {
  it('faceDetect', function(done) {
    var response = myCognitive.faceDetect({url:"http://dreamatico.com/data_images/face/face-1.jpg"}, config.cognitiveApiKey, true, true);
    response.then(function(result){
      assert.equal(200, result.statusCode);
      done();
      // faceId: 9694693c-acc7-4dcb-88b9-3ac3f6efc993
    }).catch(function(error){
      console.log(error);
      done();
    });
  });
  it('personGroup-PUT', function(done) {
    var response = myCognitive.personGroupCreateAPersonGroup("haitaofamily", {name:"Haitao's family", data:{location:"2nd floor"}}, config.cognitiveApiKey);
    response.then(function(result){
      assert.equal(200, result.statusCode);
      done();
      // faceId: 9694693c-acc7-4dcb-88b9-3ac3f6efc993
    }).catch(function(error){
      console.log(error);
      done();
    });
  });
});