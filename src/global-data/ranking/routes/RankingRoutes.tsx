import { Navigate, Route, Routes } from "react-router-dom"
import { RankingPage } from "../pages/RankingPage"

export const RankingRoutes = () => {
    return (
        <Routes>
            <Route path="ranking" element={ <RankingPage/>} />
        </Routes>
    )
}