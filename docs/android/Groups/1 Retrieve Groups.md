## Retrieve List of Groups

_In other words, as a logged-in user, how do I retrieve the list of groups I've joined and groups that are available?_

In order to fetch the list of groups, you can use the `GroupsRequest` class. To use this class i.e to create an object of the `GroupsRequest` class, you need to use the `GroupsRequestBuilder` class. The `GroupsRequestBuilder` class allows you to set the parameters based on which the groups are to be fetched.

### Set Limit

This method sets the limit i.e. the number of groups that should be fetched in a single iteration.

```java
GroupsRequest groupsRequest = new GroupsRequest.GroupsRequestBuilder()
  .setLimit(limit)
  .build();
```

```kotlin
val groupsRequest = GroupsRequestBuilder()
  .setLimit(limit)
  .build()
```



### Set Search Keyword

This method allows you to set the search string based on which the groups are to be fetched.

```java
GroupsRequest groupsRequest = new GroupsRequest.GroupsRequestBuilder()
  .setSearchKeyWord("abc")
  .build();
```

```kotlin
val groupsRequest = GroupsRequestBuilder()
  .setSearchKeyWord("abc")
  .build()
```



### Joined Only

This method when used, will ask CometChat to only return the groups that the user has joined or is a part of.

```java
GroupsRequest groupsRequest = new GroupsRequest.GroupsRequestBuilder()
  .joinedOnly(true)
  .build();
```

```kotlin
val groupsRequest = GroupsRequestBuilder()
  .joinedOnly(true)
  .build()
```



### Set Tags

This method accepts a list of tags based on which the list of groups is to be fetched. The list fetched will only contain the groups that have been tagged with the specified tags.

```java
List<String> tags = new ArrayList<>();
tags.add("tag1");
tags.add("tag2");
GroupsRequest groupsRequest = new GroupsRequest.GroupsRequestBuilder()
  .setLimit(limit)
  .setTags(tags)
  .build();
```

```kotlin
val tags: MutableList<String> = ArrayList()
tags.add("tag1")
tags.add("tag2")
val groupsRequest = GroupsRequestBuilder()
  .setLimit(limit)
  .setTags(tags)
  .build()
```



### With Tags

This property when set to true will fetch tags data along with the list of groups.

```java
GroupsRequest groupsRequest = new GroupsRequest.GroupsRequestBuilder()
  .setLimit(limit)
  .withTags(true)
  .build();
```

```kotlin
val groupsRequest = GroupsRequestBuilder()
  .setLimit(limit)
  .withTags(true)
  .build()
```



Finally, once all the parameters are set to the builder class, you need to call the `build()` method to get the object of the `GroupsRequest` class.

Once you have the object of the `GroupsRequest` class, you need to call the `fetchNext()` method. Calling this method will return a list of `Group` objects containing N number of groups depending on the limit set.

The list of groups fetched will only have the public and password type groups. The private groups will only be available if the user is a member of that private group.

```java
private GroupsRequest groupsRequest = null;
private int limit = 30;

groupsRequest = new GroupsRequest.GroupsRequestBuilder().setLimit(limit).build();

groupsRequest.fetchNext(new CometChat.CallbackListener<List<Group>>() {
  @Override
  public void onSuccess(List <Group> list) {
    Log.d(TAG, "Groups list fetched successfully: " + list.size());
  }
  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, "Groups list fetching failed with exception: " + e.getMessage());
  }
});
```

```kotlin
val limit = 30
val groupsRequest = GroupsRequestBuilder().setLimit(limit).build()

groupsRequest.fetchNext(object : CallbackListener<List<Group?>>() {
  override fun onSuccess(list: List<Group?>) {
    Log.d(TAG, "Groups list fetched successfully: " + list.size)
  }

  override fun onError(e: CometChatException) {
    Log.d(TAG, "Groups list fetching failed with exception: " + e.message)
  }
})
```



## Retrieve Particular Group Details

_In other words, as a logged-in user, how do I retrieve information for a specific group?_

To get the information of a group, you can use the `getGroup()` method.

```java
private String GUID = "GUID";

CometChat.getGroup(GUID, new CometChat.CallbackListener<Group>() {
  @Override
  public void onSuccess(Group group) {
    Log.d(TAG, "Group details fetched successfully: " + group.toString());        
  }

  @Override
  public void onError(CometChatException e) { 
    Log.d(TAG, "Group details fetching failed with exception: " + e.getMessage());   

  }
});
```

```kotlin
val GUID : String = "GUID"

CometChat.getGroup(GUID,object :CometChat.CallbackListener<Group>(){
  override fun onSuccess(p0: Group?) {
    Log.d(TAG, "Group details fetched successfully: " + p0?.toString())
  }
  override fun onError(p0: CometChatException?) {
    Log.d(TAG, "Group details fetching failed with exception: " +p0?.message)
  }
})
```



| Parameter | Description | 
| ---- | ---- | 
| `GUID` | The GUID of the group for whom the details are to be fetched | 


On success, the `Group` object containing the details of the group is returned.

## Get online group member count

To get the total count of online users in particular groups, you can use the `getOnlineGroupMemberCount()` method.

```java
List<String> guids = new ArrayList<>();
guids.add("supergroup");
guids.add("supergroup1");

CometChat.getOnlineGroupMemberCount(guids, new CometChat.CallbackListener<HashMap<String, Integer>>() {
  @Override
  public void onSuccess(HashMap<String, Integer> stringIntegerHashMap) {
    Log.d(TAG, "Online count fetched successfully " + stringIntegerHashMap.toString());
  }

  @Override
  public void onError(CometChatException e) {
    Log.d(TAG, e.getMessage());
  }
});
```

```kotlin
val guids: MutableList<String> = ArrayList()
guids.add("supergroup")
guids.add("supergroup1")

CometChat.getOnlineGroupMemberCount(guids, object : CallbackListener<HashMap<String?, Int?>>() {
  override fun onSuccess(stringIntegerHashMap: HashMap<String?, Int?>) {
    Log.d(TAG, "Online count fetched successfully $stringIntegerHashMap")
  }

  override fun onError(e: CometChatException) {
    Log.d(TAG, e.message!!)
  }
})
```



This method returns a `Hashmap`  with the GUID of the group as the key and the online member count for that group as the value.