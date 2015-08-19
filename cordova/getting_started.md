## TL;DR for getting started with Cordova ##

Before starting the setup procedure, make sure that the latest versions of XCode and Android Studio are installed on the system. And then it's simple:

```bash
sudo npm install -g cordova
```

Then initialise a new project (Cordova creates a new folder "hello" and sets itself up inside of it).

```bash
cordova create hello com.example.hello HelloWorld
```

All of the development code goes into "hello/www/" folder. Project's homepage is assumed to be in the "hello/www/index.html" file.
Let's specify target plaforms of the project now.

```bash
cd hello
cordova platform add ios
cordova platform add android
```

Then we build the app (comprised of 2 steps: (a) perparation and (b) compilation).

```bash
cordova build
```

And finally we can run emulator (platform = android or ios):

```bash
cordova emulate [platform]
```

Alternatively we can run it directly on the connected device:

```bash
cordova run [platform]
```

Now we just need some HMTL/CSS/JS magic to make a cool app.
Happy days!