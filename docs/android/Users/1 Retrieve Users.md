## Retrieve Logged In User Details

You can get the details of the logged-in user using the `getLoggedInUser()` method. This method can also be used to check if the user is logged in or not. If the method returns `null`, it indicates that the user is not logged in and you need to log the user into CometChat.

```java
User user = CometChat.getLoggedInUser();
```

```kotlin
val user = CometChat.getLoggedInUser()
```



This method will return a `User` object containing all the information related to the logged-in user.

## Retrieve List of Users

In order to fetch the list of users, you can use the `UsersRequest` class. To use this class i.e to create an object of the UsersRequest class, you need to use the `UsersRequestBuilder` class. The `UsersRequestBuilder` class allows you to set the parameters based on which the users are to be fetched.

The `UsersRequestBuilder` class allows you to set the below parameters:

### Set Limit

This method sets the limit i.e. the number of users that should be fetched in a single iteration.

```java
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(30)
  .build();
```

```kotlin
val usersRequest = UsersRequestBuilder()
  .setLimit(30)
  .build()
```



### Set Search Keyword

This method allows you to set the search string based on which the users are to be fetched.

```java
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
.setLimit(limit)
.setSearchKeyword("abc")
.build();
```

```kotlin
val usersRequest = UsersRequestBuilder()
  .setLimit(limit)
  .setSearchKeyword("abc")
  .build()
```



### Search In

This method allows you to define in which user property should the searchKeyword be searched. This method only works in combination with `setSearchKeyword()`. By default the keyword is searched in both UID & Name.

```java
List<String> searchInList = new ArrayList<>();
searchInList.add("uid");

UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(20)
  .setSearchKeyword("super")
  .searchIn(searchInList)
  .build();
```

```kotlin
val searchInList: MutableList<String> = ArrayList()
searchInList.add("uid")

val usersRequest = UsersRequestBuilder()
  .setLimit(20)
  .setSearchKeyword("super")
  .searchIn(searchInList)
  .build()
```



### Set Status

The status based on which the users are to be fetched. The status parameter can contain one of the below two values:

- CometChat.USER_STATUS.ONLINE - will return the list of only online users.
- CometChat.USER_STATUS.OFFLINE - will return the list of only offline users.

If this parameter is not set, will return all the available users.

```java
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(limit)
  .setUserStatus(UsersRequest.USER_STATUS_ONLINE)
  .build();
```

```kotlin
val usersRequest = UsersRequestBuilder()
  .setLimit(limit)
  .setUserStatus(UsersRequest.USER_STATUS_ONLINE)
  .build()
```



If this parameter is not set, will return all users.

### Hide Blocked Users

This method is used to determine if the blocked users should be returned as a part of the user list. If set to `true`, the user list will not contain the users blocked by the logged-in user.

```java
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(limit)
  .hideBlockedUsers(true)
  .build();
```

```kotlin
val usersRequest = UsersRequestBuilder()
  .setLimit(limit)
  .hideBlockedUsers(true)
  .build()
```



### Set Roles

This method allows you to fetch the users based on multiple roles.

```java
List<String> roles = new ArrayList<>();
roles.add("role1");
roles.add("role2");
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(limit)
  .setRoles(roles)
  .build();
```

```kotlin
val roles: MutableList<String> = ArrayList()
roles.add("role1")
roles.add("role2")
val usersRequest = UsersRequestBuilder()
  .setLimit(limit)
  .setRoles(roles)
  .build()
```



### Friends Only

This property when set to true will return only the friends of the logged-in user.

```java
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(limit)
  .friendsOnly(true)
  .build();
```

```kotlin
val usersRequest = UsersRequestBuilder()
  .setLimit(limit)
  .friendsOnly(true)
  .build()
```



### Set Tags

This method accepts a list of tags based on which the list of users is to be fetched. The list fetched will only contain the users that have been tagged with the specified tags.

```java
List<String> tags = new ArrayList<>();
tags.add("tag1");
tags.add("tag2");
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(limit)
  .setTags(tags)
  .build();
```

```kotlin
val tags: MutableList<String> = ArrayList()
tags.add("tag1")
tags.add("tag2")
val usersRequest = UsersRequestBuilder()
  .setLimit(limit)
  .setTags(tags)
  .build()
```



### With Tags

This property when set to true will fetch tags data along with the list of users.

