# Project Overview

**PROJECT NAME:** Pocket Globe

**PROJECT AUTHOR:** Will Truscott

## Project Links

- [Github](https://github.com/wtruscott/project-2-329)
- [Deployed Site](https://confident-archimedes-fedab4.netlify.app/)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
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
| Linking/ Layout | H | 2hrs | 2hrs |
| Api Call | H | 3hrs | 8hrs |  
| Rendering the Data| H | 3hrs| 7hrs | 
| Creating and setting State (Api Data) | H | 2hrs | 6hrs|
| Creating and setting State (local Data) | H | 4hrs| 4hrs | 
| Create Nav Bar using Flex-Box| M | 1hr | .5hrs |
| Adding Basic CSS | H | 4hrs | 5hrs |
| Responsive Mobile First Design| M | 3hrs| 5hrs | 
| Total | H | 22hrs| 38hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Increase Complexity of Responsive Design| L | 2hrs | 5hrs |
| Nav-Burger | M | 1hr | 2hrs |
| Little Flags Next to Each Countries Name | L | 3hrs | NA |
| Search Form* | H | 4hrs | 2hrs |
| Bonus Styling | L | 4+hrs | 5hrs |
| Total | M | 14hrs| 14hrs |

Search Form did not come to fruition

## Additional Libraries

sass - sass will be helping me to implement the country specific text colors that i want to have for my Passport page and will make certain styling choices more accessable.

## Code Snippet

```
const loaded = () => {
  if(symbol!="NorthAmerica" && symbol!= "SouthAmerica") {
    return countries.map((country, index)=> (
      <Link to={`/country/${country.name}`}>
        <h2>{country.name}</h2>
      </Link>
    ))
  } else {
    if(symbol=="NorthAmerica") {
      return countries.filter((country) => {
        return country.subregion == "Northern America" || country.subregion == "Central America" || country.subregion == "Caribbean"
      }).map((country, index)=> (
        <Link to={`/country/${country.name}`}>
          <h2>{country.name}</h2>
        </Link>
      ))
    } else if(symbol=="SouthAmerica") {
      return countries.filter((country) => {
        return country.subregion == "South America"
      }).map((country, index)=> (
        <Link to={`/country/${country.name}`}>
          <h2>{country.name}</h2>
        </Link>
      ))
    }
  }

```
This snippet of code is the neccessary code to work around the api silly sorting method. North and South America are conjoined as one continent on the api and recquire futher functions to render them seperately.

## Issues and Resolutions

Issue: pretty consistantly a would recieve a page killing error messege that said export needed to be at the bottom of the page.

  Solution: this issue was always solved by finding the missing bracket or parenthesis in the code, a simple syntax error, but sometimes I'd be looking all over for an issue in the logic when all it was was a missing curly.


Issue: The biggest looming issue was that the API lumped North and South America together as one continent. technically no one was making me sort them out, but as my design was using pages based on continents I wanted them seperately. Beyond the seperation of the two continents this also made it a little tricky to figure out dynamic styling so that i could create classnames for each continent page consistantly.

Solution: using a bit of ternary operators, and an awareness of how the api's data was arranged, and with a second head to puzzle out the logic, i was able to create "if else" statements that filtered the results coming back from the joint continent "Americas", into those belonging to either North America, "subregion: Northern America or Central America or Caribbean" and those belonging to South America "subregion: South America"


Issue: "is not a function" I got this one a lot. Often due to mispelling, but occaisionally because I tried to use a method within a function without a callback.

Solution: check spelling and cases, ensure that the data being passed is actually a function, or if it needs a callback, that you have provided one.


Issue: I was wrote code that made the ID for each pages main div the string that was used as the symbol for the api call to get the data. This works, but if your string contains a space, as in "North America" you get a div on the page with id#North America. You cannot use this for styling due to the space, but you do not get any error when the id is created.

Solution: Really simple solution that took way to long to think of. I had to slightly retool my code because of the instances i was using symbol as a value but I changed "North America" to "NorthAmerica" this created a usable id.


Issue: I used react-media to implement responsive design. the example i had on how to write if statements for screen size would have recquired a ridiculous amout of code to be written.

Solution: The squad helped me puzzle out a three teired ternary operator that worked in place of rewitting the entire return statement three times.


Issue: When implementing CSS on my Currency Exchange coin I was having its individual elements flying all over the page. 

Solution: INSPECTOR TOOLS!!!! The coin is a div on the page with two nested components inside it. when I looked at the elements lsayout for the page there were a ludicrous amount of divs inside the main div. This was because I put each component in a div where it was created, then also in a div on the inside the main Currency Div. I backtracked through the code for the Country, Currency Exchange, and Form components to remove all the surplus divs. checking as i went that I didn't break the page. With the surplus divs taken care of Grid and Flexbox became usable.


Issue: set different Icons on continents page that varied with change of state. I was able to set state absolutely fine and console log that I had the value. I could hard-code that value and get an icon, but when I used "state" as the value no icon rendered. There were no errors, but also no icon.

Solution: I was setting state to a string of the icons "name" however these icons are imported with fornt awesome through a dependency and thus are variables. I needed to set state to the variable faGlobe not the string "faGlobe".

Issue: Images and scaling can be tough. when i tried to set height and width for the flags or continent pictures what works for one image will skew another. Especially with api data that I cannot doctor to make the initial images consistant.


Solution: There are multiple solutions that I found to work. For my flags, width was important but height was arbitrary due to the flags being almost the same shape. so i set a fixed width but made height auto. this allows the image to scale the height. Similarly by jumbotron has a fixed height but an auto width, I'm hidding overflow so the image doesn't squish up.
