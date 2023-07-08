const imgSrc = ["https://as2.ftcdn.net/v2/jpg/02/05/66/49/1000_F_205664984_11Yvj3XlPfAxTwmwXTTtmi79OuhJjChb.jpg", "https://as2.ftcdn.net/v2/jpg/02/45/57/97/1000_F_245579784_Lypg35Mt7Voe4uxJtJcEQb4wWZMhWnEi.jpg", "https://i.pinimg.com/originals/02/ac/e3/02ace3d2a3ae4024c8b8353581fc0c41.png", "https://as1.ftcdn.net/v2/jpg/02/45/57/96/1000_F_245579674_XXzjXVvF8SaOU9nbDnxamHg7yt9heJN1.jpg", "https://previews.123rf.com/images/barrirret/barrirret1809/barrirret180900063/109924405-bright-abstract-mosaic-seamless-pattern-vector-background-for-design-and-decorate-backdrop.jpg", "https://as2.ftcdn.net/v2/jpg/02/89/41/33/1000_F_289413303_YKIoh6FoWzhOuYFU9AzxaouMRthoA04Y.jpg", "https://as2.ftcdn.net/v2/jpg/01/57/14/79/1000_F_157147947_4oBjSoFESXz7xX8fDsLJkqJS4VJJ2DVx.jpg", "https://as1.ftcdn.net/v2/jpg/01/57/14/86/1000_F_157148627_pjuZy7SH2X2OK8JFsNT3GLXzVUaqrVMW.jpg", "https://img.myloview.com/stickers/colored-abstract-marble-irregular-plastic-stony-mosaic-pattern-texture-background-with-white-grout-full-spectrum-rainbow-colors-400-81280133.jpg"];


export const projectsBundle = {
    "numProjects": 4,

    "project_4": {
        "imgSrc": imgSrc[2],
        "imgAlt": "dynamico",
        "title": "Dynamico",
        "description": `'Dynamico' is an interactive online portfolio for web developers, built using React, offering a blend of modern aesthetics and advanced functionality. It showcases the developer's past work with sections containing project-description, images, and links to live sites and GitHub repositories. Adhering to web accessibility standards, it provides an intuitive and engaging experience for all users. The 'About Me' section tells the developer's story and details their skills and interests. The 'Contact Me' section allows easy reach-out for potential collaborations via direct email and professional networks. More than just a display, 'Dynamico' is a testament to the developer's coding skills, design thinking, and passion for web development. In essence, it not only highlights the end product but also illuminates the creative journey and the process behind each project.`,
        "liveURL": "https://dgarg375.github.io",
        "sourceURL": "https://github.com/DGarg375/DGarg375.github.io",
        "techStack": ["nodejs", "react", "html", "javascript", "css", "blender", "json", "npm"],
    },
    "project_1": {
        "imgSrc": imgSrc[0],
        "imgAlt": "sceneloader",
        "title": "JSceneMaster",
        description: "JSceneMaster is a WebGL application aimed at managing and visualizing JSON-based 3D models and scenes. It allows loading, creation, rendering, and display of intricate JSON structures. Key features include vertex display mode for detailed manipulation of specific model points. Users can adjust properties like rotation, sizing, and movement on both entire scenes and individual nodes. The software provides precise control over lighting within the scene, significantly transforming the model's aesthetics. With a focus on user-centric design, JSceneMaster offers a robust and interactive toolset. This platform makes 3D model manipulation accessible and highly customizable, catering to designers, developers, and 3D modeling enthusiasts alike.",
        "liveURL": "https://jsonloader.onrender.com/",
        "sourceURL": "https://github.com/DGarg375/SceneAssembler",
        "techStack": ["webgl", "javascript", "css", "html"],
    },
    "project_2": {
        "imgSrc": imgSrc[1],
        "imgAlt": "xkcd",
        "title": "XKCD Comic Explorer",
        "description": "XKCD Explorer is a dynamic web development project that serves as a comprehensive portal for XKCD comics. The platform enables users to search by ID, ensuring easy access to specific entries. It also features a randomizer function, providing a delightful serendipitous discovery expereince for users. Additionally, XKCD Explorer supports sequential browsing, ensuring continuity and ease of navigation through the comic series. A standout feature is the display of each comic's metadata, enriching the user's understanding of the comic's context and creation. XKCD Explorer is a celebration of the iconic webcomic, providing an engaging and intuitive browsing experience for both new readers and long-time fans. With its focused functionalities, this project enhances accessibility and enjoyment of XKCD comics, showcasing the intersection of web development and digital artistry.",
        "liveURL": "https://xkcdcomics.onrender.com/",
        "sourceURL": "https://github.com/DGarg375/xkcd-comic-generator",
        "techStack": ["npm", "html", "css", "javascript", "react", "nodejs", "express"],
    },
    "project_3": {
        "imgSrc": imgSrc[6],
        "imgAlt": "lstore-db",
        "title": "HTAP based on L-Store",
        "description": "This project is a preliminary build for a single-threaded, in-memory database relational database system which includes capturing the data model, a simple SQL-like query interface, to bufferpool management (managing data in-memory). The Data Model stores the schema and instance for every table in columnar form. Bufferpool maintains data in-memory. The Query Interface offers data manipulation and querying capability such as select, insert, update, delete of a single key along with a simple aggregation query, namely, to return the summation of a single column for a range of keys.",
        "liveURL": "",
        "sourceURL": "https://github.com/DGarg375/HTAP-Database",
        "techStack": ["python", "sql", "docker", "kubernetes"],
    }
}

