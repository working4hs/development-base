<!--function MM_reloadPage(init) {  //reloads the window if Nav4 resized  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();}MM_reloadPage(true);function MM_findObj(n, d) { //v4.01  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);  if(!x && d.getElementById) x=d.getElementById(n); return x;}function P7_autoLayers() { //v1.4 by PVII var g,b,k,f,args=P7_autoLayers.arguments;a=parseInt(args[0]);if(isNaN(a))a=0; if(!document.p7setc){p7c=new Array();document.p7setc=true;for(var u=0;u<10;u++){ p7c[u]=new Array();}}for(k=0;k<p7c[a].length;k++){if((g=MM_findObj(p7c[a][k]))!=null){ b=(document.layers)?g:g.style;b.visibility="hidden";}}for(k=1;k<args.length;k++){ if((g=MM_findObj(args[k]))!=null){b=(document.layers)?g:g.style;b.visibility="visible";f=false; for(var j=0;j<p7c[a].length;j++){if(args[k]==p7c[a][j]) {f=true;}} if(!f){p7c[a][p7c[a].length++]=args[k];}}}}function recommend_popup(){window.open("/recommend.html", "","height=490,width=420,top=15,left=15,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,titlebar=yes,toolbar=no,directories=no");}function sam_popup(filename, fw, fh){var centerWidth=(screen.width/2)-(fw/2);var centerHeight=(screen.height/2)-(fh/2);window.open(filename, "","height="+fh+",width="+fw+",top="+centerHeight+",left="+centerWidth+",location=no,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,directories=no");}function ShowBurstAd(adcode, width, height, sizes, intrusive, bgcolor, background) {	var bN = navigator.appName;	var bV = parseInt(navigator.appVersion);	var base='http://www.burstnet.com/';	var Tv=''; var Itr='';	var sz=''; var bkgd='';	var bgc=''; var rfr='';	var vr='v=1.0J';	var agt=navigator.userAgent.toLowerCase();	if (sizes.length!=0) {sz='/sz='+sizes;} else {sz='';}	if (bgcolor.length!=0) {bgc='/zg' + bgcolor;} else {bgc='';}	if (background.length!=0) {bkgd='/bgi='+(escape(escape(background))).replace(/\//gi,'%252F');} else {bkgd='';}	rfr='/r='+(escape(escape(top.location.href))).replace(/\//gi,'%252F');	if (bV>=4) {	  ts=window.location.pathname+window.location.search;	  i=0; Tv=0; while (i< ts.length)		{ Tv=Tv+ts.charCodeAt(i); i=i+1; } Tv="/"+Tv;	} else {Tv=escape(window.location.pathname);	  if( Tv.charAt(0)!='/' ) Tv="/"+Tv;		else if (Tv.charAt(1)=="/")	 Tv="";	  if( Tv.charAt(Tv.length-1) == "/")	   Tv = Tv + "_";	}	var fCode='<ifr'+'ame id="BURST" src="'+base+	 'cgi-bin/ads/'+adcode+'.cgi/NI/if/'+vr+bgc+sz+bkgd+	 rfr+Tv+'/RETURN-CODE" width="'+width+'" height="'+	 height+'"'+'marginwidth="0" marginheight="0"'+	 'hspace="0" vspace="0" frameborder="0" '+	 'scrolling="no">';	 var gCode = '<'+'a href="'+base+'ads/'+adcode+'-map.cgi/'+	 vr+sz+rfr+Tv+'" target=_top><im'+'g src="'+base+	 'cgi-bin/ads/'+adcode+'.cgi/'+vr+sz+rfr+Tv+	 '" border="0" alt="Click Here"></a>';	var fCodeEnd = '</ifr'+'ame>';	if ((adcode.charAt(0)=="a")&&(intrusive=="1")) {	 Itr='<di'+'v><scr'+'ipt src="'+base+'cgi-bin/ads/'+adcode+	 '.cgi/sz=0X0MN/'+vr+rfr+Tv+'/RETURN-CODE/JS/"></scr'+'ipt></d'+'iv>';	}	if (agt.indexOf("mac")==-1) {	  document.write(fCode+gCode+fCodeEnd+Itr);	} else {	  document.write(gCode);	}}//-->