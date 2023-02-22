import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <Navbar>
        <nav>
          <Link href="/">Spotlight</Link>
          <Link href="/pieces">Pieces</Link>
        </nav>
      </Navbar>
    </>
  );
}

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: 10vh;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
  position: fixed;
  bottom: 0;
  width: 100%;
  a, h1 {
    text-decoration: none;
    color: black;
    padding: 10px;
    background-color: lightgrey;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 20px;
    width: 100%;
  }
`;
