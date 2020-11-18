browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});
// The local variables, only available in this anonymous function, so that it won't affect the operation of other scripts.
var body = document.body;
var style = document.createElement('style');
style.innerHTML ='@media (prefers-color-scheme: dark) { body { background-color: #1f2327; } :root { /* --color-text- */ --color-text-primary: #d8e2ec; --color-text-secondary: #99a6b5; --color-text-tertiary: #d8e2ec; --color-text-link: #5fafff; /* --color-bg- */ --color-bg-primary: #1f2327; --color-bg-secondary: #24292e; --color-bg-tertiary: #24292e; --color-bg-overlay: #24292e; --color-bg-info: #1f2327; --color-bg-canvas: #24292e; --color-bg-canvas-inset: #1f2327; /* --color-border- */ --color-border-primary: #424346; --color-border-secondary: #424346; --color-border-tertiary: #5e5f63; --color-border-overlay: #424346; /* --color-btn- */ --color-btn-text: #d8e2ec; --color-btn-bg: #24292e; --color-btn-hover-bg: #323940; --color-btn-selected-bg: #505b67; --color-box-header-blue-bg: #1a334c; --color-box-header-blue-border: #27496b; /* --color-input- */ --color-input-bg: #24292e; --color-input-contrast-bg: #24292e; --color-input-border: #424346; /* --color-box- */ --color-box-bg-info: #24292e; --color-box-row-blue-bg: #45474a; /* --color-underlinenav- */ --color-underlinenav-text: #959DA5; --color-underlinenav-text-active: #d8e2ec; --color-underlinenav-text-hover: #d8e2ec; /* --color-tabnav- */ --color-tabnav-selected-bg: #24292e; /* --color-sidenav- */ --color-sidenav-selected-bg: #2b3138; /* --color-dropdown- */ --color-dropdown-shadow: rgb(31, 35, 39) 0px 8px 24px 0px; /* --color-branch- */ --color-branch-name-bg: #00396d; --color-branch-name-link-bg: #45474a; /* --color-auto- */ --color-auto-gray-1: #24292e; --color-auto-gray-2: #424346; --color-auto-gray-3: #424346; --color-auto-gray-8: #9fa7af; --color-auto-gray-9: #d8e2ec; --color-auto-blue-0: #24292e; --color-auto-blue-2: rgba(3, 102, 214, 0.2); /* --color-topic- */ --color-topic-tag-text: var(--color-text-link); --color-topic-tag-bg: #292e33; /* --color-timeline- */ --color-timeline-badge-bg: #24292e; /* --color-state- */ --color-state-hover-primary-bg: #0256b5; --color-state-hover-secondary-bg: #2b3138; /* --color-social- */ --color-social-count-bg: #24292e; /* --color-calendar-graph- */ --color-calendar-graph-day-bg: #24292e; /* --color-previewable- */ --color-previewable-comment-form-bg: #24292e; /* --color-verified- */ --color-verified-badge-bg: #24292e; --color-verified-badge-border: #424346; } .navigation-focus .AvatarStack-body, [aria-selected=true] .AvatarStack-body { background: transparent; } } ';
// Append to <body>
body.appendChild(style);

// If at Explore page
if (window.location.href.match('https://github.com/explore*') || window.location.href.match('https://github.com/topics*')) {
    // Select the white background and replace it
    document.querySelector(".border-bottom.border-gray-light").setAttribute("style", "");
    // Set `explorePageTopicsGradientMaskSelector` to the selector of the recommandation list
    var explorePageTopicsGradientMaskSelector = '[style="background: linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0));"]';
    // Edit its mask then
    for (
        let element = document.querySelector(explorePageTopicsGradientMaskSelector);
        document.querySelector(explorePageTopicsGradientMaskSelector);
         element = document.querySelector(explorePageTopicsGradientMaskSelector)
    ) {
        element.style.background = "linear-gradient(to top, rgb(31 35 39), rgb(31 35 39 / 0))"
    }
    // If on topic page
    if (window.location.href.match('https://github.com/topics*')) {
        document.querySelector('[style="background-color: #fcfdfd;"]').style.backgroundColor = '#1F2327';
    }
}
