function moveSelectedLeft(data, selected) {
  const indices = selected.map((item) => data.indexOf(item));
  indices.sort((a, b) => a - b);

  for (const index of indices) {
    if (index > 0) {
      [data[index], data[index - 1]] = [data[index - 1], data[index]];
    }
  }

  return data;
}

function moveSelectedRight(data, selected) {
  const indices = selected.map((item) => data.indexOf(item));
  indices.sort((a, b) => b - a);

  for (const index of indices) {
    if (index < data.length - 1) {
      [data[index], data[index + 1]] = [data[index + 1], data[index]];
    }
  }

  return data;
}

export { moveSelectedLeft, moveSelectedRight };
