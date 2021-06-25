# ProjectTemplate
A Template to Bootstrap a Project. React. Redux. TypeScript.

It uses functional components with hooks because they are so damn sexy.

It uses Redux mostly for the middleware layer, which is a great way to capture a user's flow through the application (analytics).

It uses a single point for fetching (axios, which is more widely supported) all API data. This incorporates a fetch-retry system as failed network calls have been shown to be the weakest apsect of a web application

It structures components in a component folder and scenes in a scenes folder. React-router is used for adjusting between sceens. All store related stuff (actions, reducers) are in the store folder organized by feature. All global hooks live in the hooks folder. 

It user Plop to quickly generate a new component/scene with the correct scaffolding. 

It uses Emotion for CSS-in-JS

It uses Typescript, because every major JS application should be using TypeScript these days.

It measures TTI (Time To Interactive), which is the most important metric to measure in any modern web application.

It includes unit tests (testing-library and jest)

It uses Prettier, because opinionated code formatting settles arguments.
