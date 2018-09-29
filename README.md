###############################
CHEAT SHEET FOR MYSQL DATABASE:
###############################

  - VIEW TABLE: "SELECT * FROM table";
  - ADD ROW: "INSERT INTO table (columnName, columnName, columnName) VALUES (value, value, value)";
  - REMOVE ROW: "DELETE FROM table WHERE columnName = value";


###############################
###########  NOTES  ###########
###############################

## Run SCSS in React ##
npm run watch-css

## RECAPTCHA ##
6Lc7knAUAAAAAB9AX4LvTtY529exktQVTrcMICaO
6Lc7knAUAAAAAAuEJOyAo9wbUuzKn8IorrgnxWmN


- Since I'm still learning all of this, I'm going to go back and add comments EVERYWHERE I can tell exactly what is happening and when. 
- We'll be switching our database over to mysql, which I like better, but I'm going to keep the mongo files and everything so I can use both of them easily. It's not extremely useful but it's a good way for me to learn.
- I wanna be able to struture my code so that the front end doesn't need to know what databse it gets it's data from, it will still work
- I want to split up my api to clean it up and make it easier to read. Dry it up some, simplify
- I'm gonna separate the api into interfaces so my contact form and product form will have totally different endpoints. That will make it more of a real life situation and increase readibility.
- Have admin page be super small. you choose what you want to do from a dropdown and have it display only what you need.
- Also for the admin page, I want to list all the products and the product information so it will be easy to see what youve changed and what you want to change.




###############################
##########  THOUGHTS  #########
###############################
- At first, I thought I hated backend and only wanted to do front end. I now realize that I was just so stressed about being behind from my setback, that I hadn't taken time to fully understand everything I was doing. Now that I have almost caught up and I can look back over everything I've done, I'm extremely proud of what I've created. I can't believe I made my own api and running my own server and making my own http requests. It is so cool to me knowing that every single thing I am doing, I have done by myself. I was very intimidating at first and I was getting frustrated, but that makes me love what I do even more. The more intimidated you get by something, the better you feel when you conqour it. These notes arent neccisarily important to finishing the project, but they are a good way to take a second and look back at what I've accomplished so far and to plan the future. It gives me a great sense of pride in my work, even if the other 20 students n the lass are doing the same thing. Seeing how simple the project started (at the time it didnt seem simple at all) and seeing how complicated its gotten really boosts my confidence, which I definitely needed.

- I guess these are more "author's thoughts" than actual project notes.

- I've had to rush through a lot of my code because I had a set back and code got deleted so when I am done doing the requirments im going to gp back and make everything pretty. Im just in a rush right now to finish everything that is required so there is probably a lot of wetness. I tend to over complicate things when I rush, but if I slow down TOO much I over think things so I need to find the perfect balance.






###############################
#########  VERSION 1 ##########
###############################
Project: Build an e-commerce site using a static json file to pull in product information. Site must include:

-[X] Home page with slider images
-[X] Product page that allows the user to filter by product type and price
-[X] Contact page with form (doesn't need to work yet)
-[X] Site should be responsive for tablet & desktop. Bonus for small mobile.
-[X] Site should validate for WCAG 2.0 AA web accessibility

-[X] Design an API to serve the information needed for the eCommerce site
-[X] Must include plans for an admin to view/add/edit/delete products
-[X] Must include plans for an admin to view/add/edit/delete new admin users
-[X] Must include plans for an admin to view/delete information submitted through contact form
-[X] Add ability to add products from admin page
-[X] Add ability to edit and remove products from the admin page
-[X] Style display for product info on admin page



###############################
#########  VERSION 2 ##########
###############################
-[ ] Create another collection in db to store contact form data
-[ ] Add to my API to handle get/add contact form data
-[ ] Add ability to admin page to get contact form data
-[ ] Clean up folders and files holding my api to look better and function smoother
-[ ] Split up api into separate files to be cleaner and be able to switch between mongodb and mysql easily
-[ ] Make a login authintication for admin page using auth0
-[ ] Finish modal for products page to display all the product info of the product you select

