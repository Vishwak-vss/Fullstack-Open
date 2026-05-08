sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa/new_note_spa.json & disable default GET
    activate server
    server->>browser: 201 Status code
    deactivate server

    Note right of browser: Appends the local value while also sending it as json file to server.
    browser->>browser: append [{"content":"", "date":""}] to ul as a li element
    