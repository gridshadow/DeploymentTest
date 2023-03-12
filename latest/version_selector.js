document.addEventListener("DOMContentLoaded", function() {
    let projectnumber = document.getElementById("projectnumber");
    if(projectnumber !== null) {
        loadVersions(function(stable, versions) {
            if(versions !== undefined) {
                let current = projectnumber.innerText;
                let select = document.createElement("select");
                select.id = "projectnumber";

                let latest = document.createElement("option");
                latest.value = 'latest';
                if(versions.indexOf(current) < 0) {
                    latest.innerText = 'Latest (' + current + ')';
                    latest.selected = true;
                } else {
                    latest.innerText = 'Latest';
                }
                select.append(latest);

                let arrayLength = versions.length;
                for(let i = 0; i != arrayLength; ++i) {
                    let option = document.createElement("option");
                    if(versions[i] == stable) {
                        option.value = 'stable';
                        option.innerText = 'Stable (v'+versions[i]+')';
                    } else {
                        option.value = versions[i];
                        option.innerText = 'v' + versions[i];
                    }
                    option.selected = (versions[i] == current);
                    select.append(option);
                }
                projectnumber.parentNode.replaceChild(select, projectnumber);
                select.addEventListener("change", function(event) {
                    window.location.assign("../" + event.target.value);
                });
            }
        });
    }
});
