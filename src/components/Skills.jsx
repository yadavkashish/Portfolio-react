import React from "react";
import "./Skills.css"; // Import a separate CSS file for styling

const Skills = () => {
  const skillsData = [
    {
      id: "child1",
      image: "https://media-hosting.imagekit.io//22fc2cad25794995/javanew.webp?Expires=1832499357&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=S7KSJRuJu7ToAB2CiS0TqrBSYmobQtxV9A4KG-G1bVgU24gQVOCGvNPft5cZJFltxj7W-aPGPcG3nV8I21ZHNIFRBRdfVSdRplg6YVblZUqumOcp5o4WmiBaCyHUsU5AEO7HWzqLIjT7MxZ516yStV1omfIzWGlUHevlTP~j4i43SI6UXDBX8WCQKz8KQ5ljjYIAaPcoHi0q2k7NYb~Yv9juSLPvFcVXmxb44LqUUqk-ht3KLrbQr8yyzln3IZSwJxDNqblyjz4xOmkd4g-kOhRSTyZ1Lc4E0TZ7mOP7ZBvaO1II3BX3lFV2Vek6Pgb6IogwogYxigCooSBcIxLP4A__",
      title: "C++",
      description: "Work smart! Get things done.",
      progress: 45,
    },
    {
      id: "child2",
      image: "https://media-hosting.imagekit.io//4f333c3e88b54083/car-beach-with-palms_994744-2372.avif?Expires=1832499767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sNajKQNqIMbGpCPgGOM4~pMpVQKpRYJves-cs7x4FJRXwYOvr2MESnwXvGQdNNJF5jfawVFrxvF0NMLMpBUzbtPgWIMCbjrZ3pO3o3QqNstdyugnDrvZafUKtgRsKZiPDd50Q-552CMgCQSfJgEnxUwsxFWO32tg6Rzzn7~WwnwxpeNrUo9Lzp2152JDwKjvYu349MeJccUBGXlP8csnbLoGU1hVyk-Q7uJmd8b7aDd6~Pz2gR9LZGxF9Ul-jQ83u~~jZWQhXUOTlCw8e7OiT3tkiTJ7Grc75IW-hMS-~D45d7KwfogrekXk4kd5i7N1DG6HF7DlElo0XThVZIvxeg__",
      title: "Html/CSS",
      description: "#css{ creativity: 100%; laziness: none; }",
      progress: 98,
    },
    {
      id: "child3",
      image: "https://media-hosting.imagekit.io//cb459eddc29c40a4/html%20new%20img.jpg?Expires=1832499794&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vR-RzgT2U9uSbqaVlM-fQoFWtyRi-z0CnTFx0YYdYRpdvHVFOmC42EJLGCRIligkwsIDbgVQPsCN5MJmwDaOUVOKebQK88KgLmZxizF3zgFyVvq8u1ytjfQbduWJUxwlmE-~u3llNg6No~bjkJtDFliFYNjt53VZR~Rs830rqTGjpcoqklb7gsqDbH6rcXEQ~pUJBCK4Z~fPJhyNbnXCr9yNyFRDdubDeDz9umcGPcNN2sk5XZN2GV8tEX2uqkTokt7Yn-~7Fn4ESSbRtMtFQdxDvsl7K3uHVrxTb2Hn660nTbCCu89HehxZ-KMpv99OBkv2MjOEWZXoKw~PRSrg-A__",
      title: "JavaScript",
      description: "while( ! ( succeed = try() ) )",
      progress: 75,
    },
    {
      id: "child4",
      image: "https://media-hosting.imagekit.io//855348563a134d61/css%20image.jpg?Expires=1832499331&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Wk7-fy6oLohM6ksxGzNYcUFR2Cc6g8cdr~qXzxtF3gwPkO9y~1758eLEgFjt0PHV3YtgAUfaHSx1737uYEbhhE9sI0a~iY9Qh6DL-taCrBdcXxa0lrnK9HIpsXr5qASxaJEuZWFXfue2yM78w8h2suW1hVMktc929W8ububGXk7p7aUV0Wr4cCdFalOH4wZixN8U~ZWyVMFg~p0y43VrBksDYOoCoeih21FlRm5gXxKqY603Fc3ymNPU9RLksQ0-8z~TGsn7xJrBhfmD-s08ELiMz3jl2ophzk8Fbn9ratOECj1yZFexipTkDU33c8mwQMt0UN-jq-CpgXhG9dY5tw__",
      title: "React.js",
      description: "If you want to! You can!!",
      progress: 72,
    },
  ];

  return (
    <section className="skills" id="skills">
      <div>
        <h1 className="heading">Skills</h1>
      </div>
      <div className="skillsElement">
        {skillsData.map((skill) => (
          <div className="wrapper" key={skill.id}>
            <div className="paper">
              <img src={skill.image} alt={skill.title} />
              <div className="info">
                <h1>{skill.title}</h1>
                <p>{skill.description}</p>
                <div className="progress-bar" id={skill.id}>
                  <div className="counter" style={{ width: `${skill.progress}%` }}>
                    {skill.progress}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
