/*
 * @title: Quote a line
 * @author: TheChelsUk
 * @notes: Turns selected line into a quote (prepends > )
 */

var lnRange = editor.getSelectedLineRange();
var lnText = editor.getTextInRange(lnRange[0], lnRange[1]);
var selRange = editor.getSelectedRange();

// setup vars
var lines = lnText.split("\n");
var quoteString = "> ";
var isFirst = true;
var newLines = [];
var startAdjust = 0;
var lengthAdjust = 0;

// loop over lines
for (var ix=0; ix<lines.length; ix++) {
  var line = lines[ix];
  if (line.startsWith(quoteString)) {
     newLines.push(quoteString + line);
     if (isFirst) {
       startAdjust += quoteString.length;
     }
     else {
       lengthAdjust += quoteString.length;
     }
  }
  else {
    newLines.push(quoteString + line);
    if (isFirst) {
      startAdjust += quoteString.length;
    }
    else {
      lengthAdjust += quoteString.length;
    }
  }
  isFirst = false;
}

// update text 
editor.setTextInRange(lnRange[0], lnRange[1], newLines.join("\n"));

// update selection
editor.setSelectedRange(selRange[0] + startAdjust, selRange[1] + lengthAdjust);
