# AWS nodejs-dynamo-serverless

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/) and later modified.

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

## Run offline

### Dynamodb setup:

Requires open-jdk.

```
yarn serverless dynamodb install
yarn serverless dynamodb start
```
or

```
npx serverless dynamodb install
npx serverless dynamodb start
```

### SQS setup:

Requires an ElasticMQ queue running on your machine. In this project we used the public image from Dockerhub:

<a href="https://hub.docker.com/r/softwaremill/elasticmq">ElasticMQ instructions.</a>

### Run offline

After configuring the required dependencies described above, run:

```
yarn dev:serverless
```
or
```
npm run dev:serverless
```
