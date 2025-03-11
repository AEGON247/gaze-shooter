document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");
    const input = document.getElementById("terminal-input");
    let isMatrixMode = false;

    const commands = {
        help: `
Available commands:
- help: Show this list
- show projects: Display my projects
- show skills: Display my skills
- contact: Get my contact details
- home: Reload the site
- ascii art: Display ASCII text
- matrix mode: Activate Matrix animation
- theme dark: Switch to dark theme
- theme light: Switch to light theme
- clear: Clear the terminal
        `,
        home: function () {
            location.reload(); // Reload the page
        },
        "show projects": `
Projects:
1. RocketAir Clone - Recreated a modern airline website
2. ExoDorm - A marketplace web app for students
3. Internship Portal - A portal to manage internship opportunities
        `,
        "show skills": `
Skills:
- HTML, CSS, JavaScript (Frontend)
- React.js, Next.js, Vanilla
- Node.js, MongoDB, Postgres
- UI/UX Design & Animations
        `,
        contact: `
Contact Me:
Email: sachinmehta247@gmail.com
GitHub: github.com/AEGON247
LinkedIn: linkedin.com/in/sachin-mehta-785704272
        `,
        "ascii art": `
 █████╗ ███████╗ ██████╗  ██████╗ ███╗   ██╗
██╔══██╗██╔════╝██╔════╝ ██╔═══██╗████╗  ██║
███████║███████╗██║  ███╗██║   ██║██╔██╗ ██║
██╔══██║╚════██║██║   ██║██║   ██║██║╚██╗██║
██║  ██║███████║╚██████╔╝╚██████╔╝██║ ╚████║
╚═╝  ╚═╝╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝
        `,
        "matrix mode": function () {
            if (!isMatrixMode) {
                document.body.classList.add("matrix"); // Add matrix mode class
                isMatrixMode = true;
            } else {
                document.body.classList.remove("matrix"); // Remove matrix mode class
                isMatrixMode = false;
            }
        },
        "theme dark": function () {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "limegreen";
        },
        "theme light": function () {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        },
        clear: function () {
            output.innerHTML = ""; // Clear terminal
        },

    // HIDDEN EASTER EGG COMMAND 🔥
    "iamtheone": function () {
        output.innerHTML += `
        > iamtheone
        You have unlocked THE ONE MODE. System Breach Initiated...
        `;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "red";

        // Play a hacking animation
        let interval = setInterval(() => {
            output.innerHTML += "\nACCESS GRANTED...";
        }, 500);

        setTimeout(() => {
            clearInterval(interval);
            output.innerHTML += "\nJust kidding. 😆 You've found the secret!";
        }, 5000);
    },
};

    function executeCommand(command) {
        command = command.toLowerCase().trim();
        if (commands[command] !== undefined) {
            if (command === "clear") {
                output.innerHTML = ""; // Clear terminal
            } else if (typeof commands[command] === "function") {
                commands[command](); // Execute function commands
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