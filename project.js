var loader = document.getElementById("loader");


const urlParams = new URLSearchParams(window.location.search);
const projects = urlParams.get('index');
console.log(projects)
var containerDiv  = document.getElementById("project");
var projectlist = document.getElementById("projectList");

firebase.database().ref("movies").get()
.then((snapshot)=>{
	if(snapshot.exists()){
	 var data = snapshot.val()
	 
	 loader.style.display="none"

//fetch('projects.json')
//  .then(response => response.json())
//  .then(function(data) {
//	console.log(data[projects])
	
	//elements
	
	//create Elements
	var mainDiv = document.createElement("div");
	var vidPlot = document.createElement("div");
	var contentDiv = document.createElement("div");
	var trailer = document.createElement("iframe");
	var plot = document.createElement("p");
	var PlotTitle = document.createElement("h4");
	var plotPT = document.createElement("div");
	var iPoster = document.createElement("img");
	var title = document.createElement("h2");
	var characters = document.createElement("div");
	var characterTitle = document.createElement("h3");
	var pilot = document.createElement("h3");
	var meetTheTeam = document.createElement("h3");
	var meetTrailer = document.createElement("iframe");
	var userDiv = document.createElement("div");
	var uDiv = document.createElement("uDiv");

	
	
	for( z = 0; z < data.length; z++){
			var dropDI = document.createElement("option")
		dropDI.innerHTML=data[z].Name;
		dropDI.setAttribute("id","projo")
		dropDI.value = z;
		console.log(z)
		projectlist.appendChild(dropDI);
		  
	}
		
		document.getElementById('projectList').addEventListener('change', function() {
  		window.location= "project.html?index="+this.value
});
	
	//give them classes/IDs

	mainDiv.setAttribute("class","mainDIv");
	vidPlot.setAttribute("class","vidPlot");
	contentDiv.setAttribute("class","contentDiv");
	trailer.setAttribute("class","trailer");
	trailer.setAttribute("allow","fullscreen")
	plotPT.setAttribute("class", "plotPT")
	iPoster.setAttribute("src",data[projects].image)
	iPoster.setAttribute("class","poster")
	title.setAttribute("class","heading");
	characters.setAttribute("class","characters");
	characterTitle.setAttribute("class","characterTitle")
	pilot.setAttribute("class", "pilot");
	meetTheTeam.setAttribute("class", "meetTeam");
	meetTrailer.setAttribute("class","meetTrailer");
	userDiv.setAttribute("class","userDiv");
	
	
	

	
	
	

	
	//passing data
	trailer.setAttribute("src", data[projects].videoTrailer);
	plot.innerHTML=data[projects].plot;
	console.log(data[projects].plot)
	PlotTitle.innerHTML="The Plot"
	title.innerHTML= data[projects].Name;
	characterTitle.innerHTML="characters"
	pilot.innerHTML="Watch The Pilot";
	meetTheTeam.innerHTML="Meet the Team";
	meetTrailer.setAttribute("src", data[projects].meetTheTeam);
	meetTrailer.setAttribute("allow", "fullscreen")
	


	//append them/ post them in DOM
	plotPT.appendChild(title)
	plotPT.appendChild(PlotTitle);
	
	plotPT.appendChild(plot)
	vidPlot.appendChild(iPoster)
	
	vidPlot.appendChild(plotPT);
	

	contentDiv.appendChild(vidPlot);
	contentDiv.appendChild(characterTitle)
	contentDiv.appendChild(characters);
	contentDiv.appendChild(pilot);
	contentDiv.appendChild(trailer);
	contentDiv.appendChild(meetTheTeam)
	contentDiv.appendChild(meetTrailer)
	
	

		var userPorty = data[projects].team
		if(userPorty){
				contentDiv.appendChild(userDiv);	
			
			console.log("got data")
		}
		else{
			console.log("no data")
		}
	
	
	
	
	containerDiv.appendChild(contentDiv)
	
	for(x = 0; x< data[projects].characters.length; x++){
	
		var cast = document.createElement("div");
		var castname = document.createElement("p");
		var castProfile = document.createElement("div");
		cast.setAttribute("onselectstart","return false")
	
		
		cast.setAttribute("class", "cast");
		cast.style.backgroundImage="url("+data[projects].characters[x].profile+")"
		
		castname.innerHTML=data[projects].characters[x].cast+"<br><br>"+data[projects].characters[x].arch
		
		cast.appendChild(castname)
		cast.appendChild(castProfile)
		characters.appendChild(cast)
		
	}
		
		for(y = 0; y < data[projects].team.length; y++){
			
			console.log(data[projects].team)
			var uDiv = document.createElement("div");
			var uProf = document.createElement("img");
			var uName = document.createElement("h2");
			var uDesc = document.createElement("p");
			var portF = document.createElement("button");
			var social = document.createElement("button");
			var portFa =  document.createElement("a");
			var sociala = document.createElement("a");
			var  buttonDiv = document.createElement("div")
			
			uProf.setAttribute("class","uProf");
			uDiv.setAttribute("class","uDiv");
			uName.setAttribute("class","uName");
			uDesc.setAttribute("class","uDesc");
			portF.setAttribute("class","port");
			social.setAttribute("class","social");
			portF.innerHTML="Portfolio";
			social.innerHTML = "social";
			portFa.setAttribute("href",data[projects].team[y].portfolio);
			portFa.setAttribute("target","_blank");
			sociala.setAttribute("href",data[projects].team[y].social)
			sociala.setAttribute("target","_blank")
			buttonDiv.setAttribute("class", "buttonDiv")
			
			
			
			uProf.setAttribute("src",data[projects].team[y].image);
			uName.innerHTML = data[projects].team[y].name;
			uDesc.innerHTML = data[projects].team[y].description;
		
			
			uDiv.appendChild(uProf)
			uDiv.appendChild(uName)
			uDiv.appendChild(uDesc)
			portFa.appendChild(portF);
			sociala.appendChild(social);
			buttonDiv.appendChild(portFa)
			buttonDiv.appendChild(sociala)
			uDiv.appendChild(buttonDiv);
			userDiv.appendChild(uDiv);

			
			
			
		}
	
	

	
	//end of elements
	}
	
})