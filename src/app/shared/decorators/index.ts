/**
 * 注解的实现
 */
export function Emoji() {
  return (target: object, key: string) => {
    console.log(target, key);
    let val = target[key];

    const getters = () => {
      return val;
    };

    const setter = (value: string) => {
      val = `哈哈${value}哈哈`;
    };

    Object.defineProperty(target, key, {
      get: getters,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
