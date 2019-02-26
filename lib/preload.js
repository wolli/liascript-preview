// preload.js// Get the ipcRenderer of electron
const {ipcRenderer} = require('electron');

// Do something according to a request of your mainview
ipcRenderer.on('reset', function(){
    //ipcRenderer.sendToHost(getScripts());
    //alert("reset");
    console.log("todo");
});

ipcRenderer.on("show", function(e, line){
    window.gotoLia(line);
});

window.liaGoto = function (line) {
  ipcRenderer.sendToHost("goto", line);
};