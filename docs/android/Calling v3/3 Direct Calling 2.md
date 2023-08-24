## Overview

This guide demonstrates how to start call in to an Android application. Before you begin, we strongly recommend you read the calling setup guide.

## Generate Call Token

Before start call session you have to generate call token. You need to call this method for call token:

```java
String sessionId = "" __Random or available in call obecjt in case of default calling
String userAuthToken = CometChat.getUserAuthToken() __Logged in user auth token

CometChatCalls.generateToken(sessionId, userAuthToken, new CometChatCalls.CallbackListener<GenerateToken>() {
    @Override
    public void onSuccess(GenerateToken generateToken) {

    }

    @Override
    public void onError(com.cometchat.pro.rtc.exceptions.CometChatException e) {

    }
});
```

```kotlin
val sessionId = "" __Random or available in call obecjt in case of default calling
val userAuthToken = CometChat.getUserAuthToken() __Logged in user auth token

CometChatCalls.generateToken(
    sessionId,
    userAuthToken,
    object : CometChatCalls.CallbackListener<GenerateToken>() {
        override fun onSuccess(generateToken: GenerateToken) {
            
        }

        override fun onError(e: CometChatException) {
           
        }
    }
)
```



| Parameter | Description | 
| ---- | ---- | 
| sessionId | The unique random session ID. In case you are using default call then session ID is available in the `Call` object. | 
| userAuthToken | The use auth token is logged in user auth tooken which you can get by calling CometChat Chat SDK method CometChat.getUserAuthToken() | 


| Error Code | Error Message | 
| ---- | ---- | 
| INVALID_ARGUMENT_EXCEPTION | If you pass invalid param to a function or you don't pass the required params.\n\nexample: Authtoken and session are required, Invalid callToken passed, please verify. | 


On success of generate token method you will get call token. To access it from GenerateToken object "generateToken.getToken()"

## Start Call Session

The most important class that will be used in the implementation is the `CallSettings` class. This class allows you to set the various parameters for the call/conference. In order to set the various parameters of the `CallSettings` class, you need to use the `CallSettingsBuilder` class. Below are the various options available with the `CallSettings` class.

CallSettingsBuilder class takes the 2 mandatory parameters as a part of the constructor:

1. Context of the application
2. An object of the RelativeLayout. The calling UI will be loaded in this relative layout provided.

The other mandatory parameter is the sessionId for the call/conference. You can use the setSessionId() method of the `CallSettingsBuilder` to set the session Id of the call.

A basic example of how to start a call:

```java
RelativeLayout videoContainer;
Context activityContext = this; __Your activity reference
String callToken = "" __Received on generate token onSuccess

CallSettings callSettings = new CometChatCalls.CallSettingsBuilder(activityContext, videoContainer)
    .setDefaultLayoutEnable(true)
    .setIsAudioOnly(false)
    .setEventListener(new CometChatCallsEventsListener() {
        @Override
        public void onCallEnded() {
            Log.e(TAG, "onCallEnded");
        }

        @Override
        public void onCallEndButtonPressed() {
            Log.e(TAG, "onCallEndButtonPressed");
        }

        @Override
        public void onUserJoined(RTCUser user) {
            Log.e(TAG, "onUserJoined: " + user.getName());
        }

        @Override
        public void onUserLeft(RTCUser user) {
            Log.e(TAG, "onUserLeft: " + user.getName());
        }

        @Override
        public void onUserListChanged(ArrayList<RTCUser> users) {
            Log.e(TAG, "onUserListChanged: " + users.toString());
        }

        @Override
        public void onAudioModeChanged(ArrayList<AudioMode> devices) {
            Log.e(TAG, "onAudioModeChanged: " + devices.toString());
        }

        @Override
        public void onCallSwitchedToVideo(CallSwitchRequestInfo callSwitchRequestInfo) {
            Log.e(TAG, "onCallSwitchedToVideo: " + callSwitchRequestInfo.toString());
        }

        @Override
        public void onUserMuted(RTCMutedUser muteObj) {
            Log.e(TAG, "onUserMuted: " + muteObj.getMuted() + " muted by " + muteObj.getMutedBy());
        }

        @Override
        public void onRecordingToggled(RTCRecordingInfo recordingInfo) {
            Log.e(TAG, "onRecordingToggled: " + recordingInfo.getUser().getName() + " started recording");
        }

        @Override
        public void onError(com.cometchat.pro.rtc.exceptions.CometChatException ce) {
            Log.e(TAG, "onError: " + ce);
        }
    })
    .build();


CometChatCalls.startSession(callToken, callSettings, new CometChatCalls.CallbackListener<String>() {
    @Override
    public void onSuccess(String s) {
        Log.e(TAG, "onSuccess" + s);
    }

    @Override
    public void onError(com.cometchat.pro.rtc.exceptions.CometChatException e) {
        Log.e(TAG, "onError: " + e);
    }
});
```

