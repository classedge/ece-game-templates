var MYJELLY = MYJELLY || {};

MYJELLY.Main = (function () {

	paper.install(window);
	paper.setup("canvas");

	let timer = new Date();
	let addJellyTimer = 0;
	let jellyCounter = 0;
	let numJellies = 0;
	let jellies = [numJellies];
	let jellyResolution = 24;
	let colours = [];
	// let colourLoverSrc = [];


	window.onload = function () {
		// Colours courtesy of colourlovers.com
		// let favColours = ["4564995", "4565495", "4565553", "4565668", "4565704", "4565709", "4565767", "4565876", "4565875", "4565879", "4565926", "4565932", "4565939", "4565943", "38473"];
		getRandomColour("");
		view.onFrame = draw;
	};


	this.draw = function (event) {
		if (event.time > addJellyTimer + 3 && jellyCounter < numJellies) {
			jellySize = Math.random() * 15 + 35;
			jellies[jellyCounter] = new MYJELLY.Jelly(jellyCounter, jellySize, jellyResolution, colours[jellyCounter]);
			jellies[jellyCounter].init();
			jellyCounter++;
			addJellyTimer = event.time;
		}

		if (jellyCounter > 0) {
			for (let jelly of jellies) {
				jelly.update(event);
			}
		}
	};

	// load random colour from colourlovers.com
	this.getRandomColour = function (data) {
		let df = 50; // darkness factor
		// colourLoverSrc = ["#4564995", "#4565495", "#4565553", "#4565668", "#4565704", "#4565709", "#4565767", "#4565876", "#4565875", "#4565879", "#4565926", "#4565932", "#4565939", "#4565943", "#38473"];

		colourLoverSrc = ["#49ACBB", "#61CAC8", "#88A5B3", "#B0809E", "#D85C8A", "#FF3775", "#EB1962"];
		// colourLoverSrc = ["#193051", "#5A99CC", "#F9F5EF", "#996CBC", "#67467C"];
		for (let i = 0; i < colourLoverSrc.length; i++) {
			console.log('​this.getRandomColour -> this.colourLoverSrc[i]', this.colourLoverSrc[i]);
			colours[i] = {
				s: this.darkShade(this.colourLoverSrc[i], df),
				f: this.colourLoverSrc[i]
			};
			numJellies++;
		}
		// console.log(data);
	}

	// change hex colour to a darker shade
	this.darkShade = function (color, v) {
		if (color.length > 6) {
			color = color.substring(1, color.length)
		};
		let rgb = parseInt(color, 16);
		let r = Math.abs(((rgb >> 16) & 0xFF) - v);
		if (r > 255) r = r - (r - 255);
		let g = Math.abs(((rgb >> 8) & 0xFF) - v);
		if (g > 255) g = g - (g - 255);
		let b = Math.abs((rgb & 0xFF) - v);
		if (b > 255) b = b - (b - 255);
		r = Number(r < 0 || isNaN(r)) ? 0 : ((r > 255) ? 255 : r).toString(16);
		if (r.length == 1) r = '0' + r;
		g = Number(g < 0 || isNaN(g)) ? 0 : ((g > 255) ? 255 : g).toString(16);
		if (g.length == 1) g = '0' + g;
		b = Number(b < 0 || isNaN(b)) ? 0 : ((b > 255) ? 255 : b).toString(16);
		if (b.length == 1) b = '0' + b;
		let newColour = "#" + r + g + b;
		//console.log(color, " - ", newColour);
		return newColour;
	}

	//console.log("kick off the site!");
})();