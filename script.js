// Select the hamburger and nav-links elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add an event listener to toggle the 'show' class when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
// Recursion depth limit to prevent crashing the browser
const MAX_DEPTH = 20;

// Function to create recursive `iframes`
function createRecursiveIframe(container, depth = 1) {
    if (depth > MAX_DEPTH) {
        const endMessage = document.createElement("p");
        endMessage.textContent = "Reached the limit of recursion!";
        container.appendChild(endMessage);
        return;
    }

    // Create a new `iframe`
    const iframe = document.createElement("iframe");
    iframe.width = `${90 - depth * 2}%`; // Slightly reduce the size for visual effect
    iframe.height = `${90 - depth * 2}%`;
    iframe.style.border = "1px solid black";
    iframe.srcdoc = `
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Learn more about Ilm Mubasher, a 9-year-old with interests in piano, geography, astronomy, and more.">
<title>Ilm Mubasher - About Me</title>
<link rel="stylesheet" href="style.css"/>
</head>
<body>

<header>
<img src="." alt="Ilm Mubasher" class="ilmmubasher" />
<nav>
    <div class="hamburger" onclick="toggleMenu()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
    <ul id="nav-links" class="nav-links">
        <li><a href="index.html" style="text-decoration: underline;">Home</a></li>
        <li><a href="totallyNotRickroll.html">Surprise me</a></li>
        <li><a href="canvas.html">Random huge flickering dot thingy</a></li>
        <li><a href="C:/Users/dell/Desktop/WebDevProject01/ticTacToe.html">Tic Tac Toe</a></li>
    </ul>
</nav>
<h1>About Me</h1>
<img src="me.jpg" alt="Picture of Ilm Mubasher" id="myImg">
<p>Hi, my name is Ilm Mubasher, and I am 9 years old. My interests include Piano, Geography, Astronomy, Programming, and Electricity. I study in Grade 5 at Alpha School, where I'm quite popular.</p>

<h2>My Dream Micronation Flag</h2>
<img src="69177488_60x60.svg" alt="Flag of my dream micronation" id="micronationFlag">
</header>
<h1>INFINITY RECURSION</h1>
<div class="recursive-container" id="recursiveContainer">
<!-- This initial "iframe" will start the recursion --></div>     
</body></html>`;

    // Append the iframe to the container
    container.appendChild(iframe);

    // Set up an `onload` event to call the next level of recursion
    iframe.onload = function () {
        // Create a new container inside the current `iframe` document
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const innerContainer = iframeDoc.createElement("div");
        innerContainer.className = "recursive-container";
        iframeDoc.body.appendChild(innerContainer);

        // Call the recursive function on the new container within this `iframe`
        createRecursiveIframe(innerContainer, depth + 1);
    };
}

// Start recursion in the initial container
createRecursiveIframe(document.getElementById("recursiveContainer"));
