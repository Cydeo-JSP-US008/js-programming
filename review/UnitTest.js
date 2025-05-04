const { test, expect } = require('@playwright/test');
const { reverseString } = require('./JSReview');

test.describe('reverseString', () => {
    
  test('should return an empty string when given an empty string as input', async ({ page }) => {
    await page.evaluate(() => {
      window.reverseString = reverseString;
    });

    const result = await page.evaluate(() => {
      return window.reverseString('');
    });

    expect(result).toBe('');
  });


  test('should correctly reverse a single character string', async ({ page }) => {
    await page.evaluate(() => {
      window.reverseString = reverseString;
    });
  
    const result = await page.evaluate(() => {
      return window.reverseString('A');
    });
  
    expect(result).toBe('A');
  });


});