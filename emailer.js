const Email = require('email-templates');

var email=''//Fill this in

var fs = require('fs');

var contents2 = fs.readFileSync('namelist.txt', 'utf8').split("\n");
var contents = fs.readFileSync('emaillist.txt', 'utf8').split("\n");
var cla = []
var folderName = "MySpammer"

for(var i = 0; i < contents.length-1; i++){
	cla.push([contents[i],contents2[i]])
}

const emailer = new Email({
  message: {
    from: email
  },
  transport: {
	host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: email,
       	    pass: ""//And this
	},
	},
  });

var myname=''//And this

for (let details of cla){
  var addr=details[0]
  var name=details[1]
  emailer
  .send({
    template: 'initial',
    message: {
      to: addr,
      replyTo: email.split("@")[0]+"+"+ folderName +email.split("@")[1],
       	attachments: [
     	  {
     	  }
   	 ],

    },
   locals: {
      rep: name,
      youraddr: email,
      name: myname
    }
  })
  .then(console.log)
  .catch(console.error);
}
