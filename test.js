var assert = require('assert');
var config=require("./local.testConfig.json");
var cognitiveFace = require("./index.js")
var myCognitive=new cognitiveFace.DefaultApi();

describe('cognitive-face', function() {
  it('faceDetect', function(done) {
    var response = myCognitive.faceDetect({url:"http://dreamatico.com/data_images/face/face-1.jpg"}, config.cognitiveApiKey, true, true);
    response.then(function(result){
      if(result.response.statusCode!=200){
        console.log(result.response.statusCode);
        console.log(result.response.body);
      }
      assert.notEqual(result, null);
      assert.notEqual(result.body, null);
      done();
      // faceId: 9694693c-acc7-4dcb-88b9-3ac3f6efc993
    }, function(error){
      console.log(error);
      assert.equal(false, true);
    });
  });
  it('personGroup-PUT', function(done) {
    var response = myCognitive.personGroupCreateAPersonGroup("haitaofamily", {name:"Haitao's family", data:{location:"2nd floor"}}, config.cognitiveApiKey);
    response.then(function(result){
      assert.equal(200, result.statusCode);
      done();
      // faceId: 9694693c-acc7-4dcb-88b9-3ac3f6efc993
    }).catch(function(error){
      if(error.response.statusCode === 409){
        done();
      }else{
        console.log(error.response.statusCode)
        console.log(error.response.body)
        assert.equal(false, true);
      }
    });
  });
});