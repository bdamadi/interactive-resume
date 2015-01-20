var bio = {
    "name": "Babak Damadi",
    "role": "Analyst / Data Scientist",
    "contacts": {
        "mobile":"240-441-9074",
        "email":"bdamadi@gmail.com",
        "github":"bdamadi",
        "twitter":"@BabakDamadi",
        "location":"Washington metropolitan area"
    },
    "welcomeMessage": "Welcome to My Resume",
    "skills": [
        "MongoDB", "Python Programming", "Data Analysis", "Web Development"
    ],
    "biopic": "images/fry.jpg",
    "display": function() {
        // Header
        $('#header').prepend(HTMLheaderRole.replace("%data%", this.role));
        $('#header').prepend(HTMLheaderName.replace("%data%", this.name));
        
        // Contacts
        for (var contact in this.contacts) {
            var formatedContact = HTMLcontactGeneric
                    .replace("%contact%", contact)
                    .replace("%data%", this.contacts[contact]);
            
            // Top contacts
            $('#topContacts').append(formatedContact);
                    
            // Footer contacts
            $('#footerContacts').append(formatedContact);
        }
        
        // Bio picture
        $('#header').append(HTMLbioPic.replace("%data%", this.biopic));
        $('#header').append(HTMLWelcomeMsg.replace("%data%", this.welcomeMessage));
        
        // Skills
        $('#header').append(HTMLskillsStart);
        for (var idx in this.skills) {
            $("#skills").append(HTMLskills.replace("%data%", this.skills[idx]));
        }
        
        // Google map
        $('#mapDiv').append(googleMap);
    }
};

var education = {
    "schools": [ // Array of objects
        {
            "name": "Georgia Tech",
            "location": "Atlanta, GA",
            "degree": "MS",
            "majors": ["Software Engineering"],
            "dates": "2015 (in progress)",
            "url": "http://www.gatech.edu/"
        },
        {
            "name": "George Washington University",
            "location": "Washington, DC",
            "degree": "MS",
            "majors": [ "Engineering Management; Concentration in Economics and Finance, & Cost Engineering" ],
            "dates": "2009",
            "url": "http://www.gwu.edu/"
        },
        {
            "name": "University of Maryland, Baltimore County",
            "location": "Baltimore, MD",
            "degree": "BS",
            "majors": ["Computer Engineering"],
            "dates": 2006,
            "url": "http://www.umbc.edu"
        }
    ],
    "onlineCourses": [ // Array of objects
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/ud804"
        },
        {
            "title": "Web Development",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/cs253"
        },
        {
            "title": "Data Analysis with R",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/ud651"
        },
    ],
    "display": function() {
        // Schools
        for (var idx in this.schools) {
            var school = this.schools[idx];
            
            // Construct a div element for a school
            var schoolDiv = $(HTMLschoolStart);
            
            // Show school's information
            schoolDiv.append(
                HTMLschoolName.replace("%data%", school.name) +
                HTMLschoolDegree.replace("%data%", school.degree));
            schoolDiv.append(HTMLschoolDates.replace("%data%", 
                school.dates));
            schoolDiv.append(HTMLschoolLocation.replace("%data%", 
                school.location));
            
            // List of majors
            for (var idx in school.majors) {
                schoolDiv.append(HTMLschoolMajor.replace("%data%", 
                    school.majors[idx]));
            }
            
            $('#education').append(schoolDiv);
        }
        
        // Online Courses
        $('#education').append(HTMLonlineClasses);
        
        for (var idx in this.onlineCourses) {
            var course = this.onlineCourses[idx];
            
            // Construct a div element for a course
            var courseDiv = $(HTMLschoolStart);
            
            // Show course's information
            courseDiv.append(
                HTMLonlineTitle.replace("%data%", course.title) +
                HTMLonlineSchool.replace("%data%", course.school));
            courseDiv.append(HTMLonlineDates.replace("%data%", 
                course.date));
            courseDiv.append(HTMLonlineURL.replace("%data%", 
                course.url));
                
            $('#education').append(courseDiv);
        }
    }
};


var work = {
    "jobs": [ // Array of objects
        {
            "employer": "Cost Analysis and Estimating Directorate",
            "title": "Industrial Engineer",
            "location": "Washington Metropolitan Area, DC",
            "dates": "​July 2010 - Present",
            "description": "Drives the improvement of systematic processes while utilizing statistical analysis, design, planning, quality control, operations management, computer simulations, and problem solving techniques."
        },
        {
            "employer": "GTA",
            "title": "Information Technology Consultant",
            "location": "Reston, VA",
            "dates": "​June 2008 - July 2010",
            "description": "Owned accountability for measuring, analyzing, and driving testing of complex communication systems."
        }
    ],
    "display": function() {
        
        // Jobs list
        for (var idx in this.jobs) {
            var job = this.jobs[idx];
            
            // Construct a div element for a job
            var workDiv = $(HTMLworkStart);
            
            // Show job's information
            workDiv.append(
                HTMLworkEmployer.replace("%data%", job.employer) +
                HTMLworkTitle.replace("%data%", job.title));
            workDiv.append(HTMLworkDates.replace("%data%", job.dates));
            workDiv.append(HTMLworkLocation.replace("%data%", job.location));
            workDiv.append(HTMLworkDescription.replace("%data%", job.description));
                                                
            $('#workExperience').append(workDiv);
        }
    }
};

var projects = {
    "projects": [ // array of objects
        {
            "title": "Grapminder - Adults with HIV - Data Analysis",
            "dates": "June 2014 - July 2014",
            "description": "Investigated the UNAIDS (United Nations Programme on HIV/AIDS) data from 1990 onwards, and estimated the HIV prevelance percent in countries in Africa with comparision with all other countries , used years, country and value to plot HIV Prevelance % by US and the world ",
            "images": ["images/project2a.png", "images/project2b.png"]
        },
        {
            "title": "OpenStreetMap Case_Study",
            "dates": "May 2014 - June 2014",
            "description": "LasVegas.OSM.XLM it is a really nice dataset, and freely available for download.It is XML format.This dataset is human edited dataset.I had great opportunity to clean the data, wraggle the data and transform the shape of the data into a model (list of dictionary) and made it ready for Database! I have imported the data the MongoDB database and made queries such as number of unique users, number of shops, tourisms and hotesl in LasVegas.",
            "images": ["images/project1a.png", "images/project1b.png"]
        },
    ],
    "display": function() {
        // Projects list
        for (var idx in this.projects) {
            var project = this.projects[idx];
            
            // Construct a div element for a project
            var projectDiv = $(HTMLprojectStart);
            
            // Show project's information
            projectDiv.append(HTMLprojectTitle.replace("%data%", project.title));
            projectDiv.append(HTMLprojectDates.replace("%data%", project.dates));
            projectDiv.append(
                HTMLprojectDescription.replace("%data%", project.description));
            
            // Images
            for (var idx in project.images) {
                projectDiv.append(
                    HTMLprojectImage.replace("%data%", project.images[idx]));
            }
                                                
            $('#projects').append(projectDiv);
        }
    }
};

// Display all objects for the resume
function displayResume() {
    bio.display();
    education.display();
    work.display();
    projects.display();
}




// Call once to populate all the resume
displayResume();


