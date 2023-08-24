This guide demonstrates how to add chat to an Android application. Before you begin, we strongly recommend you read the [Key Concepts](https://www.cometchat.com/docs/v3/android-chat-sdk/key-concepts) guide.

<div style="display: flex;box-shadow: 0 0 4px 0 rgb(0 0 0 / 18%);border-radius: 3px;">
  <div style="width: 75%;padding: 12px;">
    <h4>I want to integrate with my app</h4>
    <ol style="margin-bottom: 0;">
      <li><a style="color: #7c55c9; text-decoration: underline; font-size: .9em; line-height: 2em;" target="_self" href="/docs/android-chat-sdk/overview#get-your-application-keys">Get your application keys</a></li>
      <li><a style="color: #7c55c9; text-decoration: underline; font-size: .9em; line-height: 2em;" target="_self" href="/docs/android-chat-sdk/overview#add-the-cometchat-dependency">Add the CometChat dependency</a></li>
      <li><a style="color: #7c55c9; text-decoration: underline; font-size: .9em; line-height: 2em;" target="_self" href="/docs/android-chat-sdk/overview#initialize-cometchat">Initialize CometChat</a></li>
      <li><a style="color: #7c55c9; text-decoration: underline; font-size: .9em; line-height: 2em;" target="_self" href="/docs/android-chat-sdk/overview#register-and-login-your-user">Register and Login your user</a></li>
			<li><a style="color: #7c55c9; text-decoration: underline; font-size: .9em; line-height: 2em;" target="_self" href="/docs/android-chat-sdk/overview#integrate-our-ui-kits">Integrate Our UI Kits</a></li>
    </ol>
  </div>
  <div style="width: 75%;word-break: break-word;padding: 12px;border-left: 1px solid #e3e5e7;">
    <h4>I want to explore a sample app (includes UI)</h4>
    <p class="magic-block-textarea">Import the app into Android Studio and follow the steps mentioned in the <code>README.md</code> file.</p>
    <p><a class="button btn" style="background-color: #7c55c9; color: white; text-decoration: underline" href="https://github.com/cometchat-pro/android-java-chat-app/">Java Chat App</a></p>
    <p><a class="button btn" style="background-color: #7c55c9; color: white; text-decoration: underline" href="https://github.com/cometchat-pro/android-kotlin-chat-app">Kotlin Chat App</a></p>
  </div>
</div>

### Get your Application Keys

[Signup for CometChat](https://app.cometchat.com) and then:

1. Create a new app
2. Head over to the **API Keys** section and note the **Auth Key**, **App ID** & **Region**

> - Android API Level 21 > - Android API level 24 (in case you are using the calls SDKS)> - Androidx Compatibility

### Add the CometChat Dependency

First, add the repository URL to the **project level**`build.gradle` file in the `repositories` block under the `allprojects` section.

```groovy
allprojects {
  repositories {
		maven {
            url "https:__dl.cloudsmith.io_public_cometchat_cometchat-pro-android_maven_"
    }
  }
}
```



Then, add CometChat to the **app level**`build.gradle` file in the `dependencies` section.

```groovy
dependencies {
  implementation 'com.cometchat:pro-android-chat-sdk:3.0.16'
}
```



> v2.4+ onwards, Voice & Video Calling functionality has been moved to a separate library. In case you plan to use the calling feature, please add the Calling dependency `implementation 'com.cometchat:pro-android-calls-sdk:3.0.1'` in the dependencies section of the app-level `build.gradle` file.

Finally, add the below lines `android` section of the **app level** gradle file

```groovy
android {
  compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
  }
}
```



### Initialise CometChat

The `init()` method initialises the settings required for CometChat. The `init()` method takes the below parameters:

1. appID - You CometChat App ID
2. appSettings - An object of the AppSettings class can be created using the AppSettingsBuilder class. The region field is mandatory and can be set using the `setRegion()` method.

The `AppSettings` class allows you to configure three settings:

- **Region**: The region where you app was created.
- [Presence Subscription](https://www.cometchat.com/docs/v3/android-chat-sdk/user-presence): Represents the subscription type for user presence (real-time online/offline status)
- **autoEstablishSocketConnection(boolean value)**: This property takes a boolean value which when set to true informs the SDK to manage the web-socket connection internally. If set to false, it informs the SDK that the web-socket connection will be managed manually. The default value for this parameter is true. For more information on this, please check the  [Managing Web-Socket connections manually](https://www.cometchat.com/docs/v3/android-chat-sdk/advanced-managing-web-socket-connections-manually) section. The default value for this property is **true.**
- **overrideAdminHost(adminHost: string)**: This method takes the admin URL as input and uses this admin URL instead of the default admin URL. This can be used in case of dedicated deployment of CometChat.
- **overrideClientHost(clientHost: string)**: This method takes the client URL as input and uses this client URL instead of the default client URL. This can be used in case of dedicated deployment of CometChat.

```java
String appID = "APP_ID"; __ Replace with your App ID
String region = "REGION"; __ Replace with your App Region ("eu" or "us")

AppSettings appSettings=new AppSettings.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .autoEstablishSocketConnection(true)
  .build();

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
val appID:String="APP_ID" __ Replace with your App ID
val region:String="REGION" __ Replace with your App Region ("eu" or "us")

val appSettings = AppSettings.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .autoEstablishSocketConnection(true)
  .build()  

CometChat.init(this,appID,appSettings, object : CometChat.CallbackListener<String>() {
 override fun onSuccess(p0: String?) {
    Log.d(TAG, "Initialization completed successfully")
  }

  override fun onError(p0: CometChatException?) {
    Log.d(TAG, "Initialization failed with exception: " + p0?.message)
  }
  
 })
```



Make sure you replace the `APP_ID`  with your CometChat **App ID** and `region` with your **App Region** in the above code.

### Register and Login your User

Once initialisation is successful, you will need to create a user.

To create users on the fly, you can use the `createUser()` method. This method takes an `User` object and the `Auth Key` as input parameters and returns the created `User` object if the request is successful.

```java
String authKey = "AUTH_KEY"; __ Replace with your App Auth Key
User user = new User();
user.setUid("user1"); __ Replace with the UID for the user to be created
user.setName("Kevin"); __ Replace with the name of the user

CometChat.createUser(user, authKey, new CometChat.CallbackListener<User>() {
  @Override
    public void onSuccess(User user) {
    Log.d("createUser", user.toString());
  }

  @Override
    public void onError(CometChatException e) {
    Log.e("createUser", e.getMessage());
  }
});
```

```kotlin
val authKey = "AUTH_KEY" __ Replace with your App Auth Key
val user = User()
user.uid = "user1" __ Replace with the UID for the user to be created
user.name = "Kevin" __ Replace with the name of the user

CometChat.createUser(user, authKey, object : CometChat.CallbackListener<User>() {
  override fun onSuccess(user: User) {
    Log.d("createUser", user.toString()
  }

  override fun onError(e: CometChatException) {
    Log.e("createUser", e.message)
  }
})
```



Make sure that `UID` and `name` are specified as these are mandatory fields to create a user.

Once you have created the user successfully, you will need to log the user into CometChat using the `login()` method.

We recommend you call the CometChat `login()` method once your user logs into your app. The `login()` method needs to be called only once.

```java
String UID = "user1"; __ Replace with the UID of the user to login
String authKey = "AUTH_KEY"; __ Replace with your App Auth Key

 if (CometChat.getLoggedInUser() == null) {
     CometChat.login(UID, authKey, new CometChat.CallbackListener<User>() {

      @Override
      public void onSuccess(User user) {
        Log.d(TAG, "Login Successful : " + user.toString());
  }

   @Override
    public void onError(CometChatException e) {
        Log.d(TAG, "Login failed with exception: " + e.getMessage());
   }
 });
 } else {
   __ User already logged in
 }
```

```kotlin
val UID:String="user1" __ Replace with the UID of the user to login
 val authKey:String="AUTH_KEY" __ Replace with your App Auth Key

if (CometChat.getLoggedInUser() == null) {   
CometChat.login(UID,authKey, object : CometChat.CallbackListener<User>() {
     override fun onSuccess(p0: User?) {
         Log.d(TAG, "Login Successful : " + p0?.toString())        
      }

     override fun onError(p0: CometChatException?) {
         Log.d(TAG, "Login failed with exception: " +  p0?.message)        
      }

   })
}else{
   __ User already logged in
 }
```



Make sure you replace the `AUTH_KEY`  with your App **Auth Key** in the above code.

The `login()` method returns the `User` object containing all the information of the logged-in user.

> UID can be alphanumeric with underscore and hyphen. Spaces, punctuation and other special characters are not allowed.

### Integrate our UI Kits

- Please refer [Android Java UI Kit](https://www.cometchat.com/docs/v3/java-chat-ui-kit/overview) section to integrate Android Java UI Kit inside your app.
- Please refer [Android Kotlin UI Kit](https://www.cometchat.com/docs/v3/kotlin-chat-ui-kit/overview)  section to integrate Android Kotlin UI Kit inside your app.