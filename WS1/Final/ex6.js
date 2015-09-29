var rental = {
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
        "firstName": " Sami",
        "lastName": "Ameziane"
      },
      "carId": "p-boxster",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-14",
      "distance": 100
    }
  ],
  "rentalModifications": [
    {
      "id": 1,
      "rentalId": "1-pb-92" ,
	  "pickupDate": "2015-09-12",
      "returnDate": "2015-09-13",
      "distance": 150
    },
    {
      "id": 2,
      "rentalId": "3-sa-92",
      "pickupDate": "2015-09-01",
	  "returnDate": "2015-09-14",
	  "distance": 100
    }
  ]
};

var deltaClient = 0;
var deltaProprio = 0;
var deltaAssurance = 0;
var deltaAssistance = 0;
var deltaDrivy = 0;
var saveDeltaClient = 0;
var saveDeltaProprio = 0;
var saveDeltaAssurance = 0;
var saveDeltaAssistance = 0;
var saveDeltaDrivy = 0;
tabDelta = [];
var boolDelta = false;


function CalculPrix(rental)
{
	for (var i = 0; i < rental.cars.length; i++) 
	{
		for (var j = 0; j < rental.rentals.length; j++) 
		{
		if(rental.cars[i].id == rental.rentals[j].carId)
			{
			document.writeln("</br>");
			var tempsMill = Date.parse(rental.rentals[j].returnDate)-Date.parse(rental.rentals[j].pickupDate);
			var duree = (tempsMill/1000/60/60/24)+1;
			var prixJour = rental.cars[i].pricePerDay;
			var rediction = 0;
			if (duree>0 && duree<5)
			{
				reduction = 10*(prixJour/100);
				prixJour = prixJour-reduction;
			}
			if (duree>4 && duree<10)
			{
				reduction = 30*(prixJour/100);
				prixJour = prixJour-reduction;
			}
			if (duree>9)
			{
				reduction = 50*(prixJour/100);
				prixJour = prixJour-reduction;
			}
			var prenomClient = rental.rentals[j].driver.firstName;
			var nomClient = rental.rentals[j].driver.lastName;
			var prixDureeTotal = duree*prixJour;
			var prixKmTotal = rental.rentals[j].distance*rental.cars[i].pricePerKm;
			var prixTotal = prixDureeTotal+prixKmTotal;
			var comission = 30*(prixTotal/100);
			var assurance = 50*(comission/100);
			var assuranceDeLaRoute = duree;
			var partDrivy = comission-assurance-assuranceDeLaRoute;
			var redudtionAccident = 4*duree;
			var depenseClient = prixTotal+redudtionAccident;
			var gainProprio = prixTotal-comission;
			var gainAssurance = assurance;
			var gainAssistance = assuranceDeLaRoute;
			var gainDrivy = partDrivy+redudtionAccident;
			
			
			document.writeln(AfficherPrix(rental.rentals[j].driver.firstName,rental.rentals[j].driver.lastName,depenseClient,gainProprio,gainAssurance,gainAssistance,gainDrivy));

			if(boolDelta == false)
			{
				tabDelta[i]= {'depenseclient':depenseClient,
				'gainproprio':gainProprio,
				'gainassurance':gainAssurance,
				'gainassistance':gainAssistance,
				'gaindrivy':gainDrivy
				}

			}
			
			if(boolDelta == true)
			{
				tabDelta[i].depenseclient = (tabDelta[i].depenseclient - depenseClient);
				tabDelta[i].gainproprio = (tabDelta[i].gainproprio - gainProprio);
				tabDelta[i].gainassurance = (tabDelta[i].gainassurance - gainAssurance);
				tabDelta[i].gainassistance = (tabDelta[i].gainassistance - gainAssistance);
				tabDelta[i].gaindrivy = (tabDelta[i].gaindrivy - gainDrivy);
				
							
			
				document.writeln( "Delta client : " +tabDelta[i].depenseclient +"</br>");
				document.writeln( "Delta proprietaire : " +tabDelta[i].gainproprio +"</br>");
				document.writeln( "Delta assurance : " +tabDelta[i].gainassurance +"</br>");
				document.writeln( "Delta assistance : " +tabDelta[i].gainassistance +"</br>");
				document.writeln( "Delta drivy : " +tabDelta[i].gaindrivy +"</br>");
			}
			}
		}	
	} 
}

function AfficherPrix(prenomClient,nomClient,depenseClient, gainProprio, gainAssurance,gainAssistance,gainDrivy)
{
	var resultat = prenomClient + " " + nomClient +" "+"doit payer : " + depenseClient + " euros" + "</br>";
		resultat = resultat + "Le proprietaire gagne : " + gainProprio + " euros" + "</br>";
		resultat = resultat + "L'assurance gagne : " +gainAssurance+" euros" + "</br>";
		resultat = resultat + "L'assistance gagne : " +gainAssistance+" euros" + "</br>";
		resultat = resultat + "Drivy gagne " +gainDrivy+" euros" + "</br>";
		return resultat;
}

document.writeln("</br>"+"</br>");
document.writeln("Prix avant modifications : "+"</br>");

CalculPrix(rental);


document.writeln("</br>"+"</br>");
document.writeln("Prix apres modifications : "+"</br>");

for (var i = 0; i < rental.rentals.length; i++) 
{
	for (var j = 0; j < rental.rentalModifications.length; j++) 
	{
	if(rental.rentals[i].id == rental.rentalModifications[j].rentalId)
		{
			rental.rentals[i].pickupDate = rental.rentalModifications[j].pickupDate;
			rental.rentals[i].returnDate = rental.rentalModifications[j].returnDate;
			rental.rentals[i].distance = rental.rentalModifications[j].distance;
		}
	}
}
boolDelta = true;
CalculPrix(rental);


document.writeln("</br>");
document.writeln("</br>");
