![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Sass Lab

## Intro

Now that you have all become sassy individuals, It's time to put your new learned skills to practice!

In the `starter-code` you have a small single page express site fully styled using vanilla css.

### Screenshot

![screen shot 2017-04-12 at 18 40 10](https://cloud.githubusercontent.com/assets/11501555/24971522/3997c2b8-1fb0-11e7-8b72-156a2e55f61b.png)

## Task

Your task is to convert the css into sass.

#### Things to consider;

- How could you use partials to break down the code into separate files?

- Could you structure these partials into directories to make the css even more structured?

- Where could you make variables for certain values that are used multiple times?

- When could you use nesting to make the css DRY and easier to read?

- Where could you use some of the cool syntax sass offers such as the `&` and `lighten() darken()`?

- Could you use a mixin or two?

Try to get the sass to be as structured and modular as possible.

## Tips

- When a partial is inside a directory, you must include the directory name before the file when importing inside `main.scss` e.g. `@import 'components/home';`

- If the css breaks in the browser, be sure to check the terminal for any errors in the scss files

- Have a look on google to see if you can find some mixins that are already written as they can be tricky to write from scratch

- Google "sass file structure" for some blog posts to see how the pro's do it


## Getting Started

Make sure you run `sass -watch scss/main.scss:css/style.css` start the compilation process.
