describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));
  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty seach result and term', function() {
    expect(ctrl.searchResult).toBeDefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});

describe('when searching for a user', function() {

  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    }
  ];

  it('displays search results', function() {
    expect(ctrl.searchResult.items).toEqual(items);
  });
});
