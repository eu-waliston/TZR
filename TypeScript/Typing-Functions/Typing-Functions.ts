//Typing Functions

// import { Equal, Expect } from "./helpers/type-utils";

type FocusListener = (isFocused: boolean) => void;

const addListener = (onFocusChange:  FocusListener) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

//   type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
