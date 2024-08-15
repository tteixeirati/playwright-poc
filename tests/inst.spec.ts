import { test, expect } from '@playwright/test';
test('View stories for me', async ({ page }) => {

    await page.goto('https://www.instagram.com/');
    await expect(page).toHaveTitle(/Instagram/);
    await page.screenshot({ path: 'screenshot/screenshot.png', fullPage: true });
    await page.waitForTimeout(3 * 1000);
    await page.getByText('Phone number, username, or email').fill('tiagoteixeira.si');
    await page.waitForTimeout(1000);
    await page.locator('xpath=//input[@name="password"]').fill('v3:)H8?.RJXSu]H');
    await page.waitForTimeout(1000);
    await page.locator('xpath=//button[@type="submit"]').click();
    await page.screenshot({ path: 'screenshot/screenshot2.png', fullPage: true });
    await page.waitForTimeout(15 * 1000);
    try {
        await page.getByRole('button', { name: 'Not now' }).click({ timeout: 5 * 1000 });
    } catch (error) {
        console.log('errorNotNow1')
    }
    try {
        await page.getByRole('button', { name: 'Not Now' }).click({ timeout: 5 * 1000 });
    } catch (error) {
        console.log('errorNotNow2')
    }

    async function clickViewStory() {
        try {
            await page.locator("//div[text()=\'Ver story\']").hover()
            await page.waitForTimeout(1 * 1000);
            await page.locator('//div[text()=\'Ver story\']').click({ timeout: 5 * 1000 });
        } catch (error) {
            console.log('error')
        }
        try {
            await page.locator("//div[text()=\'View story\']").hover()
            await page.waitForTimeout(1 * 1000);
            await page.locator('//div[text()=\'View story\']').click({ timeout: 5 * 1000 });
            console.log('FoundViewStory')
        } catch (error) {
            console.log('error')
        }
        await page.waitForTimeout(1 * 1000);
        await page.mouse.move(1000, 500);
        await page.waitForTimeout(1 * 1000);
        await page.mouse.move(100, 100);
        await page.waitForTimeout(1 * 1000);
        await page.mouse.move(100, 500);
        await page.waitForTimeout(1 * 1000);
        await page.mouse.move(1000, 100);
        await page.screenshot({ path: 'screenshot/screenshot21.png', fullPage: true });
        await page.waitForTimeout(15 * 1000);
        await page.screenshot({ path: 'screenshot/screenshot22.png', fullPage: true });

        await page.reload();
        await page.waitForTimeout(3 * 1000);
        try {
            await page.locator("//div[text()=\'Ver story\']").hover()
            await page.waitForTimeout(1 * 1000);
            await page.locator('//div[text()=\'Ver story\']').click({ timeout: 5 * 1000 });
        } catch (error) {
            console.log('error')
        }
        try {
            await page.locator("//div[text()=\'View story\']").hover()
            await page.waitForTimeout(1 * 1000);
            await page.locator("//div[text()='View story']").click({ timeout: 5 * 1000 });
            console.log('FoundViewStory')
        } catch (error) {
            console.log('error')
        }
        await page.waitForTimeout(1 * 1000);
        await page.mouse.move(1000, 500);
        await page.waitForTimeout(1 * 1000);
        await page.mouse.move(100, 100);
        await page.waitForTimeout(1 * 1000);
        await page.mouse.move(100, 500);
        await page.waitForTimeout(1 * 1000);
        await page.mouse.move(1000, 100);
        await page.screenshot({ path: 'screenshot/screenshot23.png', fullPage: true });
        await page.waitForTimeout(15 * 1000);
        await page.screenshot({ path: 'screenshot/screenshot24.png', fullPage: true });
    }

    async function watchStory(person: string) {
        await page.waitForTimeout(3 * 1000);
        let url = 'https://www.instagram.com/stories/' + person + '/';
        await page.goto(url);
        await expect(page).toHaveTitle(/Stories • Instagram/);
        await page.waitForTimeout(3 * 1000);
        await clickViewStory();
        try {
            await page.locator("text='Sorry, we're having trouble playing this video.'").hover()
            for (let i = 0; i < 4; i++) {
                await page.waitForTimeout(1 * 1000);
                await page.locator("//*[@aria-label='Next']").hover()
                await page.waitForTimeout(1 * 1000);
                await page.locator("//*[@aria-label='Next']").click()
            }
        } catch (error) {
            console.log('error on sorry hover')
        }

    }

    function getTimeDiference(firstDate: Date, secondDate: Date) {
        // Time Difference in Milliseconds
        const milliDiff: number = firstDate.getTime() - secondDate.getTime();

        // Converting time into hh:mm:ss format

        // Total number of seconds in the difference
        const totalSeconds = Math.floor(milliDiff / 1000);

        // Total number of minutes in the difference
        const totalMinutes = Math.floor(totalSeconds / 60);

        // Total number of hours in the difference
        const totalHours = Math.floor(totalMinutes / 60);

        // Getting the number of seconds left in one minute
        const remSeconds = totalSeconds % 60;

        // Getting the number of minutes left in one hour
        const remMinutes = totalMinutes % 60;

        console.log(`${totalHours}:${remMinutes}:${remSeconds}`);
    }

    async function watchStoryAsHardAsItIs(person: string) {
        const firstDate = new Date();
        let numberTries = 0;
        while (numberTries <= 3) {
            await watchStory(person);
            await page.goto('https://www.instagram.com/');
            await page.waitForTimeout(3 * 1000);
            try {
                await page.getByRole('button', { name: 'Not now' }).click({ timeout: 3 * 1000 });
            } catch (error) {
                console.log('error')
            }
            try {
                await page.getByRole('button', { name: 'Not Now' }).click({ timeout: 3 * 1000 });
            } catch (error) {
                console.log('error')
            }
            await page.waitForTimeout(3 * 1000);
            numberTries++;
        }
        const secondDate = new Date();
        getTimeDiference(firstDate, secondDate);
    }

    await watchStoryAsHardAsItIs('cristiano');
    await watchStoryAsHardAsItIs('leomessi');
    await watchStoryAsHardAsItIs('selenagomez');
    await watchStoryAsHardAsItIs('therock');

});