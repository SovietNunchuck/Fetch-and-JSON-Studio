window.addEventListener("load", function() {
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        console.log(response);
        response.json().then(function(json) {
            const container = document.getElementById("container");
            for (let i=0; i < json.length; i++) {
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName + " " + json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${listSkills(json[i].skills)}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="https://handlers.education.launchcode.org/static/images/${json[i].firstName.toLowerCase() + "-" + json[i].lastName.toLowerCase()}.jpg">
                </div>
                `;
            }
        });
    });
});

function listSkills(arr) {
    let skillList = ""
    for (let j=0; j < arr.length; j++){
        skillList += arr[j];
        if (j !== arr.length-1) {
            skillList += ", ";
        }
    }
    return skillList;
}

