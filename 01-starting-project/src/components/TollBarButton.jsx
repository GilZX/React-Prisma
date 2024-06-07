

export default function TollBarButton({children}){


    function HandlerClick(){
        console.log("Hello Wordl By React and Vite.")
    }


   return <li><button onClick={HandlerClick}>{children}</button></li>
}