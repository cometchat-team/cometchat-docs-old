This section will guide you to customise the main video container.

## Implementation

Once you have decided to implement [Default Calling](https://app.developerhub.io/cometchat-documentation/v3/android-chat-sdk/calling-default-calling) or [Direct Calling](https://app.developerhub.io/cometchat-documentation/v3/android-chat-sdk/calling-direct-calling) calling and followed the steps to implement them. Just few additional methods will help you quickly customize the main video container.

Please make sure your callSettings is configured accordingly for [Default Calling](https://app.developerhub.io/cometchat-documentation/v3/android-chat-sdk/calling-default-calling) or [Direct Calling](https://app.developerhub.io/cometchat-documentation/v3/android-chat-sdk/calling-direct-calling).

## Main Video Container Setting

The `MainVideoContainerSetting` Class is the required in case you want to customise the main video view. You need to pass the Object of the `MainVideoContainerSetting` Class in the `setMainVideoContainerSetting()` method of the `CallSettingsBuilder`.

| Setting | Description | 
| ---- | ---- | 
| `setMainVideoAspectRatio(String aspectRatio)` | This method is used to set the aspect ratio of main video.\n\n\n\nThe default value is **contain.**\n\n\n\nPossible Values:\n\n\n\n**1. CallSettings. ASPECT_RATIO_CONTAIN**\n\n\n**2. CallSettings. ASPECT_RATIO_COVER** | 
| `setFullScreenButtonParams(String position, Boolean visibility)` | This method is used to set the position & visibility parameter of the full screen button.\n\n\n\nBy default the full screen button is visible in the **bottom-right** position.\n\n\nPossible Values for **POSITION:**\n\n\n\n1. **CallSettings. POSITION_TOP_LEFT**\n2. **CallSettings. POSITION_TOP_RIGHT**\n3. **CallSettings. POSITION_BOTTOM_LEFT**\n4. **CallSettings. POSITION_BOTTOM_RIGHT**\n\n\nPossible Values for **VISIBILITY:**\n\n\n\n1. **true**\n2. **false** | 
| `setNameLabelParams(String position, Boolean visibility, String backgroundColor)` | This method is used to set the position, visibility & background color of the name label.\n\n\n\nBy default the name label is visible in the **bottom-left** position with a background-color **#333333**\n\n\nPossible Values for **POSITION:**\n\n\n\n1. **CallSettings. POSITION_TOP_LEFT**\n2. **CallSettings. POSITION_TOP_RIGHT**\n3. **CallSettings. POSITION_BOTTOM_LEFT**\n4. **CallSettings. POSITION_BOTTOM_RIGHT**\n\n\nPossible Values for **VISIBILITY:**\n\n\n\n1. **true**\n2. **false** | 
| `setZoomButtonParams(String position, Boolean visibility)` | This method is used to set the position, visibility of the zoom button.\n\n\n\nBy default the zoom button is visible in the **bottom-right** position.\n\n\nPossible Values for **POSITION:**\n\n\n\n1. **CallSettings. POSITION_TOP_LEFT**\n2. **CallSettings. POSITION_TOP_RIGHT**\n3. **CallSettings. POSITION_BOTTOM_LEFT**\n4. **CallSettings. POSITION_BOTTOM_RIGHT**\n\n\nPossible Values for **VISIBILITY:**\n\n\n\n1. **true**\n2. **false** | 
| `setUserListButtonParams(String position, Boolean visibility)` | This method is used to set the position, visibility of the user list button.\n\n\n\nBy default the user list button is visible in the **bottom-right** position.\n\n\nPossible Values for **POSITION:**\n\n\n\n1. **CallSettings. POSITION_TOP_LEFT**\n2. **CallSettings. POSITION_TOP_RIGHT**\n3. **CallSettings. POSITION_BOTTOM_LEFT**\n4. **CallSettings. POSITION_BOTTOM_RIGHT**\n\n\nPossible Values for **VISIBILITY:**\n\n\n\n1. **true**\n2. **false** | 


Example:

```java
MainVideoContainerSetting videoSettings = new MainVideoContainerSetting();

videoSettings.setMainVideoAspectRatio(CallSettings.ASPECT_RATIO_CONTAIN);
videoSettings.setFullScreenButtonParams(CallSettings.POSITION_BOTTOM_RIGHT, true);
videoSettings.setNameLabelParams(CallSettings.POSITION_BOTTOM_LEFT, true, "#333333");
videoSettings.setZoomButtonParams(CallSettings.POSITION_BOTTOM_RIGHT, true);
videoSettings.setUserListButtonParams(CallSettings.POSITION_BOTTOM_RIGHT, true);
```

```kotlin
val videoSettings = MainVideoContainerSetting()

videoSettings.mainVideoAspectRatio = CallSettings.ASPECT_RATIO_CONTAIN
videoSettings.setFullScreenButtonParams(CallSettings.POSITION_BOTTOM_RIGHT, true)
videoSettings.setNameLabelParams(CallSettings.POSITION_BOTTOM_LEFT, true, "#333333")
videoSettings.setZoomButtonParams(CallSettings.POSITION_BOTTOM_RIGHT, true)
videoSettings.setUserListButtonParams(CallSettings.POSITION_BOTTOM_RIGHT, true)
```

