const bl = require('Js/controller/business-logic.js')

test('BUSINESS LOGIC 01 : Should return proper output in case of score draw', () => {
  const output = bl.compare(0, 0)
  expect(output.length).toBe(2)
  expect(output[0].result).toBe(2)
  expect(output[0].choice).toBe(0)
  expect(output[1].result).toBe(2)
  expect(output[1].choice).toBe(0)
})

test('BUSINESS LOGIC 02 : Should return proper output in case rock-paper', () => {
  const output = bl.compare(0, 1)
  expect(output.length).toBe(2)
  expect(output[0].result).toBe(0)
  expect(output[0].choice).toBe(0)
  expect(output[1].result).toBe(1)
  expect(output[1].choice).toBe(1)
})

test('BUSINESS LOGIC 03 : Should return proper output in case rock-scissors', () => {
  const output = bl.compare(0, 2)
  expect(output.length).toBe(2)
  expect(output[0].result).toBe(1)
  expect(output[0].choice).toBe(0)
  expect(output[1].result).toBe(0)
  expect(output[1].choice).toBe(2)
})

test('BUSINESS LOGIC 04 : Should return proper output in case paper-rock', () => {
  const output = bl.compare(1, 0)
  expect(output.length).toBe(2)
  expect(output[0].result).toBe(1)
  expect(output[0].choice).toBe(1)
  expect(output[1].result).toBe(0)
  expect(output[1].choice).toBe(0)
})

test('BUSINESS LOGIC 05 : Should return proper output in case paper-scissors', () => {
  const output = bl.compare(1, 2)
  expect(output.length).toBe(2)
  expect(output[0].result).toBe(0)
  expect(output[0].choice).toBe(1)
  expect(output[1].result).toBe(1)
  expect(output[1].choice).toBe(2)
})


test('BUSINESS LOGIC 06 : Should return proper output in case scissors-rock', () => {
  const output = bl.compare(2, 0)
  expect(output.length).toBe(2)
  expect(output[0].result).toBe(0)
  expect(output[0].choice).toBe(2)
  expect(output[1].result).toBe(1)
  expect(output[1].choice).toBe(0)
})


test('BUSINESS LOGIC 07 : Should return proper output in case scissors-paper', () => {
  const output = bl.compare(2, 1)
  expect(output.length).toBe(2)
  expect(output[0].result).toBe(1)
  expect(output[0].choice).toBe(2)
  expect(output[1].result).toBe(0)
  expect(output[1].choice).toBe(1)
})
