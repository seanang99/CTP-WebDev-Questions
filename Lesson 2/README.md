# Create your own Profile page
This week, we will learn html and css, and create our very own Profile / About-me page.

## Basic Structure of HTML page
Each html file will have `<!DOCTYPE html>` tag with a `<head>` and `<body>` tag. 
- `<head>` tag contains metadata, page title, links to stylesheet or other web programmes (e.g. Google Tag Manager...)
- `<body>` tag contains the main elements of the html file that will be displayed on the webpage

Let's start building our profile page. We'll code from top-down.

First, let's create a header and masthead. We'll include a profile picture and background picture.
- My theme is yellow and blue, but you're free to choose a colour palette that you fancy.

You may use the following sites to get a free image:
- Background Image: https://unsplash.com/
- Profile Picture: https://thispersondoesnotexist.com/ (if you want to use a random-generated photo)

Next, we can create some sections to introduce ourselves and where we are from. You may think of other things you want to share - they can be new sections. 

## Add in CSS
Let's style the page. We'll style each section at a time. We'll use the class names and element tags to identify which elements to style. 

We'll also use an eternal CSS and minimse inline or internal/embedded CSS.

CSS Checklist:
- Align elements to the center; Text should be centered with generous margin
- Add padding and margins
- Style background image to take the full width of the page
- Style profile picture - crop to a circle
- Style text (headings, paragraph, links)

## Add more sections in "More About Me"
Next add more sections to share about yourself. 
Here are some prompts:
- What are your favourite hobbies?
- What's your dream job?
- Why do you want to become a web developer?
- ...

## Add a Connect section
Next, let's create a connect section that allows visitors to write messages to us. 

1. Create a simple form with a textarea and submit button
2. You may reference the way I've styled my textarea or freestyle on your own. There are many ways to style the textarea and buttons. 
3. Use `mailto:example@email.com` to connect to an email client for the user to send an email to you. This is a "cheat" method because we don't have a backend that can help us handle the email/messaging.
 
### Enabling MAILTO
You may need to enable the MAILTO protocol. 

If you're using chrome to run your live server, follow these steps:
1. Go to `chrome://settings/handlers`
2. Check if there are any default handlers. If there are none, go to gmail.com
3. You should see a prompt beside the bookmark button which will ask you to "Allow Gmail (mail.google.com) to open all email links" -> select "Use Gmail" option
3a. This will allow us to utilise the gmail email client.
4. You may disable this after the project by deleting the protocol.

*Information extracted from: https://stackoverflow.com/questions/17517600/mailto-links-do-nothing-in-chrome-but-work-in-firefox/17647243#17647243*

## Footer
Lastly, let's create a footer with links to some of our social media accounts.

1. Use unordered list and `a` tag to link social media sites
2. Style the footer differently, with a contrasting colour
3. Footer should be at the bottom of the page

# Homework (Bonus)
Here are some possible projects that you would like to do:
- Create a page that uses parallex scrolling
- Parallex scroling is a web trend where the background content (i.e. image) is moved at a different speed than the foreground content while scrolling. 

*Ref:* https://www.w3schools.com/howto/howto_css_parallax.asp

2. BMI Calculator
- Create a web interface for a BMI calculator
- Use JavaScript to calculate BMI
*Ref:* https://github.com/sahandghavidel/HTML-CSS-JavaScript-projects-for-beginners/tree/main/projects/bmi-calculator
