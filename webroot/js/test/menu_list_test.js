$(document).ready(function() {

  module("MenuList", {setup:setup});


  var menu;

  function setup()
  {
    menu = new MenuList({
      items: [
        new MockMenuListItem("first"),
        new MockMenuListItem("second")
      ]
    });
  }

  function MockMenuListItem(renderResult)
  {
    this.$render = function()
    {
      return $("<li></li>").append(renderResult);
    }
  }


  test("initialiation", function() {
    expect(1);
    ok( menu.items.length == 2, "menu has items" );
  });


  test(".$render()", function() {
    var $html = menu.$render();

    expect(4);
    ok( $html[0].tagName == 'UL', "is an unordered list" );
    ok( $html.hasClass("rounded"), "is rounded" );
    ok( $html.find("> li:nth(0)").html() == 'first',
      "calls $render on the first menu item" );
    ok( $html.find("> li:nth(1)").html() == 'second',
      "calls $render on the second menu item" );
  });

});


$(document).ready(function() {

  module("MenuListItem", {setup:setup});

  var item;

  function setup()
  {
    item = new MenuListItem({
      title: "title to click",
      panel: "go_here"
    });
  }


  test("initialization", function() {
    expect(2);
    ok( item.title == 'title to click', "has the title" );
    ok( item.panel == 'go_here', "has the panel id" );
  });


  test(".$render() as a link", function() {
    var $html = item.$render();
    expect(4);
    ok( $html[0].tagName == 'LI', "is a list item" );
    ok( $html.hasClass("arrow"), "with the class .arrow" );
    ok( $html.find("> a").html() == "title to click", "link has given title" );
    ok( $html.find("> a").attr('href') == "#go_here", "links to panel" );
  });

});
