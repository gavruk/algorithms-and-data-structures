/*
 * Time Complexity: O(N^2)
 * Auxiliary Space: O(1)
 */

export function sort(arr: number[]): number[] {
  const data = [...arr];

  for (let i = 0; i < data.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }
    const temp = data[i];
    data[i] = data[minIndex];
    data[minIndex] = temp;
  }

  return data;
}
