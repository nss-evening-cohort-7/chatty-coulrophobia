# Chatty App

## Description
This is a basic messaging app that allows users to send messages, edit messages and delete messages. In addition, there are some custom features such as the emoji picker and custom theme creator.

## Technology
- HTML5
- CSS3
- JavaScript/ES6
- jQuery/Bootstrap
- Node.JS/Grunt/Browserify

## Screenshots
Here is the page upon loading. 5 existing messages are shown, each with a user name, timestamp created, timestamp edited (if needed), the message and two buttons (`edit` and `delete`).

![Page on- load](https://raw.githubusercontent.com/nss-evening-cohort-7/chatty-coulrophobia/master/images/screenshots/on-load.png)
___

Now our user has cleared out all the old messages and created 3 new ones. Note the different senders and use of emojis.

![3 new messages](https://raw.githubusercontent.com/nss-evening-cohort-7/chatty-coulrophobia/master/images/screenshots/new-messages.png)
___

The user has clicked on the `edit` button. The message text has been placed in the input box at the top of the window. In addition, the message being edited has been identified with a thick, red border.

![Editing a message](https://raw.githubusercontent.com/nss-evening-cohort-7/chatty-coulrophobia/master/images/screenshots/editing-message.png)
___

If a user clicks on the emoji in the input field, a dropdown of emojis appears. The user is able to pick one of many emojis to use in their messages to other users. The `npm` dependency [lsx-emojipicker](https://github.com/LascauxSRL/lsx-emojipicker) was used to create this functionality.

![Showing the emoji picker](https://raw.githubusercontent.com/nss-evening-cohort-7/chatty-coulrophobia/master/images/screenshots/emojis.png)
___

When the user clicks the `Custom` button, a modal appears. This allows the user to select any background color and text colors for the messages.

![Custom color theme creator modal](https://raw.githubusercontent.com/nss-evening-cohort-7/chatty-coulrophobia/master/images/screenshots/custom-1.png)
___

The user can preview their selection of colors by clicking on the eye button.

![Custom color theme creator modal](https://raw.githubusercontent.com/nss-evening-cohort-7/chatty-coulrophobia/master/images/screenshots/custom-2.png)
___

A stretch goal of ours was to build a chat bot that users could interact with. Depending on what phrases the users send, the chat bot would respond with a custom message. As well, there are various personalities that may respond, from DespairBot, to BobRossBot, to MomBot.

![Automated chat bot response](https://raw.githubusercontent.com/nss-evening-cohort-7/chatty-coulrophobia/master/images/screenshots/chat-bot-response.png)
___

A second strech goal was to build a filter to capture bad words. The user would be notified of their lack of civility and the word(s) in question would be identified.

![Bad word filter](https://raw.githubusercontent.com/nss-evening-cohort-7/chatty-coulrophobia/master/images/screenshots/bad-words.png)
___
## Running The Project
1. Clone down this repo and CD into project.
2. Install the [http-server](https://www.npmjs.com/package/http-server) plugin via [npm](https://www.npmjs.com/).
3. CD into the `lib` directory and run `npm install` via command line.
4. In the `lib` directory run the command `grunt`.
5. CD to the root of the directory and type `hs` to start the local http-server.
6. The terminal will give you a URL, such as `http://127.0.0.1:8081`, enter that address into your web browser.

## Contributors

[John Achor](https://github.com/johnachor)

[Jeffrey Chen](https://github.com/jeffreychen2016)

[Andy Million](https://github.com/amillion3)

[Amanda Slayton](https://github.com/ASlayton)
