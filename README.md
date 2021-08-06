<h2 style="margin-bottom: 0" align='center'>API with GraphQL, NodeJS and TypeScript</h2>
<div align='center'><a href="https://app.rocketseat.com.br/me/tutods14">
<img alt="Rocketseat" src="https://img.shields.io/badge/Rocketseat-1E4174?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==" />
</a></div>

<br />

<div align="center">
  	<a href="#">
  		<img src="https://img.shields.io/badge/Node.js%20-%2320232a.svg?
&style=for-the-badge&logo=node.js&logoColor=339933" alt="NodeJS"/>
	</a>
  	<a href="#">
  		<img src="https://img.shields.io/badge/graphql%20-%2320232a.svg?
&style=for-the-badge&logo=graphql&logoColor=E434AA" alt="GraphQL"/>
	</a>
	<a href="#">
		<img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
	</a>
	<a href="#">
		<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VS Code" />
	</a>
	<a href="https://github.com/TutoDS/dowhile-graphql/stargazers">
    	<img alt="Stargazers" src="https://img.shields.io/github/stars/TutoDS/dowhile-graphql?style=for-the-badge">
	</a>
</div>

<p align='center'>This repo are creating following the <strong>Rocketseat Experts Club</strong> video <small>
(collection of 
DoWhile 
2020)</small>.</p>

<br />

<h3>🗒 Changes</h3>

- Implementing the relation on get list of videos.

<br />

<h3>⭐️ Examples of <em>Queries</em> & <em>Mutations</em></h3>

**1. Get Categories**

```
query Categories {
  categories {
    _id,
    name
  }
}
```

**2. Create Category**

```
mutation {
  createCategory(categoryInput: {
    name: "Name of my category",
    description: "Category description"
  }) {
    name,
    _id
  }
}
```

**3. Get Videos**

```
query Videos {
  videos {
    name,
    category {
      name
    }
  }
}
```

**4. Create Video**

```
mutation {
  createVideo(videoInput: {
    name: "Name of my video",
    description: "Description of my video",
    category: "<id of category>"
  }) {
    _id,
    name
  }
}
```

<br /><br />

<div align="right" style="margin-top: 50px">
<h3 style="font-weight: 300">
🧑🏻‍💻 About Me
</h3>

<a href="https://github.com/TutoDS" alt="TutoDS">
<img src="https://github.com/tutods.png" alt="Daniel Sousa @TutoDS" width="100px" style="border-radius: 100%">
<br />
 <sub><b>Daniel Sousa @TutoDS</b></sub>
</a>

<div style="margin: 20px 0" />

<a href="https://github.com/TutoDS">
      <img alt="Github Badge" src="https://img.shields.io/badge/-Github-1E4174?style=for-the-badge&logo=Github&logoColor=white&link=https://github.com/solrachix" />
</a>
<a href="https://www.linkedin.com/in/daniel-sousa-tutods/">
      <img alt="Linkedin" src="https://img.shields.io/badge/Linkedin-1E4174?style=for-the-badge&logo=Linkedin&logoColor=white" />
</a>
<a href="https://twitter.com/tutods/">
      <img alt="Twitter" src="https://img.shields.io/badge/Twitter-1E4174?style=for-the-badge&logo=twitter&logoColor=white" />
</a>
<a href="https://facebook.com/tutods2014">
      <img alt="Facebook" src="https://img.shields.io/badge/Facebook-1E4174?style=for-the-badge&logo=facebook&logoColor=white" />
</a>
<br />

<a href="https://youtube.com/tutods2014">
      <img alt="YouTube" src="https://img.shields.io/badge/YouTube-1E4174?style=for-the-badge&logo=youtube&logoColor=white" />
</a>
<a href="https://instagram.com/tutods2014">
      <img alt="Instagram" src="https://img.shields.io/badge/Instagram-1E4174?style=for-the-badge&logo=Instagram&logoColor=white" />
</a>
<a href="https://gitlab.com/jdaniel.asousa">
      <img alt="GitLab" src="https://img.shields.io/badge/GitLab-1E4174?style=for-the-badge&logo=GitLab&logoColor=white" />
</a>
<a href="https://app.rocketseat.com.br/me/tutods14">
      <img alt="Rocketseat" src="https://img.shields.io/badge/Rocketseat-1E4174?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==" />
</a>

</div>