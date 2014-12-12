//$("#main").append("Seiji");

// var firstName = "James";

//var age = 32;

//console.log(age);


//var awesomeThoughts = 
	//"I am Seiji and I am AWESOME!"; 

//console.log(awesomeThoughts); 

//var funThoughts = 
	//awesomeThoughts.replace("AWESOME!","FUN");


//console.log(awesomeThoughts);

//console.log(funThoughts);

//$("#main").append(funThoughts);




//var formattedName = HTMLheaderName.replace("%data%", "Seiji Mendoza");

//var role = "Web Developer";
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName); 

//var skill = 
	//["awesomeness", "programming", "teacher", "JS"]; 

//$("#main").append(skill);

//$("#main").append(skill[0]); 

//console.log(skill.length);

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] +" "+ name[1];
}

inName("seiji mendoza");

$("#main").append(internationalizeButton); 


var bio = {
	"name"  : "Seiji Mendoza",
	"role" : "Web Developer",
	"contactInfo" : {
		"mobile" : "954-349-8632",
		"email" : "srm5149@gmail.com",
		"github" : "zenoner",
		"twitter" : "zenoner954",
		"location" : "South Florida"
	}, 
	"welcomeMessage" : "Welcome to my webpage!",
	"skills" : [ 
		"Web Developer", "Designer", "Creator", "Printer", "Graffiti"
	],
	"bioPic" : "images/seiji.jpg"
}



var education = {
	"school": [
	{
		"name": "Rochester Institute of Technology",
		"city": "Rochester, Ny",
		"degree": "BS",
		"major": ["New Media Marketing"],
		"date": "2010",
		"url": "http://example.com"
	},
	{
		"name": "The National Technical Institute for the Deaf",
		"city": "Rochester, Ny",
		"degree": "AAS",
		"major": ["Information Computer System"],
		"date": "2004",
		"url": "http://example.com"
	}
	],
	"onlineCourses": [
	{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates": "2014",
		"url": "http://example.com"
	}

	]
}

var work = {
	"jobs": [
	{
		"employer": "NFI",
		"title": "R&D technician",
		"location": "Miramar, Fl",
		"dates": "2013 - Future",
		"description" : "To support RD team members as defined by RD Manager"
	},
	{
		"employer": "WSI Internet Consulting",
		"title": "Digital Marketing Consultant",
		"location": "West Palm Beach, Fl",
		"dates": "2011 - 2013",
		"description" : "Formulate Digital Marketing strategies for client organizations"
	}
	]
}

var projects = {
	"projects": [
		{
		"title": "Project 1 : Developing powder flavor ",
		"dates": "2014",
		"description": "I will write this description lAter!!!",
		"images": [
			"http...",
			"http   "
	]
	}
]
}

if(bio.skills.length > 0) {

$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
}




//var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contactInfo[0]);

//var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
//$("#topContacts").append(formattedWelcomeMsg);



//Contact information lists (See Below)

var formattedContactMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
$("#topContacts").append(formattedContactMobile);

var formattedContactEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
$("#topContacts").append(formattedContactEmail);

var formattedContactGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
$("#topContacts").append( formattedContactGithub );

var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
$("#topContacts").append(formattedContactTwitter );

var formattedContactLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
$("#topContacts").append(formattedContactLocation);


// The Picture of Me 
var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
$("#name").append(formattedPicture);


//$("#header").append(HTMLcontactGeneric);


// Contact Information at footer section 
var formattedContactMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
$("#footerContacts").append(formattedContactMobile);

var formattedContactEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
$("#footerContacts").append(formattedContactEmail);

var formattedContactGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
$("#footerContacts").append( formattedContactGithub );

var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
$("#footerContacts").append(formattedContactTwitter );

var formattedContactLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
$("#footerContacts").append(formattedContactLocation);



function educationSchool(){
	for (educationtime in education.school){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.school[educationtime].name);
		

		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.school[educationtime].degree);
		
		var formattedSchoolDegree = formattedSchoolName + formattedschoolDegree;
		$(".education-entry").append(formattedSchoolDegree);

		var formattedschoolDate = HTMLschoolDates.replace("%data%", education.school[educationtime].date);
		$(".education-entry").append(formattedschoolDate);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.school[educationtime].city);
		$(".education-entry").append(formattedSchoolLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[educationtime].major);
		$(".education-entry").append(formattedMajor);
	}

	for (educationtime in education.onlineCourses){
		$("#education").append(HTMLonlineClasses);

		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[educationtime].title);
		$(".education-entry").append(formattedonlineTitle);



	}

}

educationSchool();




function displayWork() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);


		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}	
}

displayWork();

//var displayProjects = function() {


//}

//projects.display = function() 

function displayProjects() {
	for (project in projects.projects){
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedProjectDescription);
	}


}

displayProjects();





$(document).click(function(loc) {   
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});



//education["name"] = "Rochester Institute of Technology";
//education["years"] = "2004-2010";
//education["city"] = "Rochester, Ny, US"; 

//$("#main").append(work["position"]);
//$("#main").append(education.name);



