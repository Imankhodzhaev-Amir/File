var goods = {
    "23452":{
        "company": "Tesla",
        "model":  "Model S",
        "engine": "2000cc",
        "type of fuel": "Electric",
        "Trasmission": "Automatic",
        "price": "12000$",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/2020_Tesla_Model_Y%2C_front_8.1.20.jpg/640px-2020_Tesla_Model_Y%2C_front_8.1.20.jpg",


    },
    "34652": {
        "company": "Tesla",
        "model":  "Model S",
        "engine": "2000cc",
        "type of fuel": "Electric",
        "Trasmission": "Automatic",
        "price": "12000$",
        "img": "https://tesla-cdn.thron.com/delivery/public/image/tesla/458cfaaf-de1e-47e0-867e-cb78c1993db3/bvlatuR/std/1200x628/Model-X-Social?quality=auto-medium&format=auto",
    },
    "34322": {
        "company": "Tesla",
        "model":  "Model S",
        "engine": "2000cc",
        "type of fuel": "Electric",
        "Trasmission": "Automatic",
        "price": "15000$",
        "img": "https://tesla-cdn.thron.com/delivery/public/image/tesla/458cfaaf-de1e-47e0-867e-cb78c1993db3/bvlatuR/std/1200x628/Model-X-Social?quality=auto-medium&format=auto",
    },
    "17652": {
        "company": "Tesla",
        "model":  "Model S",
        "engine": "2000cc",
        "type of fuel": "Electric",
        "Trasmission": "Automatic",
        "price": "12000$",
        "img": "https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social",
    },
    "11662": {
        "company": "Tesla",
        "model":  "Model S",
        "engine": "2000cc",
        "type of fuel": "Electric",
        "Trasmission": "Automatic",
        "price": "15000$",
        "img": "https://hips.hearstapps.com/hmg-prod/images/2020-porsche-taycan-4s-vs-2020-tesla-model-s-long-range-202-1621386342.jpg?crop=0.772xw:0.579xh;0.0489xw,0.232xh&resize=1200:*",
    },
};

var out = "";
for( var key in goods){
    out += "<div class='flex'>"

    
    out+="<img class='main-img' src='"+ goods[key].img +"'>"


    out+= "<div class ='carInfo'>"
    out+="<p>"+ goods[key].company +"</p>"
    out+="<p>"+ goods[key].model +"</p>"


        out+= "<div class ='flex'>"
        out+= "<div class ='win'>"
        out+= "<p>Engine</p>"
        out+="<p>"+ goods[key].engine +"</p>"
        out+="</div>"


        out+= "<div class ='win'>"
        out+= "<p> Type of fuel</p>"
        out+="<p>"+ goods[key].typeoffuel +"</p>"
        out+="</div>"

        out+= "<div class ='win'>"
        out+= "<p> Transmission </p>"
        out+="<p>"+ goods[key].Transmission +"</p>"
        out+="</div>"
        out+="</div>"

        out+="<p>"+ goods[key].price +"</p>"
        out+="</div>"

     out+="</div>"

    out+= "<br>"
}

document.getElementById("block").innerHTML = out