/*
COMP 1073 MODULE 5 Project
Name- Parth Joshi Lakehead ID- 1126914

Vacation Rental- Chutti.com (Chutti- Indian word for Vacation/Holiday)
Should Include name, price,
rating, location, rooms, availability and features
Extension- Adding Maps
*/

class Chutti {
//this is the super class
 constructor(name, price,rating, location, rooms, features,availability) {
     this.name=name;
     this.price=price;
     this.rating=rating;
     this.location=location;
     this.rooms=rooms;
     this.features=features;
     this.availability=availability;
 }
}

/* Method to display a description of the property and a method that
checks availability. */

 Chutti.prototype.displayDesc=function() {
    let main=document.querySelector('main');
    let newPara=document.createElement('p');

    let sentence=this.name+' is of $'+this.price+' is '+this.rating+' Rated, Situated- '+this.location+' has '+this.rooms+' rooms and not to forget about..... '+this.features;
    
    newPara.innerHTML=sentence;
    main.appendChild(newPara);
    console.log(sentence);
 }

  Chutti.prototype.checkAv=function() {
    let main1=document.querySelector('main');
    let newPara1=document.createElement('p');

    let available=this.availability;
    
    newPara1.innerHTML=available;
    main1.appendChild(newPara1);
    console.log(available);
 }

//Instantiating 

let agra=new Chutti('Taj Rooms',20.10,4.90,'Near Taj Mahal, Agra',2,'Each Room has a Private Bathroom, Fully Air Conditioned, Super-Helpful Host, Shared Kitchen, Forest Facing',' Available after April 4 2020');

let barrie=new Chutti('Simcoe Cottage',35.50,4.78,'Downtown Barrie',3,'Spacious Lake Facing Cottage,Centrally Heated with a private Television (Netflix Included), Common Area also has a PS4 Gaming Console ! Host visits every Weekend',' Available');

//New Sub-CLass
class SpecialRate extends Chutti {
    // inherit from Chutti 
    constructor(name, price,rating, location, rooms, features,availability,spRate) {
        super(name, price,rating, location, rooms, features,availability);
        this.spRate=spRate;
    }
}
  SpecialRate.prototype.calc= function() {
    //method to show 20% off on Room Price     
    this.spRate=this.price-this.price*0.20;
        let sentence3=this.name+' was of $'+this.price+' now at 20% off at $'+this.spRate;
        console.log(sentence3);
    
        let newPara3=document.createElement('p');
        let main3=document.querySelector('main');
    
        newPara3.innerHTML=sentence3;
        main3.appendChild(newPara3);
    }

//Instantiating 
let barrie1=new SpecialRate('Simcoe Cottage',35.50);


//New Sub-CLass
class SuperHost extends SpecialRate {
    //inherit from Special Rate
    constructor(superHost,type,superRate,name, price,rating, location, rooms, features,availability,spRate) {
        super(name, price,rating, location, rooms, features,availability,spRate);
        this.superHost=superHost;
        this.type=type;
        this.superRate=superRate;   
    }
}


SuperHost.prototype.host= function() {
    //method to display super host's name and rating      
        this.type=' Super Host';
        let sentence=this.superHost+' is a '+this.type+' who Rated it '+this.superRate;
        console.log(sentence);

        let newPara=document.createElement('p');
        let main=document.querySelector('main');
    
        newPara.innerHTML=sentence;
        main.appendChild(newPara);
}

//Instantiating 
let barrie2=new SuperHost('Andrea ',this.type,4.90);


/*
Browser API - Geolocation API 
*/
var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 44.4121016, lng: -79.6689532},
          zoom: 15
        });
        infoWindow = new google.maps.InfoWindow;

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

      let para = document.querySelector('p'); 
      let button = document.querySelector('button'); 
    
      function getLocation() {
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition); 
        }
        else {
          para.innerHTML = '<p> Geolocation is not supported'; 
        }
      }
    
      function showPosition(position) {
        para.innerHTML = '<p>You\'re at Latitude: ' + position.coords.latitude + 
        ' , Longitude: ' + position.coords.longitude + '</p>';
         
      }
    
      button.onclick = getLocation; 


//Third Party API 

function init_Map() 
{

    let agra_room = {
        lat: 27.168247, 
        lng: 78.050997
      }; 

    //map object
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: agra_room
    });


    let barrie_room = {
        lat: 44.3896904,
        lng: -79.6805445
      }; 
    
    //map object  
    let map1 = new google.maps.Map(document.getElementById('map1'), {
      zoom: 18,
      center: barrie_room
    });
   
    //marker objects 
    
    let marker = new google.maps.Marker({position:agra_room, map:map}); 
    let marker1 = new google.maps.Marker({position:barrie_room, map:map1});              
}