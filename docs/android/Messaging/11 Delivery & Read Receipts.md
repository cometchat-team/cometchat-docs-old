## Mark Messages as Delivered

_In other words, as a recipient, how do I inform the sender that I've received a message?_

You can mark the messages for a particular conversation as read using the `markAsDelivered()` method. This method takes the below parameters as input:

| Parameter | Information | 
| ---- | ---- | 
| messageId | The ID of the message above which all the messages for a particular conversation are to be marked as read. | 
| receiverId | In case of one to one conversation message's sender `UID` will be the receipt's receiver Id.\n\n\n\nIn case of group conversation message's receiver Id will be the receipt's receiver Id. | 
| receiverType | Type of the receiver. Could be either of the two values( user or group). | 
| senderId | The `UID` of the sender of the message. | 


Messages for both User conversation and Groups can be marked as read using this method.

Ideally, you would like to mark all the messages as delivered for any conversation when the user opens the chat window for that conversation. This includes two scenarios:

1. **When the list of messages for the conversation is fetched**: In this case you need to obtain the last message in the list of messages and pass the message Id of that message to the markAsDelivered() method.
2. **When the user is on the chat window and a real-time message is received:** In this case you need to obtain the message Id of the message and pass it to the markAsDelivered() method.

```java
CometChat.markAsDelivered(message.getId(), message.getReceiverUid(), CometChatConstants.RECEIVER_TYPE_USER, message.getSender().getUid());
```

```java
CometChat.markAsDelivered(message.id, message.receiverUid, CometChatConstants.RECEIVER_TYPE_USER, message.sender.uid)
```

```java
CometChat.markAsDelivered(message.getId(), message.getReceiverUid(), CometChatConstants.RECEIVER_TYPE_GROUP, message.getSender().getUid());
```

```java
CometChat.markAsDelivered(message.id, message.receiverUid, CometChatConstants.RECEIVER_TYPE_GROUP, message.sender.uid)
```



This method will mark all the messages before the messageId specified, for the conversation with receiverId and receiverType(user/group) as read.

In case you would like to be notified of an error if the receipts fail to go through you can use `markAsDelivered()` method with the callbacks as shown below:

```java
CometChat.markAsDelivered(message.getId(), receiverUID, CometChatConstants.RECEIVER_TYPE_USER, message.getSender().getUid(), new CometChat.CallbackListener<Void>() {
    @Override
    public void onSuccess(Void unused) {
        Log.e(TAG, "markAsDelivered : " + "Success");
    }

    @Override
    public void onError(CometChatException e) {
        Log.e(TAG, "markAsDelivered : " + e.getMessage());
    }
});
```

```java
CometChat.markAsDelivered(message.getId(), receiverUID, CometChatConstants.RECEIVER_TYPE_GROUP, message.getSender().getUid(), new CometChat.CallbackListener<Void>() {
    @Override
    public void onSuccess(Void unused) {
        Log.e(TAG, "markAsDelivered : " + "Success");
    }

    @Override
    public void onError(CometChatException e) {
        Log.e(TAG, "markAsDelivered : " + e.getMessage());
    }
});
```

```kotlin
CometChat.markAsDelivered(message.id, receiverUID, CometChatConstants.RECEIVER_TYPE_USER, message.sender.uid, object : CallbackListener<Void?>() {
    override fun onSuccess(unused: Void?) {
        Log.e(TAG, "markAsDelivered : " + "Success")
    }

    override fun onError(e: CometChatException) {
        Log.e(TAG, "markAsDelivered : " + e.message)
    }
})
```

```kotlin
CometChat.markAsDelivered(message.id, receiverUID, CometChatConstants.RECEIVER_TYPE_GROUP, message.sender.uid, object : CallbackListener<Void?>() {
    override fun onSuccess(unused: Void?) {
        Log.e(TAG, "markAsDelivered : " + "Success")
    }

    override fun onError(e: CometChatException) {
        Log.e(TAG, "markAsDelivered : " + e.message)
    }
})
```



Another option the CometChat SDK provides is to pass the entire message object to the markAsDelivered() method.

```java
CometChat.markAsRead(baseMessage)
```

```kotlin
CometChat.markAsRead(baseMessage)
```



In case you would like to be notified of an error if the receipts fail to go through you can use `markAsDelivered()` method with the callbacks as shown below:

```java
CometChat.markAsDelivered(message, new CometChat.CallbackListener<Void>() {
  @Override
    public void onSuccess(Void unused) {
    Log.e(TAG, "markAsDelivered : " + "success");
  }

  @Override
    public void onError(CometChatException e) {
    Log.e(TAG, "markAsDelivered : " + e.getMessage());
  }

});
```

