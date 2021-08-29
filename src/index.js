module.exports = function solveSudosubNumu(matrix) {
  recursiveSolution(matrix);

  return matrix;
}

function recursiveSolution(matrix) {

  for (let i = 0; i < 9; i++) {

    for (let j = 0; j < 9; j++) {


      if (matrix[i][j] === 0) {

        for (let numb = 1; numb <= 9; numb++) {
          

          let noRepeat = true;

          for (let val = 0; val < 9; val++) {

            let r_r = 3 * Math.floor(i / 3) + Math.floor(val / 3);

            let c_c = 3 * Math.floor(j / 3) + val % 3;


            if (matrix[i][val] == numb || matrix[val][j] == numb || matrix[r_r][c_c] == numb) {

              noRepeat = false;

              break;

            }

          }


          if (noRepeat) {

            matrix[i][j] = numb;

            if ( recursiveSolution(matrix) ) {

              return true;

            } else {

              matrix[i][j] = 0;

            }

          }

        }

        return false;

      }

    }

  }

  return true;

}