export const stackImagesURL = {
    "html": "./icons8-dev-windows-11/icons8-html.svg",
    "css": "./icons8-dev-windows-11/icons8-css.svg",
    "javascript": "./icons8-dev-windows-11/icons8-javascript.svg",
    "java": "./icons8-dev-windows-11/icons8-java.svg",
    "react": "./icons8-dev-windows-11/icons8-react-native.svg",
    "python": "./icons8-dev-windows-11/icons8-python.svg",
    "cpp": "./icons8-dev-windows-11/icons8-cpp.svg",
    "c": "./icons8-dev-windows-11/icons8-c.svg",
    "c*": "./icons8-dev-windows-11/icons8-csharp.svg",
    "react-router": "./icons8-dev-windows-11/icons8-reactrouter.svg",
    "mongodb": "./icons8-dev-windows-11/mongodb.svg",
    "sql": "./icons8-dev-windows-11/database.svg",
    "nosql": "./icons8-dev-windows-11/icons8-nosql-32.png",
    "mysql": "./icons8-dev-windows-11/icons8-mysql.svg",
    "linux": "./icons8-dev-windows-11/icons8-linux-48.png",
    "webgl": "./icons8-dev-windows-11/icons8-webgl.svg",
    "blender": "./icons8-dev-windows-11/icons8-blender.svg",
    "nodejs": "./icons8-dev-windows-11/icons8-node-js.svg",
    "express": "./icons8-dev-windows-11/icons8-express-48.png",
    "npm": "./icons8-dev-windows-11/icons8-npm.svg",
    "json": "./icons8-dev-windows-11/icons8-json-48.png",
    "swift": "./icons8-dev-windows-11/icons8-swift.svg",
    "swiftui": "./icons8-dev-windows-11/icons8-swiftui-48.png",
    "assembly": "./icons8-dev-windows-11/icons8-assembly-48.png",
    "docker": "./icons8-dev-windows-11/icons8-docker-container-48.png",
    "kubernetes": "./icons8-dev-windows-11/icons8-kubernetes-48.png",
    "php": "./icons8-dev-windows-11/icons8-php-48.png",
    "chatgpt": "./icons8-dev-windows-11/icons8-chatgpt-48.png",
};