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
    let range = generateFizzBuzz(fizz, buzz, length);
    displayFizzBuzz(range);
}
//runs logic
function generateFizzBuzz(fizz, buzz, numlist) {
    let range = [];
    if (numlist > 100) {
        Swal.fire(
            {
                backdrop: false,
                title: 'Error',
                icon: 'error',
                text: "Length must be 100 or under"
            }
        );
    } else if (isNaN(numlist) == true) {
        Swal.fire(
            {
                backdrop: false,
                title: 'Error',
                icon: 'error',
                text: "All values must be numbers"
            }
        );
    } else if (isNaN(fizz) == true || isNaN(buzz) == true) {
        Swal.fire(
            {
                backdrop: false,
                title: 'Error',
                icon: 'error',
                text: "All values must be numbers"
            }
        );
    } else {
        for (let index = 1; index < numlist; index++) {
            if (index % fizz == 0 && index % buzz == 0) {
                range.push("fizzbuzz");
            }
            else if (index % fizz == 0) {
                range.push("fizz");
            } else if (index % buzz == 0) {
                range.push("buzz");
            } else {
                range.push(index);
            }
        }
        return range;
    }
}


//displays onto page
//view function
function displayFizzBuzz(range) {
    let tableHTML = "";

    for (let index = 0; index < range.length; index++) {
        tableHTML += `<tr><td class="${range[index]}">${range[index]}</tr></td>`;
    }

    document.getElementById('results').innerHTML = tableHTML;
}
