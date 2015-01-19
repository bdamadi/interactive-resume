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
            "majors": [ "Engineering Management", "Concentration in Economics", "Finance, & Cost Engineering" ],
            "dates": "2009",
            "url": "http://www.gwu.edu/"
        },
        {
            "name": "University of Maryland, Baltimore County",
            "location": "Baltimore, MD",
            "degree": "BS",
            "majors": "Computer Engineering"
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