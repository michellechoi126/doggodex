# Doggodex

## Project Description

The Doggodex is a platform to learn more about dogs. This would be a great tool for someone who just wants to learn about all different breeds of dogs or wants to research specific facts to make sure they are picking the right dog if they are looking to own a dog in the near future.

## Wireframes

### Home

![ALL Dogs](https://user-images.githubusercontent.com/97856494/156327380-e55882a7-8756-4b62-8e08-ac207bacfc50.jpg)

### Dog Details

![Dog Details](https://user-images.githubusercontent.com/97856494/156327365-5b743167-336a-4123-9424-1fa0300df6fe.jpg)

### MVP User Stories

_**MVP User Stories**_
- _As a user, I want to see a list of all the dog breeds with available information so that I know what my options are._
- _As a user, I want to be able to click into a specific dog breed name so that I can learn more about that specific breed._

_**Post MVP Stretch Goals**_
- _As a user, I want to be able to filter the list of dogs based on specific requirements I am looking for such as weight or lifespan, so that I can narrow my search down more efficiently._
- _As a user, I want to be able to search for specific breeds by name, so that if I already have a few a breeds in mind that I want to learn more about, I can find them directly._

## API

[The Dog API Documentation] (https://docs.thedogapi.com/)

#### Breed List Response
```json
[
    {
        weight: {
            imperial: "6 - 13",
            metric: "3 - 6"
        },
        height: {
            imperial: "9 - 11.5",
            metric: "23 - 29"
        },
        id: 1,
        name: "Affenpinscher",
        bred_for: "Small rodent hunting, lapdog",
        breed_group: "Toy",
        life_span: "10 - 12 years",
        temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        origin: "Germany, France",
        reference_image_id: "BJa4kxc4X",
        image: {
            id: "BJa4kxc4X",
            width: 1600,
            height: 1199,
            url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
        }
    },
    {
        weight: {
            imperial: "50 - 60",
            metric: "23 - 27"
        },
        height: {
            imperial: "25 - 27",
            metric: "64 - 69"
        },
        id: 2,
        name: "Afghan Hound",
        country_code: "AG",
        bred_for: "Coursing and hunting",
        breed_group: "Hound",
        life_span: "10 - 13 years",
        temperament: "Aloof, Clownish, Dignified, Independent, Happy",
        origin: "Afghanistan, Iran, Pakistan",
        reference_image_id: "hMyT4CDXR",
        image: {
            id: "hMyT4CDXR",
            width: 606,
            height: 380,
            url: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg"
        }
    }
]
```

## Component Hierarchy
![image](https://user-images.githubusercontent.com/97856494/156327376-b285f717-c657-4289-9465-d8640c95c6b2.jpg)

