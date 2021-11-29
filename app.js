const vm = new Vue({
    el: '#app',
    data: {
        level: '0',
        colorsArray: [],
        tempArray: [],
        isBlue: false,
        isRed: false,
        isGreen: false,
        isYellow: false,
        isBlack: false,
    },
    methods: {
        start() {
            this.isBlack = false;
            this.colorsArray.push(this.randomColor());
            this.tempArray = this.colorsArray.slice();
            console.log(`colorsArray : ${this.colorsArray}`);
            this.level++;
            this.i = 0;
            setTimeout(this.startSequence, 500);
        },
        startSequence() {
            this.squareColoring(this.colorsArray[this.i]);
            setTimeout(this.clearSquares, 500);
            this.i++;
            if (this.i < this.colorsArray.length) {
                setTimeout(this.startSequence, 1000);
            }
        },
        randomColor() {
            randomNumber = Math.floor(Math.random() * 4);
            switch (randomNumber) {
                case 0:
                    color = "blue"
                    break;
                case 1:
                    color = "red"
                    break;
                case 2:
                    color = "green"
                    break;
                case 3:
                    color = "yellow"
                    break;
            }
            this.allColorsAreGray = true;
            return color;
        },
        clearSquares() {
            this.isBlue     = false;
            this.isRed      = false;
            this.isGreen    = false;
            this.isYellow   = false;
        },
        playerChoice(choice) {
            this.squareColoring(choice);
            setTimeout(this.clearSquares, 500);
            if (choice == this.tempArray[0]) {
                this.tempArray.shift();
                if (!this.tempArray.length) {
                    this.start();
                }
            } else {
                alert("Perdu");
                this.clearSquares;
                this.level = 0;
                this.colorsArray = [];
                console.clear();
                this.isBlack = true;
            }
        },
        squareColoring(color) {
            switch (color) {
                case "blue":
                    this.isBlue = true;
                    break;
                case "red":
                    this.isRed = true;
                    break;
                case "green":
                    this.isGreen = true;
                    break;
                case "yellow":
                    this.isYellow = true;
                    break;
            }
        }
    },
})
