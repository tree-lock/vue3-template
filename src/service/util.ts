/**
 * 节流
 * @param fn 节流的对象
 * @param delay 节流的时长
 * @returns 包装之后的函数
 */
export function throttle(fn: () => unknown, delay: number) {
  let valid = true;
  return function () {
    if (!valid) {
      //休息时间 暂不接客
      return false;
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    valid = false;
    setTimeout(() => {
      fn();
      valid = true;
    }, delay);
  };
}
