---
id: 5
title: More CSS
number: 5
dueDate: 2024-12-23
---

So the website you created in the last problem is pretty cool, but it's not very pretty. To make it look better, we need to use CSS.

## What is CSS?

CSS stands for Cascading Style Sheets. We use it to style our HTML. A CSS file looks like a list of rules, which tell the browser how to style specific elements on the page. In each rule, we have a selector, which is the element we want to style, and a declaration, which is the style we want to apply to it. The declaration looks like a python dictionary, with keys being the property we want to style, and values being the value we want to apply to it.

For example, if we want to style all the `<h2>` tags on the page, we can write the following rule:

```css
h2 {
  color: red;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
}
```

## Writing HTML to write CSS

With the CSS we've seen so far, we can only style entire types of elements at once. But what if we want to style only a few elements on the page? We might want to have a few buttons be action buttons with a different color, for example. To do this, we can use *classes* and *ids*. 

We add classes and ids to our HTML elements as attributes like this:

```html
<button class="action-btn">Click me</button>
<button id="submit-btn">Submit</button>
```

Now, in our CSS file, we can style the elements with the class `action-btn` and the id `submit-btn` like this:

```css
.action-btn {
  background-color: blue;
  color: white;
}

#submit-btn {
  background-color: green;
  color: white;
}
```

This gives us a lot more control over the styling of our page. To fully be ablet to take advantage of this, we can start using containers like the `<div>` tag to group elements together. For example, we could create cards like this to be all styled in a consistent way:

```html
<div class="card">
  <h2>Card Title</h2>
  <p>Card content</p>
</div>
```

Then, we could style the `.card` class in our CSS file like this:

```css
.card {
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
}
```

This allows us to style the cards in a consistent way, without having to style each one individually. When you're styling an element universally, you can use the element name as a selector like this: `h2 { ... }`. When you're styling a class, you can use the class name as a selector like this: `.card { ... }`. When you're styling an id, you can use the id name as a selector like this: `#submit-btn { ... }`. 

## The CSS File

In most cases, we will write our CSS in a separate file called `styles.css`. We can link this CSS file to our HTML file by adding the following line to the `<head>` tag of our HTML file:

```html
<link rel="stylesheet" href="./styles.css">
```lll

This will link the CSS file to our HTML file. In the file itself, we can simply just start writing CSS rules, no boilerplate needed!

## Common CSS Properties

Here's a mini-cheatsheet with some common CSS properties that you'll be using a lot:

### Basic Properties

- `color`: Changes the color of the text
- `background-color`: Changes the background color of an element
- `border`: Adds a border to an element. You can specify the width, style, and color of the border like this: `border: 1px solid black;`
- `border-radius`: Makes things rounded and pretty. You can specify the radius in pixels like this: `border-radius: 5px;`
- `box-shadow`: Adds a shadow. Specify the horizontal offset, vertical offset, blur radius, and color of the shadow like this: `box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);`
- `opacity`: Changes the opacity of an element. 0 is fully transparent, 1 is fully opaque.


#### CSS Colors

In CSS, colors can be specified in a few different ways:

- By name, like `red`, `blue`, `green`, etc. See this link for a [list of all named colors](https://www.w3schools.com/colors/colors_names.asp)
- By hexadecimal color code, like `#ff0000`, `#0000ff`, `#00ff00`, etc. - find more [here](https://coolors.co/colors) (my favorite source for aesthetic colors)
- By RGBA color code, like `rgba(255, 0, 0, 0.5)`, `rgba(0, 0, 255, 0.5)`, `rgba(0, 255, 0, 0.5)`, etc. (this is only really used for transparency)


### Text Properties

- `font-family`: Changes the font of the text (e.g. `Arial`, `Helvetica`, `sans-serif`)
- `font-size`: Changes the size of the text - don't forget to include the unit, like `16px`. In CSS, a best practice is to use `em` instead of `px` as it will scale with the size of the screen. 1em is usually 16px, and 2em is 32px, etc.
- `font-weight`: Changes the weight of the text (`normal`, `bold`, `lighter`, `bolder`, or any number between 100 and 900)
- `text-align`: Aligns the text inside an element (`left`, `right`, `center`)
- `text-decoration`: Adds a decoration to the text (`none`, `underline`, `overline`, `line-through`)
- `text-transform`: Changes the case of the text (`none`, `uppercase`, `lowercase`, `capitalize`)

### Spacing Properties

- `padding`: Adds padding to an element (space inside the border of the element)
- `margin`: Adds margin to an element (space outside the border of the element but before the next element)
- `width`: Changes the width of an element
- `height`: Changes the height of an element

Each of these can be specified in any unit of measurement, like `px`. You can also specify `padding-top`, `padding-right`, and so on to specify different padding for each side of the element if needed.


## Updating your website

Here's a quick rundown of how to get started styling your website!

1. In your pompompurin-website folder your index.html file is in, create a new file called `styles.css`.
2. In your index.html file, add the `<link>` tag from before to the `<head>` tag.
3. In your styles.css file, start writing CSS rules to style your website!
4. Here are a few ideas - you might have to change some of your HTML to make these work!
    - Change the background color of the page to something else (light yellow?)
    - Change the widths of the images
    - Change the font of the text
    - Make a card for each of pompompurin's friends!
5. When you're done, commit your changes and push them to GitHub again!

## Quick Tips

- Here's a [cheatsheet](https://web.stanford.edu/group/csp/cs21/csscheatsheet.pdf) for some useful CSS properties!
- Use `class` when you want to style multiple elements the same way. Use `id` when you want to style a single element uniquely.
- Google google google! I have only explained a few of the most common properties, but if you want to achieve something specific, find a solution online! I've found [this](https://www.w3schools.com/css/) to be a good resource.

