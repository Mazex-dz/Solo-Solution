const axios = require('axios');

async function testSubmit() {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSfRJ53-h4CNtFz_yJQO-WvqhosgIFby_sI7efcwui8E32WmUA/viewform';
    try {
        const response = await axios.get(url);
        require('fs').writeFileSync('form-new.html', response.data);
        console.log('SUCCESS GET FORM HTML');
    } catch (e) {
        console.error('Failed to get form', e.message);
    }
}

testSubmit();
