document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("terminal-input");
    const terminal = document.getElementById("fake-terminal");
  
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const command = input.value.trim();
        const output = document.createElement("pre");
  
        // Basic simulated response
        if (command === "ls") {
          output.textContent = "$ ls\nfile1.txt\nfile2.txt";
        } else if (command === "pwd") {
          output.textContent = "$ pwd\n/home/user";
        } else {
          output.textContent = `$ ${command}\nCommand not found`;
        }
  
        terminal.insertBefore(output, input);
        input.value = "";
      }
    });
  });
  