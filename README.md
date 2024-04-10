### What is a micro-frontned
Micro-frontend architecture is a design approach in which an application is split into features – micro frontends – and delivered independently

### Micro frontend benifits
- Multiple teams with different responsibilities
- Faster deployment and better release management
- Technology freedom
- Easy scaling
- Continuous deployment : enable incremental updates without affecting the entire application

### When to use micro frontend
- Your project size is medium to large
- Productivity is your priority : teams working on different features simultaneously

### Core idea of micro frontend
- Segmented parts : each feature lives within a separate micro frontend
- Loosely coupled app – all components can be independently built, deployed, scaled and even failed independently
- Shell – glues micro frontends together into something cohesive on a single page
- Autonomous teams – no need to coordinate releases with other development teams

### micro frontend integration approaches
- WebComponents
    - building each micro frontend as an isolated component that can be deployed independently as a .js file
- Module Federation
    - Allows loading micro frontends at runtime into a shell application without any build time dependency

### example 
netflix
- adopted the micro frontend approach to encourage rapid development. This enables Netflix to release new features and updates quickly, without impacting the rest of the website.
- a home page, search functionality, user profile settings, etc. can be cached independently and only updated when necessary, reducing the overall load time for the user.
- ![Screenshot 2024-04-10 at 9 38 59 PM](https://github.com/rhythm55/react-micro-frontend/assets/36883992/b4b43c6c-474e-4343-b2ae-b495352a6293)

### implementation using module fedration

- Create applications with command : `npx create-mf-app` i.e creates a Module Federation application
- create applications for shell and other micro apps
- for micro apps
    - develop components as we do . here ex: we are having component for header and footer
    - ![Screenshot 2024-04-10 at 9 53 57 PM](https://github.com/rhythm55/react-micro-frontend/assets/36883992/b4b4d016-0233-442f-9c85-70a29dbaa09c)
    - ![Screenshot 2024-04-10 at 9 54 22 PM](https://github.com/rhythm55/react-micro-frontend/assets/36883992/5777a6b8-1720-4659-a640-232ec582f6dc)

    - Now in `webpack.config.js` > `plugins` > `exposes`
      ```
        exposes: {
          "./Header": "./src/Header.js",
          "./Footer": "./src/Footer.js",
        },
      ```
    - Once components are exposed re run your application and on hoisted url hit -  `http://localhost:3000/remoteEntry.js`
        - `remoteEntry.js` is a file generated by Webpack's Module Federation feature
        - It exposes the modules that can be shared with other applications.
        - When a micro frontend application is loaded, it fetches the remoteEntry.js file from the remote host

- for shell application
    - develop the application according to requrements
    - in `webpack.config.js` > `plugins` > `remotes` add the urls of your micro apps
    - ```
        remotes: {
          home: "home@http://localhost:3000/remoteEntry.js",
          contact: "contact@http://localhost:9000/remoteEntry.js",
        }
      ```
    - import it wherever you want to use
    - ```
        import Header from "home/Header";
        import Footer from "home/Footer";
      ```
    - to lazily import microfrontend
    - ```
        const Contact = lazy(() => import("contact/Contact"));
         {
            path: "/contact",
            element: (
              <Suspense fallback={<div>loading</div>}>
                <Contact />
              </Suspense>
            ),
          },
      ```
      ![Screenshot 2024-04-10 at 10 08 27 PM](https://github.com/rhythm55/react-micro-frontend/assets/36883992/be96fb1c-c472-4098-936c-61ecee9800c7)
      ![Screenshot 2024-04-10 at 10 09 08 PM](https://github.com/rhythm55/react-micro-frontend/assets/36883992/52ba6e85-955e-4f23-b20f-f3d2a6be2b66)

### Micro frontend communication

1. custom events
Each micro frontend can listen for specific custom events and dispatch events to communicate. ex: 
```
  window.dispatchEvent(new CustomEvent('myCustomEvent', { detail: 'Hello from MicroFrontend1' }));
  window.addEventListener('myCustomEvent', handleCustomEvent);
```
2. Shared State Management: Use a shared state management library like Redux
3. Parent-Child Communication: parent component can pass props down to child micro frontends or use context to provide shared data and functions.
4. Custom API: Define a custom API for communication between micro frontends.