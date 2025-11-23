export function pushUniqueIndexOFInvisibleLetter(
  numOfInvisibleLetter: number,
  randomName: string,
) {
  const indexes: number[] = [];

  for (
    let i = 0;
    i < randomName.length && indexes.length < numOfInvisibleLetter;
    i++
  ) {
    const randomIndex = Math.trunc(Math.random() * randomName.length);

    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    } else {
      i--;
    }
  }

  return indexes;
}
