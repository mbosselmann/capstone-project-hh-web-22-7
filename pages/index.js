import { useState, useEffect } from "react";
import initialData from "@/initialData.js";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;

  & > div > .App-top-bar {
    align-items: flex-start;
  }

  & > div > div > section .Stack {
    display: flex;
    flex-direction: column;
  }

  & > div > div > section > div > div > .mobile-misc-tools-container {
    display: none;
  }
`;

export default function IndexPage() {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    import("@excalidraw/excalidraw").then((comp) => {
      setComponent(comp.Excalidraw);
    });
  }, []);

  return (
    <>
      <h1> Excalidraw with Next </h1>
      <div style={{ height: "500px", margin: "0.2rem" }}>
        {Component && (
          <Container>
            <Component
              UIOptions={{ welcomeScreen: false }}
              initialData={initialData}
            />
          </Container>
        )}
      </div>
    </>
  );
}
