export const changeIndex = (index: number, type: string, list: string[]) => {
  let length = list.length - 1;
  let i = index;
  if (type == "inc") {
    if (i < length) {
      i++;
    }
  } else if (type == "dec") {
    if (i > 0) {
      i--;
    }
  }
  console.log(i);
  return i;
};
