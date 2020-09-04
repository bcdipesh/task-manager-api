# Task Manager REST API

This api serves as a backend server for [task-manager-frontend](https://github.com/bc-dipesh/task-manager-frontend) application.

---

## Requirements

For development, you will only need Node.js and npm.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.18.2

    $ npm --version
    6.14.5

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

---

## Install

    $ git clone https://github.com/bc-dipesh/task-manager-api
    $ cd task-manager-api
    $ npm install

## Configure app

Open `config` folder and add a file named `config.env` then edit it with your settings. You will need:

- MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
- PORT=3000 (Remember to put 3000 here so that it works with the task-manager-frontend app)

## Running the project

    - For Development
    $ npm run dev
    - For Production
    $ npm run start
