This guide demonstrates how to add chat to an Android application. Before you begin, we strongly recommend you read the [Key Concepts](https://www.cometchat.com/docs/v3/more/key-concepts) guide.

<div class="quickstart">
<div class="box">
	<div class="box_half" style="padding:20px;">
    <h4>I want to integrate with my app</h4>
    <ol style="margin-bottom:0">
      <li><a href="#section-get-your-application-keys">Get your application keys</a></li>
      <li><a href="#section-add-the-cometchat-dependency">Add the CometChat dependency</a></li>
      <li><a href="#section-initialize-cometchat">Initialize CometChat</a></li>
      <li><a href="#section-login-your-user">Log in your user</a></li>
      <li><a href="#section-add-ui-kit-library">Add UI Kit Library </a></li>
      <li><a href="#section-launch-ui-unified">Launch UI Unified</a></li>
    </ol>
  </div>
  <div class="box_half box_border">
    <h4>I want to explore a sample app (includes UI Kit)</h4>
    <p class="magic-block-textarea">Import the app into Android Studio and follow the steps mentioned in the <code>README.md</code> file.</p>
    <p><a class="button btn btn-primary" href="https://github.com/cometchat-pro/android-chat-ui-kit/archive/master.zip">Download UI Kit sample app</a></p>
    <p><a class="button btn" href="https://github.com/cometchat-pro/android-chat-ui-kit" target="_blank">View on Github</a></p>
  <p style="margin-bottom:0;text-align:center;">Or check our <a href="https://github.com/cometchat-pro-samples" target="_blank">Other sample app</a></p>
  </div>
 <div style="clear:both"></div>
</div>
</div>

## Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then:

1. Create a new app
2. Head over to the **API Keys** section and note the **API Key** and **App ID** (for **Auth Only** key)

> Android API Level 21 > Androidx Compatibility

## Add the CometChat Dependency

First, add the repository URL to the **project level** `build.gradle` file in the `repositories` block under the `allprojects` section.

```groovy
allprojects {
  repositories {
    maven {
      url "https:__dl.bintray.com_cometchat_pro"
    }
  }
}
```



Then, add CometChat to the **app level** `build.gradle` file in the `dependencies` section.

```groovy
dependencies {
  implementation 'com.cometchat:pro-android-chat-sdk:2.0.1'
}
```



Finally, add the below lines `android` section of the **app level** gradle file

```groovy
android {
  compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
  }
}
```



## Initialize CometChat

The `init()` method initializes the settings required for CometChat. We suggest calling the `init()` method on app startup, preferably in the `onCreate()` method of the `Application` class.

```java
private String appID = "APP_ID";
private String region = "REGION";

AppSettings appSettings=new AppSettings.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();

CometChat.init(this, appID,appSettings, new CometChat.CallbackListener<String>() {
  @Override
  public void onSuccess(String successMessage) {
    Log.d(TAG, "Initialization completed successfully");
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Initialization failed with exception: " + e.getMessage());
  }
});
```

```kotlin
val appID:String="APP_ID"
val region:String="REGION"

AppSettings appSetting = AppSettings.AppSettingsBuilder().setRegion(region).subscribePresenceForAllUsers().build();   

CometChat.init(this,appID,appSetting, object : CometChat.CallbackListener<String>() {
  override fun onSuccess(p0: String?) {
    Log.d(TAG, "Initialization completed successfully")
  }

  override fun onError(p0: CometChatException?) {
    Log.d(TAG, "Initialization failed with exception: " + p0?.message)
  }
})
```



Make sure you replace the `APP_ID`  with your CometChat **App ID** and `REGION` with your app region in the above code.

## Log in your User

Once initialization is successful, you will need to log the user into CometChat using the `login()` method.

We recommend you call the CometChat `login()` method once your user logs into your app. The `login()` method needs to be called only once.

```java
private String UID = "SUPERHERO1";
private String apiKey = "API_KEY";

CometChat.login(UID, apiKey, new CometChat.CallbackListener<User>() {
  @Override
  public void onSuccess(User user) {
    Log.d(TAG, "Login Successful : " + user.toString());
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Login failed with exception: " + e.getMessage());
  }
});
```

```kotlin
val UID:String="SUPERHERO1"
val apiKey:String="API_KEY"

CometChat.login(UID,apiKey, object : CometChat.CallbackListener<User>() {
  override fun onSuccess(p0: User?) {
    Log.d(TAG, "Login Successful : " + p0?.toString())        
  }

  override fun onError(p0: CometChatException?) {
    Log.d(TAG, "Login failed with exception: " +  p0?.message)        
  }
})
```



Make sure you replace the `API_KEY`  with your CometChat **API Key** in the above code.

> We have setup 5 users for testing having UIDs:  `SUPERHERO1`, `SUPERHERO2`, `SUPERHERO3`, `SUPERHERO4` and `SUPERHERO5`.

The `login()` method returns the `User` object containing all the information of the logged-in user.

## Add UI Kit Library

Integrate  UI Kit inside your app. Kindly follow the steps below:

1. Simply clone the UI Kit Library from the [android-chat-ui-kit repository](https://github.com/cometchat-pro/android-chat-ui-kit/archive/master.zip).
2. Import `uikit` Module from Module Settings.
3. If the Library is added successfully, it will look like mentioned in the image below.

![](https://res.cloudinary.com/developerhub/image/upload/v1623199340/v2_5163/qiwcbunyjqvthkimgoma.png)

## Launch UI Unified

**UI Unified**  is a way to launch a fully working chat application using the UI Kit. UI Unified all UI Screens and UI Components working together to give the full experience of a chat application with minimal coding effort.

![](https://res.cloudinary.com/developerhub/image/upload/v1623199340/v2_5163/qiwcbunyjqvthkimgoma.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199342/v2_5163/k4l2sqzj0mgff6dfuvkl.png)

You can launch `UI Unified` after a successful login using CometChat.To use Unified UI one has to launch `CometChatUnified`  Activity.

```java
startActivity(new Intent(YourActivity.this,CometChatUnified.class));
```

```kotlin
startActivity(Intent(this@YourActivity, CometChatUnified::class.java))
```



You can also use individual [UI Screens](https://www.cometchat.com/docs/v3/java-chat-ui-kit/android-ui-screens) or [UI Components](https://www.cometchat.com/docs/v3/java-chat-ui-kit/android-ui-components)  present in UI Kit.