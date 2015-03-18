//bio
var bio = {
    "name": "Andy Parchment",
    "role": "Sr. Technical Project Manager",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "acptech@gmail.com",
        "github": "acptech",
        "twitter": "@acptech",
        "location": "Miami, FL"
    },
    "welcomeMessage": "Welcome to my resume site.",
    "skills": ["Wireless", "Wireline", "Excel", "VBA"],
    "bioPic": "images/fry.jpg"
};

//work
var work = {
    "jobs": [{
        "employer": "AT&T Mobility",
        "title": "Sr.Technical Project Manager",
        "dates": "January 2000 -Present",
        "description": "Tier II technical Support"
    }, {
        "employer": "Bellsouth",
        "title": "ST",
        "dates": "1979-2000",
        "description": "Install and repair all telephone lines & equipment in Bellsouth teritory"
    }]
};

//projects
var projects = {
    "projects": [{
        "title": "sample project 1",
        "dates": "2015",
        "description": "This was the first project I did back in 2015",
		"images": "images/robot.jpg",
    }, {
        "title": "sample project 2",
        "dates": "2014",
        "description": "This was the first project I did back in 2014",
		"images": "images/tank.jpg"
    }]
};

//education
var education = {
	"schools": [
		{
			"school": "Stanford University",
			"location": "Palo Alto, CA",
			"degree": "Masters",
			"dates": "2010-2013",
			"major": ["Geology"]
		},
		{
			"school": "West Virginia University",
			"location": "Morgantown, WV",
			"degree": "BS",
			"dates": "2004-2009",
			"major": ["Mathematics", "Geology"]
		}
	],
	"onlineCourses": [
		{
			"title":"Javascript Basics",
			"school":"Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud804"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud304"

		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud775"
		}
	]
}


//Name and Role
function header() {
    var name = "Andy Parchment";
    var role = "Front End Web Developer";
    var mobile = bio.contacts.mobile;
    var email = bio.contacts.email;
    var github = bio.contacts.github;
    var twitter = bio.contacts.twitter;
    var _location = bio.contacts.location;
    var bioPic = bio.bioPic;
    var welcomeMessage = bio.welcomeMessage;
    var formattedName = HTMLheaderName.replace("%data%", name);
    var formattedRole = HTMLheaderRole.replace("%data%", role);
    var formattedMobile = HTMLmobile.replace("%data%", mobile);
    var formattedEmail = HTMLemail.replace("%data%", email);
    var formattedGithub = HTMLgithub.replace("%data%", github);
    var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
    var formattedLocation = HTMLlocation.replace("%data%", _location);

    //var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);
    //$("#header").append(formattedWelcomeMessage);
}
header();

//var welcomeMessage = bio.welcomeMessage;
//var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
//$("#header").prepend(formattedWelcomeMessage);



//Skills
if (bio.skills.length != 0) {
    $('#header').append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
    $('#skills').append(formattedSkill);
    formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
    $('#skills').append(formattedSkill);
    formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
    $('#skills').append(formattedSkill);
    formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
    $('#skills').append(formattedSkill);
}

//Jobs
function displayWork() {
    for (job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].date);
        var formattedWorkDescritption = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedWorkDates);
        $('.work-entry:last').append(formattedWorkDescritption);
    }
}
displayWork();


//projects
//projects.display = function() {
function displayProjects() {
    for (current in projects.projects) {
        $('#projects').append(HTMLprojectStart);

        var formatttedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[current].title);
        $('#projects').append(formatttedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[current].dates);
        $('#projects').append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[
            current].description);
        $('#projects').append(formattedProjectDescription);

       // if (projects.projects[project].images.length > 0) {

        //for (images in projects.projects[current].image) {
       // var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[current].image[images]);
         //$('#projects').append(formattedProjectImage);
    }
}
	//}
//}
displayProjects();


//education
education.display = function() {
    for (schoolInfo in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[schoolInfo].school);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolInfo].degree);
        var formattedSchoolInformation = formattedSchool + formattedDegree;
        $(".education-entry:last").append(formattedSchoolInformation);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolInfo].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolInfo].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolInfo].major);
        $("#education-entry:last").append(formattedMajor);
    }
    // $("#education").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]
            .title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[
            onlineCourse].school);
        var formattedOnlineSchoolInfo = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineSchoolInfo);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]
            .dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedURL);
    }
}
education.display();


// creates a Google place search service object. PlacesService does the work of
// actually searching for location data.
var service = new google.maps.places.PlacesService(map);

// Iterates through the array of locations, creates a search object for each location
for (var place in location) {

  // the search request object
  var request = {
    query: location[place]
  };

  // Actually searches the Google Maps API for location data and runs the callback
  // function with the search results after each search.
  service.textSearch(request, callback);
  //map
 function displaymap(){
	$("#mapDiv").append(googleMap);
}

displaymap();
}