```java
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(limit)
  .withTags(true)
  .build();
```

```kotlin
val usersRequest = UsersRequestBuilder()
  .setLimit(limit)
  .withTags(true)
  .build()
```



### Set UIDs

This method accepts a list of UIDs based on which the list of users is fetched. A maximum of 25 users can be fetched.

```java
List<String> uids = new ArrayList<>();
uids.add("superhero1");
uids.add("superhero2");
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(limit)
  .setUIDs(uids)
  .build();
```

```kotlin
val uids: MutableList<String> = ArrayList()
uids.add("superhero1")
uids.add("superhero2")
val usersRequest = UsersRequestBuilder()
  .setLimit(limit)
  .setUIDs(uids)
  .build()
```



### Sort By

This method allows you to sort the User List by a specific property of User. By default the User List is sorted by `status => name => UID` . If `name` is pass to the `sortBy()` method the user list will be sorted by `name => UID`.

```java
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(20)
  .sortBy(CometChatConstants.SORT_BY_NAME)
  .build();
```

```kotlin
val usersRequest = UsersRequestBuilder()
  .setLimit(20)
  .sortBy(CometChatConstants.SORT_BY_NAME)
  .build()
```



### Sort By Order

This method allows you to sort the User List in a specific order. By default the user list is sorted in ascending order.

```java
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(20)
  .sortByOrder(CometChatConstants.SORT_ORDER_DESCENDING)
  .build();
```

```kotlin
val usersRequest = UsersRequestBuilder()
  .setLimit(20)
  .sortByOrder(CometChatConstants.SORT_ORDER_DESCENDING)
  .build()
```



Finally, once all the parameters are set to the builder class, you need to call the `build()` method to get the object of the `UsersRequest` class.

Once you have the object of the `UsersRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `User` objects containing X number of users depending on the limit set.

```java
private UsersRequest usersRequest = null;
private int limit = 30;

usersRequest = new UsersRequest.UsersRequestBuilder().setLimit(limit).build();

usersRequest.fetchNext(new CometChat.CallbackListener<List<User>>() {
  @Override
  public void onSuccess(List <User> list) {
    Log.d(TAG, "User list received: " + list.size());
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "User list fetching failed with exception: " + e.getMessage());
  }
});
```

```kotlin
var usersRequest: UsersRequest? = null
val limit = 30

usersRequest = UsersRequestBuilder().setLimit(limit).build()

usersRequest.fetchNext(object : CallbackListener<List<User?>>() {
  override fun onSuccess(list: List<User?>) {
    Log.d(TAG, "User list received: " + list.size)
  }

  override fun onError(e: CometChatException) {
    Log.d(TAG, "User list fetching failed with exception: " + e.message)
  }
})
```



## Retrieve Particular User Details

To get the information of a user, you can use the `getUser()` method.

```java
private String UID = "UID";

CometChat.getUser(UID, new CometChat.CallbackListener<User>() {
  @Override
  public void onSuccess(User user) {
    Log.d(TAG, "User details fetched for user: " + user.toString());
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "User details fetching failed with exception: " + e.getMessage());
  }
});
```

```kotlin
val UID:String="UID"

CometChat.getUser(UID,object :CometChat.CallbackListener<User>(){
  override fun onSuccess(p0: User?) {
    Log.d(TAG, "User details fetched for user: " + p0?.toString())
  }

  override fun onError(p0: CometChatException?) {
    Log.d(TAG, "User details fetching failed with exception: " + p0?.message)
  }
})
```



The `getUser()` method takes the following parameters:

| Parameter | Description | 
| ---- | ---- | 
| `UID` | The UID of the user for whom the details are to be fetched | 


On success, the `User` object containing the details of the user is returned.

## Get online user count

To get the total count of online users for your app, you can use the `getOnlineUserCount()` method.

```java
CometChat.getOnlineUserCount(new CometChat.CallbackListener<Integer>() {
  @Override
  public void onSuccess(Integer count) {
    Log.d(TAG, "Online users : " + count);
  }

  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Error : " + e.getMessage());
  }
});
```

```kotlin
CometChat.getOnlineUserCount(object : CallbackListener<Int>() {
  override fun onSuccess(count: Int) {
    Log.d(TAG, "Online users : $count")
  }

  override fun onError(e: CometChatException) {
    Log.d(TAG, "Error : " + e.message)
  }
})
```

