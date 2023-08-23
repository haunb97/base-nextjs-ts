/* eslint-disable import/no-anonymous-default-export */
const PREFIX = `local::`;

function set(key: string, value: any) {
  if (typeof window === "undefined" || !localStorage) {
    return;
  }

  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(PREFIX + key, serializedValue);
  } catch (error) {
    throw new Error("store serialization failed");
  }
}

function get(key: string) {
  if (typeof window === "undefined" || !localStorage) {
    return;
  }
  try {
    const serializedValue = localStorage.getItem(PREFIX + key);
    if (serializedValue) {
      // eslint-disable-next-line consistent-return
      return JSON.parse(serializedValue);
    }
  } catch (error) {
    throw new Error("store deserialization failed");
  }
}

function removeItem(key: string) {
  if (!localStorage) {
    return;
  }
  try {
    localStorage.removeItem(PREFIX + key);
  } catch (error) {
    throw new Error("store deserialization failed");
  }
}

function removeAllItem() {
  if (!localStorage) {
    return;
  }
  try {
    localStorage.clear();
  } catch (error) {
    throw new Error("store deserialization failed");
  }
}

export { get, set, removeItem, removeAllItem };
