import { Routes, Route } from "react-router";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { AppLayout } from "../components/AppLayout";
import { Refund } from "../pages/Refund";

export function ManagerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/refund/:id" element={<Refund />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}