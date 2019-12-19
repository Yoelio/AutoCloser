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
    "Best wishes,"
];

var impersonal = [
    "Fond regards,",
    "Looking forward to hearing from you,",
    "Sincerely yours,",
    "Thank you,",
    "With appreciation,",
    "With gratitude,",
    "Yours sincerely,"
];

var previousCloser;

chrome.runtime.onMessage.addListener((message, _) => {
    if (document.readyState === "complete") {
        var body = document.querySelector('div[aria-label="Message Body"]');
        var closer;
        console.log(message);
        switch(message.type) {
            case "professional": 
                closer = "<br><br>" + professional[parseInt(Math.random() * professional.length)];
                break;
            case "impersonal":
                closer = "<br><br>" + impersonal[parseInt(Math.random() * impersonal.length)];
                break;
        }

        if (body.innerHTML) {
            if (previousCloser) {
                body.innerHTML = body.innerHTML.replace(previousCloser, closer);
            } else {
                body.innerHTML += closer;
            }
        } else {
            body.innerHTML = closer;
        }
        previousCloser = closer;
    }
});