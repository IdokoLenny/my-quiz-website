import { createBrowserRouter} from "react-router-dom"
import QuestionPage from "./routes/QuestionPage.jsx"
import ResultPage from "./routes/ResultPage.jsx"
import ConfirmPage from "./routes/ConfirmPage.jsx"
import App from "./App.jsx"

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/questions", element: <QuestionPage />},
    {path: "/result", element: <ResultPage />},
    {path: "/confirm", element: <ConfirmPage />}
  ])
  