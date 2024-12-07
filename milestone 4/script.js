var form = document.getElementById("resume-form");
var resumeDisplayElelment = document.getElementById("resume-display");
//handle submision//
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //colection of values//
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //generate content dynamically//
    var resumeHTML = "\n        <h2><b>Editable Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>phone:</b><span contenteditable=\"true\">").concat(phoneNumber, "</span></p>\n\n        <h3>Educaton</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
    //resume display...//
    if (resumeDisplayElelment) {
        resumeDisplayElelment.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume Display element is missing..!");
    }
});
