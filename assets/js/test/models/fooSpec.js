define(["app/models/foo"], function(Foo) {
	describe("Foo", function() {
		it("Should have count property as default", function () {
			var foo = new Foo();
			expect(foo.get("count")).toBe(0);
		});

		it ("Should fail validation if count drops below zero", function () {
			var foo = new Foo();
			expect(foo.isValid()).toBe(true);
			foo.set("count", 10);
			expect(foo.isValid()).toBe(true);
			foo.set("count", -1);
			expect(foo.isValid()).toBe(false);
		});
	});
});