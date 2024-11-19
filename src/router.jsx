import { createBrowserRouter} from "react-router-dom"
import QuestionPage from "./routes/QuestionPage.jsx"
import App from "./App.jsx"

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/questions", element: <QuestionPage />}
  ])
  