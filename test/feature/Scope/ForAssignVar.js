// Options: --block-binding

var count = 0;
var f;

for (let i = 0; i < 10; ++i) {
  count += i;
  f = function() {return i;}
  i = 10;
}

assert.equal(count, 0);
assert.equal(f(), 10);

