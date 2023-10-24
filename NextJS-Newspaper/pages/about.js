import Seo from "../components/Seo";

export default function aboutPage() {
  return (
    <div>
      <Seo title="About" />
      <div>
        <h1>About</h1> <h2>This WebSite</h2>
      </div>
      <div className="container">
        <span>
          This website was created to increase your knowledge, this website was
          created by Honeybee who stayed up all night doing CSS ^_^
        </span>
        <h3> Plz have fun :)</h3>
      </div>
      <style jsx>{`
        .container {
          width: 900px;
        }
      `}</style>
    </div>
  );
}
