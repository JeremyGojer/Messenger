$.ajax({
    url: "https://reqres.in/api/users",
    type: "GET",
    data: {
        name: "paul rudd",
        movies: ["I Love You Man", "Role Models"]
    },
    success: function(response){
        console.log(response);
    }
});