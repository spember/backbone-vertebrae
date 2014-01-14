define(["app/views/index"], function(IndexView) {
	describe("IndexView", function() {
		it("Should have className set", function() {
			var index = new IndexView();
			expect(index.className).toBe("content");
		});
	});
});