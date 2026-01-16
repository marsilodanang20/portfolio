const fs = require('fs');
const https = require('https');
const path = require('path');

const files = [
    {
        url: 'https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/assets/lanyard/card.glb',
        path: 'public/lanyard/card.glb'
    },
    {
        url: 'https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/assets/lanyard/lanyard.png',
        path: 'public/lanyard/lanyard.png'
    }
];

const download = (url, filePath) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${filePath}`);
        });
    }).on('error', (err) => {
        fs.unlink(filePath);
        console.error(`Error downloading ${filePath}: ${err.message}`);
    });
};

// Ensure dir exists
if (!fs.existsSync('public/lanyard')) {
    fs.mkdirSync('public/lanyard', { recursive: true });
}

files.forEach(f => download(f.url, f.path));