```kotlin
val videoContainer: RelativeLayout
val callToken: String = "" __Received on generate token onSuccess

val callSettings: CallSettings = CometChatCalls.CallSettingsBuilder(this, videoContainer)
    .setDefaultLayoutEnable(true)
    .setIsAudioOnly(false)
    .setEventListener(object : CometChatCallsEventsListener {
        override fun onCallEnded() {
            Log.e(TAG, "onCallEnded")
        }

        override fun onCallEndButtonPressed() {
            Log.e(TAG, "onCallEndButtonPressed")
        }

        override fun onUserJoined(user: RTCUser) {
            Log.e(TAG, "onUserJoined: " + user.name)
        }

        override fun onUserLeft(user: RTCUser) {
            Log.e(TAG, "onUserLeft: " + user.name)
        }

        override fun onUserListChanged(users: ArrayList<RTCUser?>) {
            Log.e(TAG, "onUserListChanged: $users")
        }

        override fun onAudioModeChanged(devices: ArrayList<AudioMode?>) {
            Log.e(TAG, "onAudioModeChanged: $devices")
        }

        override fun onCallSwitchedToVideo(callSwitchRequestInfo: CallSwitchRequestInfo) {
            Log.e(TAG, "onCallSwitchedToVideo: $callSwitchRequestInfo")
        }

        override fun onUserMuted(muteObj: RTCMutedUser) {
            Log.e(TAG, "onUserMuted: " + muteObj.muted + " muted by " + muteObj.mutedBy)
        }

        override fun onRecordingToggled(recordingInfo: RTCRecordingInfo) {
            Log.e(
                TAG,
                "onRecordingToggled: " + recordingInfo.user.name + " started recording"
            )
        }

        override fun onError(ce: CometChatException) {
            Log.e(TAG, "onError: $ce")
        }
    })
    .build()


CometChatCalls.startSession(
    callToken,
    callSettings,
    object : CometChatCalls.CallbackListener<String>() {
        override fun onSuccess(s: String) {
            Log.e(TAG, "onSuccess: $s")
        }

        override fun onError(e: CometChatException) {
            Log.e(TAG, "onError: $e")
        }
    }
)
```



The `setIsAudioOnly()` method allows you to set if the call is supposed to be an audio call or an audio-video call. If set to true, the call will be an audio-only call else when set to false the call will be an audio-video call. The default will is false, so if not set, the call will be an audio-video call.

| Parameter | Description | 
| ---- | ---- | 
| `activityContext` | The activity that you want to show the calling view in. | 
| `videoContainer` | An object of the relativeLayout class in which CometChatCalls can load the calling views | 


| Error Code | Error Messages | 
| ---- | ---- | 
| INVALID_PROP_EXCEPTION | If you pass an invalid prop to a functional component or you don't pass the required prop.\n\nexample: Component requires valid call settings | 
| API_ERROR | If there is some error thrown by the API server For example unauthorized | 
| UNKNOWN_API_ERROR | If there is some API error but it didn't come from the server. For example, if the internet is not available and API is called. | 
| AUTH_ERR_TOKEN_INVALID_SIGNATURE | if Token is invalid | 


The `CometChatCallsEventsListener` listener provides you with the below callback methods:

