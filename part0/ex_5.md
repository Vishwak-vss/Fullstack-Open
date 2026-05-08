sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server->>browser: spa.html file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/main.css
    activate server
    server->>browser: main.css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/spa.js
    server activate
    server->>browser: spa.js file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/data.json
    activate server
    server->>browser: [{"content":"---", "date":"2021-5-22"}]
    deactivate server

    Note right of browser: stopping default get request
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa/new_note_spa.json
    activate server
    server->>browser: 201 Created status code
    deactivate server