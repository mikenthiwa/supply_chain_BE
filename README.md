<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Supply Chain Backend

This is a NestJS backend application for managing supply chain operations. The application is designed to handle the creation of orders and track the status of courier trucks.

## Features

- Create an order
- Assign a courier truck to an order
- Get the status history of a courier truck
- Update the status of a courier truck

## Prerequisites

Before running this application, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/en/download/) (version 14.x or higher)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Docker](https://docs.docker.com/engine/install/ubuntu/) (optional)

## Installation

1. Clone the repository:

```sh
git clone https://github.com/your_username/supply_chain_BE.git
```

2. Change to the project directory:

```sh
cd supply_chain_BE
```

3. Install the dependencies:

```sh
yarn install
```

## Running the Application

You can run the application using either Yarn or Docker.

### Using Yarn

To run the application in development mode, use the following command:

```sh
yarn start:dev
```

The application will start and listen on port 3000.

### Using Docker

1. Build the Docker image:

```sh
docker build -t supply-chain .
```

2. Run the Docker container:

```sh
docker run -p 3000:3000 supply-chain
```

The application will start and listen on port 3000.

## API Documentation

The API documentation is available at `http://localhost:3000/api`.

## Contributing

If you'd like to contribute to this project, please follow the standard Git workflow:

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Commit your changes
4. Open a pull request against the main branch

Please make sure to follow the code style and write tests for any new features or changes.

## License

This project is unlicensed and free to use for any purpose.