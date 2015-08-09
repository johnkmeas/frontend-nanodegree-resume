var bio = {
	name : 'John Meas',
	role : 'Web Developer',
	contacts : {
		mobile : '604.831.5646',
		email : 'johnkmeas@gmail.com',
		github : 'https://github.com/johnkmeas',
		location : 'Surrey BC Canada'
	},
	welcomeMessage : 'Greetings!',
	skills : [
		'programming', 'web design', 'graphic design', 'htmlcss',
		'bootstrap', 'javascript'
	],
	bioPic : 'images/fry.jpg'
};

var work = {
	jobs : [
		{
			title : 'screen printer / prepress technician',
			employer : 'Zulu Promotions',
			location : 'Ladner BC Canada',
			dates : 'April 2015 - current',
			description : 'Preparing digital graphic files for print. Hand silkscreen print artwork onto various textiles.'

		},
		{
			title : 'screen printer',
			employer : 'Addictive Sportwear',
			location : 'Richmond BC Canada',
			dates : 'May 2007 -April 2015',
			description : 'Setup printing press for jobs. Hand silkscreen print artwork onto various textiles.'
		}
	]
};

var education = {
	schools : [
		{
			name : 'LA Matheson Secondary',
			location : 'Surrey, BC Canada',
			credential : '',
			major : 'Highschool diploma',
			date : 'Class of 2002'
		},
		{
			name : 'Udacity',
			location : 'online-distance',
			credential : 'certificate/nanodegree',
			major : ['frontend development'],
			date : 'June - present 2015'
		},
		{
			name : 'Udacity',
			location : 'online-distance',
			credential : 'certificate/nanodegree',
			major : ['fullstack development']

		}
	]
};

var projects = {
	projects : [
		{
			title : 'portfolio',
			dates : 2015,
			description : 'Built a static portfolio website to show employers. I used HTML, CSS, Bootstrap and some javascript and jquery. It is responsive and displays on mobile, tablet and desktop.',
			images : 'images/fry.jpg'
		}
	]
};
var socialmedia = {
	icons : ['facebook', 'twitter', 'googleplus']

};



function displayTitle(){
	var formattedName = HTMLheaderName.replace('%data%',
		bio.name);
	var formattedTitle = HTMLheaderRole.replace('%data%',
		bio.role);
	$('#header').prepend(formattedName);
	$('#header').append(formattedTitle);
};

displayTitle();

function displayContact() {
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	$('#topContacts').append(formattedMobile);

	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	$('#topContacts').append(formattedEmail);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	$('#topContacts').append(formattedGithub);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').append(formattedLocation);
};

displayContact();


if(bio.skills.length > 0) {

	$('#header').append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace('%data%',
	 	bio.skills[0]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%',
		bio.skills[1]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%',
		bio.skills[2]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%',
		bio.skills[3]);
};

function displayWork() {
	for(job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace(
			'%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace(
			'%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer +
		formattedTitle;

		$('.work-entry:last').append(
			formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace(
			'%data%', work.jobs[job].location);
		$('.work-entry:last').append(formattedLocation);

		var formattedDates = HTMLworkDates.replace(
			'%data%', work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace(
			'%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}
};

displayWork ();

function inName(name){
	name = name.trim().split(' ');
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + ' ' + name[1];
};

$('#main').append(internationalizeButton);
inName(bio.name);

function displayProject() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%',
			projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace('%data%',
			projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%',
			projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace('%data%',
					projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
};

function displayeducation() {
	for (school in education.schools){
		$('#education').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
		$('#education').append(formattedSchoolName);

		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].credential);
		$('#education').append(formattedDegree);


		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].date);
		$('#education').append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$('#education').append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
		$('#education').append(formattedMajor);

	}
};

displayeducation();

displayProject();

function displayFooter(){
	$('#footerContacts').append(footerStart);
};

displayFooter();

$('#mapDiv').append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
$(document).click(function(loc) {
	console.log(loc.pageX, loc.pageY);
});

