This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

 whenever I try to install packages using npm install, I receive error messages along these lines:

Unhandled rejection Error: EACCES: permission denied, open 
'/Users/marknorgate/.npm/_cacache/tmp/a449402d'

solution : Give ownership to npm like this:

                sudo chown -R $USER:$GROUP ~/.npm
                sudo chown -R $USER:$GROUP ~/.config








### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

