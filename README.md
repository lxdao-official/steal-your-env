# Any npm package can steal your environment variables

This is a project that tells you the truth about the safety of your environment.

> any npm package can steal your environment variables

if you want to know who is reading your environment variables and scan your .env files, you can use this package:

https://github.com/lxdao-official/who-read-env

## How to use it

    npm install steal-your-env --save-dev

And then import into your project:

    import 'steal-your-env';

or

    require('steal-your-env');

If your project is a Nodejs project, you can import it in any file in your main code.

if your project is a browser project, you can import it into your build script, like webpack.config.js or gulpfile.js or vue.config.js or any other build environment files.

## What does it do?

steal-your-env will print all your environment variables to your console.

Include your process.env and all .env files in your project's parent directory.

It will find your project's parent directory, and then find all .env files in it, and then print all variables in them to your console.

It will not store or upload anything to any server.

It's just a joke.

Wish you were aware of your environment's safety.

## The Console Preview

![image](https://user-images.githubusercontent.com/897401/175222212-1b526a89-58e9-4df9-82af-fbb2a04736ea.png)


