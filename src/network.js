var up, longup, select, longselect,down,longdown;

Pebble.addEventListener("ready", function(e) {});

Pebble.addEventListener("showConfiguration",
  function(e) {
    Pebble.openURL("https://cdn.rawgit.com/NovaGL/HTTPFace/master/config/index.html");
  }
);

Pebble.addEventListener("webviewclosed",
  function(e) {
    var configuration = JSON.parse(e.response);
    console.log(e.response);
    Pebble.sendAppMessage(configuration);
    
    //save URLs to global variables
    up = configuration.Up;
    longup = configuration.LongUp;
    
    select = configuration.Select;
    longselect = configuration.LongSelect;
    
    down = configuration.Down;
    longdown = configuration.LongDown;
    
  }
);

Pebble.addEventListener("appmessage", function(e) {

/*
Case:
1-up
2-long up
3-select
4-long select
5-down
6-long down
*/
  
  
 var xmlHttp = new XMLHttpRequest();
                
 switch(e.payload.message) {
   
    case 1:        
        xmlHttp.open( "GET", up);
        console.log('Up Button Sending URL' , up); 
        break;
    case 2:        
        xmlHttp.open( "GET", longup);
     console.log('Long Up Button Sending URL' , up); 
        break;
    case 3:          
        xmlHttp.open( "GET", select);
     console.log('Select Button Sending URL' , up); 
        break;
    case 4:     
         xmlHttp.open( "GET", longselect);
         console.log('Long Select Button Sending URL' , longselect); 
        break;
    case 5:        
        xmlHttp.open( "GET", down);
        console.log('Down Button Sending URL' , down); 
        break;
    case 6:        
        xmlHttp.open( "GET", longdown);
        console.log('Long Down Button Sending URL' , longdown); 
        break;
    default:
        console.log('Case Default / Error');        
      } 
  
 xmlHttp.send(null);
  
});