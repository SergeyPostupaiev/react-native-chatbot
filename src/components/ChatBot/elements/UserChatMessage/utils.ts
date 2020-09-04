const MAX_DIGIT = 9;

export const defineTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours > MAX_DIGIT ? hours : '0' + hours}:${
    minutes > MAX_DIGIT ? minutes : '0' + minutes
  }`;
};
