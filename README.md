<h1 align="center" style="border-bottom: none">Tedooo-Feed</h1>
</br>

## Home Task 

Were adding a feed to our platform 🎉
Your task is to create the feed UI

Checkout the project Figma design for resources and measures:
https://www.figma.com/file/6Eng1j65GPf6TWo1tJDeaU/Home-Assignment?node-id=3%3A1027

User able to:
- See all feed items with infinite scrolling.
    - Feed must contain
    - User name
    - Shop name
    - Post text
    - Post images - up to 2 images (if exists)
    - Total likes
    - Total comments
    - Like and comment button
- Like and unlike a post.
    - The icon should show the current status
    - Total likes should be updated
- Every time the user view feed item, send impression
    - GET request to https://www.tedooo.com/?itemId={id}

Data:
- There is pagination and loading next 6 items every time
the user reaches the bottom of the screen.


## Screenshots

![Capture](https://user-images.githubusercontent.com/58606266/230786117-ef9cb626-609b-4068-a5ec-6ce74dc4effe.PNG)
![Capture2](https://user-images.githubusercontent.com/58606266/230786119-518d118a-ea25-4f01-bc8d-3a9717dc8c16.PNG)


### How to run this project locally :
- Install Node.js and NPM (Node Package Manager) on your machine. You can download and install them from the official Node.js website: https://nodejs.org/en/.
-  After downloading the source code from git repository, Open a terminal(Windows Command Prompt or PowerShell).
-  Navigate to source code folder and run the following commands:

    - `npm install` (Install the project dependencies)
    - `npm start`   (Start the development server)



### Created with:
* React
* TypeScript

### Helper Tools:
* GitHub
* Figma
