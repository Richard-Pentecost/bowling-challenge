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
      let frameScore;
      let frameType = this._frameType(next);
      if(frameType === 'strike') {
        frameScore = next[0] + this._strike(index);
      } else if (frameType === 'spare') {
        frameScore = next[0] + next[1] + this.scores[index + 1][0];
      } else {
        frameScore = next[0] + next[1]
      }
      index += 1;
      return acc += frameScore;
    }, 0);
  };

  _strike(index) {
    let secondScore;
    this.scores[index + 1].length === 1 ? secondScore = this.scores[index + 2][0] : secondScore = this.scores[index + 1][1];
    return this.scores[index + 1][0] + secondScore;
  }

  _frameType(frame) {
    if (frame.length === 1) {
      return 'strike';
    } else if (frame[0] + frame[1] === 10) {
      return 'spare';
    } else {
      return;
    }
  }
}


module.exports = ScoreCard;
