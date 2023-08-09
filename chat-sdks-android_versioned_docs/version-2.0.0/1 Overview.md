---
title: Overview
slug: /
---

This guide demonstrates how to add chat to an Android application. Before you begin, we strongly recommend you read the guide.

### Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then:

1. Create a new app
2. Head over to the **API Keys** section and note the **Auth Key**, **App ID** & **Region**

$plugin[{
    "type": "callout",
    "data": {
        "text": "- Android API Level 21 \n- Androidx Compatibility",
        "type": "info",
        "title": "Minimum Requirements"
    }
}]$

### Add the CometChat Dependency

First, add the repository URL to the **project level**`build.gradle` file in the `repositories` block under the `allprojects` section.

<!-- $plugin[{
    "type": "code-block",
    "data": {
        "languageBlocks": [
            {
                "code": "allprojects {\n  repositories {\n\t\tmaven {\n            url \"https:\/\/dl.cloudsmith.io\/public\/cometchat\/cometchat-pro-android\/maven\/\"\n    }\n  }\n}",
                "name": "build.gradle (project level)",
                "language": "none"
            }
        ]
    }
}]$ -->

Then, add CometChat to the **app level**`build.gradle` file in the `dependencies` section.

<!-- $plugin[{
    "type": "code-block",
    "data": {
        "languageBlocks": [
            {
                "code": "dependencies {\n  implementation 'com.cometchat:pro-android-chat-sdk:2.4.2'\n  implementation 'com.cometchat:pro-android-calls-sdk:2.1.1'\n}",
                "name": "build.gradle (app level)",
                "language": "none"
            }
        ]
    }
}]$

$plugin[{
    "type": "callout",
    "data": {
        "text": "v2.4+ onwards, Voice & Video Calling functionality has been moved to a separate library. In case you plan to use the calling feature, please add the Calling dependency `implementation 'com.cometchat:pro-android-calls-sdk:2.1.1'` in the dependencies section of the app-level `build.gradle` file.",
        "type": "info",
        "title": "Important"
    }
}]$ -->

Finally, add the below lines `android` section of the **app level** gradle file

<!-- $plugin[{
    "type": "code-block",
    "data": {
        "languageBlocks": [
            {
                "code": "android {\n  compileOptions {\n    sourceCompatibility JavaVersion.VERSION_1_8\n    targetCompatibility JavaVersion.VERSION_1_8\n  }\n}",
                "name": "build.gradle(app level)",
                "language": "none"
            }
        ]
    }
}]$ -->

### Initialize CometChat

The `init()` method initialises the settings required for CometChat. We suggest calling the `init()` method on app startup .

<!-- $plugin[{
    "type": "code-block",
    "data": {
        "languageBlocks": [
            {
                "code": "String appID = \"APP_ID\"; \/\/ Replace with your App ID\nString region = \"REGION\"; \/\/ Replace with your App Region (\"eu\" or \"us\")\n\nAppSettings appSettings=new AppSettings.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();\n\nCometChat.init(this, appID,appSettings, new CometChat.CallbackListener<String>() {\n  @Override\n  public void onSuccess(String successMessage) {\n    Log.d(TAG, \"Initialization completed successfully\");\n  }\n  @Override\n  public void onError(CometChatException e) {\n    Log.d(TAG, \"Initialization failed with exception: \" + e.getMessage());\n  }\n});",
                "language": "java"
            },
            {
                "code": "val appID:String=\"APP_ID\" \/\/ Replace with your App ID\nval region:String=\"REGION\" \/\/ Replace with your App Region (\"eu\" or \"us\")\n\nval appSettings = AppSettings.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build()  \n\nCometChat.init(this,appID,appSettings, object : CometChat.CallbackListener<String>() {\n override fun onSuccess(p0: String?) {\n    Log.d(TAG, \"Initialization completed successfully\")\n  }\n\n  override fun onError(p0: CometChatException?) {\n    Log.d(TAG, \"Initialization failed with exception: \" + p0?.message)\n  }\n  \n })",
                "language": "kotlin"
            }
        ]
    }
}]$ -->

Make sure you replace the `APP_ID` with your CometChat **App ID** and `region` with your **App Region** in the above code.

