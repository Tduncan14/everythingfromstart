var employees = [
    { name: "tim", id: 1 },
    { name: "tim", id: 1 },
    { name: "tim", id: 1 },
];
var elements = employees.map(function (item, index) {
    return "<div> " + item.id + " - " + item.name + " </div>";
});
console.log(elements);
