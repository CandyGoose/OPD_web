$(document).ready(function() {

    // Loop through each table that contains profession data
    $(".profession").each(function() {
  
      // Initialize variables
      const userCells = $(this).find(".user");
      const numCols = $(this).find(".column-headers th").length - 1;
  
      // Define the sort function that sorts arrays based on the number of matches with the user's array
      const sortFn = function(a, b) {
        let aMatches = 0;
        let bMatches = 0;
        let aGreen = 0;
        let bGreen = 0;
  
        for (let i = 0; i < numCols; i++) {
          if (a[i] === userArr[i]) {
            aMatches++;
            if ($(this).find(".user:eq(" + i + ")").hasClass("match")) {
              aGreen++;
            }
          }
          if (b[i] === userArr[i]) {
            bMatches++;
            if ($(this).find(".user:eq(" + i + ")").hasClass("match")) {
              bGreen++;
            }
          }
        }
  
        if (bMatches !== aMatches) {
          return bMatches - aMatches;
        } else {
          // If there is a tie in matches, sort by the number of green cells
          return bGreen - aGreen;
        }
      };
  
      // Get the data for each row and put it into an array
      const rows = $(this).find('tbody tr');
      const rowArray = rows.toArray().map(function(row) {
        const cells = $(row).find('td').toArray();
        const cellArray = cells.map(function(cell) {
          return parseInt($(cell).text());
        });
        return cellArray;
      });
  
      // Mark cells with 0 and 1 that match between prof and user green
      $(this).find('.match').removeClass('match');
      let matchCount = 0;
      for (let i = 0; i <= numCols; i++) {
        const profValue = parseInt($(this).find(".prof:eq(" + i + ")").text());
        const userValue = parseInt($(this).find(".user:eq(" + i + ")").text());
        if (profValue === userValue && (profValue === 0 || profValue === 1)) {
          $(this).find(".user:eq(" + i + ")").addClass("match");
          matchCount++;
        }
      }
  
      // Sort the array and update the table
      rowArray.sort(sortFn);
      for (let i = 0; i < rowArray.length; i++) {
        $(rows[i]).html(rowArray[i].map(function(value) {
          return '<td>' + value + '</td>';
        }));
      }
  
      // Move the card to the top if it has more green matches
      if (matchCount > 1) {
        const card = $(this).closest('.card');
        $(card).parent().prepend($(card));
      }
    });
  });
  