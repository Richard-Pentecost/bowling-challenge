class ScoreCard {
  constructor() {
    this.frameIndex = 0;
    this.scores = [[]];
  }
  
  bowl(pins) {
    if (this.scores[this.frameIndex].length === 2 || this.scores[this.frameIndex][0] === 10) {
      this.scores.push([pins]);
      this.frameIndex += 1;
    } else {
      this.scores[this.frameIndex].push(pins);
    }
  };
  
  totalScores() {
    let index = 0;
    return this.scores.reduce((acc, next) => {
      let frameScore = next[0] + next[1];
      frameScore === 10 ? frameScore += this.scores[index + 1][0] : frameScore;
      index += 1;
      return acc += frameScore;
    }, 0);
  };
}


module.exports = ScoreCard;
