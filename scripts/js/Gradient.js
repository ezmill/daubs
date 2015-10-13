function Gradient(WIDTH, HEIGHT){
    this.canvas, this.context;
    this.width, this.height;
    this.colors = [];
    this.hue, this.saturation, this.lightness, this.alpha;
    this.offset;
    this.init = function(){
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;
        this.hue = Math.random()*360;
        this.saturation = Math.random()*100 + 50;
        // this.saturation = 75;
        this.lightness = Math.random()*65 + 35;
        // this.lightness = 60;
        this.alpha = 1.0;
        this.offset = 100;
    }

    this.update = function(){
        this.sampleColors();
        this.gradient=this.context.createLinearGradient(0,0,Math.sin(time*0.25)*this.canvas.width,this.canvas.height);
        this.gradient.addColorStop(0, this.colors[0]);
        this.gradient.addColorStop(1, this.colors[1]);
        this.context.fillStyle=this.gradient;
        this.context.fillRect(0,0,this.canvas.width, this.canvas.height);

        this.hue -= 0.1;
    }

    this.sampleColors = function(){
        this.colors[0] = hslaColor(this.hue, this.saturation, this.lightness, this.alpha)
        this.colors[1] = hslaColor(this.hue + this.offset, this.saturation, this.lightness, this.alpha)
    }
    this.jumpForward = function(){
        // this.hue += 100;
        this.hue = Math.random()*360;
        this.saturation = Math.random()*100 + 50;
        this.lightness = Math.random()*65 + 35;

    }

}