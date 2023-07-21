//get numbers from input
//entry point
//controller
function getValues() {

    let fizz = document.getElementById('Fizz').value;
    let buzz = document.getElementById('Buzz').value;
    let length = document.getElementById('Length').value;

    length = Number(length)
    fizz = Number(fizz);
    buzz = Number(buzz);
    let range;
    if (isNaN(length) == true) {
        Swal.fire(
            {
                backdrop: false,
                title: 'Error',
                icon: 'error',
                text: "Both values must be numbers"
            }
        );
    } else if (isNaN(fizz) == true || isNaN(buzz) == true) {
        Swal.fire(
            {
                backdrop: false,
                title: 'Error',
                icon: 'error',
                text: "Both values must be numbers"
            }
        );
    } else {
        range = generateFizzBuzz(length);
    }
    displayFizzBuzz(range, fizz, buzz);
}
//runs logic
function generateFizzBuzz(length) {
    let range = [];
    for (let num = 1; num <= length; num++) {
        range.push(num);
    }
    return range

}

//displays onto page
//view function
function displayFizzBuzz(range, fizz, buzz) {
    let tableHTML;
    for (let index = 0; index < range.length; index++) {
        let className;
        let tableRowHTML;
        if (range[index] % fizz == 0 && range[index] % buzz == 0) {
            tableRowHTML = `<tr class="table-dark"><td>FizzBuzz</tr></td>`;
            tableHTML = tableHTML + tableRowHTML;
        }
        else if (range[index] % fizz == 0) {
            tableRowHTML = `<tr class="table-primary"><td>Fizz</tr></td>`;
            tableHTML = tableHTML + tableRowHTML;
        } else if (range[index] % buzz == 0) {
            tableRowHTML = `<tr class="table-danger"><td>Buzz</tr></td>`;
            tableHTML = tableHTML + tableRowHTML;
        } else {
            tableRowHTML = `<tr><td>${range[index]}</tr></td>`;
            tableHTML = tableHTML + tableRowHTML;
        }
    }
    document.getElementById('results').innerHTML = tableHTML;
}
