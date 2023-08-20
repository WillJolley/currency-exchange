# Currency Exchanger

#### Converts from USD to a currency of choice. 

#### By Will Jolley

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Node.js_
* _webpack_
* _NPM_
* _Babel_
* _ESLint_
* _Jest_ 
* _JSON_
* _DotEnv_

## Description

Currency Exchanger allows users to compare the USD to other currencies. They are invited to input an amount of USD and any currency with an ISO code of their choosing, and they are returned the conversion.  

## Setup/Installation Requirements

* Have VS Code installed
* Clone this repository to your desktop.
* Open the repository in VS Code.
* Navigate to the .gitignore file and enter .env on a new line.
* Navigate to the root directory and run the following commands in your terminal:
  * To create a .env file to store your API key: touch .env
  * To install dotenv plugin: npm install dotenv-webpack@2.0.0 --save-dev
* Navigate to webpack.config.js 
  * Add the following on line 5: const Dotenv = require('dotenv-webpack');
  * Add the following to the plugins array: new Dotenv();
    * Make sure to add a comma at the end of the previous plugin.
* Generate an API key by creating an account at https://www.exchangerate-api.com/
* Insert your API key in the .env file using the following syntax: API_Key=(Your Key Here) - without the parentheses. 
* From the root directory, run the following commands in your terminal:
  * to install dependencies: npm install
  * to run the application: npm run build
  * to open the application in a browser window: npm start

## Known Bugs

N/A

## License

e-mail me at yeswilljolley@gmail.com with any issues, questions, ideas, concerns.

MIT

Copyright (c) 2023 Will Jolley