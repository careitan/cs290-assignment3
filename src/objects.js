/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  'use strict';
  return {'type':'Goldfish','brand':'Pepperidge Farm','flavor':'Cheddar','count':2000};
  //end your code
};

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog(user) {
  'use strict';
  this.user = user;
  this.received = new Array(0);
  this.sent = new Array(0);

  this.logMessage = function (messageText, direction) {
    if (direction === 0) {
      this.sent.push(messageText);
    } else if (direction === 1) {
      this.received.push(messageText);
    }
  };

  this.totalSent = function () {
    return this.sent.length;
  };

  this.totalReceived = function () {
    return this.received.length;
  };

  this.getSentMessage = function (n) {
    if (typeof n === 'number' && (n >= 0) && (n <= this.sent.length)) {
      var messageText = this.sent[(this.sent.length - 1) - n];
      return messageText;
    }
  };

  return
}
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function () {
  'use strict';
  if (this.received.length >= 1) {
    var messageText = this.received[0];
    return messageText;
  }
};
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog("BlackHatGuy");
myLog.logMessage("foo", 1);
myLog.logMessage("bar", 1);
myLog.logMessage("baz", 1);
//end your code
