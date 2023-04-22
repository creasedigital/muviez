const addUnboxdFees = (number: string): string => {
    let unboxdFees = parseInt(number) + (parseInt(number) * 0.05);
    return `${unboxdFees}`;
}

export default addUnboxdFees;