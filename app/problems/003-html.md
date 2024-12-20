---
id: 3
title: Basics of HTML
number: 3
dueDate: 2024-12-21
---

## What is HTML?

HTML is the language that lets you create web pages. It defines the structure and content of the page, and is based around the idea of many **tags** that wrap around words.

## How HTML works

In HTML, you can create a page by writing a series of tags. Tags are surrounded by angle brackets, like `<tag>`, and are closed by a matching closing tag, like `</tag>`. Anything between the opening and closing tags is considered to be inside the tag. For example, `<p>This is a paragraph</p>` is a paragraph tag that contains the text "This is a paragraph". Tags can also have attributes, which are additional information about the tag. For example, `<a href="https://www.google.com">Google</a>` is an anchor tag that contains the text "Google" and has a `href` attribute that points to the Google website.

## A simple HTML page

Here is one of the simplest HTML pages you can make - every website you can make will have a similar structure. A lot of this code is boilerplate code that you don't need to worry about, but it needs to be there. I've commented what each part does, but you just need to be able to copy and paste this code into your file.

Every HTML page needs to start with a `<!DOCTYPE html>` tag, which tells us that this file is an HTML file. Right below this tag, we will always have the `html` tag, which defines the root of the document. All other tags will be inside this tag. The rest of the page is split up into two sections - the `head` and the `body`. The `head` section contains information about the page that won't be shown, like links to stylesheets, scripts, and other information. The `body` section contains the actual content of the page, and everything in it will be shown to the user.

```html
<!DOCTYPE html> <!-- start of the html file (btw, this is a comment) -->
<html lang="en"> <!-- the lang attribute tells the browser the page is in English -->
<head> 
    <meta charset="UTF-8"> <!-- metadata tag that tells the browser the character set used in the page (UTF-8 is standard) -->
    <title>Basic website!</title> <!-- the title is shown in the tab -->
</head>
<body> 
    <h1>Hello, World!</h1> <!-- heading 1 tag -->
    <p>This is a basic HTML website!</p> <!-- paragraph tag -->
</body>
</html>
```

This code will create a very basic website that looks like this:

> # Hello, World!
>
> This is a basic HTML website!

## Basic Tags

Here are a few basic tags you can use to create a page:

### Basic Elements

- `<h1>` to `<h6>`: headings ranging from largest (`<h1>`) to smallest (`<h6>`)
- `<p>`: paragraph text
- `<a href="https://coding-bunny.vercel.app">`: links (href is where the link goes). anything can go inside of the link tag, including images
- `<img src="https://coding-bunny.vercel.app/pompompurin.jpg">`: images (you can either use a local image in your folder by passing the *path* to the image, or an online image by passing the URL to the image)
- `<ul>`: unordered list (use `<li>` for each item in the list)
- `<ol>`: ordered list (use `<li>` for each item in the list)

### Text Formatting
- `<br>`: line break
- `<hr>`: horizontal line
- `<strong>`: bold text
- `<em>`: italic text

### Structural Elements
Don't worry too much about these, they'll be useful next lesson when we start styling the page

- `<div>`: division tag (used to group elements together)
- `<span>`: inline container for text

## What you need to do

We are going to create a simple website about **pompompurin!** On this website, we need to have a heading, a description of pompompurin, an a few images, and some interesting facts like his friends! Try to use as many of the tags we've learned as possible.

Follow these instructions to get started: 

1. Use `cd` to navigate into your `codingbunny` folder, create a new folder called `pompompurin-website`, and navigate into it.
2. Open this folder in VSCode, either by typing `code .` in the terminal, or through VSCode itself
3. Create a new file called `index.html`. Copy the boilerplate code from the example above into your file.
4. To see the file in real time, we need to download an extension called `Live Preview`. You can find it [here](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server). Press `Install` to install it and follow the instructions to add it to VSCode.
5. Once you've installed the extension, press `Command + Shift + P` (or go to `View -> Command Palette`) to open the command palette, and type `Live Preview: Show Preview (Internal Browser)` to see the file in real time on the right of your screen.
6. Try changing the text in the file to see how it changes on the screen.
7. You're now ready to start creating your website!
8. When you're done, commit your changes and push them to GitHub! Don't forget `git add *` to add all the files you've changed, and `git commit -m "Your message"` to commit your changes. Also send me a screenshot of your website!
