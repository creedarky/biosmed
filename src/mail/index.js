'use strict';
var path       = require('path');
var nodemailer = require('nodemailer');
var swig       = require('swig');

var TEMPLATES = {
  zip: swig.compileFile(path.join(__dirname, './mail.html'))
};


var transporter = nodemailer.createTransport({ // create reusable transporter object using SMTP transport
  service: 'Mailgun',
  auth: {
    user: 'postmaster@sandbox6144da8113624975b1548f700ef7448f.mailgun.org',
    pass: '4ff4cc80729f1e3876f9a0605664081e'
  }
});

var email = {

  sendMail: function(req, cb){

    var body = req.body;

    var props = {
      from: body.name + ' <' + body.mail + '>',
      to: 'creedarky@gmail.com',
      subject: 'Contacto bioscom',
      html: TEMPLATES.zip(body)
    };

    transporter.sendMail(props, function(error, info){
      if(error){
        console.log('[EMAIL] error: ', body, props, error);
      } else {
        console.log('[EMAIL] sent: ', body, props, info);
      }
      cb();
    });


  }

};

module.exports = email;
