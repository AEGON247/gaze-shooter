document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");
    const input = document.getElementById("terminal-input");

    const commands = {
        help: `
Available commands:
- help: Show this list
- show projects: Display my projects
- show skills: Display my skills
- contact: Get my contact details
- clear: Clear the terminal
        `,
        "show projects": `
Projects:
1. RocketAir Clone - Recreated a modern airline website
2. ExoDorm - A marketplace web app for students
3. Internship Portal - A portal to manage internship opportunities
        `,
        "show skills": `
Skills:
- HTML, CSS, JavaScript (Frontend)
- React.js, Next.js
- Node.js, MongoDB
- UI/UX Design & Animations
        `,
        contact: `
Contact Me:
Email: example@email.com
GitHub: github.com/myprofile
LinkedIn: linkedin.com/in/myprofile
        `,
        clear: "",
    };

    function executeCommand(command) {
        command = command.toLowerCase().trim();
        if (commands[command] !== undefined) {
            if (command === "clear") {
                output.innerHTML = ""; // Clear terminal
            } else {
                output.innerHTML += `> ${command}\n${commands[command]}\n`;
            }
        } else {
            output.innerHTML += `> ${command}\nCommand not found. Type "help" for available commands.\n`;
        }
        output.scrollTop = output.scrollHeight;
    }

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            executeCommand(input.value);
            input.value = "";
        }
    });
});