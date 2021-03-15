import { getData } from '../utils/fetch.js';

/**
 * A button that fetches and renders the data again
 *
 */

const comboBtn = document.getElementById('comboBtn');
if (comboBtn) {
  comboBtn.addEventListener('click', async function () {
    console.log('Another combo button clicked');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const data = await getData('/fetchData', options);
    console.log(data)
  });
}
