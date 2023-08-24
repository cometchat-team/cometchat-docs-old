## Retrieve the List of Group Members

In order to fetch the list of groups members for a group, you can use the `GroupMembersRequest` class. To use this class i.e to create an object of the `GroupMembersRequest` class, you need to use the `GroupMembersRequestBuilder` class. The `GroupMembersRequestBuilder` class allows you to set the parameters based on which the groups are to be fetched.

The `GroupMembersRequestBuilder` class allows you to set the below parameters:

The `GUID` of the group for which the members are to be fetched must be specified in the constructor of the `GroupMembersRequestBuilder` class.

### Set Limit

This method sets the limit i.e. the number of members that should be fetched in a single iteration.

```java
GroupMembersRequest groupMembersRequest = new GroupMembersRequest.GroupMembersRequestBuilder(GUID)
  .setLimit(limit)
  .build();
```

```kotlin
val groupMembersRequest = GroupMembersRequestBuilder(GUID)
  .setLimit(limit)
  .build()
```



### Set Search Keyword

This method allows you to set the search string based on which the group members are to be fetched.

```java
GroupMembersRequest groupMembersRequest = new GroupMembersRequest.GroupMembersRequestBuilder(GUID)
  .setSearchKeyword("abc")
  .build();
```

```kotlin
val groupMembersRequest = GroupMembersRequestBuilder(GUID)
  .setSearchKeyword("abc")
  .build()
```



### Set Scopes

This method allows you to fetch group members based on the specified scopes.

```java
List<String> scopes = new ArrayList<>();
scopes.add("admin");
scopes.add("moderator");
GroupMembersRequest groupMembersRequest = new GroupMembersRequest.GroupMembersRequestBuilder(GUID)
  .setScopes(scopes)
  .build();
```

```kotlin
val scopes: MutableList<String> = ArrayList()
scopes.add("admin")
scopes.add("moderator")
val groupMembersRequest = GroupMembersRequestBuilder(GUID)
  .setScopes(scopes)
  .build()
```



Finally, once all the parameters are set to the builder class, you need to call the `build()` method to get the object of the `GroupMembersRequest` class.

Once you have the object of the `GroupMembersRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `GroupMember` objects containing N number of members depending on the limit set.

```java
private GroupMembersRequest groupMembersRequest = null;
private String GUID = "GUID";
private int limit = 30;

groupMembersRequest = new GroupMembersRequest.GroupMembersRequestBuilder(GUID).setLimit(limit).build();

groupMembersRequest.fetchNext(new CometChat.CallbackListener<List<GroupMember>>(){
  @Override
  public void onSuccess(List<GroupMember> list) {
    Log.d(TAG, "Group Member list fetched successfully: " + list.size());
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Group Member list fetching failed with exception: " + e.getMessage());
  }

});
```

```kotlin
var groupMembersRequest:GroupMembersRequest?=null
val GUID:String="GUID"
val limit:Int=30

groupMembersRequest=GroupMembersRequest.GroupMembersRequestBuilder(GUID).setLimit(limit).build()

groupMembersRequest?.fetchNext(object:CometChat.CallbackListener<List<GroupMember>>(){
  override fun onSuccess(p0: List<GroupMember>?){
    Log.d(TAG, "Group Member list fetched successfully: " + p0?.size)
  }
  override fun onError(p0: CometChatException?) {
    Log.d(TAG, "Group Member list fetching failed with exception: " + p0?.message)
  }
})
```

