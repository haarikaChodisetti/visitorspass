var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/visitorspass');
var vpsubmit = db.get('vpsubmit');
var nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.get('/mycampus', function(req,res){
	vpsubmit.find({},function(err,docs){
	//console.log(docs);
	res.locals.visitordata = docs;
	res.render('mycampus');
	});
});
//login
router.post('/login',function(req,res){
  var uname=req.body.username;
  var pass=req.body.password;
    if(uname=="aditya" && pass=="123"){
        res.redirect('/mycampus');    
    } 
    else{
      res.render('login', { error: 'Invalid username or password.' });
        
      }
  });
//LOGOUT
router.get('/logout', function(req, res){
  res.redirect('/');
});
//form submit
router.post('/vpsubmit',function(req,res){
	var vname = req.body.vname;
   var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'myhub@aditya.ac.in', // generated ethereal user
            pass: 'Thub@123' // generated ethereal password
            
        }
    });
    var data= 'ID: '+req.body.id1+'\n'+'Name: '+req.body.vname+'\n'
               +'Purpose:'+req.body.purpose+'\n'+'Date: '+req.body.vfdate
               +'\n'+'Time: '+req.body.vtimein+'\n'+'Persontomeet: '+req.body.search+'\n'+'Mobile: '+req.body.phone+'\n'+'Material: '+req.body.material+'\n'+'VehicleNo: '+req.body.vehicle+'\n'
               +'College Visited:'+req.body.college;
    var msg= "<!DOCTYPE html><html><head><metaname='viewport'content='width=device-width'><meta httpequiv='Content-Type' content='text/html; charset=UTF-8'<title>Visitorpass Email</title><style type='text/css'>@media only screen and (max-width: 620px) {table[class=body] h1 {font-size: 28px !important;table[class=body] p,table[class=body] ul,table[class=body] ol,table[class=body] td,table[class=body] span,table[class=body] a {font-size: 16px !important; table[class=body] .wrapper,table[class=body] .article {padding: 10px !important; }table[class=body] .content {padding: 0 !important; }table[class=body] .container {padding: 0 !important;width: 100% !important; }table[class=body] .main {border-left-width: 0 !important;border-radius: 0 !important;border-right-width: 0 !important; }table[class=body] .btn table {width: 100% !important; }table[class=body] .btn a {width: 100% !important; }table[class=body] .img-responsive {height: auto !important;max-width: 100% !important;width: auto !important; }}@media all {.ExternalClass {width: 100%; }.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {line-height: 100%; }.apple-link a {color: inherit !important;font-family: inherit !important;font-size: inherit !important;font-weight: inherit !important;line-height: inherit !important;text-decoration: none !important; }.btn-primary table td:hover {background-color: #34495e !important; }.btn-primary a:hover {background-color: #34495e !important;border-color: #34495e !important; } }</style></head><body class='' style='background-color:#f6f6f6;font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;'><table border='0' cellpadding='0' cellspacing='0' class='body' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#f6f6f6;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td><td class='container' style='font-family:sans-serif;font-size:14px;vertical-align:top;display:block;maxwidth:580px;padding:10px;width:580px;Margin:0 auto !important;'><div class='content' style='box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px;'><!-- START CENTERED WHITE CONTAINER --><span class='preheader' style='color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;'>This is preheader text. Some clients will show this text as a preview.</span><table class='main' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background:#fff;border-radius:3px;width:100%;'><tr><td class='wrapper' style='font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><b>Hello,"+vname+"</b></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Your request for Visitorpass was <b>Approved</b>.<br> Here are the full details:</p> <center>  <img id='barcode' src='https://api.qrserver.com/v1/create-qr-code/?data="+data+"&amp;size=250x250'title='T-HUB' width='100' height='100' /></center><table border='0' cellpadding='0' cellspacing='0' class='btn btn-primary' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;box-sizing:border-box;width:100%;'><tbody><tr><td align='left' style='font-family:sans-serif;font-size:14px;vertical-align:top;padding-bottom:15px;'><center><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;width:auto;'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#ffffff;border-radius:5px;text-align:center;background-color:;'></td></tr></tbody></table></center></td></tr></tbody></table><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Have a Good Day!.</p></td></tr></table></td></tr></table><!-- START FOOTER --><div class='footer' style='clear:both;padding-top:10px;textalign:center;width:100%;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td class='content-block' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'><span class='apple-link' style='color:#999999;font-size:12px;text-align:center;'>Aditya Educational Institutions,Surampalem,533437</span><br>This email is system generated, please do not respond to this email.</td></tr><tr><td class='content-block powered-by' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'>Powered by <a href='http://thub.ac.edu.in' style='color:#3498db;text-decoration:underline;color:#999999;font-size:12px;text-align:center;text-decoration:none;'>T-HUB team</a>.</td></tr</table></div><p>Powered-by,<br><img src='http://ecourses.aec.edu.in/thub/images/myhublogo.png' width='84' height='50' alt='MyHubLogo'></p><!-- END FOOTER --><!-- END CENTERED WHITE CONTAINER --></div></td><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td></tr></table></body></html>"
    // setup email data with unicode symbols
    var mailOptions = {
        from: '"THUB 👻" <myhub@aditya.ac.in>', // sender address
        to: req.body.email, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: msg // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("not sent");
        }
        else{
        console.log('Message sent');
    }
    });
 var visitordata ={
 	vname : req.body.vname,
	place : req.body.place,
	phone : req.body.phone,
	email : req.body.email,
	vehicle : req.body.vehicle,
	material : req.body.material,
	search : req.body.search,
	number : req.body.number,
	purpose : req.body.purpose,
	college : req.body.college,
	vfdate : req.body.vfdate,
	vtdate : req.body.vtdate,
	vtimein : req.body.vtimein,
	id1 : req.body.id1
 }
 vpsubmit.insert(visitordata,function(err,docs){
 	if(err){
  		console.log(err);
  		res.redirect('/');
  	}
  	else{
  		//console.log(docs);
 	    res.redirect('/mycampus');
    }
    });
});
//pdf code
router.post('/pdf', function(req,res){
  console.log(req.body.sno);
  vpsubmit.find({},function(err,docs){
  res.send(docs);
  });
});
module.exports = router;
