var dork;


function search(x)
      {
        var domain = document.getElementById("target").value;

//.com remover lines
        var str = document.getElementById("target").value;
		var stra = str.substr(-4, 1);
		var strb = str.substr(-3,1);
        var strc = str.substr(-5,1);
		var strz = ".";
		if(stra.localeCompare(strz)==0)
			{
  				var len = 4;
				}
		if(strb.localeCompare(strz)==0)
			{
  				var len = 3;
				}
        if(strc.localeCompare(strz)==0)
			{
  				var len = 5;
				}
                
                
                
var y = str.length;
var z = y-len;
var result = str.substr(0,z);

    
//dorks syntax
        switch(x)
 {
          case 1:
            var dork = "site:"+ domain  + " \"intitle:index.of\" | intitle:\"parent directory\"";
            break;
          case 2:
            var dork = "site:"+ domain + " inurl:admin | intitle:\"admin panel\""    ;
            break;
          case 3:
             var dork = "site:"+ domain +  " ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini" ;
            break;
          case 4:
            var dork = "site:"+ domain +  " ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv" ;
            break;
  
  //php
            case 5:
              var dork = "site:"+ domain + " filetype:php | ext:php | inurl:php";
            break;
          case 6:
            var dork = "site:"+ domain + " filetype:jsp | ext:jsp | inurl:jsp";
            break;
          case 7:
            var dork = "site:"+ domain +  " filetype:asp | ext:asp | inurl:asp";
            break;
          case 8:
            var dork = "site:s3.amazonaws.com " + "inurl:" + result;
            break;
          case 9:
            var dork = "inurl:s3.amazonaws.com " + "inurl:" + domain;
            break;
          case 10:
	    var dork = "inurl:" + domian + " allinurl:/confluence/login.action";
	    break;
          case 11:
	    var dork = "inurl:wiki." + result +".com/confluence";
            break;
	  case 12:
	    var dork = "site:" + domain + " intitle:dashboard-confluence";
            break;
	  case 13:
	    var dork = "site:*.atlassian.net " +result; 
            break;
	  case 14:
	    var dork = "site:codepan.co " + result;
            break;
	  case 15:
	    var dork = "site:scribd.com " + result;
            break;
	  case 16:
	    var dork = "site:npmjs.com " + result;
            break;
	  case 17:
	    var dork = "site:npm.runkit.com " + result;
            break;
	  case 18:
	    var dork = "site:libraries.io " + result;
            break;
	  case 19:
	    var dork = "site:ycombinator.com " + result;
            break;
	  case 20:
	    var dork = "site:coggle.com " + result;
            break;
	  case 21:
	    var dork = "site:papaly.com " + result;
            break;
	 case 22:
	    var dork = "site:trello.com " + result;
            break;
	  case 23:
	    var dork = "site:prezi.com " + result;
            break;
	  case 24:
	    var dork = "site:jsdelivr.net " + result;
            break;
	  case 25:
	    var dork = "site:codepen.io " + result;
            break;
	  case 26:
	    var dork = "site:codeshare.io " + result;
            break;
	  case 27:
	    var dork = "site:sharecode.io " + result;
	    break;
          case 28:
	    var dork = "site:pastebin.com " + result;
	   break;
           case 29:
	    var dork = "site:repl.it " + result;
	    break;
            case 30:
	    var dork = "site:codeshare.com " + result;
	     break;
         case 31:
	    var dork = "site:productforums.google.com " + result;
	    break;  
          case 32:
	    var dork = "site:gitter.im " + result;
	    break;
          case 33:
	    var dork = "site:bitbucket.org " + result;
	     break;
            case 34:
	    var dork = "inurl:gitlab " + result;
	  break;
            case 35:
	    var dork = "inurl:/database* ext:sql intext:index of site:" + domain;
         break;
	    case 36:
            var dork = "site:" + domain + " +inurl:redir+|+inurl:url+|+inurl:redirect+|+inurl:return+|+inurl:src=http+|+inurl:r=http" ;
		 break;
         default:
            
        }
        var domain = document.getElementById("target").value;
          console.log(domain);
         var  url ='http://www.google.com/search?q='  + dork;
          window.open(url,'_blank');
          
      } 


          
