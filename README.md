# any npm package can steal your environment variables

yes, this is a project that tell you some truth about the safety of your environment

> any npm package can steal your environment variables

## How to use it

    npm install steal-your-env --save-dev

and then import in your project:

    import 'steal-your-env';

or

    require('steal-your-env');

if your project is a nodejs project, you can import at any file in your main code.

if your project is a browser project, you can import it at your build script,like webpack.config.js or gulpfile.js or vue.config.js or any other build environment files.

## what does it do?

steal-your-env will print all your environment variables to your console.

include your process.env and all .env files in your project's parnt directory.

it will find your project's parent directory, and then find all .env files in it, and then print all variables in them to your console.

it will not storage or upload anything to any server.

it's just a joke.

wish you be aware of the safety of your environment.
