$().ready
$.ajax({
    url: "https://localhost:9000/getall",
    type: "GET",
    success: (req,res)=>{
        console.log(req.body);
        console.log(res);
        var arr = req.body;
    },
    error:()=>{
        console.log("there was a error with ajax");
    }
});