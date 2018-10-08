Floating labels

Voor deze oefening willen we floating labels maken die eerst er uit zien als placeholder, maar vervolgens omhoog schuiven tot label.
- We zetten de labels achter de input tags in HTML.
- Met een modifier op de c-form-field class zorgen we ervoor dat specifieke form-fields de property position met de value relative krijgen.
- Pas vervolgens de c-label class aan met een modifier, zodat we deze labels op position absolute kunnen zetten.
- Verder krijgt deze label ook de volgende properties:
	position: absolute;
	top: 12px;
	left: 8px;

	padding: 4px 8px;

	will-change: transform;
	transform: translateY( 0 );
	transition: transform 200ms ease-in-out;

	box-shadow: 0 0 4px 4px rgba(255,255,255,0.8);
	background: white;

Nu rest ons enkel nog om als er gefocused wordt op de input, de label omhoog te animeren.
- Maak een selector aan die onze label selecteert als er gefocused wordt op de input.
- Geef hier transform: translateY( -24px ); aan.
- Sit back en watch the magic.

Er is nog een klein probleem. Als er input ingegeven wordt, dan schuift de label bij het verliezen van de focus opnieuw naar beneden.
Hiervoor gaan we JS schrijven die kijkt op er inhoud in de input staat.
- Maak een bestand app.js aan in een map script.
- Zet hier de volgende code in om straks te gebruiken:
	document.addEventListener( 'DOMContentLoaded', function() {
		console.log( 'Script loaded!' );
	});
- Maak een link naar het JavaScript bestand vanuit je HTML-file. (Controleer of dit werkt door in de console te kijken of er 'Script loaded!' staat.)
- Maak in deze functie een nieuwe functie handleFloatingLabel aan.
- Haal hierin zowel de input als de label op via hun js-* class.
- Voeg aan de input een eventListener toe die checkt of de focus verloren wordt.
- Binnen deze functie bekijken we of de ingevulde value leeg is of niet. Indien de input niet meer leeg is, dan voegen we de class 'is-floating' toe. Anders zullen we deze class (proberen te) verwijderen.
- Zorg dat de 'is-floating' class de label bovenaan vastzet.
- Voila!

Zorg ervoor dat het symbool van de password toggle aangepast wordt aan de hand van de state (:checked) van de checkbox.
- Doe dit op dezelde manier als in het vorige labo.
Voor het togglen van de password gaan we ook een functie maken: handlePasswordSwitcher.
- Haal in deze functie de password-input en de password-toggle op.
- We gaan luisteren of er geklikt wordt op de checkbox.
- Als er geklikt wordt, veranderen we de type van de input van 'password' naar 'text' en vice versa.

- Om onze input type range te stylen, gaan we een nieuwe element class maken voor de range input (.c-input__range).
- Voeg op de range-input ook de volgende attributen toe; value="0", min="0", max="100".
- Vervolgens maken we na de input slider een div met de class c-input__range-holder. Geef beide ook een geschikte js-class.
- We kunnen onze range style op de volgende manier:
	display: block;
	height: 8px;
	padding: 0;

	border-radius: 8px;

    background-color: var(--color-neutral-xxxx-light);
    border: 1px solid var(--color-neutral-xxx-light);
- De pseudo-selector ::-webkit-slider-thumb kan inhoud van de slider aanpassen:
::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;

	width: 18px;
	height: 18px;

	border-radius: 8px;

	background: var(--color-alpha );
}
- Op de input range holder, gaan we de volgende CSS zetten width: calc( 100% - 18px ). Op deze manier houden we rekening met de thumb.
- De holder class geven we de volgende CSS in de ::after:
	content: attr(data-value);
	display: inline-block;
	width: 32px;
	margin-top: 12px;
	padding: 4px;
	font-size: .8rem;
	text-align: center;
	border-radius: 4px;
	background: var( --color-neutral-xxxx-light );
	transform: scale( 0 );
	transition: transform 200ms ease-in-out;
	transform-origin: center top;

Nu de CSS klaar staat, rest ons enkel nog om de slider met JS te laten updaten.
- Voeg de functie handleQualityRange toe als de DOM geladen is.
- Haal in deze functie de input zelf, de holder en de value op.
- Voeg de eventListener 'change' toe aan de input slider.
- In deze functie passen we de inhoud van de value aan met de value van de slider en voeren we een translateX uit op de holder.
- We zetten ook een attribute op de holder met de value van de slider zelf.
- Merk op dat de slider enkel update na het uitvoeren van de input. Verander het event naar 'input'.