### Register and Login your User

Once initialisation is successful, you will need to create a user.

To create users on the fly, you can use the `createUser()` method. This method takes an `User` object and the `Auth Key` as input parameters and returns the created `User` object if the request is successful.

<!-- $plugin[{
    "type": "code-block",
    "data": {
        "languageBlocks": [
            {
                "code": "String authKey = \"AUTH_KEY\"; \/\/ Replace with your App Auth Key\nUser user = new User();\nuser.setUid(\"user1\"); \/\/ Replace with the UID for the user to be created\nuser.setName(\"Kevin\"); \/\/ Replace with the name of the user\n\nCometChat.createUser(user, authKey, new CometChat.CallbackListener<User>() {\n  @Override\n    public void onSuccess(User user) {\n    Log.d(\"createUser\", user.toString());\n  }\n\n  @Override\n    public void onError(CometChatException e) {\n    Log.e(\"createUser\", e.getMessage());\n  }\n});",
                "language": "java"
            },
            {
                "code": "val authKey = \"AUTH_KEY\" \/\/ Replace with your App Auth Key\nval user = User()\nuser.uid = \"user1\" \/\/ Replace with the UID for the user to be created\nuser.name = \"Kevin\" \/\/ Replace with the name of the user\n\nCometChat.createUser(user, authKey, object : CometChat.CallbackListener<User>() {\n  override fun onSuccess(user: User) {\n    Log.d(\"createUser\", user.toString()\n  }\n\n  override fun onError(e: CometChatException) {\n    Log.e(\"createUser\", e.message)\n  }\n})",
                "language": "kotlin"
            }
        ]
    }
}]$ -->

Make sure that `UID` and `name` are specified as these are mandatory fields to create a user.

Once you have created the user successfully, you will need to log the user into CometChat using the `login()` method.

We recommend you call the CometChat `login()` method once your user logs into your app. The `login()` method needs to be called only once.

<!-- $plugin[{
    "type": "code-block",
    "data": {
        "languageBlocks": [
            {
                "code": "String UID = \"user1\"; \/\/ Replace with the UID of the user to login\nString authKey = \"AUTH_KEY\"; \/\/ Replace with your App Auth Key\n\n if (CometChat.getLoggedInUser() == null) {\n     CometChat.login(UID, authKey, new CometChat.CallbackListener<User>() {\n\n      @Override\n      public void onSuccess(User user) {\n        Log.d(TAG, \"Login Successful : \" + user.toString());\n  }\n\n   @Override\n    public void onError(CometChatException e) {\n        Log.d(TAG, \"Login failed with exception: \" + e.getMessage());\n   }\n });\n } else {\n   \/\/ User already logged in\n }",
                "language": "java"
            },
            {
                "code": "val UID:String=\"user1\" \/\/ Replace with the UID of the user to login\n val authKey:String=\"AUTH_KEY\" \/\/ Replace with your App Auth Key\n\nif (CometChat.getLoggedInUser() == null) {   \nCometChat.login(UID,authKey, object : CometChat.CallbackListener<User>() {\n     override fun onSuccess(p0: User?) {\n         Log.d(TAG, \"Login Successful : \" + p0?.toString())        \n      }\n\n     override fun onError(p0: CometChatException?) {\n         Log.d(TAG, \"Login failed with exception: \" +  p0?.message)        \n      }\n\n   })\n}else{\n   \/\/ User already logged in\n }",
                "language": "kotlin"
            }
        ]
    }
}]$ -->

Make sure you replace the `AUTH_KEY` with your App **Auth Key** in the above code.

The `login()` method returns the `User` object containing all the information of the logged-in user.

<!-- $plugin[{
    "type": "callout",
    "data": {
        "text": "UID can be alphanumeric with underscore and hyphen. Spaces, punctuation and other special characters are not allowed.",
        "type": "warning",
        "title": "Warning"
    }
}]$ -->

### Integrate our UI Kits

- Please refer [auto$](/java-chat-ui-kit/overview) section to integrate Android Java UI Kit inside your app.
- Please refer [Android Kotlin UI Kit](/kotlin-chat-ui-kit/overview) section to integrate Android Kotlin UI Kit inside your app.
