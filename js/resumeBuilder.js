var bio = {
    "name" : "Andy Parchment",
    "role": "Sr. Technical Project Manager",
    "contacts": {
    "mobile": "555-555-5555",
    "email": "acptech@gmail.com",
    "github": "acptech",
    "twitter": "@acptech",
    "location": "Miami"},
    "welcomeMessage": "Welcome to my resume site!",
    "skills": ["Wireless", "Wireline", "Excel", "VBA"],
    "bioPic": "images/fry.jpg"
};



var work = {
    "jobs": [
    {
        "employer": "AT&T Mobility",
        "title": "Sr.Technical Project Manager",
        "dates": "January 2000 -Present",
        "description": "Tier II technical Support"
    },
    {
        "employer": "Bellsouth",
        "title": "ST",
        "dates": "1979-2000",
        "description": "Install and repair all telephone lines & equipment in Bellsouth teritory"
    }
    ]
}; 


var projects = {
    "projects": [
    {
        "title": "sample project 1",
        "dates": "2015",
        "description" : "This was the first project I did back in 2015",
    },
    {
        "title": "sample project 2",
        "dates": "2014",
        "description" : "This was the first project I did back in 2014",
    }
        ]
};

var education = {
    "schools": [
        {
            "school": "Unversity of Miami",
            "city": "Miami",
            "major": "Engineering",
            "degree": "BA",
            "graduate": "June 2014",
            "url": "http://miami.edu"
        },
        {
            "school": "Miami Dade College",
            "city": "Miami",
            "major": "CS",
            "degree": "BA",
            "graduate": "August 1998",
            "url": "http://www.utexas.edu"
        },
        {
            "school": "St. George;s College",
            "city": "Kingston",
            "major": "Physics",
            "degree": " BS",
            "graduate": "July 1979",
            "url": "http://www.stgc.org/"
        }
    ],
    "onlineCourses": [
        {
            "title": "front-end web designe nanodegree",
            "school": "Udacity",
            "graduate": "May 2015",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Computer Programming",
            "school": "Kahn Academy",
            "url": "https://www.udacity.com"
        }
    ]
}


var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);
var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedSkills);


var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);




var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
$(".project-entry:last").append(formattedProjectTitle);

 var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
$(".project-entry:last").append(formattedProjectDates);

 var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
$(".project-entry:last").append(formattedProjectDescription);

 if (projects.projects[project].images.length > 0) {
 for(var image in projects.projects[project].images) {
 var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
 $(".project-entry:last").append(formattedProjectImage);

 	}
 }






var skills = bio.skills;
//if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkills);

function displayWork(){
	for (job in work.jobs){
	}
}
displayWork();
displayBio();

for(job in work.jobs) {
	//create new div for work experience
	$("#workExperience").append(HTMLworkStart);
	// concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}

$('#main').append(internationalizeButton);
//here's a map
$("#mapDiv").append(googleMap);

// creates a Google place search service object. PlacesService does the work of
// actually searching for location data.
var service = new google.maps.places.PlacesService(map);

// Iterates through the array of locations, creates a search object for each location
for (var place in locations) {

  // the search request object
  var request = {
    query: locations[place]
  };

  // Actually searches the Google Maps API for location data and runs the callback
  // function with the search results after each search.
  service.textSearch(request, callback);
}