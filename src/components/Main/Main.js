import './main.css' ;
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
function Main() {
  return (
    <main class="main">
      <Sidebar></Sidebar>
      <Content></Content>
    </main>
  );
}
export default Main;
