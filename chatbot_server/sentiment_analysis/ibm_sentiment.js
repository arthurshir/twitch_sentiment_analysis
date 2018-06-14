var config = require('../config');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

exports.run_analysis = function(textToAnalyze) {
  return new Promise(function (resolve, reject) {
    var res = {};
    const tone_analyzer = new ToneAnalyzerV3({
      'username': config.ibm_tone_analyzer.username,
      'password': config.ibm_tone_analyzer.password,
      'version_date': '2016-05-20',
      'url' : config.ibm_tone_analyzer.url,
      'use_unauthenticated': config.ibm_tone_analyzer.use_unauthenticated
    });

    tone_analyzer.tone({'text': textToAnalyze}, function(err, res) {
      if (err)
        reject(err);
      else
        resolve(res);
    });
  });
}