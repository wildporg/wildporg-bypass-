javascript:if (confirm("Switch to Google hosted page?")) { const newUrl = []; for (var i = 0;i <= window.location.origin.split(".").length-1; i+=1) { if (i != 0) {newUrl.push("-");}; newUrl.push(window.location.origin.split(".")[i]); }; if (window.location.toString().includes("?") == false) { newUrl.push(".translate.goog",window.location.toString().replace(window.location.origin.toString(),""),"?_x_tr_sl=auto&_x_tr_tl=en") window.location.replace(newUrl.toString().replaceAll(",","")) } else { newUrl.push(".translate.goog",window.location.toString().replace(window.location.origin.toString(),""),"&_x_tr_sl=auto&_x_tr_tl=en") window.location.replace(newUrl.toString().replaceAll(",","")) }; };