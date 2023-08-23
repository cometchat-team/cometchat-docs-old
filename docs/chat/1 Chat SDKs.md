---
title: Test 
slug: voo
---
### Create User

Before you login the user, you must add the user to CometChat.

1. **For proof of concept/MVPs**: Create the user using the [CometChat Dashboard](https://app.cometchat.com).
2. **For production apps**: Use the CometChat [Create User API](https://www.cometchat.com/docs/v2/chat-apis#createuser) to create the user when your user signs up in your app.

> We have setup 5 users for testing having UIDs:  `SUPERHERO1`, `SUPERHERO2`, `SUPERHERO3`, `SUPERHERO4` and `SUPERHERO5`.

Once initialization is successful, you will need to log the user into CometChat using the `login()` method.

We recommend you call the CometChat `login()` method once your user logs into your app. The `login()` method needs to be called only once.

> The CometChat SDK maintains the session of the logged in user within the SDK. Thus you do not need to call the login method for every session. You can use the CometChat.getLoggedInUser() method to check if there is any existing session in the SDK. This method should return the details of the logged-in user. If this method returns null, it implies there is no session present within the SDK and you need to log the user into ComeChat.

## Login using Auth Key

This simple authentication procedure is useful when you are in development.

```java
private String UID = "SUPERHERO1";
private String authKey = "AUTH_KEY";

if (CometChat.getLoggedInUser()==null){
    CometChat.login(UID, authKey, new CometChat.CallbackListener<User>() 
       
       @Override
       public void onSuccess(User user) {
          Log.d(TAG, "Login Successful : " + user.toString());
        }
       @Override
       public void onError(CometChatException e) {
           Log.d(TAG, "Login failed with exception: " + e.getMessage());
        }
    });
  }else {
      __ user already logged-in perform your action 
}
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



| Parameter | Description | 
| ---- | ---- | 
| `UID` | The `UID` of the user that you would like to login | 
| `authKey` | CometChat App Auth Key | 


After the user logs in, their information is returned in the `User` object.

> Be sure to use the **Auth Only** API Key and not the **Full Access** API Key. This ensures that even if a malicious user reverse engineers your client code, they will only be able to log in to CometChat and not call any other APIs.

## Login using Auth Token

This authentication procedure does not use the API Key directly in your client code ensuring that your API Key is not leaked even if the client code is reverse engineered.

1. [Create a User](https://www.cometchat.com/docs/v2/chat-apis#createuser) via the CometChat API when the user signs up in your app.
2. [Create an Auth Token](https://www.cometchat.com/docs/v2/chat-apis#createauthtoken) via the CometChat API for the new user every time the user logs in to your app.
3. Pass the **Auth Token** to your client and use it in the `login()` method.

```java
private String authToken = "AUTH_TOKEN";

if (CometChat.getLoggedInUser()==null){
    CometChat.login(authToken, new CometChat.CallbackListener<User>() 
       
       @Override
       public void onSuccess(User user) {
          Log.d(TAG, "Login Successful : " + user.toString());
        }
       @Override
       public void onError(CometChatException e) {
           Log.d(TAG, "Login failed with exception: " + e.getMessage());
        }
    });
  }else {
      __ user already logged-in perform your action 
}
```

```kotlin
val authToken:String="AUTH_TOKEN"

  CometChat.login(authToken,object :CometChat.CallbackListener<User>(){
    override fun onSuccess(p0: User?) {
         Log.d(TAG, "Login Successful : " + p0?.toString())  
      }

    override fun onError(p0: CometChatException?) {
        Log.d(TAG, "Login failed with exception: " +  p0?.message) 
    }
 })
```



| Parameter | Description | 
| ---- | ---- | 
| authToken | Auth Token of the user you would like to login | 


After the user logs in, their information is returned in the `User` object.

## Logout

You can use the `logout()` method to log out the user from CometChat. We suggest you call this method once your user has been successfully logged out from your app.

```java
CometChat.logout(new CometChat.CallbackListener<String>() {
  @Override
  public void onSuccess(String successMessage) {
    Log.d(TAG, "Logout completed successfully");
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Logout failed with exception: " + e.getMessage());
  }
});
```

```kotlin
CometChat.logout(object : CometChat.CallbackListener<String>() {
   override fun onSuccess(p0: String?) {
     Log.d(TAG, "Logout completed successfully")               
   }

   override fun onError(p0: CometChatException?) {
    Log.d(TAG, "Logout failed with exception: " + p0?.message)
   }

})
```
