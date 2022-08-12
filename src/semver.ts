export function semver(arr: string[]) {
  return arr.sort(compare);
}

function compare(a: string, b: string) {
  if (a === b) {
    return 0;
  }

  const aComponents = a.split(".");
  const bComponents = b.split(".");

  const len = Math.min(aComponents.length, bComponents.length);

  for (let i = 0; i < len; i++) {
    if (parseInt(aComponents[i], 10) > parseInt(bComponents[i], 10)) {
      return 1;
    }

    if (parseInt(aComponents[i], 10) < parseInt(bComponents[i], 10)) {
      return -1;
    }
  }

  if (aComponents.length > bComponents.length) {
    return 1;
  }

  if (aComponents.length < bComponents.length) {
    return -1;
  }

  return 0;
}
