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

bio["city"] = "Washington metropolitan area";

$("#main").append(bio["city"]);