import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";

import AuthForm from "../components/organisms/AuthForm";
import ReduxProvider from "../store/ReduxProvider";

afterEach(() => {
  cleanup();
});

test("if formType is LOGIN should render LoginForm", () => {
  render(
    <ReduxProvider>
      <AuthForm formType="LOGIN" setFormType={() => {}} />
    </ReduxProvider>
  );

  expect(screen.queryByTestId("LoginForm")).toBeInTheDocument();
});

test("if formType is REGISTER should render SignupForm", () => {
  render(
    <ReduxProvider>
      <AuthForm formType="REGISTER" setFormType={() => {}} />
    </ReduxProvider>
  );

  expect(screen.queryByTestId("SignupForm")).toBeInTheDocument();
});
