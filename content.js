'use strict';

var professional = [
    "Best,",
    "Sincerely,",
    "Regards,",
    "Kind regards,",
    "Thank you,",
    "Warm wishes,",
    "With gratitude,",
    "Many thanks,",
    "Respectfully,",
    "All the best,",
    "Best regards",
    "Best wishes,",
]

var impersonal = [
    "Fond regards,",
    "Looking forward to hearing from you,",
    "Sincerely yours,",
    "Thank you,",
    "With appreciation,",
    "With gratitude,",
    "Yours sincerely,"
]

chrome.runtime.onMessage.addListener((message, sender) => {
    if (document.readyState === "complete") {
        var body = document.querySelector('div[aria-label="Message Body"]');
        var currentBody = body.innerHTML;
        var closer;
        console.log(message);
        switch(message.type) {
            case "professional": 
                closer = "<br/><br/>" + professional[parseInt(Math.random() * professional.length)];
                break;
            case "impersonal":
                closer = "<br/><br/>" + impersonal[parseInt(Math.random() * impersonal.length)];
                break;
        }
    
        if (currentBody) {
            body.innerHTML = currentBody + closer;
        } else {
            body.innerHTML = closer
        }
    }
});