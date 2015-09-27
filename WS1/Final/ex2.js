
'use strict'
var rental={
  "cars": [
    {
      "id": "p306",
      "vehicule": "peugeot 306",
      "pricePerDay": 20,
      "pricePerKm": 0.10
    },
    {
      "id": "rr-sport",
      "pricePerDay": 60,
      "pricePerKm": 0.30
    },
    {
      "id": "p-boxster",
      "pricePerDay": 100,
      "pricePerKm": 0.45
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
      "returnDate": "2015-09-14",
      "distance": 150
    },
    {
      "id": "2-rs-92",
      "driver": {
        "firstName": "Rebecca",
        "lastName": "Solanas"
      },
      "carId": "rr-sport",
      "pickupDate": "2015-09-09",
      "returnDate": "2015-09-13",
      "distance": 550
    },
    {
      "id": "3-sa-92",
      "driver": {
        "firstName": "Sami",
        "lastName": "Ameziane"
      },
      "carId": "p-boxster",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-14",
      "distance": 100
    }
  ]
};
var liste ={
"rentals": [
{
"id": "Paul-Bismuth",
	  
},
{
"id": "Rebecca-Solanas",
},
{
"id": "Sami-Ameziane",

}
]
};

document.write("<h3> Rentals with decrasing price:</h3>");
for(var k=0;k<=2;k++){
	document.write("<div class=\"col-lg-4\"><h4>"+liste.rentals[k].id +"<br/>Price: " + prixWithDecrasing(liste.rentals[k])+ "€</h4></div>");
}





function prixWithDecrasing(obj){
	
	for(var i=0;i<=2; i++){
		var drive = rental.rentals[i].driver.firstName +"-"+rental.rentals[i].driver.lastName;
		if(drive==obj.id)
		{
			for(var j=0;j<=2; j++){
				if(rental.cars[j].id==rental.rentals[i].carId)
				{
					
					var date= Date.parse(rental.rentals[i].returnDate)- Date.parse(rental.rentals[i].pickupDate);
					var Day=date/1000/60/60/24+1;
					var PriceTemp = rental.cars[j].pricePerDay*Day;
					var PriceKm = rental.rentals[i].distance*rental.cars[j].pricePerKm;
					var Price= PriceTemp + PriceKm;
					if(Day<1)
					{
						var pay= Price;
					}
					else if(Day<4)
					{
						var pay= Price-(Price*10/100);
					}
					else if(Day<10)
					{
						var pay= Price-(Price*30/100);
					}
					else
					{
						var pay= Price-(Price*50/100);
					}
				}
			}
		}
	}
	var price=pay;
	
	return price;
}
