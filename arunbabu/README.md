# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### Firebase and GO-daddy
To deploy in firebase and GOdaddy.
[https://damianztone.medium.com/deploy-a-react-app-with-firebase-hosting-and-godaddy-b85c993e750b](https://damianztone.medium.com/deploy-a-react-app-with-firebase-hosting-and-godaddy-b85c993e750b)

To update database.rules.json 
Visit [https://firebase.google.com/docs/database/security](https://firebase.google.com/docs/database/security) to learn more about security rules.

### ```npm run build``` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Firebase PRivate key setup
Generate a Service Account Key:
Go to the Firebase Console and navigate to your project settings. In the "Service accounts" section, click on "Generate new private key." This will download a JSON file containing the service account key.

Set the Environment Variable:
Save the downloaded JSON key file in a secure location on your computer. Then, set the GOOGLE_APPLICATION_CREDENTIALS environment variable to point to the path of the JSON key file. You can do this in your command line:

```
SET GOOGLE_APPLICATION_CREDENTIALS=path/to/your/service-account-key.json
```
On Unix-based systems, you can use:

```
export GOOGLE_APPLICATION_CREDENTIALS=path/to/your/service-account-key.json
```
Replace path/to/your/service-account-key.json with the actual path to the JSON key file.

Deploy Using Default Authentication:
Once the environment variable is set, you can deploy without needing to provide the --token:

```
firebase deploy
```
The Firebase CLI will automatically use the service account key for authentication.

Using a service account key for authentication is more secure and aligns with best practices for managing credentials. It's a recommended approach for deploying Firebase projects.

Please note that if you've successfully initiated the deployment with the --token, the deployment should proceed as usual. However, consider transitioning to the service account key method for future deployments.