```kotlin
CometChat.markAsDelivered(message, object : CallbackListener<Void?>() {
    override fun onSuccess(unused: Void?) {
        Log.e(TAG, "markAsDelivered : " + "success")
    }

    override fun onError(e: CometChatException) {
        Log.e(TAG, "markAsDelivered : " + e.message)
    }
})
```



> Starting v3, the messages will not be marked delivered internally by the SDK. You will have to use the `markAsDelivered()` method. You will either have to use one of the above method signatures to mark the messages as delivered.

## Mark Messages as Read

_In other words, as a recipient, how do I inform the sender I've read a message?_

You can mark the messages for a particular conversation as read using the `markAsRead()` method. This method takes the below parameters as input:

| Parameter | Information | 
| ---- | ---- | 
| `messageId` | The ID of the message above which all messages for a particular conversation are to be marked as read. | 
| `receiverId` | In case of one to one conversation message's sender `UID` will be the receipt's receiver Id.\n\n\n\nIn case of group conversation message's receiver Id will be the receipts's receiver Id | 
| `receiverType` | This parameter indicates if the typing indicator is to be sent to a user or a group. The possible values are:\n\n\n\n1. `CometChatConstants.RECEIVER_TYPE_USER`\n2. `CometChatConstants.RECEIVER_TYPE_GROUP` | 
| senderId | The UID of the sender of the message | 


Messages for both user and group conversations can be marked as read using this method.

Ideally, you should mark all the messages as read for any conversation when the user opens the chat window for that conversation. This includes two scenarios:

1. **When the list of messages for the conversation is fetched**: In this case you need to obtain the last message in the list of messages and pass the message ID of that message to the `markAsRead()` method.
2. **When the user is on the chat window and a real-time message is received:** In this case you need to obtain the message ID of the message and pass it to the `markAsRead()` method

```java
CometChat.markAsRead(message.getId(),message.getSender().getUid(),CometChatConstants.RECEIVER_TYPE_USER,message.getSender().getUid());
```

```kotlin
CometChat.markAsRead(message.id, message.sender.uid, CometChatConstants.RECEIVER_TYPE_USER, message.sender.uid)
```

```java
CometChat.markAsRead(message.getId(), message.getReceiverUID(), CometChatConstants.RECEIVER_TYPE_GROUP,message.getSender().getUid())
```

```kotlin
CometChat.markAsRead(message.id, message.receiverUID, CometChatConstants.RECEIVER_TYPE_GROUP, message.sender.uid)
```



This method will mark all the messages before the messageId specified, for the conversation with `receiverId` and `receiverType` (user/group) as read.

In case you would like to be notified of an error if the receipts fail to go through you can use the `markAsRead()` method with the callbacks as shown below:

```java
CometChat.markAsRead(message.getId(), message.getSender().getUid(),CometChatConstants.RECEIVER_TYPE_USER, message.getSender().getUid(), new CometChat.CallbackListener<Void>() {
  @Override
    public void onSuccess(Void unused) {
    Log.e(TAG, "markAsRead : " + "Success");
  }
  
  @Override
    public void onError(CometChatException e) {
    Log.e(TAG, "markAsRead : " + e.getMessage());
  }
});
```

```java
CometChat.markAsRead(message.getId(), message.getRecieverUID(), CometChatConstants.RECEIVER_TYPE_USER, message.getSender().getUid(), new CometChat.CallbackListener<Void>() {
  @Override
    public void onSuccess(Void unused) {
    Log.e(TAG, "markAsRead : " + "Success");
  }
  
  @Override
    public void onError(CometChatException e) {
    Log.e(TAG, "markAsRead : " + e.getMessage());
  }
});
```

```kotlin
CometChat.markAsRead(message.id, message.sender.uid, CometChatConstants.RECEIVER_TYPE_USER, message.sender.uid, object : CallbackListener<Void?>() {
        override fun onSuccess(unused: Void?) {
            Log.e(TAG, "markAsRead : " + "Success")
        }
        
        override fun onError(e: CometChatException) {
            Log.e(TAG, "markAsRead : " + e.message)
        }
    }
)
```

```kotlin
CometChat.markAsRead(message.id, message.receiverUID, CometChatConstants.RECEIVER_TYPE_GROUP, message.sender.uid, object : CallbackListener<Void?>() {
        override fun onSuccess(unused: Void?) {
            Log.e(TAG, "markAsRead : " + "Success")
        }
        
        override fun onError(e: CometChatException) {
            Log.e(TAG, "markAsRead : " + e.message)
        }
    }
)
```



