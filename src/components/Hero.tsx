export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">

        <p className="text-lg">
          Hi, you finally found
        </p>

        <h1 className="text-5xl font-bold mt-2">
          Vykunta Kishore
        </h1>

        <div className="mt-6 space-y-2 text-xl">
          <p>DATA ENGINEER</p>
          <p>SNOWFLAKE DEVELOPER</p>
          <p>DATA ANALYTICS</p>
        </div>

        <p className="mt-6 text-lg">
          I build reliable data pipelines and cloud data solutions
          that transform raw data into analytics-ready information.
        </p>

        <div className="mt-6 space-y-2">
          <p>📍 Chicago, IL</p>
          <p>✉ vykuntakishore@gmail.com</p>
          <p>☎ +1 (856) 526-0810</p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a href="/resume.pdf">
            Download Resume
          </a>

          <a href="#projects">
            View Projects
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-6">
          <a href="#">LinkedIn</a>
          <a href="mailto:vykuntakishore@gmail.com">Mail</a>
          <a href="#">GitHub</a>
        </div>

      </div>
    </section>
  );
}