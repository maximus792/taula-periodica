var letters = [
	"Li",
	"Na",
	"K",
	"Rb",
	"Cs",
	"Fr",
	"Be",
	"Mg",
	"Ca",
	"Sr",
	"Ba",
	"Ra",
	"Sc",
	"Ti",
	"V",
	"Cr",
	"Mn",
	"Fe",
	"Co",
	"Ni",
	"Pd",
	"Pt",
	"Cu",
	"Ag",
	"Au",
	"Zn",
	"Cd",
	"Hg",
	"B",
	"Al",
	"Ga",
	"In",
	"Tl",
	"C",
	"Si",
	"Ge",
	"Sn",
	"Pb",
	"N",
	"P",
	"As",
	"Sb",
	"Bi",
	"O",
	"S",
	"Se",
	"Te",
	"Po",
	"F",
	"Cl",
	"Br",
	"I",
	"At",
	"He",
	"Ne",
	"Ar",
	"Kr",
	"Xe",
	"Rn",
];
var lettersf = [
	"Li",
	"Na",
	"K",
	"Rb",
	"Cs",
	"Fr",
	"Be",
	"Mg",
	"Ca",
	"Sr",
	"Ba",
	"Ra",
	"Sc",
	"Ti",
	"V",
	"Cr",
	"Mn",
	"Fe",
	"Co",
	"Ni",
	"Pd",
	"Pt",
	"Cu",
	"Ag",
	"Au",
	"Zn",
	"Cd",
	"Hg",
	"B",
	"Al",
	"Ga",
	"In",
	"Tl",
	"C",
	"Si",
	"Ge",
	"Sn",
	"Pb",
	"N",
	"P",
	"As",
	"Sb",
	"Bi",
	"O",
	"S",
	"Se",
	"Te",
	"Po",
	"F",
	"Cl",
	"Br",
	"I",
	"At",
	"He",
	"Ne",
	"Ar",
	"Kr",
	"Xe",
	"Rn",
];

var names = [
	"Liti",
	"Sodi",
	"Potasi",
	"Rubidi",
	"Cesi",
	"Franci",
	"Beril·li",
	"Magnesi",
	"Calci",
	"Estronci",
	"Bari",
	"Radi",
	"Escandi",
	"Titani",
	"Vanadi",
	"Crom",
	"Manganès",
	"Ferro",
	"Cobalt",
	"Níquel",
	"Pal·ladi",
	"Platí",
	"Coure",
	"Argent/plata",
	"Or",
	"Zinc",
	"Cadmi",
	"Mercuri",
	"Bor",
	"Alumini",
	"Gal·li",
	"Indi",
	"Tal·li",
	"Carboni",
	"Silici",
	"Germani",
	"Estany",
	"Plom",
	"Nitrogen",
	"Fòsfor",
	"Arseni",
	"Antimoni",
	"Bismut",
	"Oxigen",
	"Sofre",
	"Seleni",
	"Tel·luri",
	"Poloni",
	"Fluor",
	"Clor",
	"Brom",
	"Iode",
	"Àstat",
	"Heli",
	"Neó",
	"Argó",
	"Criptó",
	"Xenó",
	"Radó",
];
var namesf = [
	"Liti",
	"Sodi",
	"Potasi",
	"Rubidi",
	"Cesi",
	"Franci",
	"Beril·li",
	"Magnesi",
	"Calci",
	"Estronci",
	"Bari",
	"Radi",
	"Escandi",
	"Titani",
	"Vanadi",
	"Crom",
	"Manganès",
	"Ferro",
	"Cobalt",
	"Níquel",
	"Pal·ladi",
	"Platí",
	"Coure",
	"Argent/plata",
	"Or",
	"Zinc",
	"Cadmi",
	"Mercuri",
	"Bor",
	"Alumini",
	"Gal·li",
	"Indi",
	"Tal·li",
	"Carboni",
	"Silici",
	"Germani",
	"Estany",
	"Plom",
	"Nitrogen",
	"Fòsfor",
	"Arseni",
	"Antimoni",
	"Bismut",
	"Oxigen",
	"Sofre",
	"Seleni",
	"Tel·luri",
	"Poloni",
	"Fluor",
	"Clor",
	"Brom",
	"Iode",
	"Àstat",
	"Heli",
	"Neó",
	"Argó",
	"Criptó",
	"Xenó",
	"Radó",
];

$(document).ready(function () {
	//$( "#element" ).draggable();

    $('.refresh').unbind().click(() =>{location.reload();});

	const sol = document.querySelectorAll(".solutions a");
	const lett = document.querySelector(".element_letter");
	const na = document.querySelector(".element_name");
	newElement(Math.floor(Math.random() * letters.length));

	function newElement(n) {
        if(letters.length == 0){
            alert("Has acabat!");
            return true;
        }
        lett.innerHTML = "**";
        na.innerHTML = names[n];
        
		sol.forEach((element) => {
            $(element).removeClass("incorrect");
            $(element).removeClass("correct");
            let r = Math.floor(Math.random() * namesf.length);
            if(namesf[r] != letters[n])
                element.innerHTML = lettersf[r];
            else{
                let r = Math.floor(Math.random() * namesf.length);
                element.innerHTML = lettersf[r];
            }
        });

		console.log(
			"numero: " + n + " Letra: " + letters[n] + " nombre: " + names[n]
		);

		sol[Math.floor(Math.random() * 5)].innerHTML = letters[n];

		sol.forEach((element) => {
			$(element).unbind().click(function (event) {

				//console.log(element.innerHTML);
				if (element.innerHTML === letters[n]) {
                    $(element).removeClass("incorrect");
                    $(element).addClass("correct");
                    lett.innerHTML = letters[n];
					setTimeout(() => {
						letters.splice(n, 1);
                        names.splice(n, 1);
						newElement(Math.floor(Math.random() * letters.length));
					}, 1000);
				} else {
                    $(element).removeClass("correct");
                    $(element).addClass("incorrect");
                    lett.innerHTML = letters[n];
					setTimeout(() => {
						newElement(Math.floor(Math.random() * letters.length));
					}, 1500);
				}
			});
		});
	}
});
