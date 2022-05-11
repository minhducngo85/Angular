import { PrimeCalculator } from './prime-calculator';
/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  //const response = `worker response to ${data}`;
  console.log("data = " + data);
  const response = PrimeCalculator.findNthPrimeNumber(parseInt(data));
  postMessage(response);
});
