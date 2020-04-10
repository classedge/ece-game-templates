/* 
Source: http://nardove.com/
Created by @nardove 
I have not gotten permission to put this on CodePen.
*/
//Credit: http://nardove.com/
var Jelly = function (opts) {
	this.tentacleLength = opts.tentacleLength;
	this.x = opts.x;
	this.y = opts.y;
	this.text = opts.text;
	this.color = opts.color;
	this.path = new Path();
	this.pathRadius = opts.radius;
	this.pathSides = opts.resolution;
	this.pathPoints = [this.pathSides];
	this.pathPointsNormals = [this.pathSides];
	this.group = new Group();

	var text = new PointText({
		point: [-15, -10],
		content: 'A',
		fillColor: 'black',
		fontFamily: 'Courier New',
		fontWeight: 'bold',
		fontSize: 25
	});


	this.pathStyle = {
		strokeWidth: 5,
		strokeColor: this.color.stroke,
		fillColor: this.color.fill
	};

	this.pathSelectedStyle = {
		strokeColor: "#DCF7F3",
		fillColor: "#DCF7F3"
	};


	this.location = new Point(this.x, this.y);
	this.velocity = new Point(0, 0);
	this.acceleration = new Point(0, 0);

	this.maxSpeed = Math.random() * 0.1 + 0.15;
	this.maxTravelSpeed = this.maxSpeed * 3.5;
	this.maxForce = 0.2;
	this.wanderTheta = 0;
	this.orientation = Math.random() * 360;
	this.lastOrientation = this.orientation;
	this.lastLocation;
	console.log(this.orientation, this.x, this.y);

	this.tentacles;
	this.numTentacles = 0;

	this.init = function () {
		// console.log('​this.init -> this.pathSides', this.pathSides);
		for (var i = 0; i < this.pathSides; i++) {
			var theta = (Math.PI * 2) / this.pathSides;
			var angle = theta * i;
			var x = Math.cos(angle) * this.pathRadius * 0.7;
			var y = Math.sin(angle) * this.pathRadius;

			if (angle > 0 && angle < Math.PI) {
				y -= Math.sin(angle) * (this.pathRadius * 0.6);
				this.numTentacles++;
			}

			var point = new Point(x, y);

			this.path.add(point);
			this.pathPoints[i] = point.clone();
			this.pathPointsNormals[i] = point.normalize().clone();
		}

		this.path.closed = true;
		this.path.smooth();
		this.path.style = this.pathStyle;
		this.group.addChild(this.path);
		// text.fillColor = this.color.fill;
		text.content = this.text;
		this.group.addChild(text);



		// Create tentacles
		this.tentacles = [this.numTentacles];
		for (var t = 0; t < this.numTentacles; t++) {
			this.tentacles[t] = new Tentacle(7 * this.tentacleLength / 4, this.tentacleLength);
			this.tentacles[t].init();
			this.tentacles[t].path.strokeColor = this.path.strokeColor;
			this.tentacles[t].path.strokeWidth = this.path.strokeWidth;
		}

		this.group.rotate(this.orientation);
		this.group.position = this.location.clone();
		const self = this;

		this.path.onClick = function (event) {
			var height = 60;
			this.selected = true;
			// console.log('​this.path.onClick -> this.path.segments', this.segments);
			for (var i = 0; i < this.segments.length; i++) {
				var segment = this.segments[i];

				// A cylic value between -1 and 1
				var sinus = Math.sin(event.time * 3 + i);

				// Change the y position of the segment point:
				console.log('​this.path.onClick -> segment.point', segment.point);
				console.log('​this.path.onClick -> segment.point.y', segment.point.y);
				// segment.point.y = sinus * height + 100;
				self.wanderTheta = -180;
				self.dead = true;
				this.fillColor = 10;
				// console.log('​this.path.onClick -> this.fillColor', this.fillColor);
			}


		}
		this.path.onMouseEnter = function (event) {
			// self.removeStyle(this);
		}

		this.path.onMouseLeave = function (event) {
			// self.restoreStyle(this);
		}

	};


	this.removeStyle = function (p) {
		p.selected = true;
		p.style = this.pathSelectedStyle;
		for (let tentacle of this.tentacles) {
			tentacle.path.selected = true;
			tentacle.path.strokeColor = "#FFFFFF";
		}
	}

	this.restoreStyle = function (p) {
		p.selected = false;
		p.style = this.pathStyle;
		for (let tentacle of this.tentacles) {
			tentacle.path.selected = false;
			tentacle.path.strokeColor = this.color.stroke;
			// console.log('​this.restoreStyle ->  this.color', this.color);
		}
	}



	this.move = function (event) {
		this.lastLocation = this.location.clone();
		this.lastOrientation = this.orientation;

		this.velocity.x += this.acceleration.x;
		this.velocity.y += this.acceleration.y;
		this.velocity.length = Math.min(this.maxTravelSpeed, this.velocity.length);
		//console.log(this.velocity);
		this.location.x += this.velocity.x;
		this.location.y += this.velocity.y;

		this.acceleration.length = 0;
		this.group.position = this.location.clone();

		// Rotation alignment
		var locVector = new Point(this.location.x - this.lastLocation.x,
			this.location.y - this.lastLocation.y);
		this.orientation = locVector.angle + 90;
		this.group.rotate(this.orientation - this.lastOrientation);
		if (!this.dead) {

			this.doExpand(event.count)
		}

		for (var t = 0; t < this.numTentacles; t++) {
			this.tentacles[t].anchor.point = this.path.segments[t + 1].point;
			this.tentacles[t].move(this.orientation);
		}


		this.path.smooth();
		this.wander();
		this.checkBounds();
	};
	this.doExpand = function (count) {
		// Expansion Contraction
		for (var i = 0; i < this.pathSides; i++) {
			var segmentPoint = this.path.segments[i].point;
			// var sineSeed = -(event.time * 3 + this.path.segments[i].point.y * 0.5);
			var sineSeed = -((count * this.maxSpeed) + (this.pathPoints[i].y * 0.0375));
			var normalRotatedPoint = this.pathPointsNormals[i].rotate(this.orientation);

			segmentPoint.x += normalRotatedPoint.x * Math.sin(sineSeed);
			segmentPoint.y += normalRotatedPoint.y * Math.sin(sineSeed);
		}
	}

	this.steer = function (target, slowdown) {
		var steer;
		var desired = new Point(target.x - this.location.x, target.y - this.location.y);
		var dist = desired.length;

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
	};
	this.seek = function (target) {
		var steer = this.steer(target, false);
		this.acceleration.x += steer.x;
		this.acceleration.y += steer.y;
	};
	this.wander = function () {
		var wanderR = 5;
		var wanderD = 100;
		var change = 0.05;
		/**
		 * Change in angle or roataion
		 */
		this.wanderTheta += Math.random() * (change * 2) - change;

		var circleLocation = this.velocity.clone();
		circleLocation = circleLocation.normalize();
		circleLocation.x *= wanderD;
		circleLocation.y *= wanderD;
		circleLocation.x += this.location.x;
		circleLocation.y += this.location.y;

		var circleOffset = new Point(wanderR * Math.cos(this.wanderTheta), wanderR * Math.sin(this.wanderTheta));

		var target = new Point(circleLocation.x + circleOffset.x, circleLocation.y + circleOffset.y);

		this.seek(target);
	};

	this.checkBounds = function () {
		var offset = 60;
		if (this.location.x < -offset) {
			this.location.x = view.size.width + offset;
			for (var t = 0; t < this.numTentacles; t++) {
				this.tentacles[t].path.position = this.location.clone();
			}
		}
		if (this.location.x > view.size.width + offset) {
			this.location.x = -offset;
			for (var t = 0; t < this.numTentacles; t++) {
				this.tentacles[t].path.position = this.location.clone();
			}
		}
		if (this.location.y < -offset) {
			this.location.y = view.size.height + offset;
			for (var t = 0; t < this.numTentacles; t++) {
				this.tentacles[t].path.position = this.location.clone();
			}
		}
		if (this.location.y > view.size.height + offset) {
			this.location.y = -offset;
			for (var t = 0; t < this.numTentacles; t++) {
				this.tentacles[t].path.position = this.location.clone();
			}
		}
	};
	this.init();
};