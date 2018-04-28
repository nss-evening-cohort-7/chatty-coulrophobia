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
## Running The Project
1. Clone down this repo and CD into project.
2. Install the [http-server](https://www.npmjs.com/package/http-server) plugin via [npm](https://www.npmjs.com/).
3. CD into the `lib` directory and run `npm install` via command line.

## Contributors

[John Achor](https://github.com/johnachor)

[Jeffrey Chen](https://github.com/jeffreychen2016)

[Andy Million](https://github.com/amillion3)

[Amanda Slayton](https://github.com/ASlayton)
