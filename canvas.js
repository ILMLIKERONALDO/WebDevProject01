      const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const radius = 50; // Circle radius
        let angle = 0;

        // Color array for flashing effect
        const colors = ['#0000AA','#0000BB','#0000CC','#0000DD','#0000EE','#0000FF','#1111FF','#2222FF','#3333FF','#4444FF','#5555FF'];
       
        // Initial circle position (center of the canvas)
        let mouseX = canvas.width / 2;
        let mouseY = canvas.height / 2;

        // Update mouse position on mousemove
        canvas.addEventListener('mousemove', (event) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = event.clientX - rect.left;
            mouseY = event.clientY - rect.top;
        });

        

        function drawCircle() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Change color based on the angle
            // const colorIndex = Math.floor(angle / (Math.PI * 2 / colors.length)) % colors.length;
            const color = colors[Math.floor(Math.random() * colors.length)];

            // Set steady glow with no fade-in/fade-out
            ctx.fillStyle = color;
            ctx.globalAlpha = 1;  // Constant alpha for steady glow

            // Draw circle at the mouse position
            ctx.beginPath();
            ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            // Outer glow effect
            ctx.shadowBlur = radius;
            ctx.shadowColor = color;

            // Update angle to make the circle flash different colors
            angle += 0.25;

            // Loop the animation
            requestAnimationFrame(drawCircle);
        }

        drawCircle();
        // Select the hamburger and nav-links elements
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        // Add an event listener to toggle the 'show' class when the hamburger is clicked
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });