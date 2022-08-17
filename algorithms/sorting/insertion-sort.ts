/*
 * Time Complexity: O(N^2)
 * Auxiliary Space: O(1)
 */

export function sort(arr: number[]): number[] {
  const data = [...arr];

  for (let i = 1; i < data.length; i++) {
    let currentIndex = i;
    while (currentIndex > 0 && data[currentIndex - 1] > data[currentIndex]) {
      const temp = data[currentIndex];
      data[currentIndex] = data[currentIndex - 1];
      data[currentIndex - 1] = temp;
      currentIndex -= 1;
    }
  }

  return data;
}
