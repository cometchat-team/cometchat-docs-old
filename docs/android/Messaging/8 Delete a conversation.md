In case you want to delete a conversation, you can use the `deleteConversation()` method.

This method takes two parameters. The unique id (UID/GUID) of the conversation to be deleted & the type (user/group) of conversation to be deleted.

```java
CometChat.deleteConversation(UID, CometChatConstants.RECEIVER_TYPE_USER, new CometChat.CallbackListener<String>() {
  @Override
  public void onSuccess(String s) {
    Log.d(TAG, s);
  }

  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, e.getMessage());
  }
});
```

```java
CometChat.deleteConversation(GUID, CometChatConstants.RECEIVER_TYPE_GROUP, new CometChat.CallbackListener<String>() {
  @Override
    public void onSuccess(String s) {
    Log.d(TAG, s);
  }

  @Override
    public void onError(CometChatException e) {
    Log.d(TAG, e.getMessage());
  }
});
```

```kotlin
CometChat.deleteConversation(UID, CometChatConstants.RECEIVER_TYPE_USER, object : CallbackListener<String?>() {
  override fun onSuccess(s: String?) {
    Log.d(TAG, s)
  }

  override fun onError(e: CometChatException) {
    Log.d(TAG, e.message)
  }
})
```

```kotlin
CometChat.deleteConversation(GUID, CometChatConstants.RECEIVER_TYPE_GROUP, object : CallbackListener<String?>() {
  override fun onSuccess(s: String?) {
    Log.d(TAG, s)
  }

  override fun onError(e: CometChatException) {
    Log.d(TAG, e.message)
  }
})
```



This method deletes the conversation only for the logged-in user. To delete a conversation for all the users of the conversation, please refer to our REST API documentation [here](https://www.cometchat.com/docs/v3/chat-apis#delete-conversation-1).

The `deleteConversation()` method takes the following parameters:

| Parameter | Description | Required | 
| ---- | ---- | ---- | 
| conversationWith | `UID` of the user or `GUID` of the group whose conversation you want to delete. | YES | 
| conversationType | The type of conversation you want to delete . It can be either `user` or `group`. | YES | 
