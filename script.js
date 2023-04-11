// let touristSpots = ['The Virupaksha Temple', 'A Victoria Memorial', 'The Tajmahal'];
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let n = touristSpots.length;
for(let i=0;i<n;i++){
    let name = touristSpots[i];
    if(name.startsWith("The ")){
        let temp = name.substring(4,name.length);
        name = temp + " The";
    }
    else if(name.startsWith("An ")){
        let temp = name.substring(3,name.length);
        name = temp + " An";
    }
    else if(name.startsWith("A ")){
        let temp = name.substring(2,name.length);
        name = temp + " A";
    }
    touristSpots[i] = name;   
}
console.log(touristSpots);
 touristSpots.sort();

for(let i=0;i<n;i++){
    let name = touristSpots[i];
    if(name.endsWith(" The")){
        let temp = name.substring(0,name.length-4);
        name = "The " + temp;
    }
    else if(name.endsWith(" An")){
        let temp = name.substring(0,name.length-2);
        name = "An "+temp;
    }
    else if(name.endsWith(" A")){
        let temp = name.substring(0,name.length-1);
        name = "A "+ temp;
    }
    touristSpots[i] = name;
    
}

console.log(touristSpots)

let id = document.getElementById("band");
for(let item in touristSpots){
    var li = document.createElement('li');     // create li element.
        li.innerHTML = touristSpots[item];      // assigning text to li using array value.
        id.appendChild(li); 
}