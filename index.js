const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducer = (accum, current) => accum + current

const totalBatteries = batteryBatches.reduce(reducer)