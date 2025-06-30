document.getElementById('pick').addEventListener('click', async () => {
    const status = document.getElementById('status');
  
    if (!window.EyeDropper) {
      status.textContent = 'Your browser does not support the EyeDropper API.';
      return;
    }
  
    try {
      const eyeDropper = new EyeDropper();
      status.textContent = 'Click anywhere on the page...';
  
      const result = await eyeDropper.open();
      const color = result.sRGBHex;
  
      await navigator.clipboard.writeText(color);
      status.innerHTML = `<b>${color}</b> copied to clipboard!`;
      status.style.color = color;
    } catch (err) {
      status.textContent = 'Canceled or failed to pick color.';
    }
  });
  