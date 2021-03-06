const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
    
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
    
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it('returns a string description for breed not found, via callback', (done) => {
    fetchBreedDescription('abc', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
    
      const expectedDesc = "Description for breed abc not found.";
    
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});