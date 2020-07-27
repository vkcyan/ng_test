/**
 * 变量注解的实现
 */
export function Emoji() {
  return (target: object, key: string) => {
    console.log("注解", target, key);
    let val = target[key];
    const getters = () => {
      return val;
    };

    const setter = (value: string) => {
      val = `💰${value}💰`;
    };

    Object.defineProperty(target, key, {
      get: getters,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

/**
 * 函数注解
 * @param message 提示文字
 */
export function confirmable(message: string) {
  // desc 就是代指这个方法
  return (target: object, key: string, desc: PropertyDescriptor) => {
    const orginal = desc.value;
    desc.value = function (...args: any) {
      const allow = window.confirm(message);
      let result;
      if (allow) {
        result = orginal.apply(this, args);
      } else {
        result = null;
      }
      return result;
    };
    return desc;
  };
}
