// ===== PART 1: JAVASCRIPT BASICS =====
// Variables, Data Types, Operators, and Conditionals

// Variable declarations with different data types
const userName = "Kiserian Amos"; // String
let userAge = 25; // Number
const isStudent = true; // Boolean
const skills = ["HTML", "CSS", "JavaScript", "Accessibility"]; // Array
const userProfile = { // Object
    name: userName,
    age: userAge,
    role: "Web Developer"
};

// Function to demonstrate conditionals and user input
function checkMembershipStatus() {
    // Simulating user input (in real scenario, this would come from a form)
    const membershipLevel = "premium";
    const accountBalance = 150;
    let statusMessage;
    
    // Conditional logic with if/else if/else
    if (membershipLevel === "premium" && accountBalance > 100) {
        statusMessage = "🌟 Premium member with sufficient balance!";
    } else if (membershipLevel === "basic" && accountBalance > 50) {
        statusMessage = "✅ Basic member with sufficient balance";
    } else {
        statusMessage = "⚠️ Please upgrade your membership or add funds";
    }
    
    console.log("Membership Status:", statusMessage);
    return statusMessage;
}

// Function with switch statement
function getDayActivity(day) {
    let activity;
    
    switch(day.toLowerCase()) {
        case "monday":
            activity = "📚 Study HTML5 semantics";
            break;
        case "tuesday":
            activity = "🎨 Practice CSS Grid and Flexbox";
            break;
        case "wednesday":
            activity = "⚡ Learn JavaScript fundamentals";
            break;
        case "thursday":
            activity = "🔍 Work on accessibility features";
            break;
        case "friday":
            activity = "🚀 Build responsive projects";
            break;
        default:
            activity = "💻 Code something amazing!";
    }
    
    console.log(`On ${day}: ${activity}`);
    return activity;
}

// ===== PART 2: JAVASCRIPT FUNCTIONS =====
// Reusable blocks of logic

// Function 1: Calculate reading time for content
function calculateReadingTime(text, wordsPerMinute = 200) {
    if (!text || typeof text !== 'string') {
        return 0;
    }
    
    const wordCount = text.split(/\s+/).length;
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
    
    console.log(`Reading time calculated: ${readingTimeMinutes} min`);
    return readingTimeMinutes;
}

// Function 2: Format text with proper capitalization
function formatText(inputText, formatType = 'title') {
    if (!inputText) return '';
    
    switch(formatType) {
        case 'title':
            // Capitalize first letter of each word
            return inputText.toLowerCase()
                          .split(' ')
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(' ');
        case 'sentence':
            // Capitalize first letter of sentence
            return inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
        case 'uppercase':
            return inputText.toUpperCase();
        default:
            return inputText;
    }
}

// Function 3: Toggle theme (will be used in DOM manipulation)
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    console.log(`Theme changed to: ${newTheme}`);
    return newTheme;
}

// ===== PART 3: JAVASCRIPT LOOPS =====
// Handling repetitive tasks

