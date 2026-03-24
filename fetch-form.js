const fs = require('fs');
fetch("https://docs.google.com/forms/d/e/1FAIpQLSfRJ53-h4CNtFz_yJQO-WvqhosgIFby_sI7efcwui8E32WmUA/viewform")
    .then(r => r.text())
    .then(t => {
        fs.writeFileSync('C:/solo solution demo/form.html', t);
        console.log('saved');
    });
