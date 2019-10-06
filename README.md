# homework3

Random Password Generator

This webpage showcases a random password generator, which is determined by user input to prompts and confirms.  The process begins with the user answering an initial question regarding how many characters their password will be.  Passwords must be between 8 and 128 characters.  If the user selects a number outside of that range, they are alerted of the desired range and asked the prompt again.  After selecting the amount of characters for the password,  the user answers 4 confirms asking if they would like uppercase letters, lowercase letters, special characters, and numbers in their passwords.  By confirming any of these questions, the user’s password will now have that type of character available for the password.  Once all of the prompts and confirms have been answered, a random password is generated and shown in the text area of the page.  

This random password generator is designed by combining preset arrays for each type of character based on whether or not they are confirmed.  If the user confirms a character type, it is placed in an empty array.  Once all confirms have been executed, a random password is generated using a for loop for the new array.  This loop will run for the amount of characters selected by the user in the first prompt.  Once the password has been generated it is placed in an HTML document via a query selector.

In addition to JavaScript, this page is also designed using a bootstrap template with a few elements of CSS.
