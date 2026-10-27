function calculate(gpa_point) {
    const gradeScale = {
    "A" : 4,
    "A-" : 3.67,
    "B+" : 3.33,
    "B" : 3,
    "B-" : 2.67,
    "C+" : 2.33,
    "C" : 2,
    "C-" : 1.67,
    "D+" : 1.33,
    "D" : 1,
    "D-" : 0.67,
    "F" : 0,
    "Transfer" : 0,
    "S" : 0,
    "U" : 0,
    "N/A" : 0,
};

return gradeScale [gpa_point] ?? 0;
}

let new_class = 1;

function remove_class (button) {
    const remove_row = button.closest("tr");
    remove_row.remove();
}

function add_class() {
    const container = document.getElementById("input_container");
    const row = document.getElementById("user_input");
    const new_row = row.cloneNode(true);
    const nextIndex = container.childElementCount + 1;
    new_row.id = "user_input_" + nextIndex;
    container.appendChild(new_row);
}