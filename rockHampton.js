resturantBtn = document.querySelector('#Resturants')

resturantBtn.addEventListener ('click', function(){
    
}

// var myResturants = ['Freddys', 'Tacobell', 'cliff dining', 'starbucks']

// const randomElement = Math.floor(math.random() * myResturants.length);
// console.log (random, myResturants[random])

function random_items(items){
    return items[Math.floor(Math.random()*items.length)];

}

const items = ['freddys', 'tacobell', 'starbucks', 'cliff dining']

function random_gyms(gym){
    return gym [Math.floor(Math.random()* gym.length)];

}

const gym = ['treehouse', "jenny craig", 'lifetime', 'vasa']

function nearbyParks (parks){
    return parks[Math.floor(Math.random()* parks.length)];

}

const parks = ['draper city park', 'draper historic park', 'galena hills park', 'draper city splashpad' ]