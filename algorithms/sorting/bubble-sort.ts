/*
 * Time Complexity: O(N^2)
 * Auxiliary Space: O(1)
 */

export function sort1(arr: number[]): number[] {
  const data = [...arr];
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}

export function sort2(arr: number[]): number[] {
  const data = [...arr];
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i] > data[i + 1]) {
        const temp = data[i];
        data[i] = data[i + 1];
        data[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return data;
}
