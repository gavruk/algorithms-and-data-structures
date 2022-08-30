/*
 * Time Complexity: O(N)
 * Auxiliary Space: O(N)
 */

export function sort(arr: number[]): number[] {
  const data = [...arr];

  const shift = Math.min(...data);
  const K = Math.max(...data) - shift;
  const counts = new Array(K + 1).fill(0);
  for (const elem of arr) {
    counts[elem - shift] += 1;
  }
  // we now overwrite our original counts with the starting index
  // of each element in the final sorted array
  let startingIndex = 0;
  for (let i = 0; i < K + 1; i++) {
    const count = counts[i];
    counts[i] = startingIndex;
    startingIndex += count;
  }

  for (const elem of arr) {
    data[counts[elem - shift]] = elem;
    // since we have placed an item in index counts[elem], we need to
    // increment counts[elem] index by 1 so the next duplicate element
    // is placed in appropriate index
    counts[elem - shift] += 1;
  }

  return data;
}
