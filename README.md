[![CircleCI](https://circleci.com/gh/huxaiphaer/frontend-task.svg?style=svg)](https://circleci.com/gh/huxaiphaer/frontend-task)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3cd5df98c9259a384089/test_coverage)](https://codeclimate.com/github/huxaiphaer/frontend-task/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/3cd5df98c9259a384089/maintainability)](https://codeclimate.com/github/huxaiphaer/frontend-task/maintainability)

# NoteTakingApp.

This a web application which is capable of creating notes without being on a network.

#### Functionalities of the Application.

- Adding a note.
- Editing an existing note.
- Deleting a note.
- Displaying all the note content by clicking on anyone.

## Getting Started

This is how you can make this project run on your local machine.

### Installation

* You will need to have yarn installed, the best way to install yarn is by visiting this site. [Install Yarn](https://yarnpkg.com/lang/en/)

* Then, Clone this repository by running the command:

```
git clone https://github.com/huxaiphaer/frontend-task

```
* After successfully cloning the repo, then run this command `cd frontend-task` to enter the root directory of the project.

* Then install the project dependencies by running `yarn` & `yarn install`.

* After that, you will need to create a `.env` in your root project then and include this line  `SKIP_PREFLIGHT_CHECK=true`. This
enables your project to run tests. Otherwise you will get an error of this kind ` Command failed with exit code 1.`

#### Starting the app.

* To start the app locally run the following command:

```
yarn start

```

Then you will be routed to this link [Local link](http://localhost:8080/)

#### Testing / Running tests.

```
yarn test

```

#### Running tests with coverage.

```
yarn test -- --coverage

```

## Languages/Frameworks/Libraries & tools Used.

* Reactjs.
* ES6.
* Code Climate.
* Circle CI.
* Local Storage.

## Author.

* Lutaaya Huzaifah Idris.
