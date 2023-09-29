const useFormatNumber = (initialValue) => {
  // Membagi angka menjadi bagian desimal dan non-desimal
  const parts = initialValue.toString().split(".");
  const nonDecimalPart = parts[0];
  const decimalPart = parts[1] || "";

  // Membalikkan bagian non-desimal untuk menambahkan tanda titik setiap 3 digit
  const reversedNonDecimalPart = nonDecimalPart.split("").reverse().join("");
  let formattedNonDecimalPart = "";
  for (let i = 0; i < reversedNonDecimalPart.length; i++) {
    formattedNonDecimalPart += reversedNonDecimalPart[i];
    if ((i + 1) % 3 === 0 && i !== reversedNonDecimalPart.length - 1) {
      formattedNonDecimalPart += ".";
    }
  }

  // Memasukkan kembali bagian desimal
  const formattedDecimalPart = decimalPart ? `,${decimalPart}` : "";
  return `${formattedNonDecimalPart
    .split("")
    .reverse()
    .join("")}${formattedDecimalPart}`;
};

export default useFormatNumber;