Another option the CometChat SDK provides is to pass the entire message object to the markAsRead() method.

```java
CometChat.markAsRead(baseMessage)
```

```kotlin
CometChat.markAsRead(baseMessage)
```



In case you would like to be notified of an error if the receipts fail to go through you can use the `markAsRead()` method with the callbacks as shown below:

```java
CometChat.markAsRead(message, new CometChat.CallbackListener<Void>() {
  @Override
    public void onSuccess(Void unused) {
    Log.e(TAG, "markAsRead : " + "success");
  }

  @Override
    public void onError(CometChatException e) {
    Log.e(TAG, "markAsRead : " + e.getMessage());
  }
});
```

```kotlin
CometChat.markAsRead(message, object : CallbackListener<Void?>() {
  override fun onSuccess(unused: Void?) {
    Log.e(TAG, "markAsRead : " + "success")
  }
  
  override fun onError(e: CometChatException) {
    Log.e(TAG, "markAsRead : " + e.message)
  }
})
```



> Starting v3, the `markAsRead()` method working with v2.x is deprecated and will not work. You will either have to use one of the above method signatures to mark the messages as read.

## Receive Delivery & Read Receipts

_In other words, as a recipient, how do I know when a message I sent has been delivered or read by someone?_

### Real-time Receipts

Real-time events for messages of a conversation being read or delivered can be obtained in the `onMessagesRead()` and the `onMessagesDelivered()` methods of the `MessageListener` class.

```java
CometChat.addMessageListener("Listener 1", new CometChat.MessageListener() {
   @Override
     public void onMessagesDelivered(MessageReceipt messageReceipt) {
     Log.e(TAG, "onMessagesDelivered: " + messageReceipt.toString());
   }
   
   @Override
     public void onMessagesRead(MessageReceipt messageReceipt) {
     Log.e(TAG, "onMessagesRead: " + messageReceipt.toString());
   }
 });
```

```kotlin
CometChat.addMessageListener("Listener 1", object : MessageListener() {
  override fun onMessagesDelivered(messageReceipt: MessageReceipt) {
    Log.e(TAG, "onMessagesDelivered: $messageReceipt")
  }

  override fun onMessagesRead(messageReceipt: MessageReceipt) {
    Log.e(TAG, "onMessagesRead: $messageReceipt")
  }
})
```



You will receive events in the form of `MessageReceipt` objects. The message receipt contains the following parameters:

| Parameter | Information | 
| ---- | ---- | 
| `messageId` | The ID of the message prior to which all the messages for that particular conversation have been marked as read. | 
| `sender` | User object containing the details of the user who has marked the message as read. | 
| `receiverId` | Id of the receiver whose conversation has been marked as read. | 
| `receiverType` | Type of the receiver (user/group) | 
| `receiptType` | Type of the receipt (read/delivered) | 
| `deliveredAt` | The timestamp of the time when the message was delivered. This will only be present if the receiptType is delivered. | 
| `readAt` | The timestamp of the time when the message was read. This will only be present when the receiptType is read. | 


### Missed Receipts

You will receive message receipts when you load offline messages. For groups, we do not include the list the users that have received it. You need to call the `getMessageReceipts()` method for it.

While fetching messages in bulk, if the message is a part of a one-on-one conversation, the message object will have two fields viz. `deliveredAt` and `readAt` which hold the timestamp for the time the message was delivered and read respectively. Using these two variables, the delivery and read status for a one-on-one conversation message can be obtained.

However, for a group conversation message, the `deliveredAt` and `readAt` fields are set once a message is delivered to or read by all members of the group.

### Receipt History for a Single Message

In order to fetch the message receipts, you can use the `getMessageReceipts()` method.

```java
private int messageId = 10101;

CometChat.getMessageReceipts(messageId, new CometChat.CallbackListener<List<MessageReceipt>>() {
  @Override
    public void onSuccess(List<MessageReceipt> messageReceipts) {
    	__ Handle message receipts
  }

  @Override
    public void onError(CometChatException e) {
    __ Handle error
  }
});
```

```kotlin
val messageId:Int=10101

CometChat.getMessageReceipts(messageId, object : CallbackListener<List<MessageReceipt?>?>() {
  override fun onSuccess(messageReceipts: List<MessageReceipt?>?) {
    __ Handle message receipts
  }

  override fun onError(e: CometChatException) {
    __ Handle error
  }
})
```



You will receive a list of `MessageReceipt` objects in the `onSuccess()` method.