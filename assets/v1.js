
function Climate(){
    var x = document.getElementById("myText").value;
    fetch('https://house-plants.p.rapidapi.com/climate/'+x+'', {
    "method": 'GET',
    "headers": {
        'X-RapidAPI-Key': '0e2c663324msh00e171e1c952999p14ee63jsn550212d1e381',
        'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
    }
})

.then(response => response.json())
.then(data =>{
    var list = data.slice(0, 5);
    // console.log(data);
    let plant = `<tr><th>Name</th><th>Fname</th><th>Category</th><th>Origin</th><th>Climate</th><th>Ideallight</th><th>Toleratedlight</th><th>Watering</th><th>Insects</th></tr>`;

    list.forEach((item) => { 

        plant += `<tr>
            <td>${item.latin}</td>
            <td>${item.family} </td>
            <td>${item.category}</td>
            <td>${item.origin}</td>
            <td>${item.climate}</td>
            <td>${item.ideallight}</td>
            <td>${item.toleratedlight}</td>
            <td>${item.watering}</td>
            <td>${item.insects}</td>
        </tr>`;
        
        document.getElementById("demo").innerHTML = plant;
        // console.log(plant);
    });
})
.catch (err => {
    console.error(err);
});
}

function Origin(){
    var x = document.getElementById("myText").value;
    fetch('https://house-plants.p.rapidapi.com/origin/'+x+'', {
    "method": 'GET',
    "headers": {
        'X-RapidAPI-Key': '0e2c663324msh00e171e1c952999p14ee63jsn550212d1e381',
        'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
    }
})

.then(response => response.json())
.then(data =>{
    var list = data.slice(0, 5);
    // console.log(data);
    let plant = `<tr><th>Name</th><th>Fname</th><th>Category</th><th>Origin</th><th>Climate</th><th>Ideallight</th><th>Toleratedlight</th><th>Watering</th><th>Insects</th></tr>`;

    list.forEach((item) => { 

        plant += `<tr>
            <td>${item.latin}</td>
            <td>${item.family} </td>
            <td>${item.category}</td>
            <td>${item.origin}</td>
            <td>${item.climate}</td>
            <td>${item.ideallight}</td>
            <td>${item.toleratedlight}</td>
            <td>${item.watering}</td>
            <td>${item.insects}</td>
        </tr>`;
        
        document.getElementById("demo").innerHTML = plant;
        // console.log(plant);
    });
})
.catch (err => {
    console.error(err);
});
}

function Category(){
    var x = document.getElementById("myText").value;
    fetch('https://house-plants.p.rapidapi.com/category/'+x+'', {
    "method": 'GET',
    "headers": {
        'X-RapidAPI-Key': '0e2c663324msh00e171e1c952999p14ee63jsn550212d1e381',
        'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
    }
})

.then(response => response.json())
.then(data =>{
    var list = data.slice(0, 5);
    // console.log(data);
    let plant = `<tr><th>Name</th><th>Fname</th><th>Category</th><th>Origin</th><th>Climate</th><th>Ideallight</th><th>Toleratedlight</th><th>Watering</th><th>Insects</th></tr>`;

    list.forEach((item) => { 

        plant += `<tr>
            <td>${item.latin}</td>
            <td>${item.family} </td>
            <td>${item.category}</td>
            <td>${item.origin}</td>
            <td>${item.climate}</td>
            <td>${item.ideallight}</td>
            <td>${item.toleratedlight}</td>
            <td>${item.watering}</td>
            <td>${item.insects}</td>
        </tr>`;
        
        document.getElementById("demo").innerHTML = plant;
        // console.log(plant);
    });
})
.catch (err => {
    console.error(err);
});
}

