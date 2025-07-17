import fetch from 'node-fetch';

const TELEGRAM_BOT_TOKEN = '8010397883:AAHG8IUFNOAgngVD-GVSOMOIkMNjX72_w0E';
const WEBHOOK_URL = 'https://l99pn2-8000.csb.app/api/telegram'; // Your webhook URL

async function setWebhook() {
  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: WEBHOOK_URL
      })
    });

    const result = await response.json();
    console.log('Webhook setup result:', result);

    if (result.ok) {
      console.log('✅ Webhook set successfully!');
      console.log('Your bot is now ready to receive messages at:', WEBHOOK_URL);
    } else {
      console.log('❌ Failed to set webhook:', result.description);
    }
  } catch (error) {
    console.error('Error setting webhook:', error);
  }
}

setWebhook();
