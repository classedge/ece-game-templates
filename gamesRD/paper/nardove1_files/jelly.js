var MYJELLY = MYJELLY || {};

MYJELLY.Jelly = function (idNumber, radius, resolution, colours) {
	this.idNumber = idNumber;
	this.path = new Path();
	this.pathRadius = radius;
	this.pathSides = resolution;
	this.pathPoints = [this.pathSides];
	this.pathPointsNormals = [this.pathSides];
	this.group = new Group();
	this.colour = colours;

	this.text = new PointText({
		point: [-15, -10],
		content: 'A',
		fillColor: 'black',
		fontFamily: 'Courier New',
		fontWeight: 'bold',
		fontSize: 25
	});

	// create jelly body shape
	this.pathStyle = {
		strokeWidth: 5,
		strokeColor: this.colour.s,
		fillColor: this.colour.f
	};

	this.pathSelectedStyle = {
		strokeColor: "#DCF7F3",
		fillColor: "#DCF7F3"
	};

	this.location = new Point(-50, Math.random() * view.size.height);
	this.velocity = new Point(0, 0);
	this.acceleration = new Point(0, 0);

	this.maxSpeed = Math.random() * 0.1 + 0.15;
	this.maxTravelSpeed = this.maxSpeed * 3.5;
	this.maxForce = 0.2;
	this.wanderTheta = 0;
	this.orientation = 0;
	this.lastOrientation = 0;
	this.lastLocation;

	this.tentacles;
	this.numTentacles = 0;

	//   console.log("jelly idn: " + idNumber);
	//	 console.log("jelly max speed: " + this.maxSpeed);
	//	 console.log("jelly path radius: " + this.pathRadius);
	//	 console.log("---------------------------------------");
}


MYJELLY.Jelly.prototype.init = function () {
	let theta = (Math.PI * 2) / this.pathSides;
	for (let i = 0; i < this.pathSides; i++) {
		let angle = theta * i;
		let x = Math.cos(angle) * this.pathRadius * 0.75;
		let y = Math.sin(angle) * this.pathRadius;

		if (angle > 0 && angle < Math.PI) {
			if (i % 2 == 0) {
				y -= Math.sin(angle) * (this.pathRadius * 0.9);
			} else {
				y -= Math.sin(angle) * (this.pathRadius * 0.8);
				this.numTentacles++;
			}
		}

		let point = new Point(x, y);
		this.path.add(point);
		this.pathPoints[i] = point.clone();
		this.pathPointsNormals[i] = point.normalize().clone();
	}

	this.path.closed = true;
	this.path.smooth();
	this.path.style = this.pathStyle;
	// this.path.opacity = 0.7;
	// this.path.blendMode = "darken";
	this.group.addChild(this.path);

	/**
	 * pkp add text
	 */
	this.text.content = this.idNumber + 1;
	this.group.addChild(this.text);


	// Create tentacles
	let q = parseInt(this.numTentacles / 2);
	let counter = 0;

	this.tentacles = [this.numTentacles];
	for (let t = 0; t < this.numTentacles; t++) {
		// this gives the tentacles length the size from small to large then back to small like 0-1-2-2-1-0
		(t < q) ? counter = t % q: counter = (q - 1) - t % q;

		this.tentacles[t] = new MYJELLY.Tentacle(12, (counter + q) / 1.8);
		this.tentacles[t].init();
		this.tentacles[t].path.strokeColor = this.path.strokeColor;
		this.tentacles[t].path.strokeWidth = this.path.strokeWidth;
	}

	const self = this;

	this.path.onMouseEnter = function (event) {
		self.removeStyle(this);
	}

	this.path.onMouseLeave = function (event) {
		self.restoreStyle(this);
	}
}

MYJELLY.Jelly.prototype.removeStyle = function (p) {
	p.selected = true;
	p.style = this.pathSelectedStyle;
	for (let tentacle of this.tentacles) {
		tentacle.path.selected = true;
		tentacle.path.strokeColor = "#FFFFFF";
	}
}

MYJELLY.Jelly.prototype.restoreStyle = function (p) {
	p.selected = false;
	p.style = this.pathStyle;
	for (let tentacle of this.tentacles) {
		tentacle.path.selected = false;
		tentacle.path.strokeColor = this.colour.s;
	}
}

