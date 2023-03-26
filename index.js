// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber) {
  if (streetNumber < 42) return 42 - streetNumber;
  return streetNumber - 42;
}

function distanceFromHqInFeet(streetNumber) {
  const result = distanceFromHqInBlocks(streetNumber);
  return result * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (destination > start) return (destination - start) * 264;
  return (start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400) return 0;
  if (distanceInFeet > 2000 && distanceInFeet < 2500) return 25;
  if (distanceInFeet > 2500) return "cannot travel that far";
  if (distanceInFeet > 400) return (distanceInFeet - 400) * 0.02;
}
