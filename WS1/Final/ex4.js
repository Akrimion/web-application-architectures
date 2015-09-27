
'use strict'
var rental={
  "cars": [
    {
      "id": "p306",
      "vehicule": "peugeot 306",
      "pricePerDay": 20,
      "pricePerKm": 0.10
    }
  ],
  "rentals": [
    {
      "id": "1-pb-92",
      "driver": {
        "firstName": "Paul",
        "lastName": "Bismuth"
      },
      "carId": "p306",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-12",
      "distance": 100,
      "options":{
        "deductibleReduction": false
      }
    },
    {
      "id": "2-rs-92",
      "driver": {
        "firstName": "Rebecca",
        "lastName": "Solanas"
      },
      "carId": "p306",
      "pickupDate": "2015-09-10",
      "returnDate": "2015-09-15",
      "distance": 300,
      "options":{
        "deductibleReduction": true
      }
    },
    {
      "id": "3-sa-92",
      "driver": {
        "firstName": "Sami",
        "lastName": "Ameziane"
      },
      "carId": "p306",
      "pickupDate": "2015-08-31",
      "returnDate": "2015-09-13",
      "distance": 1000,
      "options":{
        "deductibleReduction": true
      }
    }
  ]
}
var liste ={
  "rentals": [
    {
      "id": "Paul-Bismuth"
    
    },
    {
      "id": "Rebecca-Solanas"
      
    },
    {
      "id": "Sami-Ameziane"
      
    }
  ]
};

document.write("<h3>Rentals with option:</h3>");
for(var k=0;k<=2;k++){
	document.write("<div class=\"col-lg-4\"><h3>"+liste.rentals[k].id +"</h3><h4>Price: " + prixOpt(liste.rentals[k]).price+ "€<br/>Commission: "+prixOpt(liste.rentals[k]).commission+"€<br/>Insurance: "+prixOpt(liste.rentals[k]).insurance+"€<br/>Assistance: "+prixOpt(liste.rentals[k]).assistance+"€<br/>Drivy:"+prixOpt(liste.rentals[k]).drivy+"€</h4></div>");
}





function prixOpt(obj){
	var Price={};
	for(var i=0;i<=2; i++){
		var drive = rental.rentals[i].driver.firstName +"-"+rental.rentals[i].driver.lastName;
		if(drive==obj.id)
		{
			
				if(rental.cars[0].id==rental.rentals[i].carId)
				{
					
					var date= Date.parse(rental.rentals[i].returnDate)- Date.parse(rental.rentals[i].pickupDate);
					var duree=date/1000/60/60/24+1;
					
					var PriceTemp = rental.cars[0].pricePerDay*duree;
					var PriceKm = rental.rentals[i].distance*rental.cars[0].pricePerKm;
					var cost= PriceTemp + PriceKm;
					Price.price=cost;
					var commission= cost*30/100;
					Price.commission=commission;
					Price.insurance=commission/2;
					Price.assistance=duree;
					if(rental.rentals[i].options.deductibleReduction)
					{
						var option=4*duree;
						var drivy=(commission/2)-duree+option;
					}
					else
					{
						var drivy=(commission/2)-duree;
						var option=0;
					}
					Price.drivy=drivy;
					Price.option=option;
					
				}
			
		}
	}
	return Price;
}
