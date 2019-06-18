export function storage() {
  return function(target: Object, key: string | symbol) {
    let val = target[key];
    const getter = () => val;
    const setter = (val: any) => (val = val);

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
}