// Loop 1: for loop - Process array of skills
function displaySkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    
    // Clear existing content
    skillsContainer.innerHTML = '';
    
    // Using for loop to iterate through skills array
    for (let i = 0; i < skills.length; i++) {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <span class="skill-number">${i + 1}</span>
            <span class="skill-name">${skills[i]}</span>
        `;
        skillsContainer.appendChild(skillElement);
    }
    
    console.log('Skills displayed using for loop');
}

// Loop 2: forEach - Add interactivity to navigation items
function setupNavigationHighlights() {
    const navLinks = document.querySelectorAll('nav a');
    
    // Using forEach to iterate through NodeList
    navLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            console.log(`Hovering over nav item ${index + 1}: ${this.textContent}`);
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    console.log('Navigation highlights setup using forEach');
}

// Loop 3: while loop - Create countdown timer
function startCountdown(seconds) {
    let countdown = seconds;
    const countdownElement = document.getElementById('countdown');
    
    if (!countdownElement) return;
    
    // Using while loop for countdown
    const countdownInterval = setInterval(() => {
        if (countdown > 0) {
            countdownElement.textContent = `Countdown: ${countdown}s`;
            countdown--;
        } else {
            countdownElement.textContent = '🎉 Time\'s up!';
            clearInterval(countdownInterval);
        }
    }, 1000);
    
    console.log(`Countdown started for ${seconds} seconds using while loop simulation`);
}

// ===== PART 4: DOM MANIPULATION =====
// Making the page interactive

// DOM Interaction 1: Update page content dynamically
function updateWelcomeMessage() {
    const welcomeElement = document.createElement('div');
    welcomeElement.id = 'dynamic-welcome';
    welcomeElement.className = 'welcome-message';
    welcomeElement.innerHTML = `
        <h3>Welcome, ${userName}!</h3>
        <p>Your journey in web development is looking great!</p>
        <button id="theme-toggle">Toggle Dark Mode</button>
        <div id="countdown" class="countdown-display"></div>
    `;
    
    // Insert welcome message at the beginning of main content
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.insertBefore(welcomeElement, mainContent.firstChild);
    }
    
    console.log('Welcome message added to DOM');
}

// DOM Interaction 2: Add interactive elements to articles
function enhanceArticles() {
    const articles = document.querySelectorAll('article');
    
    articles.forEach((article, index) => {
        // Add read time information
        const articleText = article.textContent;
        const readTime = calculateReadingTime(articleText);
        
        const readTimeBadge = document.createElement('div');
        readTimeBadge.className = 'read-time';
        readTimeBadge.innerHTML = `⏱️ ${readTime} min read`;
        readTimeBadge.style.cssText = `
            background: #3498db;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.8rem;
            display: inline-block;
            margin-bottom: 1rem;
        `;
        
        article.insertBefore(readTimeBadge, article.firstChild);
        
        // Add expand/collapse functionality to code blocks
        const codeBlocks = article.querySelectorAll('pre');
        codeBlocks.forEach((codeBlock, codeIndex) => {
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Toggle Code';
            toggleButton.className = 'code-toggle';
            toggleButton.style.cssText = `
                background: #2c3e50;
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 4px;
                cursor: pointer;
                margin: 0.5rem 0;
                font-size: 0.8rem;
            `;
            
            toggleButton.addEventListener('click', function() {
                codeBlock.style.display = codeBlock.style.display === 'none' ? 'block' : 'none';
                this.textContent = codeBlock.style.display === 'none' ? 'Show Code' : 'Hide Code';
            });
            
            codeBlock.parentNode.insertBefore(toggleButton, codeBlock);
        });
    });
    
    console.log('Articles enhanced with DOM manipulations');
}

// DOM Interaction 3: Create dynamic resource list
function createResourceList() {
    const resources = [
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', category: 'Documentation' },
        { name: 'W3C Accessibility', url: 'https://www.w3.org/WAI/', category: 'Accessibility' },
        { name: 'CSS Tricks', url: 'https://css-tricks.com', category: 'Tutorials' },
        { name: 'JavaScript Info', url: 'https://javascript.info', category: 'Learning' }
    ];
    
    const resourceSection = document.createElement('section');
    resourceSection.className = 'dynamic-resources';
    resourceSection.innerHTML = '<h2>📚 Helpful Resources</h2>';
    
    const resourceList = document.createElement('div');
    resourceList.className = 'resource-grid';
    
    // Create resource cards
    resources.forEach(resource => {
        const resourceCard = document.createElement('div');
        resourceCard.className = 'resource-card';
        resourceCard.innerHTML = `
            <h3>${resource.name}</h3>
            <p class="resource-category">${resource.category}</p>
            <a href="${resource.url}" target="_blank" rel="noopener">Visit Resource</a>
        `;
        resourceList.appendChild(resourceCard);
    });
    
    resourceSection.appendChild(resourceList);
    
    // Add to the main content
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.appendChild(resourceSection);
    }
    
    console.log('Dynamic resource list created');
}

// DOM Interaction 4: Add theme toggle functionality
function setupThemeToggle() {
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.setAttribute('data-theme', 'dark');
    }
    
    // Add event listener to theme toggle button
    document.addEventListener('click', function(event) {
        if (event.target.id === 'theme-toggle') {
            toggleTheme();
        }
    });
    
    console.log('Theme toggle functionality setup');
}

// ===== INITIALIZATION FUNCTION =====
// Initialize all JavaScript functionality when DOM is loaded
function init() {
    console.log('=== Initializing JavaScript Application ===');
    
    // Part 1: Basic JavaScript demonstrations
    console.log('--- Part 1: Basics ---');
    checkMembershipStatus();
    getDayActivity('Wednesday');
    
    // Part 2: Function demonstrations
    console.log('--- Part 2: Functions ---');
    const sampleText = "understanding semantic html5 elements";
    console.log('Formatted text:', formatText(sampleText, 'title'));
    
    // Part 3 & 4: DOM-related initializations
    console.log('--- Part 3 & 4: Loops & DOM ---');
    updateWelcomeMessage();
    displaySkills();
    setupNavigationHighlights();
    enhanceArticles();
    createResourceList();
    setupThemeToggle();
    startCountdown(10);
    
    console.log('=== Application Initialized Successfully ===');
}

// ===== EVENT LISTENERS =====
// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', init);

// Additional global event listener for demonstration
window.addEventListener('resize', function() {
    console.log(`Window resized: ${window.innerWidth} x ${window.innerHeight}`);
});

// ===== ERROR HANDLING =====
// Global error handler for better debugging
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Export functions for potential module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateReadingTime,
        formatText,
        toggleTheme,
        checkMembershipStatus,
        getDayActivity
    };
}