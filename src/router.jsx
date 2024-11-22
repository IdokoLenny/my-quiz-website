import { createBrowserRouter} from "react-router-dom"
import QuestionPage from "./routes/QuestionPage.jsx"
import ResultPage from "./routes/ResultPage.jsx"
import App from "./App.jsx"

const basename = "my-quiz-website"

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/questions", element: <QuestionPage />},
    {path: "/result", element: <ResultPage />}
  ],{basename})
  