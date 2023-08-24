
<iframe src="https://player.vimeo.com/video/364408871" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

The Email Notification extension helps you send email messages to your users when they have unread messages.

![](https://res.cloudinary.com/developerhub/image/upload/v1623199354/v2_5163/x1ozjnoxmqydta59xmxv.png)

After you've configured the extension, your users will receive email notifications for unread messages.

![](https://res.cloudinary.com/developerhub/image/upload/v1623199354/v2_5163/x1ozjnoxmqydta59xmxv.png)

![](https://res.cloudinary.com/developerhub/image/upload/v1623199355/v2_5163/g9xnnp8moq1acqoztvnx.png)

There are a few steps to activate this extension:

> Be sure to implement read receipts so that your users receive email notifications for only unread messages.



### Configure your backend to store emails

You can use our API to set private metadata for a user. We recommend adding this code where you call our user creation API.

The metadata is a JSON that should have the `@private` key present and should have the value `email` specified for the user. The format for the private metadata must be as follows:

```json
{
  "@private":
  {
    "email":"abc@xyz.com"
  }
}
```





### Setup SendGrid




### Step 1: Note your [SendGrid](https://www.sendgrid.com) API Key
Once you signup with SendGrid for an account, login and head over to the Settings -> API Key section. Please note the API Key; you'll need it when configuring the extension.



### Step 2: Configure your email template
Now go to the **Email API** -> **Dynamic Templates** and click on the **Create Dynamic Template** button. Give it a name, say "Email Notification". Now click on "Email Notification" and click on **Add Version**-> **Blank Template** and select the "Code Editor" option.

Paste the below-mentioned code for the email template and save it.
In the "Dynamic Templates" section, under your template name, you will find an ID for the email template you just created. Take note of that as well.

```html
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text_html; charset=UTF-8">
    <title>Simple Transactional Email<_title>
    <style>
    _* -------------------------------------
        INLINED WITH htmlemail.io_inline
    ------------------------------------- *_
    _* -------------------------------------
        RESPONSIVE AND MOBILE FRIENDLY STYLES
    ------------------------------------- *_
    @media only screen and (max-width: 620px) {
      table[class=body] h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
      }
      table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
        font-size: 16px !important;
      }
      table[class=body] .wrapper,
            table[class=body] .article {
        padding: 10px !important;
      }
      table[class=body] .content {
        padding: 0 !important;
      }
      table[class=body] .container {
        padding: 0 !important;
        width: 100% !important;
      }
      table[class=body] .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
      }
      table[class=body] .btn table {
        width: 100% !important;
      }
      table[class=body] .btn a {
        width: 100% !important;
      }
      table[class=body] .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important;
      }
    }

    _* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- *_
    @media all {
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
        line-height: 100%;
      }
      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
      }
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
      .btn-primary table td:hover {
        background-color: #34495e !important;
      }
      .btn-primary a:hover {
        background-color: #34495e !important;
        border-color: #34495e !important;
      }
      .senderName {
        font-weight: bold;
        font-size:0.8em;
        text-transform: uppercase;
        color: #666;
      }
    }
    <_style>
  <_head>
  <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;<_td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
          <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.<_span>
            <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                    <tr>
                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                        <p style="font-family: sans-serif; font-size: 25px; font-weight: bold; margin: 0; Margin-bottom: 30px;">While you were away...<_p>
                        
                        
                        <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                          <tbody>
                            
                     
{{#each messages}}
{{#if this.data.text}}
<tr>
                              <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 0px;padding-right: 10px;" width="50">
	<img src="{{this.data.entities.sender.entity.avatar}}" style="border-radius:100px;border:1px solid #eee;" height="50" width="50">
	<br><br>
	<_td>
<td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 7px;padding-bottom:0px;"><span class="senderName">{{this.data.entities.sender.entity.name}}<_span><br_>{{this.data.text}}<_td>
<_tr>
	{{_if}}
{{_each}}


<_tbody>
<_table>
                        
                        
                        <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box; margin-top:15px">
                          <tbody>
                            <tr>
                              <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                  <tbody>
                                    <tr>
                                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="https:__www.YOURSITE.com" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">Reply<_a> <_td>
                                    <_tr>
                                  <_tbody>
                                <_table>
                              <_td>
                            <_tr>
                          <_tbody>
                        <_table>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;margin-top:20px;color:#666;">To unsubscribe to these notifications, <a href="<%asm_group_unsubscribe_raw_url%>" style="color:#666">click here<_a>.<_p>
                      <_td>
                    <_tr>
                  <_table>
                <_td>
              <_tr>

            <!-- END MAIN CONTENT AREA -->
            <_table>

            <!-- START FOOTER -->
            <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">

                <tr>
                  <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                    Powered by <a href="https:__www.cometchat.com" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">CometChat<_a>
                  <_td>
                <_tr>
              <_table>
            <_div>
            <!-- END FOOTER -->

          <!-- END CENTERED WHITE CONTAINER -->
          <_div>
        <_td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;<_td>
      <_tr>
    <_table>
  <_body>
<_html>
```





### Step 3: Configure your Unsubscribe Group
An unsubscribe group will allow your users to unsubscribe to only chat email notifications and will allow you to continue to send other emails to that user via SendGrid. Under **Suppressions**, you will find **Unsubscribe Groups**. Create a new group and note down the ID; You will need to add this ID in *Unsubscribe Group ID* section while configuring Email notification extension.



### Activate Email Notification extension

You're all set! Go to your CometChat dashboard and activate the extension. Send a message to an offline user and watch them receive an email automagically!