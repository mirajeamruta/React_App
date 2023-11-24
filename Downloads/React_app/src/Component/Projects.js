import React, { useState } from 'react';


const Projects = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    {
      id: 1, name: '* JavaScript Tutorial',

      content:
        " * JavaScript is the worlds most popular programming language JavaScript is the programming language of the Web JavaScript is easy to learn. \n This tutorial will teach you JavaScript from basic to advanced. \n * Why Study JavaScript? \n * JavaScript is one of the 3 languages all web developers must learn  \n * HTML to define the content of web pages \n * CSS to specify the layout of web pages \n * JavaScript to program the behavior of web pages"
    },
    { id: 2, name: '* JavaScript Basic Contents', content: '* Content for JavaScript Basic Contents. \n JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. \n * It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.' },
    { id: 3, name: '* What is JSX', content: '* Content for What is JSX. \n * JavaScript XML \n <- JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code inside a JavaScript file. \n <- It was developed by Meta (formerly Facebook). The syntax of JSX resembles HTML, with opening and closing tags, attributes, and nested elements.\n For example, you might write the following JSX code to render a simple heading element: \n * const heading = <h1>Hello, JSX!</h1>; \n This code looks like HTML, but it’s JavaScript. The const keyword creates a new variable named heading, and the value of that variable is the result of the JSX expression.' },
    { id: 4, name: '* What is the difference between JSX and HTML', content: '* Content for the difference between JSX and HTML. \n HTML vs JSX Hypertext Markup Language (HTML) is the standard language for documents that determine the structure of a web page. \n HTML is a very important language in web development. Your code is either in HTML originally or compiles to it so browsers can read it. \n JSX, on the other hand, means JavaScript Syntax Extension or JavaScript XML as some like to put it. \n It was created as a syntactic sugar for React.createElement(). \n It is an extension of JavaScript that allows developers to write HTML right within JavaScript. So when youre writing JSX technically youre writing JavaScript and HTML together. \n Also, that means JavaScripts reserved keywords must be kept intact. And that is why the for attribute in HTML is HTMLFor in JSX, since for is one of the commonest JavaScript reserved keywords.\n In terms of support by browsers, HTML is supported by all of them. JSX, on the other hand, was never really intended to be, so you need a compiler like Babel or Webpack to transpile JSX into the JavaScript that browsers understand.'},
    // Add more data as needed
    {id: 5, name:'* Functions of Javascript', content:'Functions are one of the fundamental building blocks in JavaScript.\n * A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.'}
  ];

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (id) => {
    // Set the selected item based on the clicked id
    setSelectedItem(id);
  };

  const renderContentLines = (content) => {
    const lines = content.split('\n');
    return (
      <div>
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    );
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          { /* <a class="navbar-brand" href="#">Navbar</a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style={{ fontWeight: 600 }}>JavaScript T Points</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li> */}
              <li class="nav-item dropdown">
                {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a> */}
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            {/* <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>Search</button>
            </form> */}

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="sidenav">
        <ul>
          {filteredData.map(item => (
            <li key={item.id}>
              <a href={`#${item.name.replace(/\s+/g, '-')}`} onClick={() => handleItemClick(item.id)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="content">
        {/* Conditionally render content based on the selected item */}
        {selectedItem !== null && (
          <div style={{ marginLeft: "277px", marginTop: "-34px", fontWeight: "600" }}>
            <h2 style={{ marginLeft: "-13px", marginTop: "63px" }}>{data[selectedItem - 1].name}</h2>

            <p style={{ marginLeft: "294px", marginTop: "26px" }}></p>
            {renderContentLines(data[selectedItem - 1].content)}
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
