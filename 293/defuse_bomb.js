var rules = {
  white: function(n) { return !(n == "white" || n == "black") },
  red: function(n) { return n == "green" },
  black: function(n) { return !(n == "white" || n == "green" || n == "orange") },
  orange: function(n) { return (n  == "red" || n == "black") },
  green:function(n) { return (n  == "orange" || n == "white") },
  purple: function(n) {
    return !(n  == "purple" || n == "green" || n == "orange" || n == "white")
  }
};

var defuse = function(input) {
  var operations = input.slice();
  var exploded = input.find(function() {
    let cur_wire = operations.shift();
    return !rules[cur_wire](operations[0])
  });
  exploded ? console.log('Boom') : console.log("Bomb defused");
};

var input = ["white", "red", "green", "white"];
defuse(input)
