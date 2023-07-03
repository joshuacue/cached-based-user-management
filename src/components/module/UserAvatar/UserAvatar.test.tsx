import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { UserAvatar } from "./UserAvatar";

describe("UserAvatar component", () => {
  afterEach(cleanup);

  it("renders avatar image with correct alt text", () => {
    const avatarSrc = "/images/testImage.webp";
    const username = "John Doe";
    render(<UserAvatar avatar={avatarSrc} username={username} />);
    const imageElement = screen.getByAltText(`${username}-avatar`);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute("src")).toContain("%2Fimages%2FtestImage.webp");
  });
});
