
![](https://res.cloudinary.com/developerhub/image/upload/v1623199346/v2_5163/l41uanjftrjw8h2qfoeb.png)

We hope you followed the instructions mentioned above and added necessary dependencies inside your app.

To integrate CometChat UI-KIT inside your app. Kindly follow the below steps:

1. Simply clone the UI-KIT Library from the [android-chat-ui-kit repository](https://github.com/cometchat-pro/android-chat-uikit).

2. Import `Ui Kit` Module from Module Settings.


*  Right-click on an **app** and go to **Open Module Settings.**

![](https://res.cloudinary.com/developerhub/image/upload/v1623199346/v2_5163/l41uanjftrjw8h2qfoeb.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199347/v2_5163/iw0l0i0tguoffq10dizf.png)

*  Click on **+** and select** Import Gradle Project** from Create New Module Window and click Next.

![](https://res.cloudinary.com/developerhub/image/upload/v1623199346/v2_5163/l41uanjftrjw8h2qfoeb.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199347/v2_5163/iw0l0i0tguoffq10dizf.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199349/v2_5163/a4wiaoeghu2c5v6vn1un.png)

* After that developer has to enter the path of `uikit` which he/she has downloaded and click on Finish.

![](https://res.cloudinary.com/developerhub/image/upload/v1623199346/v2_5163/l41uanjftrjw8h2qfoeb.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199347/v2_5163/iw0l0i0tguoffq10dizf.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199349/v2_5163/a4wiaoeghu2c5v6vn1un.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199351/v2_5163/idghayps42ieiajvhlnj.png)

* After following these steps `uikit` is successfully added in the project. Now to integrate the `uikit` in project you can copy and paste the following in * (app level)* **build.gradle**

```groovy
implementation project(path: ':uikit')
```



3. If the Library is added successfully, it will look like mentioned in the below image.


![](https://res.cloudinary.com/developerhub/image/upload/v1623199346/v2_5163/l41uanjftrjw8h2qfoeb.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199347/v2_5163/iw0l0i0tguoffq10dizf.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199349/v2_5163/a4wiaoeghu2c5v6vn1un.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199351/v2_5163/idghayps42ieiajvhlnj.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199353/v2_5163/oa9eop3va8l6o92etqho.png)

After successfully integrating UI Kit library, You can follow [UI Unified](https://www.cometchat.com/docs/v3/java-chat-ui-kit/android-ui-unified), [UI Screens](https://www.cometchat.com/docs/v3/java-chat-ui-kit/android-ui-screens) & [UI Components](https://www.cometchat.com/docs/v3/java-chat-ui-kit/android-ui-components)