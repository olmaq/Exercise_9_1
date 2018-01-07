function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return (a*h/2);
	} else {
		console.log('Nieprawidłowe dane')
	};
};
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
console.log('Triangle1 field:' + triangle1Area);
var triangle2Area = getTriangleArea(5, 10);
console.log('Triangle2 field:' + triangle2Area);
var triangle3Area = getTriangleArea(123, 456);
console.log('Triangle3 field:' + triangle3Area);