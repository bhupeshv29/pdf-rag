import Fileupload from "./components/Fileupload";
import  ChatComponent from "./components/ChatComponent";


export default function Home() {
  return (
<div>

    <div className="grid grid-cols-10 min-h-screen ">
        <div className="col-span-2 flex justify-center items-center ">
          <Fileupload/>
        </div>
        <div className="col-span-8 border-l-1" >
          <ChatComponent />

        </div>
    </div>
</div>
  );
}