| Callback Method | Description | 
| ---- | ---- | 
| onCallEnded() | This method is called when the call is successfully ended. The call details can be obtained from the `Call` object provided. | 
| onCallEndButtonPressed() | This method is called when the user press end call button. | 
| onUserJoined(user: RTCUser) | This method is called when any other user joins the call. The user details can be obtained from the `User` object provided. | 
| onUserLeft(user: RTCUser) | This method is called when a user leaves the call. The details of the user can be obtained from the provided `User` object. | 
| onUserListChanged(users: ArrayList&lt;RTCUser?&gt;) | This method is triggered every time a participant joins or leaves the call providing the list of users active in the call | 
| onAudioModeChanged(devices: ArrayList&lt;AudioMode?&gt;) | This callback is triggered if any new audio output source is available or becomes unavailable. | 
| onCallSwitchedToVideo(callSwitchRequestInfo: CallSwitchRequestInfo) | This callback is triggered when an audio call is converted into a video call. | 
| onUserMuted(muteObj: RTCMutedUser) | This method is triggered when a user is muted in the ongoing call. | 
| onRecordingToggled(recordingInfo: RTCRecordingInfo) | This method is triggered when a recording start/stop. | 
| onError(ce: CometChatException) | This method is called when there is some error in establishing the call. | 


## Settings

The `CallSettings` class is the most important class when it comes to the implementation of the Calling feature. This is the class that allows you to customize the overall calling experience. The properties for the call/conference can be set using the `CallSettingsBuilder` class. This will eventually give you and object of the `CallSettings` class which you can pass to the `startSession()` method to start the call.

The **mandatory** parameters that are required to be present for any call/conference to work are:

1. Context - context of the activity/application
2. RelativeLayout - A RelativeLayout object in which the calling UI is loaded.

The options available for customization of calls are:

