function addAuto(){
    var myDiv = document.getElementById("output");

    var newName = document.createElement("input");
    var newCena = document.createElement("input");
    var newObrazekButt = document.createElement("input");
    var newButton = document.createElement("button");

    var newP1 = document.createElement("p");
    var newP2 = document.createElement("p");

        newP1.innerHTML = "Název:";
    	newName.id = "nazev";
    	newP2.innerHTML = "Cena:";
    	newCena.id = "cena";
    	newObrazekButt.type = "url";
    	newObrazekButt.placeholder = "url";

	    newButton.innerHTML = "Přidej auto";

	newButton.onclick =  function (){
                        		var newAuta = document.getElementById("newAuto")

                        		var newTD = document.createElement("td");

                        		var newJmeno = document.getElementById("nazev").value;
                        		var newCenaAuta = document.getElementById("cena").value;

                                var newIMG = document.createElement("img")

                        		var newP3 = document.createElement("p");
                        		var newP4 = document.createElement("p");
                        		var newP5 = document.createElement("p");
                        		var newP6 = document.createElement("p");

                        		newP3.innerHTML = newJmeno;
                        		newP4.innerHTML = newCenaAuta;

                                newIMG.src = newObrazekButt.value;

                        		newP5.innerHTML = "Nazev: ";
                        		newP6.innerHTML = "Cena: ";


                        		newAuto.appendChild(newTD)
                        		newTD.appendChild(newP5)
                        		newTD.appendChild(newP3)
                        		newTD.appendChild(newP6)
                        		newTD.appendChild(newP4)
                        		newTD.appendChild(newIMG)
                        	};




    myDiv.appendChild(newP1);
    myDiv.appendChild(newName);
    myDiv.appendChild(newP2);
    myDiv.appendChild(newCena);
    myDiv.appendChild(newObrazekButt);
    myDiv.appendChild(newButton);

}

