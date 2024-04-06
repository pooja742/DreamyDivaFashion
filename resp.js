*{
    margin: 0;
    padding: 0;
}
html{
    scroll-behavior: smooth;
}
.logo{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo img{
    width: 33%;
    border: 3px silver;
    border-radius: 50px;
}
#navlist{
    overflow: hidden;
    background-color: aqua;
}
.sticky { 
        position: fixed; 
        top: 0; 
        width: 100%; 
    } 
.navbar{
    display: flex;
    position: fixed;
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0.7);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.navlist{
    width: 70%;
    background-color:chocolate;
    display: flex;
    align-items: center;
   
}
.navlist li{
    list-style: none;
    padding: 26px 30px;
}
.navlist li a{
    text-decoration: none;
    color:white;
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.navlist li a:hover{
    text-decoration: none;
    color:powderblue;
    cursor: pointer;
}
.rightNav{
    width: 30%;
    background-color: chocolate;
    text-align: right;
    padding: 0 23px;
    position: sticky;
}
#search{
    padding: 10px;
    font-size: 17px;
    border: 2px skyblue;
    border-radius: 5px;
    cursor: pointer;
    position: sticky;
}
.background{
    background: rgba(0, 0, 0, 0.7) url('bg.jpg');
    background-size: cover;
    background-blend-mode: darken;
}
.section{
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 80%;
    margin: auto;

}

.firsthalf{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-self: center;
    height: 75%;

}
.secondhalf
{
    width: 80%;
    height: 200%;
}
.secondhalf img {
    width: 100%;
    height: 200%;
    justify-content: right;
    margin: auto;
    display: block;
  }
.box-main{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: 200%;
    margin: auto;

    
}
.text-big{
    font-size: 50px;
    font-style:oblique;
}
.text-small{
font-size: 20px;
font-style: italic;
color: beige;
}
.firsthalf img{
    width: 100%;
    height: 100%;
    justify-content: right;
    margin: auto;
    display: block;
}
.sixthhalf
{
    width: 80%;
    height: 200%;
}
.sixthhalf img {
    width: 100%;
    height: 200%;
    justify-content: right;
    margin: auto;
    display: block;
  }
.fifthhalf{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-self: center;
    height: 75%;


}
.sixthhalf img{
    width: 100%;
    height: 100%;
    justify-content: right;
    margin: auto;
    display: block;
}
.contact{
    background-color: bisque;
    height: 433px;
}
.text-center{
    text-align: center;
    padding: 30px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 35px;

}
.form{
    max-width: 62%;
    margin: 42px auto;
}
.form input{
    margin: 14px 0;
    padding: 5px 3px;
    width: 100%;
    font-size: 19px;
    border: 2px grey;
    border-radius: 6px;
}
.burger{
    display: none;
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 15px;
}
.line{
    width: 33px;
    background-color: aliceblue;
    height: 4px;
    margin: 3px 3px;
}
@media only screen and (max-width: 1140px){
    .navlist{
        flex-direction: column;
    }
    .navbar{
        flex-direction: column;
    }
    .rightNav{
        text-align: center;
    }
    .box-main{
        flex-direction: column-reverse;
        max-width: 100%;
    }
    #search{
        width: 100%;
    }
    .burger{
        display: block;
    }
    .h-nav-resp{
        height: 72px;
    }
    .v-class-resp{
        opacity: 0;
    }
    .section{
        flex-direction: column-reverse;
    }
    .text-small{
        text-align: center;
    }
    .text-big{
        text-align: center;
    }
}
