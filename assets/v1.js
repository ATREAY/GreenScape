
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
themeToggleLightIcon.classList.remove('hidden');
} else {
themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

// toggle icons inside button
themeToggleDarkIcon.classList.toggle('hidden');
themeToggleLightIcon.classList.toggle('hidden');

// if set via local storage previously
if (localStorage.getItem('color-theme')) {
if (localStorage.getItem('color-theme') === 'light') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
} else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
}

// if NOT set via local storage previously
} else {
if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
} else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
}
}

});


function Climate(){
    selectElement = document.querySelector('#opcli');
    x = selectElement.value;
    // var x = document.getElementById("opcli").value;
    fetch('https://house-plants.p.rapidapi.com/climate/'+x+'', {
    "method": 'GET',
    "headers": {
        'X-RapidAPI-Key': "b2c87af009msh66fe1cb53f20abep1caadfjsn24b7b680a666",
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
    selectElement = document.querySelector('#opreg');
    x = selectElement.value;
    // var x = document.getElementById("opreg").value;
    fetch('https://house-plants.p.rapidapi.com/origin/'+x+'', {
    "method": 'GET',
    "headers": {
        'X-RapidAPI-Key': "b2c87af009msh66fe1cb53f20abep1caadfjsn24b7b680a666",
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
    selectElement = document.querySelector('#oppt');
    x = selectElement.value;
    // var x = document.getElementById("oppt").value;
    fetch('https://house-plants.p.rapidapi.com/category/'+x+'', {
    "method": 'GET',
    "headers": {
        'X-RapidAPI-Key': "b2c87af009msh66fe1cb53f20abep1caadfjsn24b7b680a666",
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

