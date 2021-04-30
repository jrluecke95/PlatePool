# <p align="center"> Reactive Recipes </p>
<br>
<br>

## About this project 📝
<hr>
PlatePool is an app designed to allow users to buy and sell food to and from other local users. It has been coined "the Facebook Marketplace of food" allowing users to list extra food that they are cooking in order to make some money and share their passion for food with others.  This application was built primarily with React, Node.js, and Material UI. PlatePool utilizes SQL through Postgres and Sequelize for its database as well as AWS cloud technology to store images that users might upload. All of this allows users to easily create, share, edit, sell, and buy food on our application providing a seamless and effortless user experience.
<br>
<br>
<br>
<br>

## languages Used and technology 💻
<hr>
<br>
<img alt="React" src="https://img.icons8.com/officel/48/000000/react.png"/>
<img alt="Redux" src="https://img.icons8.com/color/48/000000/redux.png"/>
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="NodeJs" src="https://camo.githubusercontent.com/cc96d7d28a6ca21ddbb1f2521d751d375230ed840271e6a4c8694cf87cc60c14/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732532302d2532333433383533442e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465">
<img alt="PostgreSQL" src="https://img.icons8.com/color/48/000000/postgreesql.png" />
<img alt="Heroku" src="https://camo.githubusercontent.com/865b9493c6eccbcaedacf295b96adb9acd97e7088bdc982d8d225f3581bb4582/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6865726f6b752532302d2532333433303039382e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465">


<br>
<br>

## Frameworks Used
<hr>
<br>

<img alt="Express" src="https://camo.githubusercontent.com/87d8d88ac087f77c5b56509373a2dd49e5439722d7ad59c3f39a577907053152/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732532302d2532333430346435392e7376673f267374796c653d666f722d7468652d6261646765">
<img alt="Material-UI"src="https://img.icons8.com/color/48/000000/material-ui.png"/>

<br>
<br>
<br>

## Code snipets
<hr>


<p> This is a post component that was used to render each post to the main page. Information was being passed down to each post via the refs utility in React and rendered on each 'post box' so that users can get all the information they need at a glance and follow the link attached to each post if they want to learn more about the dish as well as order, rate, and comment on each plate.
<br>

```jsx
const Post = forwardRef(
  ({id, name, userId, username, description, userStreet, userCity, userState, userZipcode, profilePic }, ref) => {
    return (
      <div className="post" key={ref}>
        {console.log(description)}
        <div className="post__avatar">
          <Avatar src={profilePic} />
        </div>
        <div className="post__body" style={{color: 'white', backgroundColor: '#092F37'}}>
          <div className="post__header">
            <div className="post__headerText">
              <h3>
              <p className="plateName">{name}</p>{" "}
                <Button
                component={NavLink}
                to={`/${userId}/proSection`}
                type="submit">
                  <span className="post__headerSpecial">
                  @
                  {username}
                </span>
                </Button>
                {/* <p className="directions"><Directions postStreet={userStreet} postCity={userCity} postState={userState} postZipcode={userZipcode} /></p> */}
              </h3>
            </div>
            <div className="post__headerDescription">
              <p className="plateDescription"><strong>{description}</strong></p>
            </div>
          </div>
          <div className="post__footer">
            <Button 
            component={NavLink} to={`/${id}/plate`}
            type="submit">
            <div className="listingBtn">Go To Listing <i class="fas fa-arrow-circle-right"></i></div>
          </Button>

          </div>
          
        </div>
      </div>
    );
  }
);

```

<br>
<br>

## Challenges Faced
<hr>
Learning how to work with AWS's E3 service in order to get our images to store properly and be resusable while being hosted on Heroku was a large obstacle, but by reading AWS docs and following tutorials we were able to figure this issue out and get it working. 

We also had to make this website responsive through a lot of our own doing and did not rely on a responsive and styled template to do so. This took a lot of time and reading into the Material-UI docs to understand how to manipulate their default styling and alter exactly what we needed to. 

We all learned a lot through these processes and feel like we are much more well-rounded and confident developers as a result.
<br>
<br>
<br>
<br>


## List of API's used
<hr>
<br>

* [MapQuest API](https://developer.mapquest.com/documentation/)

<br>
<br>


## Authors
<hr>
 
* [Jake Luecke](https://github.com/jrluecke95)
* [Andres Icedo](https://github.com/andresicedo)
* [Willie Rose](https://github.com/willis719)
* [Kendall Oliver](https://github.com/kndllransom)

<br>
<br>

## License
<hr>


* [MIT](https://opensource.org/licenses/MIT)