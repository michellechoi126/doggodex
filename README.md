# Doggodex

## Product Description
The Doggodex is a platform to learn more about dogs. This would be a great tool for someone who just wants to learn about all different breeds of dogs or wants to research specific facts to make sure they are picking the right dog if they are looking to own a dog in the near future.

## Link To Deployed App:
https://doggodex.netlify.app

## TOC:

- [User Stories](#user-stories)
- [App Images](#app-screenshots)
- [Wireframes](#wireframes)
- [API Usage Examples](#api-usage-examples)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)


## User Stories

_**MVP Features**_
- _As a user, I want to see a list of all the dog breeds with available information so that I know what my options are._
- _As a user, I want to be able to click into a specific dog breed name so that I can learn more about that specific breed._

_**Future Features to Enhance UX**_
- _As a user, I want to be able to filter the list of dogs based on specific requirements I am looking for, such as weight or lifespan; so that I can narrow my search down more efficiently._
- _As a user, I want to be able to search for specific breeds by name, so that if I already have a few a breeds in mind that I want to learn more about, I can find them directly._
- _As a user, I want to be able to 'favorite' a dog that I come across and compile the dogs in a 'favorites' list, so that I can refer back to the list in my final decision._
- _As a user, I want to be able to shift through mutliple images of the breed I am interested in, so that I can see the variety of appearances one breed can have._


## App Images
<img width="1506" alt="Screen Shot 2022-03-08 at 12 44 33 PM" src="https://user-images.githubusercontent.com/97856494/157322062-95f68a64-087e-4f78-90d3-9ffb62ffbe43.png">
<img width="1508" alt="Screen Shot 2022-03-08 at 12 45 09 PM" src="https://user-images.githubusercontent.com/97856494/157322054-a37e9b7f-d6c2-4d0e-8b68-6281c23cd3fd.png">


## Wireframes
<img width="560" alt="Screen Shot 2022-03-08 at 1 34 59 PM" src="https://user-images.githubusercontent.com/97856494/157329112-c23fde9e-5f19-4d54-ac3b-48177c26e125.png">


## API Usage Examples
>The Dog API Link
https://thedogapi.com/

- Note: API Key is required for usage. Go to the link provided above to create an account in order to obtain your own unique API Key.

EXAMPLE:
Example Call for list of dog by breed.

"https://api.thedogapi.com/v1/breeds?api_key=[MY_API_KEY]"

### Example Data Response: Dog API

### API Res Example For List of Dogs By Breed

```json
{
    "weight": {
        "imperial": "6 - 13",
        "metric": "3 - 6"
    },
    "height": {
        "imperial": "9 - 11.5",
        "metric": "23 - 29"
    },
    "id": 1,
    "name": "Affenpinscher",
    "bred_for": "Small rodent hunting, lapdog",
    "breed_group": "Toy",
    "life_span": "10 - 12 years",
    "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    "origin": "Germany, France",
    "reference_image_id": "BJa4kxc4X",
    "image": {
        "id": "BJa4kxc4X",
        "width": 1600,
        "height": 1199,
        "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
    }
},
```


## Technologies Used
- Built with React v17.0.2
- Visual Studio Code v1.64.2
- JavaScript
- CSS


## Installation Instructions
Note: This app was created using Visual Studio Code Version 1.64.2. 
Fork and clone the repo using either SSH or HTTPS in a directory of your choice.

In terminal:

```
$ git clone [SSH/HTTPS KEY]
```
This is a react app and will require that relevant dependencies are downloaded. Move into the repo directory (named doggodex)

```
$ cd ./doggodex
````
and run npm install to download relevant dependencies:

```
$ npm install
```
Once dependencies are installed, open the app in your IDE of choice (this example uses Visual Studio Code terminal command). Then start the app with 'npm start': 

```
$ code . 
$ npm start
```
To view main files, open the src directory. App.js contains the main code for the app and relevant components can be found in the components folder. 
