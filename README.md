react Samples
======

## Table of Contents

  - [Introduction](#introduction)
  - [Using the built-in Express server](#using-the-built-in-express-server)
  - [Using a different back end](#using-a-different-back-end)
  - [Support](#support)
  - [License](#license)

## Introduction

This repository contains the react front-end code that can be used by our full end-to-end samples.

If you're only interested in the front-end code, you can run this as a standalone demo by using the built-in Express back end. To see the full end-to-end scenarios with a different back end and for more documentation around the scenarios, you should pair this front end with our full end-to-end samples. These samples also provide more documentation around the scenarios.

## Using the built-in Express server

For more information about the scenarios implemented in this sample, check out the [Express sample documentation](https://github.com/okta/samples-nodejs-express-4#express-and-angular-1-sample).

To run this sample:

1. Clone this repository and navigate to the new directory.

    ```bash
    $ git clone git@github.com:okta/samples-js-react.git && cd samples-js-react
    ```

2. Install the required dependencies.

    ```bash
    [samples-js-react]$ npm install
    ```

3. Run the mock Okta server. If you're interested in testing this sample against your own Okta org, follow the steps in the [Express Quick Start](https://github.com/okta/samples-nodejs-express-4#quick-start).

    ```bash
    # Starts the mock-okta server at http://127.0.0.1:7777
    [samples-js-react]$ npm run mock-okta
    ```

4. In a different terminal window, run the Express server.

    ```bash
    # Starts the sample back end on http://localhost:8080
    [samples-js-react]$ npm start
    ```

5. You're all set! Open a browser window to [http://localhost:8080](http://localhost:8080).

## Using a different back end

To run the full sample integrated with a different back-end web framework or language:

1. Clone one of our end-to-end samples:

    - [Express 4 (NodeJs)](https://github.com/okta/samples-nodejs-express-4)
    - [Django (Python)](https://github.com/okta/samples-python-django)
    - [Flask (Python)](https://github.com/okta/samples-python-flask)
    - [Spring MVC (Java)](https://github.com/okta/samples-java-spring-mvc)
    - [Dropwizard (Java)](https://github.com/okta/samples-java-dropwizard)
    - [ASP.NET MVC (.NET Core)](https://github.com/okta/samples-dotnetcore-aspnetmvc)
    - [Scotty (Haskell)](https://github.com/okta/samples-haskell-scotty)
    - [Slim 3 (PHP)](https://github.com/okta/samples-php-slim-3)
    - [Symfony (PHP)](https://github.com/okta/samples-php-symfony)


2. Follow the end-to-end sample setup instructions.

3. Install this front end in the cloned directory.

    ```bash
    # Install the front-end. For example, if using Django:
    [samples-python-django]$ npm install @okta/samples-js-react --save
    ```

4. Follow the end-to-end instructions to run the web server. You should be up and running with react!

## Support

Have a question or see a bug? Email developers@okta.com. For feature requests, feel free to open an issue on this repo. If you find a security vulnerability, please follow our [Vulnerability Reporting Process](https://www.okta.com/vulnerability-reporting-policy/).

## License

Copyright 2017 Okta, Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
