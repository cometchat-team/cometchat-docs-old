This section will guide you to implement call recording feature for the voice and video calls.

## Implementation

Once you have decided to implement [Default Calling](https://www.cometchat.com/docs/v3/android-chat-sdk/calling-default-calling) or [Direct Calling](https://www.cometchat.com/docs/v3/android-chat-sdk/calling-direct-calling) calling and followed the steps to implement them. Just few additional listeners and methods will help you quickly implement call recording in your app.

You need to make changes in the CometChat.startCall method and add the required listeners for recording. Please make sure your callSettings is configured accordingly for [Default Calling](https://www.cometchat.com/docs/v3/android-chat-sdk/calling-default-calling) or [Direct Calling](https://www.cometchat.com/docs/v3/android-chat-sdk/calling-direct-calling).

A basic example of how to make changes to implement recording for a direct/default call:

```java
CallSettings callSettings = new CallSettings.CallSettingsBuilder(CallActivity.this, rlCallView)
  .setSessionId(sessionId)
  .showCallRecordButton(true)
  .build();

CometChat.startCall(callSettings, new CometChat.OngoingCallListener() {
  @Override
  public void onRecordingStarted(User user) {

  }

  @Override
  public void onRecordingStopped(User user) {

  }
});
```

```kotlin
val callSettings = CallSettingsBuilder(this@CallActivity, rlCallView)
  .setSessionId(sessionId)
  .showCallRecordButton(true)
  .build()

CometChat.startCall(callSettings, object : OngoingCallListener {
  override fun onRecordingStarted(user: User) {}
  override fun onRecordingStopped(user: User) {}
})
```



## Settings for call recording

The `CallSettings`class allows you to customise the overall calling experience. The properties for the call/conference can be set using the `CallSettingsBuilder` class. This will eventually give you and object of the `CallSettings` class which you can pass to the `startCall()` method to start the call.

The options available for recording of calls are:

| Setting | Description | 
| ---- | ---- | 
| `showCallRecordButton(boolean showCallRecordButton)` | If set to `true` it displays the Recording button in the button Layout.\n\n\n\nif set to `false` it hides the Recording button in the button Layout.\n\n\n\n**Default value = false** | 
| `startRecordingOnCallStart(boolean startRecordingOnCallStart)` | If set to `true` call recording will start as soon as the call is started.\n\n\n\nif set to `false` call recording will not start as soon as the call is started.\n\n\n\n**Default value = false** | 


### Start Recording

You can use the startRecording() method to start call recording.

```java
CallManager.getInstance().startRecording();
```

```kotlin
CallManager.getInstance().startRecording()
```



### Stop Recording

You can use the stopRecording() method to stop call recording.

```java
CallManager.getInstance().stopRecording();
```

```kotlin
CallManager.getInstance().stopRecording()
```

