import { composeStories } from "@storybook/testing-react";
import { axe, toHaveNoViolations } from "jest-axe";
import * as AtomComponentStories from "./index.stories";
import { act, render, waitFor, within } from "@testing-library/react";
import { userEvent } from "@storybook/test";

expect.extend(toHaveNoViolations);
const { Default } = composeStories(AtomComponentStories);

describe("AtomComponent", () => {
  test("Accessibility check", async () => {
    const { container } = render(<Default />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("Text Test", () => {
    const hoge = jest.fn();
    const { container } = render(<Default handleClick={hoge} />);
    const text = within(container).getByText("Atom Component");
    expect(text).toBeInTheDocument();
  });

  test("handle click", async () => {
    window.alert = jest.fn();
    const { container } = render(
      <Default handleClick={() => alert("clicked")} />
    );

    const button = within(container).getByRole("button");

    await act(async () => {
      userEvent.click(button);
    });

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("clicked");
    });
  });
});
