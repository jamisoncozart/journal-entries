export function Journal(title, body) {
  this.title = title;
  this.body = body;
  this.numWords = 0;
  this.vowelCount = 0;
  this.constCount = 0;
  this.firstEight = "";
}

Journal.prototype.wordCount = function() {
  var words = this.body.split(" ");
  this.numWords = words.length;
};

Journal.prototype.charCount = function() {
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < this.body.length; i++) {
    if (vowels.includes(this.body[i])) {
      this.vowelCount ++;
    } else if(this.body[i]!== " ") {
      this.constCount ++;
    }
  }
};

Journal.prototype.wordLimit = function() {
  var eight = this.body.split(" ");
  for (var i = 0; i < 8; i ++) {
    if (eight[i]) {
      this.firstEight += eight[i] + " ";
    }
  } 
};



// for (var i = 0; i<this.body.length; i++)