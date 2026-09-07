import {copyFileSync,renameSync} from 'node:fs';
renameSync('dist/source.html','dist/index.html');
for(const file of ['ayush-portrait-atlas.png','Ayush-Kumar-Jha-CV.pdf','favicon.svg'])copyFileSync(file,`dist/${file}`);
