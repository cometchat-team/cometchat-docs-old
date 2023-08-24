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

1. `setLimit(int limit)` - This method sets the limit i.e. the number of users that should be fetched in a single iteration.

```java
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder().setLimit(30).build();
```

```kotlin
val usersRequest = UsersRequestBuilder().setLimit(30).build()
```



2. `setSearchKeyword(String searchString)` - This method allows you to set the search string based on which the users are to be fetched.

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



3. `setUserStatus(String status)` - The user presence status based on which the users are to be fetched. The status parameter can contain one of the below two values:
a. `UsersRequest.USER_STATUS_ONLINE` - will return the list of only online users.
b. `UsersRequest.USER_STATUS_OFFLINE` - will return the list of only offline users.

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

4. `hideBlockedUsers(boolean hideBlockedUsers)` - This method is used to determine if the blocked users should be returned as a part of the user list. If set to `true`, the user list will not contain the users blocked by the logged-in user.

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



5. `setRole(String role)` - This method when set will only return the users that belong to the specified role.

```java
UsersRequest usersRequest = new UsersRequest.UsersRequestBuilder()
  .setLimit(limit)
  .setRole("admin")
  .build();
```

```kotlin
val usersRequest = UsersRequestBuilder()
  .setLimit(limit)
  .setRole("admin")
  .build()
```



6. `friendsOnly(boolean friendsOnly)` - This property when set to true will return only the friends of the logged-in user.

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
var usersRequest:UsersRequest?=null
val limit:Int=30

usersRequest=UsersRequest.UsersRequestBuilder().setLimit(limit).build()

usersRequest?.fetchNext(object :CometChat.CallbackListener<List<User>>(){
  override fun onSuccess(p0: List<User>?) {
    Log.d(TAG, "User list received: " + p0?.size)
  }

  override fun onError(p0: CometChatException?) {
    Log.d(TAG, "User list fetching failed with exception: " + p0?.message)
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