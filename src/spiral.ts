export function spiral(matrix: number[][]) {
  let counter = 0;
  let startCol = 0;
  let endCol = matrix[0].length - 1;
  let startRow = 0;
  let endRow = matrix.length - 1;
  const out: number[] = new Array(matrix[0].length * matrix.length);
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      out[counter] = matrix[startRow][i];
      counter++;
    }
    startRow++;
    for (let j = startRow; j <= endRow; j++) {
      out[counter] = matrix[j][endCol];
      counter++;
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      out[counter] = matrix[endRow][i];
      counter++;
    }
    endRow--;
    for (let j = endRow; j >= startRow; j--) {
      out[counter] = matrix[j][startCol];
      counter++;
    }
    startCol++;
  }

  return out;
}
