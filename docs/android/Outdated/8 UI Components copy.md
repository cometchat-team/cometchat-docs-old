
![](https://res.cloudinary.com/developerhub/image/upload/v1623199436/v2_5163/fyjgwxur8bnsrfdptujb.jpg)



### 1. Avatar

This is an image view customize only to display Avatar. This view can be used with image URLs as well as with CometChat objects like `User` and `Group`

![](https://res.cloudinary.com/developerhub/image/upload/v1623199436/v2_5163/fyjgwxur8bnsrfdptujb.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199441/v2_5163/a0olda1hxdfc5zzhkhaq.gif)



### Usage
In your `layout.xml` add the following code snippet.

```xml
 <com.cometchat.pro.uikit.Avatar
            android:id="@+id_av_user"
            android:layout_width="60dp"
            app:avatar_shape="@string_circle"
            android:layout_height="60dp" _>
```



Here  `avatar_shape`  is a static property. It should be either `circle` or `rectangle`. whereas the avatar URL needs to be set dynamically following is the sample code for the same.

```java
Avatar avatar = findViewById(R.id.av_user);
userViewHolder.avatar.setAvatarUrl("https:__randomuser.me_api_portraits_women_44.jpg");
```



The Avatar Component works well with CometChat `User` and `Group` object. The `setAvatar()` method accepts `User` or `Group` object if Avatar of `User` or `Group` is not available it automatically show the initials of the user or group name as a placeholder Avatar.


![](https://res.cloudinary.com/developerhub/image/upload/v1623199436/v2_5163/fyjgwxur8bnsrfdptujb.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199441/v2_5163/a0olda1hxdfc5zzhkhaq.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199452/v2_5163/jfd5qdnspjs9rlex8pe4.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199436/v2_5163/fyjgwxur8bnsrfdptujb.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199441/v2_5163/a0olda1hxdfc5zzhkhaq.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199452/v2_5163/jfd5qdnspjs9rlex8pe4.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199453/v2_5163/offkl9ruip67njuszpx9.png)



### Common Features

CometChat Avatar class provides functionality for an Avatar feature. There are commonly used properties to control the look of the Avatar.


| Avatar field element | Relevant attributes/methods | 
| ---- | ---- | 
| Avatar Shape | `app:avatar_shape` | 
| Avatar | `app:avatar`\n\n`# setAvatar(@NonNull User)`\n\n`# setAvatar(@NonNull Group)`\n\n`# setAvatar(@NonNull String)`\n\n`# setAvatar(@NonNull Drawable, @NonNull String)` | 
| Avatar Initial | `app:avatar_initials`\n\n`# setInitials(@NonNull String)` | 
| Border Color | `app:border_color` | 
| Border Width | `app:border_width` | 




### 2. StatusIndicator

This view will be used to show the user status if the user is online or offline. This view will take user status and display the color accordingly.

![](https://res.cloudinary.com/developerhub/image/upload/v1623199436/v2_5163/fyjgwxur8bnsrfdptujb.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199441/v2_5163/a0olda1hxdfc5zzhkhaq.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199452/v2_5163/jfd5qdnspjs9rlex8pe4.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199453/v2_5163/offkl9ruip67njuszpx9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199454/v2_5163/hj6jlw4aac1sdkuayaqu.gif)



### Usage
In your `layout.xml` add the following code

```xml
 <com.cometchat.pro.uikit.StatusIndicator
            android:id="@+id_statusIndicator"
            android:layout_width="15dp"
            android:layout_height="15dp"
            app:user_status="@string_offline"
            _>
```



User status can be set dynamically using the following code.

```java
 StatusIndicator statusIndicator = findViewById(R.id.statusIndicator);
  userViewHolder.statusIndicator.setUserStatus(user.getStatus());
```





### Common Features

CometChat StatusIndicator provides `app:user_status` attribute and method `setUserStatus` to set Status of the user.

The `app:user_status` attribute can also be used with DataBinding in the following manner

e.g  `app:user_status="@{user.status}"`  a developer can also use different objects according to their use case. The attribute will continue to work as long as receives string parameter


| StatusIndicator field element | Relevant attributes/methods | 
| ---- | ---- | 
| User Status | `app:user_status`\n\n`# setUserStatus(@NonNull String)` | 




### 3. BadgeCount

The BadgeCount component can be used to show an unread count. The Developer can use it in different scenarios according to their use case.

![](https://res.cloudinary.com/developerhub/image/upload/v1623199436/v2_5163/fyjgwxur8bnsrfdptujb.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199441/v2_5163/a0olda1hxdfc5zzhkhaq.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199452/v2_5163/jfd5qdnspjs9rlex8pe4.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199453/v2_5163/offkl9ruip67njuszpx9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199454/v2_5163/hj6jlw4aac1sdkuayaqu.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199459/v2_5163/kd2dqevhzpu3tjdmvseg.gif)

Add the following code to your `layout.xml`

```java
<com.cometchat.pro.uikit.BadgeCount
                android:id="@+id_messageCount"
                android:layout_width="wrap_content"
                app:count="2"
                android:layout_height="wrap_content"_>
```




The count can be set dynamically using the `setCount` method. The `setCount` method takes an int as a parameter.

```java
BadgeCount badgeCount = findViewById(R.id.badgecount);
   
holder.badgeCount.messageCount.setCount(conversation.getUnreadMessageCount());
```





### Common Feature

The BadgeCount component provides different attributes and methods to control the behavior and appearance of the BadgeCount view.

The attribute `app: count` can also be used with DataBinding

```xml
 ___ example with conversation object
    
    <com.cometchat.pro.uikit.BadgeCount
                android:id="@+id_messageCount"
                android:layout_width="wrap_content"
                app:count="@{conversation.unreadMessageCount}"
                android:layout_height="wrap_content"_> 
```





| BadgeCount field element | Relevant attributes/methods | 
| ---- | ---- | 
| Count | `app:count`\n\n`# setCount(int)` | 
| Count Size | `app:count_size`\n\n`# setCountSize(float)` | 
| Count Background Color | `app:count_background_color`\n\n`# setCountBackground(@ColorRes color)` | 
| Count Color | `app:count_color`\n\n` setCountSize(float)` | 




### 4. CometChatUserList

The `CometChatUserList` is a list of users present in your CometChat app. You can use the List for your app development.

![](https://res.cloudinary.com/developerhub/image/upload/v1623199436/v2_5163/fyjgwxur8bnsrfdptujb.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199441/v2_5163/a0olda1hxdfc5zzhkhaq.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199452/v2_5163/jfd5qdnspjs9rlex8pe4.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199453/v2_5163/offkl9ruip67njuszpx9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199454/v2_5163/hj6jlw4aac1sdkuayaqu.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199459/v2_5163/kd2dqevhzpu3tjdmvseg.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199464/v2_5163/tmbcwqzmz4guphdnpiim.jpg)



### Note about `CometChatUserList` using with DataBinding:

Your project should have DataBinding enabled. You can use `CometChatUserList` using DataBinding in the following manner

In your `layout.xml`  add the following code :

```xml
  <data>
            <import type="androidx.recyclerview.widget.LinearLayoutManager"_>
            <import type="androidx.databinding.ObservableList"_>
            <import type="com.cometchat.pro.models.User"_>
    
            <variable
                name="userList"
                type="ObservableList&lt;User&gt;" _>
    
        <_data>
    
        <com.cometchat.pro.uikit.CometChatUserList
            android:id="@+id_cometchatUserList"
            android:layout_width="match_parent"
            app:userlist="@{userList}"
            app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager" 
            android:layout_height="match_parent" _>
```



In your corresponding activity or fragment  add the following code

```java
 ObservableArrayList<User> userList=new ObservableArrayList<>();
 binding.setUserList(userList);
```



For getting the list of users you can use `UsersRequestBuilder()`. Visit the below link for more details on how to retrieve a list of users.



In `onSuccess` of the `fetchNext` method you can set the data the `ObservableArrayList` you have created. The advantage of using the `ObservableArrayList` is one doesn't have to manually set the data on `binding.setUserList(userList);`   every time you get a new set of data.


```java

 usersRequest.fetchNext(new CometChat.CallbackListener<List<User>>() {
      @Override
    public void onSuccess(List <User> list) {
      Log.d(TAG, "User list received: " + list.size());
          userList.addAll(list);
        __update the ObservableArrayList here 
      }
    @Override
    public void onError(CometChatException e) {
     Log.d(TAG, "User list fetching failed with exception: " + e.getMessage());
      }
    });
```





### Note About `CometChatUserList` Without DataBinding

If you are not using DataBinding in your project you can use the `CometChatUserList` in the following manner.
In your `layout.xml`  add the following code

```xml
  <com.cometchat.pro.uikit.CometChatUserList
      android:id="@+id_cometchatUserList"
      android:layout_width="match_parent"    
      app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager" 
      android:layout_height="match_parent" _>

```



In your corresponding activity or fragment.

```java
CometChatUserList cometChatUserList=findViewById(R.id.cometchatUserList);
 cometChatUserList.setUserList(list);
    __ list: fetched using the UsersRequestBuilder
```



For getting the list of users you can use UsersRequestBuilder(). Visit the below link for more details on [Retrieve Users](https://www.cometchat.com/docs/v3/android-chat-sdk/users-retrieve-users)



### Note About Using `UserItemClickListener`

For getting the click event of `CometChatUserList` you can make use of `UserItemClickListener` class.

```java
cometchatUserList.setItemClickListener(new UserItemClickListener() {
      @Override
      public void setItemClickListener(User user, int position) {
        Toast.makeText(getContext(),user.getName(), Toast.LENGTH_SHORT).show();
                      __ perform your action here
         }
    
      @Override
      public void setItemLongClickListener(User user, int position) {
        Toast.makeText(getContext(),user.getName(), Toast.LENGTH_SHORT).show();
                     __ perform your action here
        }
    });
```






### Common Usage

The `CometChatUserList` component provides different properties to control the behavior of
`CometChatUserList` view.

| CometChatUserList field elements | Relevant attributes/methods | 
| ---- | ---- | 
| Update List | `# setUserList(List<User>)` | 
| Update | `# update (User)` | 
| Remove | `# remove(String)` | 
| Add | `# add(User)` | 




### 5. CometChatGroupList

The `CometChatGroupList` is a custom class that provides UI for a list of groups. You can use the  List for your app development.

![](https://res.cloudinary.com/developerhub/image/upload/v1623199436/v2_5163/fyjgwxur8bnsrfdptujb.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199441/v2_5163/a0olda1hxdfc5zzhkhaq.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199452/v2_5163/jfd5qdnspjs9rlex8pe4.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199453/v2_5163/offkl9ruip67njuszpx9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199454/v2_5163/hj6jlw4aac1sdkuayaqu.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199459/v2_5163/kd2dqevhzpu3tjdmvseg.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199464/v2_5163/tmbcwqzmz4guphdnpiim.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199465/v2_5163/vvgidcwyxlmd7pjkykiq.jpg)



### Note About `CometChatGroupList` Using With DataBinding
In your `layout.xml`  add the following code snippet

```java
    <data>
    
            <import type="androidx.recyclerview.widget.LinearLayoutManager"_>
            <import type="androidx.databinding.ObservableList"_>
            <import type="com.cometchat.pro.models.Group"_>
    
            <variable
                name="groupList"
                type="ObservableList&lt;Group&gt;" _>
    
        <_data>
    
        <com.cometchat.pro.uikit.CometChatGroupList
            android:id="@+id_cometchatGroupList"
            android:layout_width="match_parent"
            app:grouplist="@{groupList}"
            app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager"
            android:layout_height="match_parent" _>

```



In your corresponding activity or fragment .

```java
 ObservableArrayList<Group> groupList=new ObservableArrayList<>();
    binding.setGroupList(groupList);
```



For getting the list of groups you can use `GroupsRequestBuilder()`.Visit the below link for more details on how to retrieve a list of group.



In `onSuccess` of the `fetchNext` method you can set the data the `ObservableArrayList` you have created. The advantage of using the `ObservableArrayList` is one doesn't have to manually set the data on `binding.setGroupList(groupList);`   every time you get a new set of data.

```java
 groupsRequest.fetchNext(new CometChat.CallbackListener<List<Group>>() {
      @Override
      public void onSuccess(List <Group> list) {
        Log.d(TAG, "Groups list fetched successfully: " + list.size());
            groupList.addAll(list);
         __ update the ObservableArrayList here
    
      }
      @Override
      public void onError(CometChatException e) {
        Log.d(TAG, "Groups list fetching failed with exception: " + e.getMessage());
      }
    });
```





### Note About `CometChatGroupList` Without DataBinding

If you are not using DataBinding in your project you can use the `CometChatGroupList` in the following manner.
In your `layout.xml`  add the following code

```xml
 <com.cometchat.pro.uikit.CometChatGroupList
            android:id="@+id_cometchatGroupList"
            android:layout_width="match_parent"
            app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager"
            android:layout_height="match_parent" _>
```



In your corresponding activity or fragment

```java
 CometChatGroupList cometChatGroupList = findViewById(R.id.cometchatGroupList);
 cometChatGroupList.setGroupList(list);
    __ list: fetched using the GroupsRequestBuilder
```



You can refer to how to [Retrieve Groups](https://www.cometchat.com/docs/v3/android-chat-sdk/groups-retrieve-groups).



### Note About Using `GroupItemClickListener`

For getting the click event of `CometChatGroupList` you can make use of `GroupItemClickListener` class.

```java
 cometChatGroupList.setItemClickListener(new GroupItemClickListener() {
    @Override
    public void setItemClickListener(Group group, int position) {
      Toast.makeText(getContext(),group.getName(), Toast.LENGTH_SHORT).show();
                    __ perform your action here
        }
    
     @Override
   public void setItemLongClickListener(Group group, int position) {
      Toast.makeText(getContext(),group.getName(), Toast.LENGTH_SHORT).show();
                      __ perform your action here
        }
    });
```





### Common Usage

The `CometChatGroupList` component provides different properties to control the behavior of
`CometChatGroupList` view. You can perform different operations like an update, remove, add, etc.

| CometChatGroupList field elements | Relevant attributes/methods | 
| ---- | ---- | 
| Update List | `# setGroupList(List<Group>)` | 
| Update | `# update (Group)` | 
| Remove | `# remove(String)` | 
| Add | `# add(Group)` | 




### 6.CometChatConversationList

You can use the `CometChatConversationList` to get a list of all the users and groups in which the logged-in user has made any conversation.


![](https://res.cloudinary.com/developerhub/image/upload/v1623199436/v2_5163/fyjgwxur8bnsrfdptujb.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199441/v2_5163/a0olda1hxdfc5zzhkhaq.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199452/v2_5163/jfd5qdnspjs9rlex8pe4.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199453/v2_5163/offkl9ruip67njuszpx9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199454/v2_5163/hj6jlw4aac1sdkuayaqu.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199459/v2_5163/kd2dqevhzpu3tjdmvseg.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199464/v2_5163/tmbcwqzmz4guphdnpiim.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199465/v2_5163/vvgidcwyxlmd7pjkykiq.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199467/v2_5163/t4cqkve2lc4x4kmjsqi4.jpg)



### Note about `CometChatConversationList` using with DataBinding

In your `layout.xml`  add the following code.

```xml
    <data>
    
            <import type="androidx.recyclerview.widget.LinearLayoutManager"_>
            <import type="androidx.databinding.ObservableList"_>
            <import type="com.cometchat.pro.models.Conversation"_>
    
            <variable
                name="conversationList"
                type="ObservableList&lt;Conversation&gt;" _>
    
        <_data>
    
        <com.cometchat.pro.uikit.CometChatConversationList
            android:id="@+id_cometchatConversationList"
            android:layout_width="match_parent"
            app:conversationlist="@{conversationList}"
            app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager"
            android:layout_height="match_parent" _>

```



In your corresponding activity or fragment.

```java
 ObservableArrayList<Conversation> conversationList=new ObservableArrayList<>();
  binding.setConversationList(conversationList);
```



For getting the list of conversation you can use `ConversationsRequestBuilder()` .visit the below link for more details on how to retrieve a list of conversation



In `onSuccess` of the `fetchNext` method you can set the data the `ObservableArrayList` you have created. The advantage of using the `ObservableArrayList` is one doesn't have to manually set the data on `binding.setConversationList(conversationList);` every time you get a new set of data.

```java
conversationsRequest.fetchNext(new CometChat.CallbackListener<List<Conversation>>() {
  @Override
    public void onSuccess(List<Conversation> conversations) {
       __ Handle list of conversations
        conversationList.addAll(conversations); 
    __ update ObservableArrayList list here
  }

  @Override
    public void onError(CometChatException e) {
    __ Handle failure
  }
});
```





### Note About `CometChatConversationList` Without DataBinding

If you are not using DataBinding in your project you can use the `CometChatConversationList` in the following manner.
In your `layout.xml`  add the following code

```xml
    <com.cometchat.pro.uikit.CometChatConversationList
            android:id="@+id_cometchatConversationList"
            android:layout_width="match_parent"     
            app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager"
            android:layout_height="match_parent" _>
```



In your corresponding activity or fragment

```java
    CometChatConversationList cometChatConversationList = findViewById(R.id.cometchatConversationList);

  cometChatConversationList.setConversationList(conversations);
    __ list: fetched using the ConversationsRequestBuilder
```



In `onSuccess` of the `fetchNext` method of  `ConversationsRequestBuilder`, you can set the data.
You can refer how to [Retrieve Conversations](https://www.cometchat.com/docs/v3/android-chat-sdk/messaging-retrieve-conversations)



### Note About Using `ConversationItemClickListener`

For getting the click event of `CometChatConversationList` you can make use of the `ConversationItemClickListener` class.

```java
cometchatConversationList.setItemClickListener(new ConversationItemClickListener() {
   @Override
 public void setItemClickListener(Conversation conversation, int position) {
                __ perform your action here 
      }
    
     @Override
 public void setItemLongClickListener(Conversation conversation, int position) {
                    __ perform your action here 
     }
 });
```





### Common Usage

The `CometChatConversationList` component provides different properties to control the behavior of the `CometChatConversationList` view. You can perform different operations like an update, remove, add, etc

| CometChatConversationList field elements | Relevant attributes/methods | 
| ---- | ---- | 
| Update List | `# setConversationList(List<Conversation>)` | 
| Update | `# update (Conversation)` | 
| Remove | `# remove(Conversation)` | 
| Add | `# add(Conversation)` | 





### 7. CometChatCallList

You can use the CometChatCallList to get a list of all the calls made by the logged-in user to other users and groups.



![](https://res.cloudinary.com/developerhub/image/upload/v1623199436/v2_5163/fyjgwxur8bnsrfdptujb.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199441/v2_5163/a0olda1hxdfc5zzhkhaq.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199452/v2_5163/jfd5qdnspjs9rlex8pe4.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199453/v2_5163/offkl9ruip67njuszpx9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199454/v2_5163/hj6jlw4aac1sdkuayaqu.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199459/v2_5163/kd2dqevhzpu3tjdmvseg.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199464/v2_5163/tmbcwqzmz4guphdnpiim.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199465/v2_5163/vvgidcwyxlmd7pjkykiq.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199467/v2_5163/t4cqkve2lc4x4kmjsqi4.jpg)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199470/v2_5163/qnzzgxfcbqtpg66thm1n.jpg)

You can use the `CometChatCallList` in the following manner.

In your `layout.xml`  add the following code :

```xml
<com.cometchat.pro.uikit.CometChatCallList
        android:id="@+id_cometchatGroupList"
        android:layout_width="match_parent"
        app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager"
        android:layout_height="match_parent" _>
```



In your corresponding activity or fragment

```java
CometChatCallList cometChatCallList = findViewById(R.id.cometchatCallList);
```



In `onSuccess` of the `fetchNext` method of  `MessagesRequestBuilder`  you can set the data. You need to add `setCategory(CometChatConstants.CATEGORY_CALL)` in your `MessagesRequestBuilder` to fetch only call messages

You can refer an **example here.**

```java
if (messagesRequest == null)
{
	messagesRequest = new MessagesRequest.MessagesRequestBuilder().setCategory(CometChatConstants.CATEGORY_CALL).setLimit(30).build();
}
messagesRequest.fetchPrevious(new CometChat.CallbackListener<List<BaseMessage>>() {
  @Override
  public void onSuccess(List<BaseMessage> baseMessages) {
    _*Since the call list received like messages i.e top with older and 
    bottom with the latest message. We will reverse the list *_
    Collections.reverse(baseMessages);
    cometCallList.setCallList(baseMessages);
  }
  @Override
    public void onError(CometChatException e) {
    __Error Message 
  });
```






### Note About Using `CallItemClickListener`:

For getting the click event of `CometChatCallList` you can make use of `ItemClickListener` class.

There are two events given by `CometChatCallList`.

This event is performed when click on User or Group item displayed in call list.

```java
cometChatCallList.setItemClickListener(new OnItemClickListener<Call>() {
		@Override
		public void OnItemClick(Call var, int position) {
		  __ perform your action here
	  }
});
```



This event is performed when click on call icon visible after each Group or User
item in call list.

```java
cometChatCallList.setItemCallClickListener(new OnItemClickListener<Call>() {
       @Override
       public void OnItemClick(Call var, int position) {
						__ perform your action here
			  }
});
```





### Common Usage:

The `CometChatCallList` component provides different properties to control the behavior of the `CometChatCallList` view. You can perform different operations like an update, remove.


| CometChatCallList field elements | Relevant attributes/methods | 
| ---- | ---- | 
| Update List | setCallList(List&lt;BaseMessage&gt;) | 
| Update | update (Call) | 
| Remove | remove(Call) | 

