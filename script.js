// Small JS for portfolio interactions (copy to clipboard, set year)
document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Copy buttons
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = text + ' (copiado)';
        setTimeout(() => {
          btn.textContent = text;
        }, 2000);
      } catch (e) {
        // Fallback: select and prompt
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        try { document.execCommand('copy'); }
        catch (err) { /* ignore */ }
        document.body.removeChild(input);
        alert('Texto copiado: ' + text);
      }
    });
  });
});
