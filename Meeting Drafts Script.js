/*
  Create new draft with template text and tag assigned.
*/

// create template
const template = `# Meeting


## Meeting Notes

- Attendees:

#### Notes


#### Actions
-[ ]
-[ ]
-[ ]

`;

// create the draft
var d = Draft.create();
d.content = template;
d.addTag("meeting");
d.addTag("work");
d.update()

// load in editor and focus for editing
editor.load(d);
editor.focus()