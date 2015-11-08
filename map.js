
$(function () {
	setmap();
});

function setmap(mapsize) {
	for (var i = 0; i <= mapsize; i++) {
        createPiece();
    }
}

function createsquare() {
	var piece = document.createElement("div");
}

function square(terrain, x, y) {
	this.x = x;
	this.y = y;
	this.width = 30;
	this.height = 30;
	this.terrain = terrain;
	this.isOccupied = -1;
}

function getTerrain(){
	return this.terrain;
}