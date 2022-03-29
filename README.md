# Civi Exercise

This is my project for [Civi Exercise](https://github.com/diogo-correia-tec/civi-frontend-mobile-exercise)

# backend

The backend is really simple since it's not the focus of the exercise, it is made using NodeJS + Express to keep it simple. It is using `body-parser` to parse JSON responses. It's using `Jest` for tests and `ESLint` to check static code.

The messages array are being created when the first client calls `/messages`, the array is keeped in memory only for simplicity.

### Ideas for improvements

- Connect a database (SQL or NoSQL) to save messages
- Insert an authentication middleware for more secure requests
- Possibility to filter API passing Query Parameters
- Integration with Github CI to automatic tests/deploy

## app

The app is made using React Native + TypeScript.

### Details about the folder structure

- `Assets`: used for storing all assets used in the app (logo, icons, etc)
- `Components`: collection of components used through the app to enforce reusability
- `Context`: configuration for the Store of the app using Context API, this is created similir to a Redux Store
- `Navigators`: configuration used by `React Navigation` library to setup the navigation of the app
- `Screens`: all main screens of the app
- `Services`: setup the api using `axios`
- `Theme`: files for global sizes/colors/etc to be used throughtout the app
- `Types`: types created in TypeScript to be used in the app
- `Utils`: utils files for common functions used in the app
- `i18n`: configuration using `react-i18next` to concentrate all the strings of the app in one place and possible for future translations

### Libraries

- [react-navigation](https://reactnavigation.org/): Navigation library used for navigating between screens
- [axios](https://github.com/axios/axios): HTTP client to make HTTP requests
- [react-i18next](https://react.i18next.com/): React internalization library
- [moment](https://momentjs.com/): Date handling library to format dates
- [use-reducer-async](https://github.com/dai-shi/use-reducer-async): Tiny library to create a hook useReducerAsync to make async actions, it's similar to the useReducer hook from React

### Screens

`StartupScreen` that currently is only showing a welcome message and after 1 second goes to the `HomeScreen` of the app but can be used to check for authentications or initial configuration of the app.

<img width="306" alt="Screen Shot 2022-03-29 at 00 24 07" src="https://user-images.githubusercontent.com/2154092/160527298-aa6f434f-fc1b-4566-ac8f-ef559e44fa8a.png">

`HomeScreen` that shows all the messages available to the user making a GET request from the backend. The user can refresh the list using pull to refresh.

<img width="312" alt="Screen Shot 2022-03-29 at 00 25 01" src="https://user-images.githubusercontent.com/2154092/160527316-9bbbd10d-7a2e-4805-94aa-e981821f34f2.png">

`DetailScreen` that is opened when the user clicks on a message in the previous screen, this screen shows the details of the message and marks the message as read.

<img width="310" alt="Screen Shot 2022-03-29 at 00 25 11" src="https://user-images.githubusercontent.com/2154092/160527331-286422c8-df11-4500-b810-07d030319d29.png">

Error state of the `HomeScreen` when the request fails and let the user try again if necessary.

<img width="308" alt="Screen Shot 2022-03-29 at 00 28 40" src="https://user-images.githubusercontent.com/2154092/160527406-6735b979-1c80-4d8a-8e1d-c1352de41e9a.png">
