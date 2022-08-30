/*
 * Time Complexity: O(W(N + K))
 * Auxiliary Space: O(N + K)
 */

function countingSort(arr: number[], placeVal: number): number[] {
  const data = [...arr];

  const shift = Math.min(...data);
  const K = Math.max(...data) - shift;
  const counts = new Array(K + 1).fill(0);
  for (const elem of arr) {
    counts[elem - shift] += 1;
  }
  let startingIndex = 0;
  for (let i = 0; i < K + 1; i++) {
    const count = counts[i];
    counts[i] = startingIndex;
    startingIndex += count;
  }

  for (const elem of arr) {
    data[counts[elem - shift]] = elem;
    counts[elem - shift] += 1;
  }

  return data;
}

export function sort(arr: number[]): number[] {
  const data = [...arr];

  const maxElem = Integer.MIN_VALUE;
  for (const elem of arr) {
    if (elem > maxElem) {
      maxElem = elem;
    }
  }

  let placeVal = 1;
  while (maxElem / placeVal > 0) {
    console.log(data, placeVal);
    countingSort(data, placeVal);
    placeVal *= 10;
  }

  return data;
}
