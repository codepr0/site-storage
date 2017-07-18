var menuList=[
	[	"Games",
		["Sokoban",			"cratepusher"],
		["Memory Pairs",	"memory"],
		["Tic Tac Toe",		"tictactoe"]
	],
	[	"Information",
		["Front Page",		"frontpage"]
	],
	[	"Math",
		["Quadratic",		"quadratic"],
		["Sums of Primes",	"sumprimes"],
		["Cellular Automata","cellauto"]
	]
]
for(a=0;a<menuList.length;a++){document.getElementById('topMenuWrap').innerHTML+="<div class='tMBBackground'><div class='topMenuBox'>"+menuList[a][0]+"</div>"}
document.getElementById('topMenuWrap').innerHTML+="<div id='sB2'></div></div>"



var lnkList = document.getElementById("topMenuWrap").getElementsByClassName("topMenuBox")
for(a=0;a<lnkList.length;a++){
	lnkList[a].upOrDn=0.02
	lnkList[a].Clkd=0
	lnkList[a].alpha=0
	lnkList[a].ident=a
	lnkList[a].style.background='rgba(50,224,84,0)'
}
var lastClick=lnkList
document.getElementById("topMenuWrap").addEventListener("mouseover",function(){fade1(event, 0.02)})
document.getElementById("topMenuWrap").addEventListener("mouseout" ,function(){fade1(event,-0.02)})
document.getElementById("topMenuWrap").addEventListener("click"	   ,function(){fade1(event, 0	)})

function fade1(evnt,rate){
	if(evnt.target.className==="topMenuBox"){
		var lnk=evnt.target
		var limit
		lnk.upOrDn=rate
		var rate2=rate
		function fadeProcess(){
			if(rate2===lnk.upOrDn&&limit()){
				lnk.alpha+=lnk.upOrDn
				lnk.style.background='rgba(50,224,84,'+lnk.alpha+')'
				setTimeout(function(){fadeProcess()},20)
			}
		}
		if(rate!==0&&!lnk.Clkd){
			if		(rate=== 0.02){limit=function(){return(lnk.alpha<0.45)}}
			else if	(rate===-0.02){limit=function(){return(lnk.alpha>0)}}
			fadeProcess()
		}
		else if(rate===0&&!lnk.Clkd){
			lnk.Clkd=1;lnk.alpha=1;lnk.style.background='rgba(50,224,84,1)'
			
			var txtToAdd=""
			for (b=1;b<menuList[lnk.ident].length;b++){
				txtToAdd+="<div class='tMBBackground'><a class='topMenuBox' href='"+menuList[lnk.ident][b][1]+".html'>"
				+menuList[lnk.ident][b][0]+"</a></div>"
			}
			document.getElementById("sB2").innerHTML=txtToAdd
			var lnkList2 = document.getElementById("sB2").getElementsByTagName("a")
			for(a=0;a<lnkList2.length;a++){
				lnkList2[a].upOrDn=0.02
				lnkList2[a].Clkd=0
				lnkList2[a].alpha=0
				lnkList2[a].style.background='rgba(50,224,84,0)'
			}
			
			var currentClick=lnk;lnk=lastClick
			lnk.Clkd=0;lnk.upOrDn=-0.07;rate2=-0.07
			limit=function(){return(lnk.alpha>0)}
			fadeProcess()
			lastClick=currentClick
		}
		else if(rate===0&&lnk.Clkd){
			document.getElementById("sB2").innerHTML=""
			lnk.Clkd=0;lnk.upOrDn=-0.07;rate2=-0.07
			limit=function(){return(lnk.alpha>0)}
			fadeProcess()
			lastClick=lnkList
		}
	}
}