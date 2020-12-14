var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("Asia/Kolkata");
    callback(null, {
        statusCode: '200',
        body: 'Hey, the time in India is: ' + currentTime.toString(),
    });
};
