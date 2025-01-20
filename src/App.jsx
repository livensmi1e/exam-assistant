import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Divider from "./components/Divider";
import PracticeList from "./components/PracticeList";
import Timer from "./components/Timer";
import ExamResource from "./components/ExamResource";
import TimeLine from "./components/TimeLine";

function App() {
    return (
        <>
            <div className="fixed top-0 w-full w-80percent-minus-4rem">
                <Header />
                <Divider />
            </div>
            <div className="pt-[77px]">
                <Routes>
                    <Route path="/" element={<PracticeList />}></Route>
                    <Route
                        path="/practice/:folder/:file"
                        element={<ExamResource />}
                    ></Route>
                    <Route path="/timer" element={<Timer />}></Route>
                    <Route path="/timeline" element={<TimeLine />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
