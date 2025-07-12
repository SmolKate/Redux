import { useEffect } from "react";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "src/components/Layout";
import {
  ContactListPage,
  GroupPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
} from "src/pages";
import { addMockDataIntoDB } from "src/model/helpers";
import { useAppDispatch } from "src/redux/hooks";
import { getDataAction } from "src/redux/actions";
import "./MainApp.scss";

export const MainApp = () => {
  useEffect(() => {
    addMockDataIntoDB();
  }, []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDataAction());
  }, [dispatch]);

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ContactListPage />} />
            <Route path="contact">
              <Route index element={<ContactListPage />} />
              <Route path=":contactId" element={<ContactPage />} />
            </Route>
            <Route path="groups">
              <Route index element={<GroupListPage />} />
              <Route path=":groupId" element={<GroupPage />} />
            </Route>
            <Route path="favorit" element={<FavoritListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
