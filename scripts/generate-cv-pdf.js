const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateCV() {
    console.log('Starting CV generation...');
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();
        
        // Path to the exported CV HTML file
        const cvPath = path.join(__dirname, '../out/cv/index.html');
        
        if (!fs.existsSync(cvPath)) {
            throw new Error(`CV index.html not found at ${cvPath}. Make sure to run 'npm run export' first.`);
        }

        console.log(`Loading CV from: ${cvPath}`);
        await page.goto(`file://${cvPath}`, { waitUntil: 'networkidle0' });

        // Add some styles to hide the print button and ensure good PDF formatting
        await page.addStyleTag({
            content: `
                .print\\:hidden { display: none !important; }
                body { background: white !important; color: black !important; }
                .dark { background: white !important; color: black !important; }
            `
        });

        console.log('Generating PDF...');
        await page.pdf({
            path: path.join(__dirname, '../out/cv.pdf'),
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20mm',
                right: '20mm',
                bottom: '20mm',
                left: '20mm'
            }
        });

        console.log('CV PDF generated successfully at out/cv.pdf');
    } catch (error) {
        console.error('Error generating CV PDF:', error);
        process.exit(1);
    } finally {
        await browser.close();
    }
}

generateCV();
