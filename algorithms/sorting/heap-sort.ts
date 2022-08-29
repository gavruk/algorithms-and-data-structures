/*
 * Time Complexity: O(N logN)
 * Auxiliary Space: O(1)
 */

function maxHeapify(arr: number[], heapSize: number, index: number): void {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index;
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }  
  if (largest != index) {
    const temp = arr[index];
    arr[index] = arr[largest];
    arr[largest] = temp;
    maxHeapify(arr, heapSize, largest);
  }
}

export function sort(arr: number[]): number[] {
  const data = [...arr];

  for (let i = Math.floor(data.length / 2); i >= 0; i--) {
    maxHeapify(data, data.length, i);
  }

  for (let i = data.length - 1; i > 0; i--) {
    // swap last element with first element
    const temp = data[i];
    data[i] = data[0];
    data[0] = temp;
    // note that we reduce the heap size by 1 every iteration
    maxHeapify(data, i, 0);
  }

  return data;
}
