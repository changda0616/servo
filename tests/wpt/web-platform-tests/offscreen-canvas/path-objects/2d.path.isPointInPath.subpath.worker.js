// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.isPointInPath.subpath
// Description:isPointInPath() uses the current path, not just the subpath
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("isPointInPath() uses the current path, not just the subpath");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.rect(0, 0, 20, 20);
ctx.beginPath();
ctx.rect(20, 0, 20, 20);
ctx.closePath();
ctx.rect(40, 0, 20, 20);
_assertSame(ctx.isPointInPath(10, 10), false, "ctx.isPointInPath(10, 10)", "false");
_assertSame(ctx.isPointInPath(30, 10), true, "ctx.isPointInPath(30, 10)", "true");
_assertSame(ctx.isPointInPath(50, 10), true, "ctx.isPointInPath(50, 10)", "true");

t.done();

});
done();