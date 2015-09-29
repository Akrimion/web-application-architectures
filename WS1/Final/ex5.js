
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
"id": "1-pb-92",
},
{
"id": "2-rs-92",
},
{
"id": "3-sa-92",
}
]
};

document.write("<h3>Debit/Credit:</h3>");
for(var k=0;k<=2;k++){
	document.write("<tr><td>"+liste.rentals[k].id +"</td><td>"+prixFin(liste.rentals[k]).driver.firstName+" "+prixFin(liste.rentals[k]).driver.lastName+"</td><td>"+prixFin(liste.rentals[k]).full+"€</td><td>"+prixFin(liste.rentals[k]).owner+"€</td><td>"+prixFin(liste.rentals[k]).insurance+"€</td><td>"+prixFin(liste.rentals[k]).assistance+"€</td><td>"+prixFin(liste.rentals[k]).drivy+"€</td></tr>");
}




function prixFin(obj){
	var Price={};
	var driver={}
	for(var i=0;i<=2; i++){
		if(rental.rentals[i].id==obj.id)
		{
			if(rental.cars[0].id==rental.rentals[i].carId)
			{
				driver=rental.rentals[i].driver;
				Price.driver=driver;
				
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
				Price.owner=Price.price-Price.commission;
				Price.full=Price.price+Price.commission;
					
				}
			
		}
	}
	return Price;
}
