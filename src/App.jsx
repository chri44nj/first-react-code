import "./App.css";
import Header from "./components/Header";
import SignupForm from "./components/SignupForm";
import MemberList from "./components/MemberList";
import MemberCard from "./components/MemberCard";
import Breakline from "./components/Breakline";

export default function App() {
  return (
    <section>
      <Header>
        <SignupForm></SignupForm>
      </Header>

      <MemberList>
        <Breakline></Breakline>
        <MemberCard img="../public/img/profile.png" name="Lindsay Walton" title="Front-end Developer"></MemberCard>
        <Breakline></Breakline>
        <MemberCard img="../public/img/profile.png" name="Courtney Henry" title="Designer"></MemberCard>
        <Breakline></Breakline>
        <MemberCard img="../public/img/profile.png" name="Tom Cook" title="Director of Product"></MemberCard>
      </MemberList>
    </section>
  );
}
