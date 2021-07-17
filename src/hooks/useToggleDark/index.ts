import { useDark, useToggle } from "@vueuse/core";

// 不能写在 useToggleDark 内部，isDark不是ref是computed，所以需要全局声明，否则拿到的会是不同的值
export const isDark = useDark();

export function useToggleDark() {
  const toggleDarkDefault = useToggle(isDark);

  const toggleDark = () => {
    toggleDarkDefault();
  };

  return { toggleDark };
}
