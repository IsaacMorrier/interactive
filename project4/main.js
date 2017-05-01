(function() {

  var body = document.body,
    html = document.documentElement;

  var fullHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
  var fullWidth = document.body.clientWidth;

  
  
  function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
      left: el.left + window.scrollX + (el.width / 2),
      top: el.top + window.scrollY + (el.height / 2)
    }
  }

//  getOffset(element).top;
//  getOffset(element).left;
  
  var canv = document.createElement('canvas'); // makes html canvas
  canv.id = 'lewittCanvas';
  canv.width = fullWidth; // sets html canvas width and height to fill window
  canv.height = fullHeight;

  document.body.appendChild(canv); // adds the canvas to the body element
  
  
  var anchors = document.getElementsByTagName("a"), i; // gets all anchors
  var anchorLocs = [];
  
  for (i = 0; i < anchors.length; ++i) { // creates array of anchor X and Y values
    anchorLocs.push(getOffset(anchors[i]).left);
    anchorLocs.push(getOffset(anchors[i]).top);
  };
  
  var ctx=canv.getContext("2d"); // gets ready to draw strokes
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(200,0,0,0.2)";
  
  for (i = 0; i < anchors.length; i = i + 2) { // loops through first point in line
    
    for (j = 0; j < anchors.length; j = j + 2) { // loops through drawing to second point in line
      x1 = anchorLocs[i];
      y1 = anchorLocs[i+1];
      x2 = anchorLocs[j],
      y2 = anchorLocs[j + 1],
      ctx.beginPath();
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.stroke();
    };
  }
  
  ctx.strokeStyle = "rgba(0,0,200,0.2)"; // set stroke to blue
  
  var corners = [0, 0, fullWidth, 0, 0, fullHeight, fullWidth, fullHeight] // locations for corners
  
  for (i = 0; i < corners.length; i = i + 2) { // loops through corners
    
    for (j = 0; j < anchors.length; j = j + 2) { // loops through drawing to anchors
      x1 = corners[i];
      y1 = corners[i+1];
      x2 = anchorLocs[j],
      y2 = anchorLocs[j + 1],
      ctx.beginPath();
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.stroke();
    };
  }
    
  ctx.strokeStyle = "rgba(0,200,0,0.2)"; // set stroke to green
  
  var corners = [fullWidth/2, 0, fullWidth, fullHeight/2, fullWidth/2, fullHeight, 0, fullHeight/2]
  
  for (i = 0; i < corners.length; i = i + 2) { // loops through first point in line
    
    for (j = 0; j < anchors.length; j = j + 2) { // loops through drawing to second point in line
      x1 = corners[i];
      y1 = corners[i+1];
      x2 = anchorLocs[j],
      y2 = anchorLocs[j + 1],
      ctx.beginPath();
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.stroke();
    };
  }
  
  
  
//  document.getElementById('someBox').appendChild(canv); // adds the canvas to #someBox
//  
//  var xmlns = "http://www.w3.org/2000/svg";
//  
//  var svg = document.createElement("svg");
//  svg.setAttribute("id", "lewittCanvas");
//  svg.setAttribute("xmlns", xmlns);
//  svg.setAttribute("height", "100%");
//  svg.setAttribute("width", "100%");
//	document.body.appendChild(svg);
//  
//  var elem = document.createElementNS(xmlns, "line");
//
//  elem.setAttributeNS(null,"x1",50);
//  elem.setAttributeNS(null,"y1",50);
//  elem.setAttributeNS(null,"x2",250);
//  elem.setAttributeNS(null,"y2",250);
//  elem.setAttributeNS(null,"id","lewittLine");
//  elem.setAttributeNS(null,"height","100%");
//  elem.setAttributeNS(null,"width","100%");
////  elem.setAttributeNS(null,"width","100%");
////  elem.setAttributeNS(null,"height","100%");
////  elem.style.strokeWidth = "3px";
////  elem.style.stroke = "blue",
//
//  document.getElementById("lewittCanvas").appendChild(elem);
  

  
})();


  