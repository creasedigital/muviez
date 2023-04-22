const formatNumber = (number: number, decimal:number=2): string => {
    let str = number.toLocaleString('en-US', {
      minimumFractionDigits: decimal,
      maximumFractionDigits: 2
    });
    return str;
  };
  
export default formatNumber;