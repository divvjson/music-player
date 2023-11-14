interface Array<T> {
  add(element: T): void;
  remove(element: T): void;
  remove(predicate: (value: T, index: number, array: T[]) => boolean): void;
}

Array.prototype.add = function <T>(this: T[], element: T): void {
  if (!this.includes(element)) {
    this.push(element);
  }
};

Array.prototype.remove = function <T>(this: T[], argument: ((value: T, index: number, array: T[]) => boolean) | T): void {
  if (typeof argument === 'function') {
    const predicate = argument as (value: T, index: number, array: T[]) => boolean;
    for (let i = 0; i < this.length;) {
      if (predicate(this[i], i, this)) {
        this.splice(i, 1);
      } else {
        i++;
      }
    }
  } else {
    const element = argument as T;
    const index = this.indexOf(element);
    if (index !== -1) {
      this.splice(index, 1);
    }
  }
};
