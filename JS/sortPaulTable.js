document.querySelector(".redeemer").addEventListener("click", () => {sortTable(0,0,'asc')})
document.querySelector(".amount").addEventListener("click", () => {sortTable(1,1,'desc')})
document.querySelector(".max").addEventListener("click", () => {sortTable(2,1,'desc')})
document.querySelector(".total").addEventListener("click", () => {sortTable(3,1,'desc')})
document.querySelector(".average").addEventListener("click", () => {sortTable(4,1,'desc')})

// n = column to sort, type = alphabetical or numerical
function sortTable(n, type, dir) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("paultable");
    switching = true;
    // Set the sorting direction to ascending:
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (type == 0) {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (Number(x.innerHTML) > Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (dir == "desc") {
                if (type == 0) {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (Number(x.innerHTML) < Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }

        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            } else if ((switchcount == 0 && dir == "desc")) {
                dir = "asc";
                switching = true;
            }
        }
    }
}
