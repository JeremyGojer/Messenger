$().ready
$.ajax({
    url: "https://localhost:9000/getall",
    type: "GET",
    success: (req,res)=>{
        console.log(req);
        console.log(res);
        var arr = req;
        for(m of arr){
            
        }
    },
    error:()=>{
        console.log("there was a error with ajax");
    }
});