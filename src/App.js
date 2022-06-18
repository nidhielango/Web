import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Sections/Home"));
const Header = lazy(() => import("./components/Header/index"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <Header />
        <Home />
      </Suspense>
    </>
  )
}

export default App;