| Setting | Description | 
| ---- | ---- | 
| `setDefaultLayoutEnable(boolean value)` | If set to `true` enables the default layout for handling the call operations. \n\n\n\nIf set to `false` it hides the button layout and just displays the Call View\n\n\n\n**Default value = true** | 
| `setIsAudioOnly(boolean value)` | If set to true call is supposed to be an audio call\n\n\n\nif set to false call is supposed to be a video call\n\n\n\n**Default Value = false** | 
| `showEndCallButton(boolean value)` | If set to `true` it displays the EndCallButton in Button Layout.\n\n\n\nif set to `false` it hides the EndCallButton in Button Layout\n\n\n\n**Default value = true** | 
| `showSwitchCameraButton(boolean value)` | If set to `true` it displays the SwitchCameraButton in Button Layout.\n\n\n\nif set to `false` it hides the SwitchCameraButton in Button Layout\n\n\n\n**Default value = true** | 
| `showMuteAudioButton(boolean value)` | If set to `true` it displays the MuteAudioButton in Button Layout.\n\n\n\nif set to `false` it hides the MuteAudioButton in Button Layout\n\n\n\n**Default value = true** | 
| `showPauseVideoButton(boolean value)` | If set to `true` it displays the PauseVideoButton in Button Layout.\n\n\n\nif set to `false` it hides the PauseVideoButton in Button Layout\n\n\n\n**Default value = true** | 
| `showAudioModeButton(boolean value)` | If set to `true` it displays the AudioModeButton in Button Layout.\n\n\n\nif set to `false` it hides the AudioModeButton in Button Layout\n\n\n\n**Default value = true** | 
| `setMode(boolean value)` | CometChat provides 3 options for the calling UI.\n\n\n\n1. CallSettings.MODE_DEFAULT\n2. CallSettings.MODE_SPOTLIGHT\n3. CallSettings.MODE_SINGLE\n\n\n**Default value = CallSettings.MODE_DEFAULT** | 
| `startWithAudioMuted(boolean value)` | This ensures the call is started with the audio muted if set to true\n\n\n\n**Default value = false** | 
| `startWithVideoMuted(boolean value)` | This ensures the call is started with the video muted if set to true\n\n\n\n**Default value = false** | 
| `setDefaultAudioMode(boolean value)` | This method can be used if you wish to start the call with a specific audio mode. The available options are\n\n\n\n1. CometChatConstants.AUDIO_MODE_SPEAKER = "SPEAKER"\n2. CometChatConstants.AUDIO_MODE_EARPIECE = "EARPIECE"\n3. CometChatConstants.AUDIO_MODE_BLUETOOTH = "BLUETOOTH"\n4. CometChatConstants.AUDIO_MODE_HEADPHONES = "HEADPHONES" | 
| `showSwitchToVideoCallButton(boolean value)` | This method shows/hides the switch to video call button. If set to true it will display the switch to video call button. If set to false it will hide the switch to video call button.\n\n\n\n**Default value = true** | 
| `showRecordingButton(boolean value)` | If set to `true` it displays the Recording Button\n\n\n\nif set to `false` it hides the Recording Button\n\n\n\n**Default value = false** | 
| `autoRecordOnCallStart(boolean value)` | If set to `true` it start recording automatically once call is connected\n\n\n\n**Default value = false** | 
| `setAvatarMode(boolean value)` | This method sets the mode of avatar. The avatar mode can be one of the below constants:\n\n\n\n1. CallSettings.AVATAR_MODE_CIRCLE\n2. CallSettings.AVATAR_MODE_SQUARE\n3. _CallSettings._AVATAR_MODE_FULLSCREEN\n\n\n**Default value = CallSettings.AVATAR_MODE_CIRCLE** | 
| `setMainVideoContainerSetting(videoSettings)` | This method can be used to customize the main video container. You can read more about this [here](https://app.developerhub.io/cometchat-documentation/v3/android-chat-sdk/video-view-customisation). | 
| `enableVideoTileDrag(boolean value)` | This method can be used to enable/disable video tile drag functionality in **Spotlight** mode.\n\n\n\n**Default value = true** | 
| `enableVideoTileClick(boolean value)` | This method can be used to enable/disable video tile click functionality in **Spotlight** mode.\n\n\n\n**Default value = true** | 
| `setEventListener(new CometChatCallsEventsListener())` | The `CometChatCallsEventsListener` listener provides you callbacks | 


In case you wish to achieve a completely customised UI for the Calling experience, you can do so by embedding default android buttons to the screen as per your requirement and then use the below methods to achieve different functionalities for the embedded buttons.

For the use case where you wish to align your own custom buttons and not use the default layout provided by CometChat you can embed the buttons in your layout and use the below methods to perform the corresponding operations:

### Switch Camera

You can call `switchCamera()` Method to toggle between camera sources.

```java
CometChatCalls.switchCamera();
```

```kotlin
CometChatCalls.switchCamera()
```



### Mute Audio

You can call `muteAudio()` Method to mute your Audio Stream to the end-user.

```java
CometChatCalls.muteAudio(true);
```

```kotlin
CometChatCalls.muteAudio(true)
```



if set to `true` the audio Stream is muted and if set to`false` the audio Stream is transmitted.

### Pause Video

You can call `pauseVideo()` Method to pause Video Stream to the end-user.

```java
CometChatCalls.pauseVideo(true);
```

```kotlin
CometChatCalls.pauseVideo(true)
```



if set to `true` the video Stream is muted and if set to`false` video Stream is transmitted.

### Set Audio Mode

You can call `setAudioMode()` to set the output of the audio stream.

```java
String audioMode = CometChatConstants.AUDIO_MODE_EARPIECE;
CometChatCalls.setAudioMode(audioMode);
```

```kotlin
val audioMode = CometChatConstants.AUDIO_MODE_EARPIECE
CometChatCalls.setAudioMode(audioMode)
```



The audio mode string can have either one of the below 4 values:

- AUDIO_MODE_SPEAKER = "SPEAKER"
- AUDIO_MODE_EARPIECE = "EARPIECE"
- AUDIO_MODE_BLUETOOTH = "BLUETOOTH"
- AUDIO_MODE_HEADPHONES= "HEADPHONES"

### Enter PIP Mode

If you are using a PIP (Picture-In-Picture) mode in your app and you want to render calling view in PIP then you can call `enterPIPMode()` method.

```java
CometChatCalls.enterPIPMode();
```

```kotlin
CometChatCalls.enterPIPMode()
```



### Exit PIP Mode

You can call `exitPIPMode()` to enter in PIP mode.

```java
CometChatCalls.exitPIPMode();
```

```kotlin
CometChatCalls.exitPIPMode()
```



### Switch to Video Call

You can call `switchToVideoCall()` to switch from audio call to video call

```java
CometChatCalls.switchToVideoCall();
```

```kotlin
CometChatCalls.switchToVideoCall()
```



### Start Recording

You can call `startRecording()` to start the recording

```java
CometChatCalls.startRecording();
```

```kotlin
CometChatCalls.startRecording()
```



### Stop Recording

You can call `stopRecording()` to stop the recording

```java
CometChatCalls.stopRecording();
```

```kotlin
CometChatCalls.stopRecording()
```



### End Call

You can call `CometChatCalls.endSession()` to end the call

```java
CometChatCalls.endSession();
```

```kotlin
CometChatCalls.endSession()
```

