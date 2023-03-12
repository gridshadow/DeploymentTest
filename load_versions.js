
function loadVersions(callback) {
    const url = "versions.txt";
    const versionsFile = new XMLHttpRequest();
    versionsFile.open("GET",url,true);
    versionsFile.send();
    versionsFile.onreadystatechange = function() {
        if(versionsFile.readyState == 4) {
            if(versionsFile.status == 200) {
                let versions = versionsFile.responseText.split('\n');
                versions = versions.filter(function(el) { return el; });
                versions.sort(function(a, b) {
                    const versionA = a.split('-', 2);
                    const versionB = b.split('-', 2);
                    let versionPartsA = versionA[0].split('.');
                    let versionPartsB = versionB[0].split('.');

                    const len = Math.max(versionPartsA.length, versionPartsB.length);
                    versionPartsA = versionPartsA.concat(Array(len).fill('0')).slice(0,len);
                    versionPartsB = versionPartsB.concat(Array(len).fill('0')).slice(0,len);

                    for(let i = 0; i != len; ++i) {
                        const cmp = +(versionPartsA[i]>versionPartsB[i])||-(versionPartsB[i]>versionPartsA[i]);
                        if(cmp != 0) {
                            return -cmp;
                        }
                    }
                    let cmp = versionB.length - versionA.length;
                    if((cmp == 0) && (versionA.length == 2)) {
                        cmp = +(versionA[1]>versionB[1])||-(versionB[1]>versionA[1]);
                    }
                    return -cmp;
                });
                const stable = versions.find(function(version) { return version.split('-').length == 1; });
                callback(stable, versions);
            } else {
                callback(undefined, undefined);
            }
        }
    }
}
