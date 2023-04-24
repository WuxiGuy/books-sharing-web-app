import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SavedBooks from "../components/SavedBooks";
import React from "react";

jest.mock("@auth0/auth0-react", () => ({
  ...jest.requireActual("@auth0/auth0-react"),
  Auth0Provider: ({ children }) => children,
  useAuth0: () => {
    return {
      isLoading: false,
      user: { sub: "foobar" },
      isAuthenticated: true,
      loginWithRedirect: jest.fn(),
    };
  },
}));

jest.mock("../AuthTokenContext", () => ({
  useAuthToken: () => {
    return { accessToken: "123" };
  },
}));

test("renders SavedBooks", async () => {
	render(
		<MemoryRouter initialEntries={["/"]}>
			<SavedBooks />
		</MemoryRouter>
	);
    
	expect(screen.getByText("Saved Books")).toBeInTheDocument();
	}
);