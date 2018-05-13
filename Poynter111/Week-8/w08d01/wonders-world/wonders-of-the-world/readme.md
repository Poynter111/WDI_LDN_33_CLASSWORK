![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

## Angular UI-Router & Google Maps

### Introduction

Your task is to build an Angular app that consumes an Express API, containing the Seven Wonders of the World! The API has already been built for you, and the seeds file has been filled out.

<img width="996" alt="screen shot 2017-09-19 at 16 29 31" src="https://user-images.githubusercontent.com/12997768/30600829-5bdb8456-9d58-11e7-8c23-98914acd1c4c.png">

### Requirements

* Use `$http` to make requests to the API.
* Use [AngularUI Router](https://github.com/angular-ui/ui-router) to create a state for the 'index' page, which shows a list of all wonders.
* Create a second state for the 'show' page, which shows a single wonder.
* The url for the 'show' page should be `/wonders/:id` in the router, so you will need to use `$state.params` to load the correct wonder on the page.
* Your 'index' page should display when the app loads.
* You do not need to be able to create, edit or delete a wonder.

**Important:** When you make your `$http` request, you will need to prefix it with `/api`. For example, to get all wonders, the entire url will be `/api/wonders`.

<img width="996" alt="screen shot 2017-09-19 at 16 29 26" src="https://user-images.githubusercontent.com/12997768/30600639-ee0d47fc-9d57-11e7-9146-efa4ce8243d4.png">

### Bonus

* Use a custom Google Maps directive to show a map for each location on the **show** page.
* Create a custom 'card' directive for an individual wonder on the index page.
* Make your app fully RESTful. Add a 'new' state, with a form to create a new wonder. Add an 'edit' state, to update a wonder. Add a delete button for each wonder.
