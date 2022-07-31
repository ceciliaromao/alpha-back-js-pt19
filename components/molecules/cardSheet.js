import cardNumber from "../atoms/cardNumber.js";

export default function cardSheet(arr, player) {
  let res = false;

  arr.forEach((element) => {
    !res ? res = cardNumber(element.number, player) : res += cardNumber(element.number, player);
  });
  return res;
}