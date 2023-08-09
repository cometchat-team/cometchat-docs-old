---
title: Setup
slug: setup
---

### Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then:

1. Create a new app
2. Head over to the **API Keys** section and note the **Auth Key**, **App ID** & **Region**

### Add the CometChat Dependency

### Gradle

First, add the repository URL to the **project level**`build.gradle` file in the `repositories` block under the `allprojects` section:

Then, add CometChat to the **app level**`build.gradle` file in the `dependencies` section.

Finally, add the below lines `android` section of the **app level** gradle file.

## Initialize CometChat

The `init()` method initializes the settings required for CometChat.

The `init()` method takes the below parameters:

1. `context` - Application Context of the Android app.
2. `appId` - You CometChat App ID
3. `appSettings` - An object of the `AppSettings` class can be created using the `AppSettingsBuilder` class.

The `AppSettings` class allows you to configure two settings:

1. Region - The region where the app was created
2. [Presence Subscription](/android-chat-sdk/user-presence)

We suggest you call the `init()` method on app startup.

| Parameter    | Description                          |
| ------------ | ------------------------------------ |
| `this`       | Android context for your application |
| `appID`      | CometChat App ID                     |
| `appSetting` | An object of the AppSettings class.  |
