module.exports = function(app){
    app.post("/Plus",function(req,res){
        //INPUT
        console.log('Plus');
        var a = req.body.A
        var b = req.body.B
        console.log('A :'+a);
        console.log('B :'+b);
        //LOGIC
        var result = a+b;
        console.log("Result "+a+"+"+b+" : "+result);
        //OUTPUT
        var resAsjson ={
           Result : result,
           A : a,
           B : b
        }
        res.json(resAsjson)
    })

    app.post("/multiplied_by",function(req,res){
        //INPUT
        console.log('Multiplied by');
        var a = req.body.A
        var b = req.body.B
        console.log('A :'+a);
        console.log('B :'+b);
        //LOGIC
        var result = a*b;
        console.log("Result "+a+"+"+b+" : "+result);
        //OUTPUT
        var resAsjson ={
           Result : result,
           A : a,
           B : b
        }
        res.json(resAsjson)
    })
    app.get("/minus/:A/:B",function(req,res){
        console.log('Minus');
        //INPUT
        var a =req.params.A
        var b =req.params.B
        console.log('A :'+a);
        console.log('B :'+b);
        //LOGIC
        var result = a-b;
        console.log("Result : "+a+"+"+b+" : "+result);
        //OUTPUT
        var resAsjson ={
            Result : result,
            A : a,
            B : b
        }
        res.json(resAsjson)
    })
    app.get("/devided_by/:A/:B",function(req,res){
        console.log('Devided By')
        //INPUT
        var a =req.params.A
        var b =req.params.B
        console.log('A :'+a);
        console.log('B :'+b);
        //LOGIC
        var result = a/b;
        console.log("Result :"+a+"+"+b+" : "+result);
        //OUTPUT
        var resAsjson ={
            Result : result,
            A : a,
            B : b
        }
        res.json(resAsjson)
    })
}