# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Installation

To get started, follow these steps:

1. Clone this repository to your local machine: `git clone https://github.com/mghazanfar90/chime.git`

2. Navigate into the project directory: `cd chime`

3. Install the project dependencies:`yarn install`

4. Install POD for iOS inside ios directory: `pod install`


## Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Running Test Cases

To run the test cases, use the following command: `yarn test`

## Accessing the App

Once the app is running, you will be prompted to log in. Please use the following credentials:

- email: ghazanfar@chime.com
- Password: 123456
