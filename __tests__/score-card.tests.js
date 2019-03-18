const ScoreCard = require('../src/score-card');

describe('scorecard', () => {
  let scoreCard;
  beforeEach(() => {
    scoreCard = new ScoreCard();
  });
  describe('scorecard constructor', () => {
    it('returns a scorecard object', () => {
      expect(scoreCard).toBeInstanceOf(Object);
    });
    it('has a frame number', () => {
      expect(scoreCard).hasOwnProperty('frameIndex');
    });
    it('has a list of scores', () => {
      expect(scoreCard).hasOwnProperty('scores');
    });
  });
  describe('keeping track of scores', () => {
    it('can put a score in the array', () => {
      scoreCard.bowl(10);
      expect(scoreCard.scores).toEqual([[10]]);
    });
    it('test if we have completed current frame', () => {
      scoreCard.scores = [[2]];
      scoreCard.bowl(7);
      expect(scoreCard.scores).toEqual([[2, 7]]);
      scoreCard.bowl(9);
      expect(scoreCard.scores).toEqual([[2, 7], [9]]);
    });
    it('test if there has been a strike', () => {
      scoreCard.scores = [[10]];
      scoreCard.bowl(10);
      expect(scoreCard.scores).toEqual([[10], [10]]);
    });
  });
  describe('total the scores', () => {
    it('adding the scores in the array', () => {
      scoreCard.scores = [[1, 2], [3, 2]];
      expect(scoreCard.totalScores()).toBe(8);
    });
    it('create final score if there is a spare', () => {
      scoreCard.scores = [[5, 5], [3, 4]];
      expect(scoreCard.totalScores()).toBe(20);
    });
  });
});
