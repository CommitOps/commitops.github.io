document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("animated-terminal");
    if (!el) return;
  
    // Extract original text and clear it
    const rawText = el.innerText.trim();
    const lines = rawText.split("\n");
    el.innerText = "";
  
    let i = 0;
  
    function typeLine() {
      if (i < lines.length) {
        el.innerText += (i > 0 ? "\n" : "") + lines[i];
        i++;
        setTimeout(typeLine, 500); // speed per line
      }
    }
  
    typeLine();
  });
  