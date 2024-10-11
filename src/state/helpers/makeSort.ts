import shuffle from "just-shuffle";

export const makeSort = (list: string[]) => {
  const listLength = list.length;
  const shuffledList = shuffle(list);

  const result = new Map<string, string>();

  for (let index = 0; index < listLength; index++) {
    const partnerIndex = index === listLength - 1 ? 0 : index + 1;
    result.set(shuffledList[index], shuffledList[partnerIndex]);
  }

  return result;
};
