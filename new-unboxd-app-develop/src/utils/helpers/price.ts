export const roundToThousands = (amount: number) => {
  const RoundFactor = amount >= 1000 ? 1000 : 100;

  return Math.round(amount / RoundFactor) * RoundFactor;
};

export const addUnboxdFee = (amount: number, charge: number) =>
  Number((amount += amount * (charge / 100)));
