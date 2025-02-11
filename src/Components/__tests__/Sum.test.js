import { Sum } from "../Sum";


test('Sum function should calculate the sum of two numbers',()=> {
    const result = Sum(5,9)
    expect(result).toBe(14);
})