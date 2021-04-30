# Project Overview

**PROJECT NAME:** Pocket Globe

**PROJECT AUTHOR:** Will Truscott

## Project Links

-[Github](https://github.com/wtruscott/project-2-329)
-[Deployed Site](https://confident-archimedes-fedab4.netlify.app/)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Inomplete
|Day 6| Present | Incomplete


## Project Description

I want to make a reference app for travalers or those who are just curious about some simple data on other countries. Users can click on or search for any existing country and get a profile of that country things like its capital, it's currency, and main language spoken. There will also be a page in the app called My Passport, that a user can add any country too. The idea is that you add countries that you've been to. I might additionally make an almost identical page that has countries you want to go to.


## API
---

API returns quite a bit of data on each country. I'm mostly interested in Capital, currency, language, maybe the surrounding countries, and the flag url. I have already tested and successfully been able to retrieve this data based on country name.

```js

[
  {
    "name": "Malawi",
    "topLevelDomain": [
      ".mw"
    ],
    "alpha2Code": "MW",
    "alpha3Code": "MWI",
    "callingCodes": [
      "265"
    ],
    "capital": "Lilongwe",
    "altSpellings": [
      "MW",
      "Republic of Malawi"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 16832910,
    "latlng": [
      -13.5,
      34.0
    ],
    "demonym": "Malawian",
    "area": 118484.0,
    "gini": 39.0,
    "timezones": [
      "UTC+02:00"
    ],
    "borders": [
      "MOZ",
      "TZA",
      "ZMB"
    ],
    "nativeName": "Malawi",
    "numericCode": "454",
    "currencies": [
      {
        "code": "MWK",
        "name": "Malawian kwacha",
        "symbol": "MK"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "ny",
        "iso639_2": "nya",
        "name": "Chichewa",
        "nativeName": "chiCheŵa"
      }
    ],
    "translations": {
      "de": "Malawi",
      "es": "Malawi",
      "fr": "Malawi",
      "ja": "マラウイ",
      "it": "Malawi",
      "br": "Malawi",
      "pt": "Malávi",
      "nl": "Malawi",
      "hr": "Malavi",
      "fa": "مالاوی"
    },
    "flag": "https://restcountries.eu/data/mwi.svg",
    "regionalBlocs": [
      {
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [
          
        ],
        "otherNames": [
          "الاتحاد الأفريقي",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika"
        ]
      }
    ],
    "cioc": "MAW"
  }
]

```

## Wireframes

- [Mobile Display](https://i.imgur.com/o3I0Ogl.jpg)
- [Tablet Display](https://i.imgur.com/BD1O2r3.jpg)
- [Desktop Display](https://i.imgur.com/j411T1i.jpg)

## Architecture

- [Architecture](https://i.imgur.com/FvwpT9S.jpg)

## Time/Priority Matrix 

[Time Priority Matrix](https://i.imgur.com/tIN17CO.jpg)

Total is 28 hours

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Project Deployment
- General layout, linking all pages together through React
- Set up functioning call to api
- Rendering the data
- Creating and setting state based off returns from api calls
- Creating and setting state based off of user interaction with project
- Creating a functioning Nav Bar
- Basic CSS and layout
- Simple responsive design


#### PostMVP 

- More complex Responsive design
- Nav is Hamburger in Mobile
- Rendering little flags for each country when they are in a list
- Searching for a country with a form
- Extra CSS styling 

## Functional Component


#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Deployment | H | .5hr | .5hr |
| Linking/ Layout | H | 2hrs | ?? |
| Api Call | H | 3hrs | ?? |  
| Rendering the Data| H | 3hrs| ?? | 
| Creating and setting State (Api Data) | H | 2hrs | ??|
| Creating and setting State (local Data) | H | 4hrs| ?? | 
| Create Nav Bar using Flex-Box| M | 1hr | ?? |
| Adding Basic CSS | H | 4hrs | ?? |
| Responsive Mobile First Design| M | 3hrs| ?? | 
| Total | H | 22hrs| ?? |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Increase Complexity of Responsive Design| L | 2hrs | ?? |
| Nav-Burger | M | 1hr | ?? |
| Little Flags Next to Each Countries Name | L | 3hrs | ?? |
| Serch Form | H | 4hrs | ?? |
| Bonus Styling | L | 4+hrs | ?? |
| Total | M | 14hrs| ?? |

## Additional Libraries

## Code Snippet

```


```


## Issues and Resolutions