//--------------- ANIMATION ---------------
MYJELLY.Jelly.prototype.update = function (event) {
	this.lastLocation = this.location.clone();
	this.lastOrientation = this.orientation;

	this.velocity.x += this.acceleration.x;
	this.velocity.y += this.acceleration.y;
	this.velocity.length = Math.min(this.maxTravelSpeed, this.velocity.length);
	/**
	 * pkp direction
	 */
	this.location.x += this.velocity.x;
	this.location.y += this.velocity.y;

	this.acceleration.length = 0;

	// this.path.position = this.location.clone();
	this.group.position = this.location.clone();


	// Rotation alignment
	// let locVector = new Point(this.location.x - this.lastLocation.x, this.location.y - this.lastLocation.y);
	let locVector = new Point(this.location.x - this.lastLocation.x, this.location.y - this.lastLocation.y);
	this.orientation = locVector.angle + 90;
	// this.path.rotate(this.orientation - this.lastOrientation);
	this.group.rotate(this.orientation - this.lastOrientation);

	// Expansion Contraction
	for (let i = 0; i < this.pathSides; i++) {
		let segmentPoint = this.path.segments[i].point;
		let sineSeed = -((event.count * this.maxSpeed) + (this.pathPoints[i].y * 0.0375));
		let normalRotatedPoint = this.pathPointsNormals[i].rotate(this.orientation);

		segmentPoint.x += normalRotatedPoint.x * Math.sin(sineSeed);
		segmentPoint.y += normalRotatedPoint.y * Math.sin(sineSeed);
	}

	for (let t = 0; t < this.numTentacles; t++) {
		this.tentacles[t].anchor.point = this.path.segments[t + ((t % this.numTentacles) + 1)].point;
		this.tentacles[t].update(this.orientation);
	}

	this.path.smooth();
	this.wander();
	this.checkBounds();
}


MYJELLY.Jelly.prototype.steer = function (target, slowdown) {
	let steer;
	let desired = new Point(target.x - this.location.x, target.y - this.location.y);
	let dist = desired.length;

	if (dist > 0) {
		if (slowdown && dist < 100) {
			desired.length = (this.maxTravelSpeed) * (dist / 100);
		} else {
			desired.length = this.maxTravelSpeed;
		}

		steer = new Point(desired.x - this.velocity.x, desired.y - this.velocity.y);
		steer.length = Math.min(this.maxForce, steer.length);
	} else {
		steer = new Point(0, 0);
	}
	return steer;
}


MYJELLY.Jelly.prototype.seek = function (target) {
	let steer = this.steer(target, false);
	this.acceleration.x += steer.x;
	this.acceleration.y += steer.y;
}


MYJELLY.Jelly.prototype.wander = function () {
	let wanderR = 5;
	let wanderD = 100;
	let change = 0.05;

	this.wanderTheta += Math.random() * (change * 2) - change;

	let circleLocation = this.velocity.clone();
	circleLocation = circleLocation.normalize();
	circleLocation.x *= wanderD;
	circleLocation.y *= wanderD;
	circleLocation.x += this.location.x;
	circleLocation.y += this.location.y;

	let circleOffset = new Point(wanderR * Math.cos(this.wanderTheta), wanderR * Math.sin(this.wanderTheta));

	let target = new Point(circleLocation.x + circleOffset.x, circleLocation.y + circleOffset.y);

	this.seek(target);
}


MYJELLY.Jelly.prototype.checkBounds = function () {
	let offset = 60;
	if (this.location.x < -offset) {
		this.location.x = view.size.width + offset;
		for (let tentacle of this.tentacles) {
			tentacle.path.position = this.location.clone();
		}
	}
	if (this.location.x > view.size.width + offset) {
		this.location.x = -offset;
		for (let tentacle of this.tentacles) {
			tentacle.path.position = this.location.clone();
		}
	}
	if (this.location.y < -offset) {
		this.location.y = view.size.height + offset;
		for (let tentacle of this.tentacles) {
			tentacle.path.position = this.location.clone();
		}
	}
	if (this.location.y > view.size.height + offset) {
		this.location.y = -offset;
		for (let tentacle of this.tentacles) {
			tentacle.path.position = this.location.clone();
		}
	}
}