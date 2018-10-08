function handleFloatingLabel() {
	let input = document.querySelector( '.js-name-input' ),
		label = document.querySelector( '.js-floating-label' );

	input.addEventListener( 'blur', function() {
		console.log( event );
		if ( input.value ) {
			label.classList.add( 'is-floating' );
		} else {
			label.classList.remove('is-floating' );
		}
	});
}

function handlePasswordSwitcher() {
	let passwordInput = document.querySelector( '.js-password-input' ),
		passwordCheckbox = document.querySelector( '.js-password-toggle-checkbox' );

	passwordCheckbox.addEventListener( 'click', function() {
		if ( passwordInput.type == 'password' ) {
			passwordInput.type = 'input';
		} else {
			passwordInput.type = 'password';
		}
	});
}

function handleQualityRange() {
	let rangeInput = document.querySelector( '.js-quality-input' ),
		rangeHolder = document.querySelector( '.js-range-holder' );

	rangeInput.addEventListener( 'input', function() {
		rangeHolder.setAttribute( 'data-value', rangeInput.value );
		rangeHolder.style.marginLeft = `${ rangeInput.value }%`;
	});
}

function handleDropdownButton() {
	let dropdownButton = document.querySelector( '.js-dropdown-input' );

	dropdownButton.addEventListener( 'click', function( e ) {
		e.preventDefault();
		dropdownButton.classList.toggle( 'is-opened' );
	});
}

function handleButtonClick() {
	let magicButton = document.querySelector( '.js-magic-button' );

	magicButton.addEventListener( 'click', function( e ) {
		e.preventDefault();
		let circle = document.createElement('div');
		circle.classList.add('c-magic-circle');
		e.target.append( circle );

		// 50 = half the circle.
		let x = e.pageX - e.target.parentNode.offsetLeft - 50;
		console.log('X is: ', e.target.parentNode.offsetLeft );
		
		let y = e.pageY - this.offsetTop - 50;
		console.log('Y is: ', y);
		let size = this.clientWidth;
		
		circle.style.top = `${ y }px`;
		circle.style.left = `${ x }px`;
		circle.style.width = `${ size }px`;
		circle.style.height = `${ size }px`;
		circle.classList.add( 'c-magic-grow' );
		
		// Remove the object when the animation is finished.
		setTimeout(() => {
			// magicButton.removeChild( circle );
		}, 500);
	});
}

document.addEventListener( 'DOMContentLoaded', function() {
	console.log( 'Script loaded!' );
	handleFloatingLabel();
	handlePasswordSwitcher();
	handleQualityRange();
	handleDropdownButton();
	// handleButtonClick();
});