const countDays = (end) => {
  const dateStart = new Date().getTime();
  const dateEnd = Date.parse(end);

  const oneDay = 1000 * 60 * 60 * 24;

  const diffInTime = dateEnd - dateStart;
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
};

export default countDays;
