describe("Unit: Testing Filters", function() {

  beforeEach(angular.mock.module('my-app'));

  it('should have a range filter', inject(function($filter) {
    expect($filter('range')).not.toBe(null);
  }));

  it('should have a range filter that produces an array of numbers',
    inject(function($filter) {

    var range = $filter('range')([], 5);
    expect(range.length).toEqual(5);
    expect(range[0]).toEqual(0);
    expect(range[1]).toEqual(1);
    expect(range[2]).toEqual(2);
    expect(range[3]).toEqual(3);
    expect(range[4]).toEqual(4);
  }));

  it('should return null when nothing is set',
    inject(function($filter) {

    var range = $filter('range')();
    expect(range).toEqual(null);
  }));

  it('should return the input when no number is set',
    inject(function($filter) {

    var range, input = [1];
    range = $filter('range')(input);
    expect(range).toEqual(input);

    range = $filter('range')(input, 0);
    expect(range).toEqual(input);

    range = $filter('range')(input, -1);
    expect(range).toEqual(input);

    range = $filter('range')(input, 'Abc');
    expect(range).toEqual(input);
  }));

});