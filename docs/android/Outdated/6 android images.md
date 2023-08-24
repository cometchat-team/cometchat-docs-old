
![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199393/v2_5163/sfod5x11uy6m97fw1fmk.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199393/v2_5163/sfod5x11uy6m97fw1fmk.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199402/v2_5163/jq3gahoumithwejxyaj9.png)





The CometChat Kitchen Sink Library depends on two major libraries. i.e CometChatPro SDK and Kingfisher. Also, to use CometChat Kitchen Sink users must create an app in CometChat Dashboard.

___


## Create an app in CometChat Dashboard

[Signup for CometChat](https://app.cometchat.io/login) and then:

Create a new app: Enter a name & region then hit the + button
Head over to the API Keys section and click on the Create API Key button
Enter a name and select the scope as Auth Only
Now note the API Key, App ID, and Region Code.

___


## Add CometChatPro dependancy

CometChatPro SDK supports installation through Cocoapods. To Add CometChatPro dependancy. Kindly, [Click here.](https://prodocs.cometchat.com/docs/ios-quick-start)

___


## Add Kingfisher dependancy

Kingfisher is a powerful, pure-Swift library for downloading and caching images from the web. It provides you a chance to use a pure-Swift way to work with remote images in your next app.



```swift
target 'MyApp' do

  pod 'Kingfisher', '~> 5.0'

end
```



___


## Add Request Authorization

Prepare your app for this requirement by providing justification strings. The justification string is a localizable message that you add to your app's Info.plist file to tell the user why your app needs access to the user's photo library, Camera, Microphone. Then, App prompts the user to grant permission for access, the alert displays the justification string you provided, in the language of the locale selected on the user's device. You can do this as follows:

```text
<key>NSAppTransportSecurity<_key>
  <dict>
	  <key>NSAllowsArbitraryLoads<_key>
	  <true _>
  <_dict>
<key>NSCameraUsageDescription<_key>
	<string>$(PRODUCT_NAME) need access to the camera in order to update your avatar<_string>
<key>NSPhotoLibraryUsageDescription<_key>
	<string>$(PRODUCT_NAME) need access to the Photo Library in order to send Media Messages<_string>
<key>NSMicrophoneUsageDescription<_key>
	<string>$(PRODUCT_NAME) need access to the Microphone in order to connect Audio_Video call <_string>

```





![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199393/v2_5163/sfod5x11uy6m97fw1fmk.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199402/v2_5163/jq3gahoumithwejxyaj9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199406/v2_5163/p4rv3kh0b2deq72g93es.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199393/v2_5163/sfod5x11uy6m97fw1fmk.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199402/v2_5163/jq3gahoumithwejxyaj9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199406/v2_5163/p4rv3kh0b2deq72g93es.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199415/v2_5163/b2ghu0ayduhmyisqylnq.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199393/v2_5163/sfod5x11uy6m97fw1fmk.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199402/v2_5163/jq3gahoumithwejxyaj9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199406/v2_5163/p4rv3kh0b2deq72g93es.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199415/v2_5163/b2ghu0ayduhmyisqylnq.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199416/v2_5163/c4axo5ymgjzdl03efktb.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199393/v2_5163/sfod5x11uy6m97fw1fmk.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199402/v2_5163/jq3gahoumithwejxyaj9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199406/v2_5163/p4rv3kh0b2deq72g93es.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199415/v2_5163/b2ghu0ayduhmyisqylnq.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199416/v2_5163/c4axo5ymgjzdl03efktb.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199419/v2_5163/kfexo6dcnmgpxnzaou1w.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199393/v2_5163/sfod5x11uy6m97fw1fmk.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199402/v2_5163/jq3gahoumithwejxyaj9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199406/v2_5163/p4rv3kh0b2deq72g93es.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199415/v2_5163/b2ghu0ayduhmyisqylnq.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199416/v2_5163/c4axo5ymgjzdl03efktb.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199419/v2_5163/kfexo6dcnmgpxnzaou1w.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199421/v2_5163/x5j26ji3mh7neyfpu9n8.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199393/v2_5163/sfod5x11uy6m97fw1fmk.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199402/v2_5163/jq3gahoumithwejxyaj9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199406/v2_5163/p4rv3kh0b2deq72g93es.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199415/v2_5163/b2ghu0ayduhmyisqylnq.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199416/v2_5163/c4axo5ymgjzdl03efktb.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199419/v2_5163/kfexo6dcnmgpxnzaou1w.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199421/v2_5163/x5j26ji3mh7neyfpu9n8.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199423/v2_5163/lpcrgvgpd9t4qvjhwizy.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199393/v2_5163/sfod5x11uy6m97fw1fmk.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199402/v2_5163/jq3gahoumithwejxyaj9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199406/v2_5163/p4rv3kh0b2deq72g93es.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199415/v2_5163/b2ghu0ayduhmyisqylnq.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199416/v2_5163/c4axo5ymgjzdl03efktb.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199419/v2_5163/kfexo6dcnmgpxnzaou1w.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199421/v2_5163/x5j26ji3mh7neyfpu9n8.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199423/v2_5163/lpcrgvgpd9t4qvjhwizy.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199425/v2_5163/hbwtnytyglv0aipl3ko0.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199393/v2_5163/sfod5x11uy6m97fw1fmk.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199402/v2_5163/jq3gahoumithwejxyaj9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199406/v2_5163/p4rv3kh0b2deq72g93es.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199415/v2_5163/b2ghu0ayduhmyisqylnq.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199416/v2_5163/c4axo5ymgjzdl03efktb.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199419/v2_5163/kfexo6dcnmgpxnzaou1w.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199421/v2_5163/x5j26ji3mh7neyfpu9n8.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199423/v2_5163/lpcrgvgpd9t4qvjhwizy.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199425/v2_5163/hbwtnytyglv0aipl3ko0.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199431/v2_5163/gfagd0etji3bzbhwvysf.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199393/v2_5163/sfod5x11uy6m97fw1fmk.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199402/v2_5163/jq3gahoumithwejxyaj9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199406/v2_5163/p4rv3kh0b2deq72g93es.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199415/v2_5163/b2ghu0ayduhmyisqylnq.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199416/v2_5163/c4axo5ymgjzdl03efktb.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199419/v2_5163/kfexo6dcnmgpxnzaou1w.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199421/v2_5163/x5j26ji3mh7neyfpu9n8.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199423/v2_5163/lpcrgvgpd9t4qvjhwizy.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199425/v2_5163/hbwtnytyglv0aipl3ko0.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199431/v2_5163/gfagd0etji3bzbhwvysf.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199434/v2_5163/dmd3zlm023c3lez9jsp2.png)



![](https://res.cloudinary.com/developerhub/image/upload/v1623199359/v2_5163/srmkwduao0ln2tu5ndil.gif)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199360/v2_5163/tn5wz5sh1dv2pox9eknl.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199372/v2_5163/rbcaaakg72pio9jfh9km.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199382/v2_5163/hdxhl9twwtqz4ba6fhhm.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199393/v2_5163/sfod5x11uy6m97fw1fmk.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199402/v2_5163/jq3gahoumithwejxyaj9.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199406/v2_5163/p4rv3kh0b2deq72g93es.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199415/v2_5163/b2ghu0ayduhmyisqylnq.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199416/v2_5163/c4axo5ymgjzdl03efktb.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199419/v2_5163/kfexo6dcnmgpxnzaou1w.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199421/v2_5163/x5j26ji3mh7neyfpu9n8.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199423/v2_5163/lpcrgvgpd9t4qvjhwizy.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199425/v2_5163/hbwtnytyglv0aipl3ko0.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199431/v2_5163/gfagd0etji3bzbhwvysf.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199434/v2_5163/dmd3zlm023c3lez9jsp2.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199435/v2_5163/jxoxscw3hqsfe65owhly.png)
