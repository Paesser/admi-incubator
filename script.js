var projectlist = document.getElementById("projectList");
var loader = document.getElementById("loader");


firebase.database().ref("movies").get()
.then((snapshot)=>{
	if(snapshot.exists()){
	 var data = snapshot.val()
	 console.log(data)
		
		loader.style.display="none"


var contList;
	
	
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

//fetch('projects.json')
//  .then(response => response.json())
//  .then(function(data) {
//	console.log(data)
for(x = 0; x< data.length; x++)	{
var mainContent = document.getElementById("mainContent");
var content = document.createElement("div");
var title = document.createElement("h2");
var paragraph = document.createElement("p");
var image = document.createElement("img");
var link = document.createElement("a");
var button = document.createElement("button");
var imgDesc = document.createElement("div");
var pbtn = document.createElement("div");




content.setAttribute("class","newstuff");
title.innerHTML =data[x].Name;
paragraph.innerHTML =data[x].Description;
image.src = data[x].image;
button.innerHTML="Learn More";
link.setAttribute("href","/project.html?index="+x)
imgDesc.setAttribute("class","imgDesc");
pbtn.setAttribute("class","pbtn");


	
mainContent.appendChild(content)



content.appendChild(imgDesc)
imgDesc.appendChild(image)
	
imgDesc.appendChild(pbtn)

	pbtn.appendChild(title)
pbtn.appendChild(paragraph)


pbtn.appendChild(link)
link.appendChild(button)
}
	}
		
});

