var MYJELLY = MYJELLY || {};

MYJELLY.Tentacle = function(segments, length) {
	this.anchor = new Segment();
	this.path = new Path();
	this.numSegments = segments;
	this.segmentLength = length;
}


MYJELLY.Tentacle.prototype.init = function() {
	for (let i = 0; i < this.numSegments; i++) {
		this.path.add(new Point(0, i * this.segmentLength));
	}
	this.path.strokeCap = 'round';
	// this.path.smooth();
	this.anchor = this.path.segments[0];
}


MYJELLY.Tentacle.prototype.update = function(orientation) {
	this.path.segments[1].point = this.anchor.point;

	let dx = this.anchor.point.x - this.path.segments[1].point.x;
	let dy = this.anchor.point.y - this.path.segments[1].point.y;
	let angle = Math.atan2(dy, dx) + ((orientation + 90) * (Math.PI / 180));
	
	this.path.segments[1].point.x += Math.cos(angle);
	this.path.segments[1].point.y += Math.sin(angle);
	
	for (let i = 2; i < this.numSegments; i++) {
		let px = this.path.segments[i].point.x - this.path.segments[i-2].point.x;
		let py = this.path.segments[i].point.y - this.path.segments[i-2].point.y;
		let pt = new Point(px, py);
		let len = pt.length;
		
		if (len > 0.0) {
			this.path.segments[i].point.x = this.path.segments[i-1].point.x + (pt.x * this.segmentLength) / len;
			this.path.segments[i].point.y = this.path.segments[i-1].point.y + (pt.y * this.segmentLength) / len;
		}
	}
}