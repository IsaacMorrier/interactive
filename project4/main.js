(function () {
  var body = document.body
    , html = document.documentElement;
  var fullHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  var fullWidth = document.body.clientWidth;

  function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
      left: el.left + window.scrollX + (el.width / 2)
      , top: el.top + window.scrollY + (el.height / 2)
    }
  }
  var canv = document.createElement('canvas');
  canv.id = 'lewittCanvas';
  canv.width = fullWidth;
  canv.height = fullHeight;
  canv.style.position = "absolute";
  canv.style.top = 0;
  canv.style.left = 0;
  canv.style.zIndex = 999999999;
  document.body.appendChild(canv);
  var anchors = document.getElementsByTagName("a")
    , i;
  var anchorLocs = [];
  for (i = 0; i < anchors.length; ++i) {
    anchorLocs.push(getOffset(anchors[i]).left);
    anchorLocs.push(getOffset(anchors[i]).top);
  };
  var ctx = canv.getContext("2d");
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(0,0,200,0.2)";
  var corners = [0, 0, fullWidth, 0, 0, fullHeight, fullWidth, fullHeight]
  for (i = 0; i < corners.length; i = i + 2) {
    for (j = 0; j < anchorLocs.length; j = j + 2) {
      x1 = corners[i];
      y1 = corners[i + 1];
      x2 = anchorLocs[j]
        , y2 = anchorLocs[j + 1]
        , ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };
  }
  ctx.strokeStyle = "rgba(0,200,0,0.2)";
  var corners = [fullWidth / 2, 0, fullWidth, fullHeight / 2, fullWidth / 2, fullHeight, 0, fullHeight / 2]
  for (i = 0; i < corners.length; i = i + 2) {
    for (j = 0; j < anchorLocs.length; j = j + 2) {
      x1 = corners[i];
      y1 = corners[i + 1];
      x2 = anchorLocs[j]
        , y2 = anchorLocs[j + 1]
        , ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };
  }
  ctx.strokeStyle = "rgba(200,0,0,0.2)";
  for (i = 0; i < anchorLocs.length; i = i + 2) {
    for (j = 0; j < anchorLocs.length; j = j + 2) {
      x1 = anchorLocs[i];
      y1 = anchorLocs[i + 1];
      x2 = anchorLocs[j]
        , y2 = anchorLocs[j + 1]
        , ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };
  }
})();