New Name Diagram
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server->>browser: HTML document
    deactivate server

    browser->> server: GET https://studies.cs.helsinki.fi/exampleapp/notes/main.css
    activate server
    server->> main.css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes/main.js
    activate server
    server->>main.js file
    deactivate server

    Note left of the server: The browser will run the js file which will causes another GET from the server for data.json
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes/data.json
    activate server
    server->> browser: [{"content": "HTml is easy", "date":"2002-2-1"},...]
    deactivate server

    Note right of browser: Onclick submit button
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server->>browser: Status code 302
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server->>browser: HTML file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes/main.css
    activate server
    server->>browser: HTML file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes/main.js
    activate server
    server->>browser: main.css file
    deactivate server

    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes/data.json
    activate server
    server->>browser: [{"conetent": "Htmlis oop", "date": "2022-2-2"},...]
    deactivate server