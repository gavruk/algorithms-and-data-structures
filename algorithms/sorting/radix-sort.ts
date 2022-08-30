/*
 * Time Complexity: O(W(N + K))
 * Auxiliary Space: O(N + K)
 */

function countingSort(arr: number[], placeVal: number, numberOfDigits: number, K: number = 10): void {
  const counts = new Array(K).fill(0);
  for (const elem of arr) {
    const digit= Math.floor(elem / placeVal) % K;
    counts[digit] += 1
  }
  let startingIndex = 0;
  for (let i = 0; i < K; i++) {
    const count = counts[i];
    counts[i] = startingIndex;
    startingIndex += count;
  }

  const sortedArray = [...arr];
  for (const elem of arr) {
    const digit= Math.floor(elem / placeVal) % K;
    sortedArray[counts[digit]] = elem;
    counts[digit] += 1;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = sortedArray[i];
  }
}

export function sort(arr: number[]): number[] {
  const data = [...arr];
  const numberOfDigits = data[0].toString().length;
  const K = 10;

  let maxElem = Number.MIN_VALUE;
  for (const elem of arr) {
    if (elem > maxElem) {
      maxElem = elem;
    }
  }

  let placeVal = 1;
  while (Math.floor(maxElem / placeVal) > 0) {
    countingSort(data, placeVal, numberOfDigits, K);
    placeVal *= K;
  }

  return data;
}
