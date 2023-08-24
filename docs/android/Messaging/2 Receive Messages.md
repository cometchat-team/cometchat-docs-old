Receiving messages with CometChat has two parts:

1. Adding a listener to receive [Real-time Messages](https://www.cometchat.com/docs/v3/android-chat-sdk/messaging-receive-messages#real-time-messages) when your app is running
2. Calling a method to retrieve [Missed Messages](https://www.cometchat.com/docs/v3/android-chat-sdk/messaging-receive-messages#missed-messages) when your app was not running

## Real-time Messages

_In other words, as a recipient, how do I receive messages when my app is running?_

For every activity or fragment you wish to receive messages in, you need to register the `MessageListener` using the `addMessageListener()` method.

We suggest adding the listener in the `onResume()` method of the activity or the fragment where you wish to receive these events in.

```java
private String listenerID = "UNIQUE_LISTENER_ID";

CometChat.addMessageListener(listenerID, new CometChat.MessageListener() {
    @Override
    public void onTextMessageReceived(TextMessage textMessage) {
        Log.d(TAG, "Text message received successfully: " + textMessage.toString());
    }

    @Override
    public void onMediaMessageReceived(MediaMessage mediaMessage) {
        Log.d(TAG, "Media message received successfully: " + mediaMessage.toString());
    }

    @Override
    public void onCustomMessageReceived(CustomMessage customMessage) {
        Log.d(TAG, "Custom message received successfully: " + customMessage.toString());
    }
});
```

```kotlin
val listenerID:String = "UNIQUE_LISTENER_ID"

CometChat.addMessageListener(listenerID, object : MessageListener() {
    override fun onTextMessageReceived(textMessage: TextMessage) {
        Log.d(TAG, "Text message received successfully: $textMessage")
    }

    override fun onMediaMessageReceived(mediaMessage: MediaMessage) {
        Log.d(TAG, "Media message received successfully: $mediaMessage")
    }

    override fun onCustomMessageReceived(customMessage: CustomMessage) {
        Log.d(TAG, "Custom message received successfully: $customMessage")
    }
})
```



| Parameter | Description | 
| ---- | ---- | 
| `listenerID` | An ID that uniquely identifies that listener. We recommend using the activity or fragment name | 


We recommend you remove the listener once the activity or fragment is not in use. Typically, this can be added in the `onPause()` method.

```java
private String listenerID = "UNIQUE_LISTENER_ID";

CometChat.removeMessageListener(listenerID);
```

```kotlin
val listenerID:String = "UNIQUE_LISTENER_ID"

CometChat.removeMessageListener(listenerID)
```



> As a sender, you will not receive your own message in a real-time message event. However, if a user is logged-in using multiple devices, they will receive an event for their own message in other devices.

## Missed Messages

_In other words, as a recipient, how do I receive messages that I missed when my app was not running?_

For most use cases, you will need to add functionality to load missed messages. If you're building an on-demand or live streaming app, you may choose to skip this and fetch the message history (say, last 100 messages) instead.

Using the same `MessagesRequest` class and the filters provided by the `MessagesRequestBuilder` class, you can fetch the message that we sent to the logged-in user but were not delivered to them as they were offline. For this, you will require the ID of the last message received. You can either maintain it at your end or use the `getLastDeliveredMessageId()` method provided by the CometChat class. This ID needs to be passed to the `setMessageId()` method of the builder class.

Now using the `fetchNext()` method, you can fetch all the messages that were sent to the user when they were offline.

Calling the `fetchNext()` method on the same object repeatedly allows you to fetch all the offline messages for the logged in user in a paginated manner

### Fetch Missed Messages of a particular one-on-one conversation

```java
private int limit = 30;
private int latestId = CometChat.getLastDeliveredMessageId();
private String UID = "superhero1";

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder()
        .setMessageId(latestId)
        .setLimit(limit)
        .setUID(UID)
        .build();

messagesRequest.fetchNext(new CometChat.CallbackListener<List<BaseMessage>>() {
    @Override
    public void onSuccess(List<BaseMessage> list) {
        for (BaseMessage message : list) {
            if (message instanceof TextMessage) {
                Log.d(TAG, "Text message received successfully: " +
                        ((TextMessage) message).toString());
            } else if (message instanceof MediaMessage) {
                Log.d(TAG, "Media message received successfully: " +
                        ((MediaMessage) message).toString());
            }
        }
    }

    @Override
    public void onError(CometChatException e) {
        Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
    }
});
```

```kotlin
lateinit var messagesRequest: MessagesRequest
val latestId = CometChat.getLastDeliveredMessageId()
val limit: Int = 30
val UID: String = "superhero1"

val messagesRequest = MessagesRequestBuilder()
    .setMessageId(latestId)
    .setLimit(limit)
    .setUID(UID)
    .build()

messagesRequest.fetchNext(object : CallbackListener<List<BaseMessage?>>() {
    override fun onSuccess(list: List<BaseMessage?>) {
        for (message in list) {
            if (message is TextMessage) {
                Log.d(
                    TAG, "Text message received successfully: " +
                            message.toString()
                )
            } else if (message is MediaMessage) {
                Log.d(
                    TAG, "Media message received successfully: " +
                            message.toString()
                )
            }
        }
    }

    override fun onError(e: CometChatException) {
        Log.d(TAG, "Message fetching failed with exception: " + e.message)
    }
})
```



### Fetch Missed Messages of a particular group conversation

```java
private int limit = 30;
private int latestId = CometChat.getLastDeliveredMessageId();
private String GUID = "supergroup";

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder()
        .setMessageId(latestId)
        .setLimit(limit)
        .setGUID(GUID)
        .build();

messagesRequest.fetchNext(new CometChat.CallbackListener<List<BaseMessage>>() {
    @Override
    public void onSuccess(List<BaseMessage> list) {
        for (BaseMessage message : list) {
            if (message instanceof TextMessage) {
                Log.d(TAG, "Text message received successfully: " + ((TextMessage) message).toString());
            } else if (message instanceof MediaMessage) {
                Log.d(TAG, "Media message received successfully: " + ((MediaMessage)message).toString());
            }
        }
    }

    @Override
    public void onError(CometChatException e) {
        Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
    }
});
```

```kotlin
lateinit var messagesRequest: MessagesReques
val latestId = CometChat.getLastDeliveredMessageId()
val limit: Int = 30
val GUID: String = "superhero1"

messagesRequest = MessagesRequestBuilder()
    .setMessageId(latestId)
    .setLimit(limit)
    .setGUID(GUID)
    .build()

messagesRequest.fetchNext(object : CallbackListener<List<BaseMessage?>>() {
    override fun onSuccess(list: List<BaseMessage?>) {
        for (message in list) {
            if (message is TextMessage) {
                Log.d(
                    TAG, "Text message received successfully: " +
                            message.toString()
                )
            } else if (message is MediaMessage) {
                Log.d(
                    TAG, "Media message received successfully: " +
                            message.toString()
                )
            }
        }
    }

    override fun onError(e: CometChatException) {
        Log.d(TAG, "Message fetching failed with exception: " + e.message)
    }
})
```



## Unread Messages

_In other words, as a logged-in user, how do I fetch the messages I've not read?_

Using the `MessagesRequest` class described above, you can fetch the unread messages for the logged-in user. In order to achieve this, you need to set the `unread` variable in the builder to `true` using the `setUnread()` method so that only the unread messages are fetched.

### Fetch Unread Messages of a particular one-on-one conversation

```java
String UID = "superhero1";

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder()
        .setUnread(true)
        .setLimit(20)
        .setUID(UID)
        .build();

messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
    @Override
    public void onSuccess(List<BaseMessage> list) {
        for (BaseMessage message : list) {
            if (message instanceof TextMessage) {
                Log.d(TAG, "Text message received successfully: " +((TextMessage) message).toString());
            } else if (message instanceof MediaMessage) {
                Log.d(TAG, "Media message received successfully: " +((MediaMessage) message).toString());
            }
        }
    }

    @Override
    public void onError(CometChatException e) {
        Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
    }
});
```

```kotlin
val UID:String = "superhero1"

val messagesRequest = MessagesRequestBuilder()
    .setUnread(true)
    .setLimit(20)
    .setUID(UID)
    .build()

messagesRequest.fetchPrevious(object : CallbackListener<List<BaseMessage?>>() {
    override fun onSuccess(list: List<BaseMessage?>) {
        for (message in list) {
            if (message is TextMessage) {
                Log.d(TAG, "Text message received successfully: $message")
            } else if (message is MediaMessage) {
                Log.d(TAG, "Media message received successfully: $message")
            }
        }
    }

    override fun onError(e: CometChatException) {
        Log.d(TAG, "Message fetching failed with exception: " + e.message)
    }
})
```



### Fetch Unread Messages of a particular group conversation

```java
String GUID = "supergroup";

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder()
        .setUnread(true)
        .setLimit(20)
        .setGUID(GUID)
        .build();

messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
    @Override
    public void onSuccess(List<BaseMessage> list) {
        for (BaseMessage message : list) {
            if (message instanceof TextMessage) {
                Log.d(TAG, "Text message received successfully: " + ((TextMessage) message).toString());
            } else if (message instanceof MediaMessage) {
                Log.d(TAG, "Media message received successfully: " + ((MediaMessage)message).toString());
            }
        }
    }

    @Override
    public void onError(CometChatException e) {
        Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
    }
});
```

```kotlin
val GUID:String = "supergroup"

val messagesRequest = MessagesRequestBuilder()
    .setUnread(true)
    .setLimit(20)
    .setGUID(GUID)
    .build()

messagesRequest.fetchPrevious(object : CallbackListener<List<BaseMessage?>>() {
    override fun onSuccess(list: List<BaseMessage?>) {
        for (message in list) {
            if (message is TextMessage) {
                Log.d(TAG, "Text message received successfully: $message")
            } else if (message is MediaMessage) {
                Log.d(TAG, "Media message received successfully: $message")
            }
        }
    }

    override fun onError(e: CometChatException) {
        Log.d(TAG, "Message fetching failed with exception: " + e.message)
    }
})
```



> The list of messages received is in the form of objects of `BaseMessage` class. A `BaseMessage` can either be an object of the `TextMessage`, `MediaMessage`, `CustomMessage`, `Action` or `Call` class. You can use the `instanceOf` operator to check the type of object.

## Message History

_In other words, as a logged-in user, how do I fetch the message history for a user or a group conversation?_

### Fetch Message History of a particular one-on-one conversation

Using the `MessagesRequest` class and the filters for the `MessagesRequestBuilder` class as shown in the below code snippet, you can fetch the entire conversation between the logged in user and any particular user. For this use case, it is mandatory to set the UID parameter using the `setUID()` method of the builder. This UID is the unique id of the user for which the conversation needs to be fetched.

```java
private int limit = 50;
private String UID = "superhero1"

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder()
        .setLimit(limit)
        .setUID(UID)
        .build();

messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
    @Override
    public void onSuccess(List<BaseMessage> list) {
        for (BaseMessage message : list) {
            if (message instanceof TextMessage) {
                Log.d(TAG, "Text message received successfully: " + ((TextMessage) message).toString());
            } else if (message instanceof MediaMessage) {
                Log.d(TAG, "Media message received successfully: " + ((MediaMessage)message).toString());
            }
        }
    }

    @Override
    public void onError(CometChatException e) {
        Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
    }
});
```

```kotlin
val limit: Int = 30
val UID: String = "superhero1"

val messagesRequest = MessagesRequestBuilder()
    .setLimit(limit)
    .setUID(UID)
    .build()

messagesRequest.fetchPrevious(object : CallbackListener<List<BaseMessage?>>() {
    override fun onSuccess(list: List<BaseMessage?>) {
        for (message in list) {
            if (message is TextMessage) {
                Log.d(TAG, "Text message received successfully: $message")
            } else if (message is MediaMessage) {
                Log.d(TAG, "Media message received successfully: $message")
            }
        }
    }

    override fun onError(e: CometChatException) {
        Log.d(TAG, "Message fetching failed with exception: " + e.message)
    }
})
```



Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch all the previous messages in a paginated way.

### Fetch Message History of a particular group conversation

Using the `MessagesRequest` class and the filters for the `MessagesRequestBuilder` class as shown in the below code snippet, you can fetch the entire conversation for any group provided you have joined the group. For this use case, it is mandatory to set the GUID parameter using the `setGUID()` method of the builder. This GUID is the unique identifier of the Group for which the messages are to be fetched.

```java
private int limit = 30;
private String GUID = "supergroup"

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder()
        .setLimit(limit)
        .setGUID(GUID)
        .build();

messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
    @Override
    public void onSuccess(List<BaseMessage> list) {
        for (BaseMessage message : list) {
            if (message instanceof TextMessage) {
                Log.d(TAG, "Text message received successfully: " + ((TextMessage) message).toString());
            } else if (message instanceof MediaMessage) {
                Log.d(TAG, "Media message received successfully: " + ((MediaMessage)message).toString());
            }
        }
    }

    @Override
    public void onError(CometChatException e) {
        Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
    }
});
```

```kotlin
val limit: Int = 30
val GUID: String = "supergroup"

val messagesRequest = MessagesRequestBuilder()
    .setLimit(limit)
    .setGUID(GUID)
    .build()

messagesRequest.fetchPrevious(object : CallbackListener<List<BaseMessage?>>() {
    override fun onSuccess(list: List<BaseMessage?>) {
        for (message in list) {
            if (message is TextMessage) {
                Log.d(TAG, "Text message received successfully: $message")
            } else if (message is MediaMessage) {
                Log.d(TAG, "Media message received successfully: $message")
            }
        }
    }

    override fun onError(e: CometChatException) {
        Log.d(TAG, "Message fetching failed with exception: ${e.message}")
    }
})
```



Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch the entire conversation between the logged in user and the specified user. This can be implemented with upward scrolling to display the entire conversation.

## Search Messages

Along with the other parameters mentioned above, you can use the `setSearchKeyword()` method provided by the `MessagesRequestBuilder` class. This method takes a string as input. This is the string that is to be searched amongst the messages. This can be used to fetch all the messages that contain the string in a paginated way. Calling the `fetchPrevious()` method on the same object repeatedly allows you to fetch all the messages with the keyword specified in all your conversations.

### Search Messages in a particular one-on-one conversation

```java
private int limit = 30;
private String UID = "superhero1";

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder().setSearchKeyword("Hello").setUID(UID).setLimit(limit).build();

messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
    @Override
    public void onSuccess(List<BaseMessage> list) {
        for (BaseMessage message : list) {
            if (message instanceof TextMessage) {
                Log.d(TAG, "Text message received successfully: " + ((TextMessage) message).toString());
            } else if (message instanceof MediaMessage) {
                Log.d(TAG, "Media message received successfully: " + ((MediaMessage)message).toString());
            }
        }
    }

    @Override
    public void onError(CometChatException e) {
        Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
    }
});
```

```kotlin
val limit: Int = 30
val UID: String = "superhero1"

val messagesRequest = MessagesRequestBuilder().setSearchKeyword("Hello").setUID(UID).setLimit(limit).build()

messagesRequest.fetchPrevious(object : CallbackListener<List<BaseMessage?>>() {
    override fun onSuccess(list: List<BaseMessage?>) {
        for (message in list) {
            if (message is TextMessage) {
                Log.d(TAG, "Text message received successfully: $message")
            } else if (message is MediaMessage) {
                Log.d(TAG, "Media message received successfully: $message")
            }
        }
    }

    override fun onError(e: CometChatException) {
        Log.d(TAG, "Message fetching failed with exception: ${e.message}")
    }
})
```



### Search Messages in a particular group conversation

```java
private int limit = 30;
private String GUID = "supergroup";

MessagesRequest messagesRequest = new MessagesRequest.MessagesRequestBuilder().setSearchKeyword("Hello").setGUID(GUID).setLimit(limit).build();

messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
    @Override
    public void onSuccess(List<BaseMessage> list) {
        for (BaseMessage message : list) {
            if (message instanceof TextMessage) {
                Log.d(TAG, "Text message received successfully: " + ((TextMessage) message).toString());
            } else if (message instanceof MediaMessage) {
                Log.d(TAG, "Media message received successfully: " + ((MediaMessage)message).toString());
            }
        }
    }

    @Override
    public void onError(CometChatException e) {
        Log.d(TAG, "Message fetching failed with exception: " + e.getMessage());
    }
});
```

```kotlin
val limit = 30
val GUID = "supergroup"

val messagesRequest = MessagesRequestBuilder().setSearchKeyword("Hello").setGUID(GUID).setLimit(limit).build()

messagesRequest.fetchPrevious(object : CallbackListener<List<BaseMessage?>>() {
    override fun onSuccess(list: List<BaseMessage?>) {
        for (message in list) {
            if (message is TextMessage) {
                Log.d(TAG, "Text message received successfully: $message")
            } else if (message is MediaMessage) {
                Log.d(TAG, "Media message received successfully: $message")
            }
        }
    }

    override fun onError(e: CometChatException) {
        Log.d(TAG, "Message fetching failed with exception: ${e.message}")
    }
})
```



## Unread Messages Count

_In other words, as a logged-in user, how do I find out the number of unread messages that I have?_

### Fetch Unread Message Count of a particular one-on-one conversation

_In other words, how do I find out the number of unread messages I have from a particular user?_

In order to get the unread message count for a particular user (with respect to the logged-in user), you can use the `getUnreadMessageCountForUser()`.

This method has the two variants:

```java
CometChat.getUnreadMessageCountForUser(String UID, Callbacks);
```

```kotlin
CometChat.getUnreadMessageCountForUser(UID: String, Callbacks)
```



If you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to `true`:

```java
CometChat.getUnreadMessageCountForUser(String UID, boolean hideMessagesFromBlockedUsers, Callbacks);
```

```kotlin
CometChat.getUnreadMessageCountForUser(UID: String, hideMessagesFromBlockedUsers: Boolean, Callbacks)
```



```java
private String UID = "SUPERHERO1"
  
CometChat.getUnreadMessageCountForUser(UID, new CometChat.CallbackListener<HashMap<String, Integer>>() {
    @Override
    public void onSuccess(HashMap<String, Integer> stringIntegerHashMap) {
        __ handle success
    }

    @Override
    public void onError(CometChatException e) {
        __ handle error
    }
});
```

```kotlin
val UID: String = "SUPERHERO1"
        
CometChat.getUnreadMessageCountForUser(UID, object : CallbackListener<HashMap<String?, Int?>?>() {
    override fun onSuccess(stringIntegerHashMap: HashMap<String?, Int?>?) {
        __ handle success
    }

    override fun onError(e: CometChatException) {
        __ handle error
    }
})
```



In the `onSuccess()` callback, you will receive a Hashmap which will contain the `UID` of the user as the key and the unread message count as the value.

### Fetch Unread Message Count of a particular group conversation

_In other words, how do I find out the number of unread messages I have in a single group?_

In order to get the unread message count for a particular group, you can use the `getUnreadMessageCountForGroup()`.

This method has two variants:

```java
CometChat.getUnreadMessageCountForGroup(String GUID, Callbacks);
```

```kotlin
CometChat.getUnreadMessageCountForUser(GUID: String, Callbacks)
```



If you wish to ignore the messages from blocked users you can use the following syntax setting the boolean parameter to `true`:

```java
CometChat.getUnreadMessageCountForGroup(String GUID, boolean hideMessagesFromBlockedUsers, Callbacks);
```

```kotlin
CometChat.getUnreadMessageCountForUser(GUID: String, hideMessagesFromBlockedUsers: Boolean, Callbacks)
```



```java
private String GUID = "SUPERGROUP"
  
CometChat.getUnreadMessageCountForGroup(GUID, new CometChat.CallbackListener<HashMap<String, Integer>>(){
    @Override
    public void onSuccess(HashMap<String, Integer> stringIntegerHashMap) {
        __ handle success
    }

    @Override
    public void onError(CometChatException e) {
        __ handle error
    }
});
```

```kotlin
val GUID: String = "SUPERGROUP"

CometChat.getUnreadMessageCountForGroup(GUID, object : CallbackListener<HashMap<String?, Int?>?>() {
        override fun onSuccess(stringIntegerHashMap: HashMap<String?, Int?>?) {
            __ handle success
        }

        override fun onError(e: CometChatException) {
            __ handle error
        }
    }
)
```



In the `onSuccess()` callback, you will receive a Hashmap which will contain the `GUID` of the group as the key and the unread message count as the value.

### Fetch Unread Message Count of all one-on-one & group conversations

_In other words, how do I find out the number of unread messages for every one-on-one and group conversation?_

In order to get all the unread message counts, you can use the `getUnreadMessageCount()` method.
This method has two variants:

```java
CometChat.getUnreadMessageCount(Callbacks);
```

```kotlin
CometChat.getUnreadMessageCount(Callbacks)
```



If you wish to ignore the messages from blocked users you can use the following syntax setting the boolean parameter to `true`:

```java
CometChat.getUnreadMessageCount(boolean hideMessagesFromBlockedUsers, Callbacks);
```

```kotlin
CometChat.getUnreadMessageCount(hideMessagesFromBlockedUsers: Boolean, Callbacks)
```



```java
CometChat.getUnreadMessageCount(new CometChat.CallbackListener<HashMap<String, HashMap<String, Integer>>>() {
    @Override
    public void onSuccess(HashMap<String, HashMap<String, Integer>> stringHashMapHashMap) {
        __ handle success
    }

    @Override
    public void onError(CometChatException e) {
        __ handle error
    }
});
```

```kotlin
CometChat.getUnreadMessageCount(object : CallbackListener<HashMap<String?, HashMap<String?, Int?>?>?>() {
    override fun onSuccess(stringHashMapHashMap: HashMap<String?, HashMap<String?, Int?>?>?) {
        __ handle success
    }

    override fun onError(e: CometChatException) {
        __ handle error
    }
})
```



In the `onSuccess()` callback, you will receive a hashmap having two keys:

1. `user` - The value for this key holds another hashmap that holds the `UIDs` of users and their corresponding unread message counts.
2. `group` - The value for this key holds another hashmap that holds the `GUIDs` of groups and their corresponding unread message counts.

### Fetch Unread Message Count of all one-on-one conversations

_In other words, how do I find out the number of unread messages I have for every user?_

In order to fetch the unread message counts for just the users, you can use the `getUnreadMessageCountForAllUsers()` method.

This method, just like others, has two variants:

```java
CometChat.getUnreadMessageCountForAllUsers(Callbacks);
```

```kotlin
CometChat.getUnreadMessageCountForAllUsers(Callbacks)
```



If you wish to ignore the messages from blocked users you can use the following syntax setting the boolean parameter to `true`:

```java
CometChat.getUnreadMessageCountForAllUsers(boolean hideMessagesFromBlockedUsers, Callbacks);
```

```kotlin
CometChat.getUnreadMessageCountForAllUsers(hideMessagesFromBlockedUsers: Boolean, Callbacks)
```



```java
CometChat.getUnreadMessageCountForAllUsers(new CometChat.CallbackListener<HashMap<String, Integer>>() {
  @Override
    public void onSuccess(HashMap<String, Integer> stringIntegerHashMap) {
    	__ Handle Success
  }

  @Override
    public void onError(CometChatException e) {
    	__ Handle Error
  }
});
```

```kotlin
CometChat.getUnreadMessageCountForAllUsers(object : CometChat.CallbackListener<HashMap<String, Int>>() {
  override fun onSuccess(stringIntegerHashMap: HashMap<String, Int>) {
    Log.d(TAG,"onSuccess: ${stringIntegerHashMap.size}")
  }
  
  override fun onError(e: CometChatException) {
    Log.d(TAG,"onError: ${e.message}")
  }
})
```



In the `onSuccess()` callback, you will receive a Hashmap that will contain the `UIDs` of users as the key and the unread message counts as the values.

### Fetch Unread Message Count of all group conversations

_In other words, how do I find out the number of unread messages for every group?_

In order to fetch the unread message counts for all groups, you can use the `getUnreadMessageCountForAllGroups()` method.

This method has two variants:

```java
CometChat.getUnreadMessageCountForAllGroups(Callbacks);
```

```kotlin
CometChat.getUnreadMessageCountForAllGroups(Callbacks)
```



If you wish to ignore the messages from blocked users you can use the below syntax setting the boolean parameter to `true`:

```java
CometChat.getUnreadMessageCountForAllGroups(boolean hideMessagesFromBlockedUsers, Callbacks);
```

```kotlin
CometChat.getUnreadMessageCountForAllGroups(hideMessagesFromBlockedUsers: Boolean, Callbacks)
```



```java
CometChat.getUnreadMessageCountForAllGroups(new CometChat.CallbackListener<HashMap<String, Integer>>() {
  @Override
    public void onSuccess(HashMap<String, Integer> stringIntegerHashMap) {
    	__ Handle success
  }
  
  @Override
    public void onError(CometChatException e) {
    __ Handle Error
  }
});
```

```kotlin
CometChat.getUnreadMessageCountForAllGroups(object : CometChat.CallbackListener<HashMap<String, Int>>() {
  override fun onSuccess(stringIntegerHashMap: HashMap<String, Int>) {
    Log.d(TAG,"onSuccess: ${stringIntegerHashMap.size}")
  }

  override fun onError(e: CometChatException) {
    Log.e(TAG,"onError: ${e.message}")
  }
})
```



In the `onSuccess()` callback, you will receive a hashmap which will contain the `GUIDs` of the groups as the key and the unread message counts as the values.