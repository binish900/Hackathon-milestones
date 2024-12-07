const form= document.getElementById("resume-form") as HTMLFormElement
const resumeDisplayElelment= document.getElementById("resume-display") as HTMLDivElement

//handle submision//
form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    //colection of values//
    const name= (document.getElementById("name") as HTMLInputElement).value
    const email= (document.getElementById("email") as HTMLInputElement).value
    const phoneNumber= (document.getElementById("phone") as HTMLInputElement).value
    const education= (document.getElementById("education") as HTMLInputElement).value
    const experience= (document.getElementById("experience") as HTMLInputElement).value
    const skills= (document.getElementById("skills") as HTMLInputElement).value

    //generate content dynamically//
    const resumeHTML =`
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b>${name}</p>
        <p><b>Email:</b>${email}</p>
        <p><b>phone:</b>${phoneNumber}</p>

        <h3>Educaton</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        `;
        //resume display...//

        if(resumeDisplayElelment){
            resumeDisplayElelment.innerHTML = resumeHTML;
            
        } else {
            console.error("The resume Display element is missing..!")
        }
});