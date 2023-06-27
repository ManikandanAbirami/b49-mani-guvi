function test() {
  var a = 20;
  test1();

  function test1() {
    var b = 30;
    test2();

    function test2() {
      var c = 40;
      console.log(a, b, c);
    }
  }
}

test();
