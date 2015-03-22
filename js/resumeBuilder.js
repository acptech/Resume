//Bio valid json
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
}

//Work valid json
var work = {
    "jobs": [{
        "employer": "AT&T Mobility",
        "title": "Sr.Technical Project Manager",
        "dates": "January 2000 -Present",
        "description": "Tier II technical Support"
    }, {
        "employer": "Bellsouth",
        "title": "Special Services Technician",
        "dates": "October 1979-2000",
        "description": "Install and repair all telephone lines & equipment in Bellsouth teritory"
    }]
}



//Projects valid json
var projects = {
    "projects": [{
        "title": "Alarm Migration Project",
        "dates": "2015",
        "description": "This was the first project I did back in 2015",
"images": "images/robot.jpg"
    }, {
        "title": "LMU Migration Project",
        "dates": "2014",
        "description": "This was the first project I did back in 2014",
"images": "images/tank.jpg"
    }]
}

//Education valid json
var education =  {
    "schools": [
        {
            "school": "Stanford University",
            "location": "Palo Alto, CA",
            "degree": "Masters",
            "dates": "2010-2013",
            "major": [
                "Geology"
            ]
        },
        {
            "school": "West Virginia University",
            "location": "Morgantown, WV",
            "degree": "BS",
            "dates": "2004-2009",
            "major": [
                "Mathematics",
                "Geology"
            ]
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Basics",
            "school": "Udacity",
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
	var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";
    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMessage);
}
header();

//var welcomeMessage = bio.welcomeMessage;
//var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
//$("#header").prepend(formattedWelcomeMessage);



//Skills displays good
if (bio.skills.length != 0) {
	$('#header').append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
	$('#skills').append(formattedSkill);
    var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
	$('#skills').append(formattedSkill);
    var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
	$('#skills').append(formattedSkill);
    var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
    $('#skills').append(formattedSkill);
    
}

//Work Experience displays good
function displayWork() {
    for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        var formattedWorkDescritption = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedWorkDates);
		$('.work-entry:last').append(formattedWorkDescritption);
    }
}
displayWork();

//Projects
projects.display  = function(){
    for (var project in projects.projects) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images) {
        //if (projects.projects[project].images.length > 0) {
            //for (var image in projects.projects[project].images) {
                //var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }

projects.display(); 



//Education displays good
function displayEducation() {
    for (schoolInfo in education.schools) {
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[schoolInfo].school);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolInfo].degree);
		var formattedSchoolInformation = formattedSchool + formattedDegree;
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolInfo].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolInfo].location);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchoolInformation);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolDates);
		
    }
     $("#education").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineSchoolInfo = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineSchoolInfo);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedURL);
    }
}
displayEducation();


//Map
function displaymap(){
	$("#mapDiv").append(googleMap);
}

displaymap();





