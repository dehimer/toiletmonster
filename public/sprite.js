var 

// Sprite vars //

s_monster,
s_poo;

/**
 * Simple sprite class
 * 
 * @param {Image}  img    spritesheet image
 * @param {number} x      x-position in spritesheet
 * @param {number} y      y-position in spritesheet
 * @param {number} width  width of sprite 
 * @param {number} height height of sprite
 */
function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
/**
 * Draw sprite ta canvas context
 * 
 * @param  {CanvasRenderingContext2D} ctx context used for drawing
 * @param  {number} x   x-position on canvas to draw from
 * @param  {number} y   y-position on canvas to draw from
 */
Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);
};

/**
 * Initate all sprite
 * 
 * @param  {Image} img spritesheet image
 */
function initSprites(img) {

	s_monster = [
		new Sprite(img, 0, 0, 50, 40),
		new Sprite(img, 51, 0, 50, 40),
		new Sprite(img, 100, 0, 50, 40),
		new Sprite(img, 150, 0, 50, 40),
		new Sprite(img, 200, 0, 50, 40),
		new Sprite(img, 250, 0, 50, 40),
		new Sprite(img, 300, 0, 50, 40)
	];

	s_bg = new Sprite(img,169, 271, 31, 31);
	// s_bg = new Sprite(img, 150, 463, 47, 47);
	s_bg.color = "#000000"; // save background color

	s_poo = new Sprite(img, 76, 53, 22, 20);

	s_sheet = new Sprite(img,169, 271, 31, 31);
	s_sheet_level = new Sprite(img, 0, 160, 52, 14);

	s_ground = {
		left: new Sprite(img, 80, 189, 18, 31),
		leftbottom: new Sprite(img, 336, 189, 32, 31),
		bottom: new Sprite(img, 304, 203, 17, 18),
		rightbottom: new Sprite(img, 368, 189, 32, 31),
		right: new Sprite(img, 254, 189, 18, 31)
	};

	// s_numberS = new Sprite(img, 2, 160, 22, 20);
	// s_numberS = new Sprite(img, 3, 120, 9, 15);
	s_numberS = new Sprite(img, 0, 761, 21, 37);
	s_numberB = new Sprite(img, 0, 761, 21, 37);

	/**
	 * Draw number to canvas
	 * 
	 * @param  {CanvasRenderingContext2D} ctx context used for drawing
	 * @param  {number} x      x-position
	 * @param  {number} y      y-position
	 * @param  {number} num    number to draw
	 * @param  {number} center center to offset from
	 * @param  {number} offset padd text to draw right to left
	 */
	 
	s_numberS.draw = s_numberB.draw = function(ctx, x, y, num, center, offset) {
		num = num.toString();

		var step = this.width + 3;
		
		if (center) {
			x = center - (num.length*step-2)/2;
		}
		if (offset) {
			x += step*(offset - num.length);
		}

		for (var i = 0, len = num.length; i < len; i++) {
			var n = parseInt(num[i]);
			// console.log(n)
			ctx.drawImage(img, step*n, this.y, this.width, this.height,
				x, y, this.width, this.height)
			x += step;
		}
	}
	
}