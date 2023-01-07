let array = [];

function getJSON() {
    for(let i = ".".length;i <= 225;i++){
        fetchStats(i);
    }   
    console.log(array);
  }

function get_buttons(){
    for(let i = "".length;i <= 225;i++){
        make_buttons(i);
    }      
}

async function fetchStats(a) {

fetch(`https://milddandy.github.io/Anime-Adventure-Stats/stats/Unit ` + a + ".json")
    .then((response) => response.json())
    .then((data) => array.push(data));
}

function add_description(a){
    var description = document.getElementById("unit" + a);
    var data = array[a];
    var lvl1 = data["Level 1 Stats"];
    var lvl00 = data["Level 100 Stats"];
    console.log(description);
    HTML = `<table>  
    <tr>
        <th>Upgrade</th>
        <th>Cost</th>
        <th>Damage</th>
        <th>Range</th>
        <th>SPA</th>
        <th>DPS</th>
    </tr>`;
    
    for (let x in lvl1){
        stats = lvl1[x];
        var first = true;
        for(let y in stats){
            if(first){
                HTML += "<tr><td>" + y + "</td>";
                first = false;
            }
            HTML += "<td>" + stats[y] + "</td>";
        } 
        HTML += "</tr>";
    }
    HTML += "</table>";
    description.innerHTML = HTML;

    //description.innerHTML += "does appending even more stuff work?";
    /*
    for (var key in data) {
        console.log(data[key]);
        description.appendChild((document.createElement("")))
        };
    
    ;*/
    //array[description.value].Name
}

function make_buttons(a) {
    //var json = JSON.parse(array[0]);
    var button = document.createElement('button');
    var div = document.createElement("div");
    var br = document.createElement("br");
    //button.innerText = json;
    button.innerText = array[a].Name;
    div.id = "unit" + a;
    button.value = a;
    button.onclick = function() {add_description(this.value); };
    document.getElementById('icon').appendChild(button);
    document.getElementById('icon').appendChild(div);
    document.getElementById('icon').appendChild(br);
}


function random_integer(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
rerolls = 0
var divClone = $("icon").clone()
function roll_trait(){
    var random = random_integer(1, 10003)
    document.getElementById("trait").classList.remove("rare", "epic", "legendary", "mythic");
    if(random >= 1 && random <= 2997){ //Superior - 29.97% chance    
        document.getElementById("trait").innerHTML = "Superior";   
        var random2 = random_integer(1, 3)
        if(random2 < 3){
            document.getElementById("trait").classList.add("rare");  
            GFG_Fun("trait_superior");
        } 
        else{
            document.getElementById("trait").classList.add("epic");   
            GFG_Fun("trait_superior_3");
        }
    }
    else if(random >= 2998 && random <= 5495){ //Nimble - 24.98% chance
        document.getElementById("trait").innerHTML = "Nimble";   
        var random2 = random_integer(1, 3)
        if(random2 < 3){
            document.getElementById("trait").classList.add("rare");  
            GFG_Fun("trait_nimble");
        } 
        else{
            document.getElementById("trait").classList.add("epic");   
            GFG_Fun("trait_nimble_3");
        }   
    }
    else if(random >= 5496 && random <= 7993){ //Range - 24.98% chance
        document.getElementById("trait").innerHTML = "Range";    
        var random2 = random_integer(1, 3)
        if(random2 < 3){
            document.getElementById("trait").classList.add("rare");  
            GFG_Fun("trait_range");
        } 
        else{
            document.getElementById("trait").classList.add("epic");   
            GFG_Fun("trait_range_3");
        } 
    }
    else if(random >= 7994 && random <= 8992){ //Adept - 9.99% chance
        document.getElementById("trait").innerHTML = "Adept";             
        document.getElementById("trait").classList.add("legendary"); 
        GFG_Fun("trait_adept");
    }
    else if(random >= 8993 && random <= 9492){ //Culling - 5% chance
        document.getElementById("trait").innerHTML = "Culling";    
        document.getElementById("trait").classList.add("legendary"); 
        GFG_Fun("trait_culling");
    }
    else if(random >= 9493 && random <= 9742){ //Sniper - 2.5% chance
        document.getElementById("trait").innerHTML = "Sniper";        
        document.getElementById("trait").classList.add("legendary"); 
        GFG_Fun("trait_sniper");
    }
    else if(random >= 9743 && random <= 9842){ //Godspeed - 1% chance
        document.getElementById("trait").innerHTML = "Godspeed";    
        document.getElementById("trait").classList.add("legendary"); 
        GFG_Fun("trait_godspeed");
    }
    else if(random >= 9843 && random <= 9922){ //Reaper - 0.8% chance
        document.getElementById("trait").innerHTML = "Reaper";   
        document.getElementById("trait").classList.add("mythic"); 
        GFG_Fun("trait_reaper");
    }
    else if(random >= 9923 && random <= 9958){ //Celestial - 0.36% chance
        document.getElementById("trait").innerHTML = "Celestial";           
        document.getElementById("trait").classList.add("mythic"); 
        GFG_Fun("trait_celestial");
    }   
    else if(random >= 9959 && random <= 9978){ //Divine - 0.2% chance
        document.getElementById("trait").innerHTML = "Divine";    
        document.getElementById("trait").classList.add("mythic"); 
        GFG_Fun("trait_divine");
    }   
    else if(random >= 9979 && random <= 9993){ //Golden - 0.15% chance
        document.getElementById("trait").innerHTML = "Golden";     
        document.getElementById("trait").classList.add("mythic"); 
        GFG_Fun("trait_golden");
    }   
    else if(random >= 9994 && random <= 10003){ //Unique - 0.1% chance
        document.getElementById("trait").innerHTML = "Unique";   
        document.getElementById("trait").classList.add("mythic"); 
        GFG_Fun("trait_unique");
    }   
    //document.getElementById("seed").innerHTML = random;
    rerolls += 1
    document.getElementById("score").innerHTML = `Rerolls Spent: ` + rerolls;
}

function GFG_Fun(image) {
    var img = document.createElement('img');
    img.src = 'img/assets/sprites/traits/' + image + ".png";
    if(rerolls == 0){
        document.getElementById('icon').appendChild(img);
    }
    else{
        document.getElementById("icon").insertBefore(img, document.getElementById("icon").children[0]);
    }
}

function reset(){
    document.getElementById("score").innerHTML = `Rerolls Spent: 0`;
    document.getElementById("icon").innerHTML = "";
    document.getElementById("trait").innerHTML = "";
    rerolls = 0
    fetch('https://milddandy.github.io/Anime-Adventure-Stats/stats/Unit 1.json')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function roll_until(){
    document.getElementById("trait").classList.remove("mythic");
    document.getElementById("trait").innerHTML = "";
    select = document.getElementById('choices').value;
    if(select == "mythic"){
        while(!(document.getElementById("trait").classList.contains(select))){
            setTimeout(roll_trait(), 100);
        }
    }
    else{
        while(!(document.getElementById("trait").innerHTML == select)){
            setTimeout(roll_trait(), 100);
    }
}
async function fetchMovies() {
  const response = await fetch('/movies');
  // waits until the request completes...
  console.log(response);
}

}
