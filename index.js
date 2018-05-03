<!-- 

WhatsHelp social widget by Sarmad Gardezi
Twitter: @SarmadGardezi
Email: maiL@sarmadgardezi.com

 -->
<script type="text/javascript">
    (function () {
        var options = {
            facebook: "874618785985682", // Facebook page ID
            whatsapp: "03001234567", // WhatsApp number
            viber: "sarmadgardezi", // Viber number
            snapchat: "sarmadgardezi", // Snapchat username
            line: "03001234567", // Line QR code URL
            telegram: "sarmadgardezi", // Telegram bot username
            vkontakte: "sarmadgardezi", // VKontakte page name
            email: "mail@sarmadgardezi..com", // Email
            sms: "sarmadgardezi", // Sms phone number
            call: "sarmadgardezi", // Call phone number
            company_logo_url: "//storage.whatshelp.io/widget/c6/c645/c645d712795dce40d99699dbed3910e3/30226238_1622056117908608_1444092385681565141_n.jpg", // URL of company logo (png, jpg, gif)
            greeting_message: "Hello, how may we help you? Just send us a message now to get assistance.", // Text of greeting message
            call_to_action: "Message us", // Call to action
            button_color: "#FF6550", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "facebook,whatsapp,viber,snapchat,line,telegram,vkontakte,sms,call,email", // Order of buttons
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
</script>
