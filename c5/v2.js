//SETUP ZA POVIKUVANJE (NESTO)
var routes = {
    get: [
        { route: `/students`, func: getAllStudents },
        { route: `/students/:id`, func: getStudent }
    ],
    post: [
        { route: `/students`, func: storeStudent }
    ],
    put: [
        { route: `/students/:id`, func: updateStudent }
    ],
    patch: [
        { route: `/students/:id`, func: patchStudent }
    ],
    delete: [
        { route: `/students/:id`, func: deleteStudent }
    ]

};

var getAllStudents = () => {}
var getStudent = () => {};
var storeStudent = () => {};
var deleteStudent = () => {};
var updateStudent = () => {};
var patchStudent = () => {};

req.method = "get";
req.url = "/students/23";
GET  /students/23

if (routes[req.method][0].route == req.url) {
    routes[req.method][0].func(); //DABIDEDINAMICEN (OD STUDENTS/23 i students/id )
}
`/students/:id`
`/\students\/:id`
`\/\students\/:id/`
`/\/students\/([a-zA-z0-9/-_]*)/`

var id = 23