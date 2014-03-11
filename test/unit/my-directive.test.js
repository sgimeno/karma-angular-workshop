describe('wiki article directive', function() {
  'use strict';

  beforeEach(module('my-app'));
  beforeEach(inject(function($templateCache) {
    $templateCache.put('templates/wiki-article.html', '<div></div>');
  }));

  it('should set scope "article" property to the target article',
    inject(function($compile, $rootScope, $httpBackend) {

    $httpBackend
      .when('GET', 'https://en.wikipedia.org/wiki/The_Matrix')
      .respond({ content: '' });

    var scope = $rootScope.$new();

    var element = angular.element('<wiki-article src="The_Matrix"></wiki-article>');
    var compiled = $compile(element)
    var linkedElement = compiled(scope);

    scope.$digest();
    expect(scope.article).toBe('The_Matrix');
  }));
});


/*
    $httpBackend.expect('GET', 'https://en.wikipedia.org/wiki/The_Matrix').respond({
      success: true,
      content: 'foobar',
    });
*/
