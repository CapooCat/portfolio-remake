const useLocalStorage = <T>(initialValue: T, key: string): [T, (input: T) => void] => {
  const setValue = (input: T) => {
    localStorage.setItem(key, JSON.stringify(input));
  };

  let result: T = initialValue;
  const storedValue = localStorage.getItem(key) ?? null;
  result = storedValue ? JSON.parse(storedValue) : result;
  storedValue ?? setValue(result);

  return [result, setValue];
};

export default useLocalStorage;
